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
        const energy_consumed= await db.query('select s.charge_point_id, count(s.transaction_id) as total_sessions, sum(cp.energy_consumed) as total_energy_consumed from session s join charging_point cp on s.charge_point_id= cp.charge_point_id group by s.charge_point_id' )
        return energy_consumed;
        // return result.rows;
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
export const getSessionByuserId= async(id)=>{
    try{
        const result=await db.query('SELECT * FROM session where user_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const stopSession=async(id)=>{
    try{
        const result= await db.query("UPDATE session SET end_time= now() , status='Completed' where transaction_id =$1 RETURNING *",[id]);
        await db.query("UPDATE wallet SET total_amount= total_amount-100 where user_id =(select user_id from session where transaction_id=$1) ",[id]);
        return result.rows;
    }
    catch(err){
        console.log("Failed to update data! Error:",err);
    }
};
export const deletesessionById= async(id)=>{
    try{
        const result=await db.query('update session set isdeleted=TRUE where connector_id= $1 returning *', [id])
        return result.rows;
    }
    catch(err){
        console.log('failed to delete data',err);
    }
};