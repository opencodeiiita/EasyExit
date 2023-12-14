import adminMiddleware from '../middlewares/admin.middleware.js';
import { acceptedPasses, outpass, pendingPasses, rejectedPasses } from '../controllers/admin.controller.js';
import { getUserProfile, updatePassword } from '../controllers/user.controller.js';

import { Router } from 'express';

const router = Router();

// All routes configured here
router.get('/', adminMiddleware, pendingPasses);
router.post('/outpass', adminMiddleware, outpass);
router.get('/accepted', adminMiddleware, acceptedPasses);
router.get('/rejected', adminMiddleware, rejectedPasses);
router.get('/profile', adminMiddleware, getUserProfile);
router.patch('/profile/changePassword', adminMiddleware, updatePassword);

export default router;