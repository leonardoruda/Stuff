import express, {Request, Response} from 'express';
import * as Members from '../controllers/ApiController';

const router = express.Router();

router.get('/', Members.getAll);
router.get('/:id', Members.getOne);
router.post('/', Members.addMember);
router.get('/:id/delete', Members.delMember);


export default router;