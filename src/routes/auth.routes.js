// import handler (controller) functions to route them
import { logIn, signUp } from '../controllers/auth.controller.js';
import { Router } from 'express';
const router = Router();

router.post('/login', logIn);
router.post('/signup', signUp);
  
export default router;