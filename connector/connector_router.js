import { addNewConnector,getallConnectors,getConnectorDetailsById,updateConnectorDetail,deleteConnectorDetailsById } from "./connector_controller.js";
import express from 'express';
const connector_router=express.Router();
connector_router.post('/',addNewConnector);
connector_router.get('/',getallConnectors);
connector_router.get('/:connector_id',getConnectorDetailsById);
connector_router.put('/:id',updateConnectorDetail);
connector_router.delete('/:connector_id',deleteConnectorDetailsById);
export default connector_router;