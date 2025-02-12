import { NextResponse } from 'next/server';

import { verifyToken } from './actions/auth/token';
import { auth } from './auth';

export const runtime = "nodejs";

export async function middleware(request) {

  const url = request.nextUrl.pathname;

  const state = await verifyToken();

  //token verification for /register pages


  if(url.startsWith("/register")){
    
    if(state) return NextResponse.redirect(new URL("/elegant/shop",request.nextUrl));
    
    if(url === "/register/google/username"){

      const session = await auth();
      if(session) return NextResponse.next(); 
      return NextResponse.redirect(new URL("/register/signup",request.nextUrl));
     }

   return NextResponse.next();
  }

   //token verification for registered pages
  
 if(url.startsWith("/elegant")){
  
  if(state) return NextResponse.next();

   return NextResponse.redirect(new URL("/register/signup",request.nextUrl));
  }

}

export const config = {
  matcher: ['/register/signup','/register/google/username','/register/login','/elegant'],
}