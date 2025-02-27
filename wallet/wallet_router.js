import { addWalletData,getAllWallets,getWalletBalancebyId,deleteWalletData } from "./wallet_controller.js";
import express from 'express';
const wallet_router=express.Router();
wallet_router.post('/',addWalletData);
wallet_router.get('/',getAllWallets);
wallet_router.get('/:user_id',getWalletBalancebyId);
wallet_router.put('/:user_id',deleteWalletData);
export default wallet_router;