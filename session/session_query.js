import db from '../db.js';

export const addSession= async(start_time,end_time,status,connector_id,charge_point_id,station_id,isdeleted)=>{
    try{
        const result= await db.query('INSERT INTO session start_time=$1, end_time=$2, status=$3, connector_id=$4 ,charge_point_id=$5,station_id=$6, isdeleted=$7 WHERE connector_id=$5 RETURNING *',
            [start_time,end_time,status,connector_id,charge_point_id,station_id,isdeleted]);
        return result.rows;
    }
    catch(err){
        console.log('failed to insert data',err);
    }
 };
 export const getSessions=async()=>{
    try{
        const result=await db.query('SELECT * FROM session');
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const getSessionById= async(id)=>{
    try{
        const result=await db.query('SELECT * FROM session where transaction_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const stopSession=async(id)=>{
    try{
        const result= await db.query('UPDATE session SET end_session= time.now() , status="Completed" where transactiom_id =$1 RETURNING *',[id]);
        return result.rows;
    }
    catch(err){
        console.log("Failed to update data! Error:",err);
    }
};
export const deletesessionById= async(id)=>{
    try{
        const result=await db.query('update session set isdeleted="True" where connector_id= $1 returning *', [id])
        return result.rows;
    }
    catch(err){
        console.log('failed to delete data',err);
    }
};