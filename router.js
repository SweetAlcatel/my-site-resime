import Router from 'express';
import cors from 'cors';
const router = new Router();
import objDataController from './DataController.js';

router.post('/data', objDataController.createData);
router.get('/getData', cors(), objDataController.getData);

export default router;