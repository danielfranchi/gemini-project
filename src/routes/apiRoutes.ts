import { Router } from 'express';
import { handleUpload } from '../controllers/upload';

const router = Router();

router.post('/upload', handleUpload);

export default router;
