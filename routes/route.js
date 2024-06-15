import express from "express";

import { createPostData } from "../controller/adminControer.js";
import { checkPostData } from "../controller/adminControer.js";
import {createAdminUser} from '../controller/userController.js';
import {getAdminUser} from '../controller/userController.js'
import { updateAdminUser } from "../controller/userController.js";
import { deleteAdminUser } from "../controller/userController.js";

const router = express.Router();

router.post("/signup", createPostData);
router.post("/login", checkPostData);


router.post('/createAdminUser' , createAdminUser )
router.get('/getAdminUser' , getAdminUser )
router.put('/updateAdminUser/:userId' , updateAdminUser )
router.delete('/deleteAdminUser/:userId', deleteAdminUser);



export default router;
