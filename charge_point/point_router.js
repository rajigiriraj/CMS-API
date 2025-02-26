import { addChargingPoint,getChargingPoint,getChargingPointbyId,deleteChargingPoint } from "./point_controller.js";
import express from 'express';
const point_router=express.Router();
point_router.post('/',addChargingPoint);
point_router.get('/',getChargingPoint);
point_router.get('/:charge_point_id',getChargingPointbyId);
point_router.delete('/:charge_point_id',deleteChargingPoint);
export default point_router;