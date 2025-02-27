import db from '../db.js';

export const addWallet= async(created_date,updated_date,last_transaction_id,total_amount,isdeleted,user_id)=>{
    try{
        const result= await db.query('INSERT INTO wallet created_date=$1,updated_date=$2,last_transaction_id=$3,total_amount=$4,isdeleted=$5 WHERE user_id=$6 RETURNING *',
            [created_date,updated_date,last_transaction_id,total_amount,isdeleted,user_id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to insert data',err);
    }
 };
 export const getWallet=async()=>{
    try{
        const result=await db.query('SELECT * FROM wallet');
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const getWalletById= async(id)=>{
    try{
        const result=await db.query('SELECT * FROM wallet where user_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const getWalletBalance= async(id)=>{
    try{
        const result=await db.query('SELECT total_amount FROM wallet where user_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const deleteWallet= async(id)=>{
    try{
        const result=await db.query("update wallet set isdeleted=TRUE where user_id= $1 returning *", [id])
        return result.rows;
    }
    catch(err){
        console.log('failed to delete data',err);
    }
};