import {addSession,getSessions,getSessionById,stopSession,deletesessionById} from './session_query.js';
export const addNewSession = async(req,res)=>{
    try{
        const {start_time,end_time,status,connector_id,charge_point_id,station_id,isdeleted}=req.body;
        const session_result= await addSession(start_time,end_time,status,connector_id,charge_point_id,station_id,isdeleted);
        res.status(200).json({session_result})
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getallSessions= async(req,res)=>{
    try{
        const session_result = await getSessions();
        res.status(200).json({session_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const getSessionById= async(req,res)=>{
    try{
        const {transaction_id}=req.params;
        console.log(req);
        
        const session_result= await getSessionById(transaction_id);
        res.status(200).json({session_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}
export const stopActiveSession=async(req,res)=>{
    try{
       const {transaction_id}=req.params;
       const session_result= await stopSession(transaction_id) ;
       res.status(200).json(session_result);
    }
    catch(err){
        res.status(500).json({Error: err.message})
    }
};
export const deleteSessionDetailsById= async(req,res)=>{
    try{
        const {transaction_id}=req.params;
        const session_result= await deletesessionById(transaction_id);
        res.status(200).json({session_result});
    }
    catch(err){
        res.status(500).json({Error:err.message})
    }
}