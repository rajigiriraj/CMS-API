import db from '../db.js';

export const addChargePoint= async(station_id,no_of_connectors,point_id)=>{
    try{
        const result= await db.query('INSERT INTO charging_point charging_station_id=$1, no_of_connectors=$2 WHERE charge_point_id=$3 RETURNING *',[station_id,no_of_connectors,point_id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to insert data',err);
    }
 };
 export const getChargePoint=async()=>{
    try{
        const result=await db.query('SELECT * FROM charging_point');
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const getChargePointById= async(id)=>{
    try{
        const result=await db.query('SELECT * FROM charging_point where charge_point_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const deletechargePoint= async(id)=>{
    try{
        const result=await db.query('delete * from charge_point where charge_point_id= $1 returning *', [id])
        return result.rows;
    }
    catch(err){
        console.log('failed to delete data',err);
    }
};