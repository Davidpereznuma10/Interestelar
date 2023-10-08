import passport from 'passport';
import { Strategy } from 'passport-discord';
import { config } from '../../../../config/config.js';
import { MongoLib } from '../conexion.js';
import { setUserData } from './setUser.js';

async function getUsersData() {
  const serverId = encodeURIComponent(config.serverId);
  const serverSecret = encodeURIComponent(config.serverSecrect);
  const campusId = encodeURIComponent(config.campusId);

  passport.serializeUser(async (user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const mongoDB = new MongoLib();
      await mongoDB.connect();
      const user = await mongoDB.findOne('users', { discordUserID: id });
      done(null, user);
    } catch (error) {
      console.error('Error al deserializar el usuario:', error);
      done(error);
    }
  });

  passport.use(
    new Strategy(
      {
        clientID: serverId,
        clientSecret: serverSecret,
        callbackURL: '/api/v1/login/auth/redirect',
        scope: ['identify', 'guilds'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const mongoDB = new MongoLib();
          await mongoDB.connect();

          const desiredGuildID = campusId;
          const isInDesiredGuild = profile.guilds.some((guild) => guild.id === desiredGuildID);

          if (isInDesiredGuild) {
            const existingUser = await mongoDB.findOne('users', { discordUserID: profile.id });
            
            const userData = setUserData(profile);

            if (existingUser) {
              await mongoDB.updateOne('users', { discordUserID: profile.id }, userData);
            } else {
              await mongoDB.insertData('users', [userData]);
            }

            return done(null, profile);
          } else {
            return done(null, false, { message: 'No estás en el servidor deseado.' });
          }
        } catch (error) {
          console.error('Error al procesar e insertar/actualizar datos:', error);
          return done(error);
        }
      }
    )
  );
}

export { getUsersData };
