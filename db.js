import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const {Pool}= pkg;
const db=new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    port: process.env.DB_PORT
});
(async()=>{
    try{
        await db.connect();
        console.log("Successfully connect with database");
    }
    catch(err){
        console.log("Failed to connect! Error:",err);
    }
})();
export default db;