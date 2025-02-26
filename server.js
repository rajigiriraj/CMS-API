import express from 'express';
import dotenv from 'dotenv';
import station_router from './charging_station/station_router.js';
import point_router from './charge_point/point_router.js';
import connector_router from './connector/connector_router.js'
import session_router from './session/session_router.js';
dotenv.config();
const app = express();
app.use(express.json())
app.use('/station_operation',station_router);
app.use('/point_operation',point_router);
app.use('/connector_operation',connector_router);
app.use('/session_operation',session_router);
const PORT = process.env.PORT;
// app.get('./',console.log("hi"));
app.listen(PORT,()=>{
    console.log(`server running on http.//localhost:${PORT}`);   
});