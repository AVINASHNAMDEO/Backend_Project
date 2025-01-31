// import {Router} from "express";
// import {registerUser} from "../controllers/user.controller.js";

// const router = Router()

// router.route("/register").post(registerUser)


// export default router


// import { Router } from 'express';
// import { registerUser } from '../controllers/user.controller.js';
// import {upload} from "../middlewares/multer.middlewares.js"

// const router = Router();

// // Define routes
// router.post('/register', registerUser).post(
//     upload.fields([{
//         name : "avatar",
//         maxcount : 1
//     },
//     {
//         name : "coverImage",
//         maxcount : 1
//     }
// ]),
// registerUser
// );

// export default router;







import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { upload } from '../middlewares/multer.middlewares.js';

const router = Router();

// Define the route with middleware and controller
router.post(
  '/register',
  upload.fields([
    { name: 'avatar', maxcount: 1 },
    { name: 'coverImage', maxcount: 1 }
  ]),
  registerUser
);

export default router;
