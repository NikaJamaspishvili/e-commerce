import mysql from "mysql2/promise";
import { unstable_cache } from "next/cache";

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
    console.log('queried from database...):',result);

    return result;
    
    } catch (error) {
    
    console.log(error);
    
    return error;
    
    }
    
}

//these variables define the different query functions with caching enabled.

export const QueryProfileData = unstable_cache(callDatabase,['profile'],{tags:['profile']});
export const QueryProductsData = unstable_cache(callDatabase,['products'],{tags:["products"]});
export const QueryAllProductsData = unstable_cache(callDatabase,['allProducts'],{tags:"allProducts"});