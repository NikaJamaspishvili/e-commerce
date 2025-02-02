import mysql from "mysql2/promise";

export async function callDatabase(query,data) {

    try {
    
    const db = await mysql.createConnection({
    
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
    
    })
    
    const [result] = await db.execute(query,data);
    
    await db.end();
    
    return result;
    
    } catch (error) {
    
    console.log(error);
    
    return error;
    
    }
    
    }