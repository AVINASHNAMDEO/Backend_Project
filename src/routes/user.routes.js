// import {Router} from "express";
// import {registerUser} from "../controllers/user.controller.js";

// const router = Router()

// router.route("/register").post(registerUser)


// export default router


import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = Router();

// Define routes
router.post('/register', registerUser);

export default router;
