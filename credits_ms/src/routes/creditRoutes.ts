import express from 'express';
import { purchaseCredits, getCredits, reduceCredits } from '../controllers/creditController';

const router = express.Router();

router.post('/purchase', purchaseCredits);
router.get('/:userId', getCredits); // Add this line to handle the GET request for fetching credits
// Route to handle credit reduction
router.post("/reduce", reduceCredits);
export default router;
