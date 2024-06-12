import express from "express";

import { createPostData } from "../controller/userController.js";
import { checkPostData } from "../controller/userController.js";
import {createAdminUser} from '../controller/userAdminController.js';
import {getAdminUser} from '../controller/userAdminController.js'
import { updateAdminUser } from "../controller/userAdminController.js";

const router = express.Router();

router.post("/signup", createPostData);
router.post("/login", checkPostData);


router.post('/createAdminUser' , createAdminUser )
router.get('/getAdminUser' , getAdminUser )
router.put('/updateAdminUser/:userId' , updateAdminUser )



export default router;
