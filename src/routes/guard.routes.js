import guardMiddleware from '../middlewares/guard.middleware.js';
import { acceptOutpass, searchOutpass } from '../controllers/guard.controller.js';
import { getUserProfile, updatePassword } from '../controllers/user.controller.js';

import { Router } from 'express';

const router = Router();

// All routes configured here
router.post('/', guardMiddleware, searchOutpass);
router.patch('/accept', guardMiddleware, acceptOutpass);
router.get('/profile', guardMiddleware, getUserProfile);
router.patch('/profile/changePassword', guardMiddleware, updatePassword);

export default router;

