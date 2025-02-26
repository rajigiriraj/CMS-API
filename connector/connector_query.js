import db from '../db.js';

export const addConnectors= async(connector_type,point_id,station_id,isdeleted,connector_id)=>{
    try{
        const result= await db.query('INSERT INTO connectors connector_type=$1, charge_point_id, station_id=$3, isdeleted=$4  WHERE connector_id=$5 RETURNING *',[connector_type,point_id,station_id,isdeleted,connector_id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to insert data',err);
    }
 };
 export const getConnectors=async()=>{
    try{
        const result=await db.query('SELECT * FROM connectors');
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const getConnectorById= async(id)=>{
    try{
        const result=await db.query('SELECT * FROM connectors where connector_id=$1',[id]);
        return result.rows;
    }
    catch(err){
        console.log('failed to fetch data',err);
    }
};
export const updateConnector=async(connector_type,point_id,station_id,isdeleted,connector_id)=>{
    try{
        const result= await db.query("UPDATE connectors SET connector_type=$1, charge_point_id=$2, station_id=$3, isdeleted= $4 WHERE connector_id=$5 RETURNING *",
        [connector_type,point_id,station_id,isdeleted,connector_id]);
        return result.rows;
    }
    catch(err){
        console.log("Failed to update data! Error:",err);
    }
};
export const deleteConnectorById= async(id)=>{
    try{
        const result=await db.query('delete * from connectors where connector_id= $1 returning *', [id])
        return result.rows;
    }
    catch(err){
        console.log('failed to delete data',err);
    }
};