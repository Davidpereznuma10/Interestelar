import express from 'express';
import passport from 'passport';
const router = express.Router();

router.get(
  '/', 
  passport.authenticate('discord')
);

router.get(
  '/auth/redirect',
  passport.authenticate('discord', { 
    failureRedirect: 'http://127.9.63.7:5163/Login', 
    successRedirect: 'http://127.9.63.7:5163/Home'
  }),

router.get(
  '/logout',
  (req, res) => {
    req.logout();
    res.redirect('http://127.9.63.7:5163/Login');
})
);
export default router;
