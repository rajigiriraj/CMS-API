import {addChargingStation,getChargingStation,updateChargingStation,deleteChargingStation, getChargeStationById} from './station_controller.js';
import express from 'express';
const station_router= express.Router();
station_router.post('/',addChargingStation);
station_router.get('/',getChargingStation);
station_router.get('/:id',getChargeStationById)
station_router.put('/:id',updateChargingStation);
station_router.delete('/:id',deleteChargingStation);
export default station_router;