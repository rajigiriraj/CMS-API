import { getStation,getStationById,addStation,updateStation,deleteStation } from "./station_query.js";

export const addChargingStation=async(req,res)=>{
    try{
        const {name:station_name,address:station_address,status:station_status}=req.body;
        const new_station= await addStation(station_name,station_address,station_status);
        console.log(new_station);
        
        res.status(200).json(new_station);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
};
export const getChargingStation=async(req,res)=>{
    try{
        const station_data=await getStation();
        res.status(200).json(station_data);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }  
};
export const getChargeStationById = async(req,res)=>{
    try{
        const {id}=req.params;
        // id=Number(id);
        const station_details= await getStationById(id);
        res.status(200).json(station_details);
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const updateChargingStation=async(req,res)=>{
    try{
       const {id}=req.params;
       const {name:station_name,address:station_address,status:station_status}=req.body;
       const station_update= await updateStation(station_name,station_address,station_status,id) ;
       res.status(200).json(station_update);
    }
    catch(err){
        res.status(500).json({Error: err.message})
    }
};
export const deleteChargingStation=async(req,res)=>{
    try{
        const {id}=req.params;
        const station_delete=await deleteStation(id);
        res.status(200).json(station_delete);
    }
    catch{
        res.status(500).json({Error: err.message})
    }
};