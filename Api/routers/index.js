import course from './CourseRouter.js'
import login from './loginRouters.js'
import user from './UserRouter.js'
import express from 'express'

function RouterApi(app){
    const router = express.Router();
    app.use('/api/v1', router);

    router.use("/login", login);
    router.use("/user", user)
    router.use("/courses",course);
}

export { RouterApi }