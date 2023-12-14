import studentMiddleware from '../middlewares/student.middleware.js';
import { newPass, passStatus, pastPasses } from '../controllers/student.controller.js';
import { getUserProfile, updatePassword } from '../controllers/user.controller.js';

import { Router } from 'express';

const router = Router();

// All routes configured here
router.post('/', studentMiddleware, newPass);
router.get('/history', studentMiddleware, pastPasses);
router.get('/status', studentMiddleware, passStatus);
router.get('/profile', studentMiddleware, getUserProfile);
router.patch('/profile/changePassword', studentMiddleware, updatePassword);

export default router;