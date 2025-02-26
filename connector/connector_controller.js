import { addConnectors,getConnectors,getConnectorById,updateConnector,deleteConnectorById } from "./connector_query.js";
export const addNewConnector = async(req,res)=>{
    try{
        const {connector_type,charge_point_id:point_id,station_id,isdeleted,connector_id}=req.body;
        const connector_result= await addConnectors(connector_type,point_id,station_id,isdeleted,connector_id);
        res.status(200).json({connector_result})
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getallConnectors= async(req,res)=>{
    try{
        const connector_result = await getConnectors();
        res.status(200).json({connector_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getConnectorDetailsById= async(req,res)=>{
    try{
        const {connector_id}=req.params;
        console.log(req);
        
        const connector_result= await getConnectorById(connector_id);
        res.status(200).json({connector_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const updateConnectorDetail=async(req,res)=>{
    try{
       const {connector_id}=req.params;
       const {connector_type,charge_point_id:point_id,station_id,isdeleted}=req.body;
       const connector_result= await updateConnector(connector_type,point_id,station_id,isdeleted,connector_id) ;
       res.status(200).json(connector_result);
    }
    catch(err){
        res.status(500).json({Error: err.message})
    }
};
export const deleteConnectorDetailsById= async(req,res)=>{
    try{
        const {connector_id}=req.params;
        const connector_result= await deleteConnectorById(connector_id);
        res.status(200).json({connector_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}