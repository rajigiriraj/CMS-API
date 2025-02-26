import { addChargePoint,getChargePoint,getChargePointById,deletechargePoint } from "./point_query.js";
export const addChargingPoint = async(req,res)=>{
    try{
        const {charge_point_id:point_id,charging_station_id:station_id,no_of_connectors}=req.body;
        const point_result= await addChargePoint(station_id,no_of_connectors,point_id);
        res.status(200).json({point_result})
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getChargingPoint= async(req,res)=>{
    try{
        const point_result = await getChargePoint();
        res.status(200).json({point_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getChargingPointbyId= async(req,res)=>{
    try{
        const {charge_point_id:point_id}=req.params;
        console.log(req);
        
        const point_result= await getChargePointById(point_id);
        res.status(200).json({point_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const deleteChargingPoint= async(req,res)=>{
    try{
        const {charge_point_id:point_id}=req.params;
        const point_result= await deletechargePoint(point_id);
        res.status(200).json({point_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}