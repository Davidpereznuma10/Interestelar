import express from "express";
const router = express.Router();
import { UserService } from "../services/userService.js";
const service = new UserService();

router.get('/:username', async (req, res, next)=>{
    const { username } = req.params;
    try {
        const user = await service.findOne(username); // Cambio aquí
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

export default router;
