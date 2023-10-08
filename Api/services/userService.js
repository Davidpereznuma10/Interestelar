import { MongoLib } from '../libs/mongoDB/data/conexion.js'
import  Boom from '@hapi/boom'

class UserService{
    constructor(){
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }
    async findOne(username){
        try {
            const user = await this.mongoDB.findOne(this.collection, {username})
            if (!user) {
                throw Boom.notFound(`No se encontro el usuario ${username}`)
            } else {
                return user
            }
        } catch (error) {
            console.error(`Error al obtener información del usuario "${username}":`, error);
            throw Boom.serverUnavailable('Error interno del servidor');
        }
    }
}
export { UserService }