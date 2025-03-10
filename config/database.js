import mysql from "mysql2/promise";
import { unstable_cache } from "next/cache";

 export async function callDatabase(query,data) {
    console.log('called the database');
    try {
    const db = await mysql.createConnection({
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl:{
        mode:'REQUIRED',
        ca: process.env.DB_CA,
        rejectUnauthorized: false
    }
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
// export const QueryAllProductsData = unstable_cache(callDatabase,['allProducts'],{tags:["allProducts"],revalidate:360});
export const QueryAllCommentsData = unstable_cache(callDatabase,['comments'],{tags:["comments"]},{revalidate:60});
export const QueryProductsFromCart = unstable_cache(callDatabase,['cart'],{tags:["cart"]});
export const QueryOrdersData = unstable_cache(callDatabase,['orders'],{tags:["orders"]});