import express from 'express';
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// CREATE A VIDEO
router.post('/', verifyToken, addVideo);

// UPDATE A VIDEO
router.put('/:id', verifyToken, updateVideo);

// DELETE A VIDEO
router.delete('/:id', verifyToken, deleteVideo);

// GET A VIDEO
router.get('/find/:id', getVideo);

// ADD VIEW
router.put('/view/:id', addView);

// GET TRENDING VIDEOS
router.get('/trend', trend);

// GET RANDOM VIEOS
router.get('/random', random);

// GET SUBSCRIBED VIDEOS
router.get('/sub', verifyToken, sub);

// GET VIDEOS WITH TAGS
router.get('/tags', getByTag);

// SEARCH VIDEOS
router.get('/search', search);

export default router;
