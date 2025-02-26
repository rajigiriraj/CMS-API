import {addNewSession,getallSessions,getSessionById,stopActiveSession,deleteSessionDetailsById} from './session_controller.js';
import express from 'express';
const session_router= express.Router();
session_router.post('/',addNewSession);
session_router.get('/',getallSessions);
session_router.get('/:transaction_id',getSessionById);
session_router.put('/:transaction_id',stopActiveSession);
session_router.delete('/:transaction_id',deleteSessionDetailsById);
export default session_router;