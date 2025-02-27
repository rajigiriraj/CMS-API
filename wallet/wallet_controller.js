import { addWallet,getWallet,getWalletById,getWalletBalance,deleteWallet } from "./wallet_query.js";
export const addWalletData = async(req,res)=>{
    try{
        const {created_date,updated_date,last_transaction_id,total_amount,isdeleted,user_id}=req.body;
        const wallet_result= await addWallet(created_date,updated_date,last_transaction_id,total_amount,isdeleted,user_id);
        res.status(200).json({wallet_result})
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getAllWallets= async(req,res)=>{
    try{
        const wallet_result = await getWallet();
        res.status(200).json({wallet_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getWalletDatabyId= async(req,res)=>{
    try{
        const {user_id}=req.params;
        console.log(req);
        
        const wallet_result= await getWalletById(user_id);
        res.status(200).json({wallet_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getWalletBalancebyId= async(req,res)=>{
    try{
        const {user_id}=req.params;
        console.log(req);
        const wallet_result= await getWalletBalance(user_id);
        res.status(200).json({wallet_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const deleteWalletData= async(req,res)=>{
    try{
        const {user_id}=req.params;
        const wallet_result= await deleteWallet(user_id);
        res.status(200).json({wallet_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}