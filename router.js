import Router from 'express';
const router = new Router();
import objDataController from './DataController.js';

router.post('/data', objDataController.createData);
router.get('/getData', objDataController.getData);

export default router;