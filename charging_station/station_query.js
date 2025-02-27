import db from '../db.js';
export const addStation=async(station_name,station_address,station_status)=>{
    try{
        const result=await db.query('INSERT INTO charging_station (name,address,status) VALUES ($1, $2, $3) RETURNING *',
        [station_name,station_address,station_status])
        
        // console.log(station_name,station_address,station_status);
        return result.rows[0];
    }
    catch(err){
        console.log("Failed to connect! Error:",err);
    }
};
export const getStation=async()=>{
    try{
        const result=await db.query("SELECT * FROM charging_station");
        return result.rows;
    }
    catch(err){
        console.log("Failed to get data! Error:",err);
    }
};
export const getStationById=async(id)=>{
    try{
        const result=await db.query("SELECT * FROM charging_station WHERE id=$1",[id])
        return result.rows;
    }
    catch(err){
        console.log("Failed to get data! Error:",err);
    }
}
export const updateStation=async(station_name,station_address,station_status,station_id)=>{
    try{
        const result= await db.query("UPDATE charging_station SET name=$1,address=$2,status=$3 WHERE id=$4 RETURNING *",
        [station_name,station_address,station_status,station_id]);
        return result.rows;
    }
    catch(err){
        console.log("Failed to update data! Error:",err);
    }
};
export const deleteStation=async(station_id)=>{
    try{
        const result=await db.query("UPDATE charging_station SET isdeleted= TRUE WHERE id=$1 RETURNING *",station_id)
        return result.rows;
    }
    catch(err){
        console.log("Failed to delete data! Error:",err);
    }
};