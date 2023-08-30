import express from "express"
import {getVideos} from '../Controllers/VideoController.js';

const router = express.Router();

router.get('/', getVideos);
export default router;