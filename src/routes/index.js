import { Router } from 'express';
import api from './routes';

const url = `/api/`;
const router = Router();
router.get('/', () => console.log("welcome to employee management system"));
router.use(url, api);

export default router;
