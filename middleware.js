import { NextResponse } from 'next/server';

import { verifyToken } from './components/auth/token';

export async function middleware(request) {

  const url = request.nextUrl.pathname;

  const state = await verifyToken();

  //token verification for /register pages

  if(url.startsWith("/register")){
   
   if(state) return NextResponse.redirect(new URL("/shop",request.nextUrl));
    
    return NextResponse.next();
  }

   //token verification for /shop pages
  
 if(url.startsWith("/shop")){
  
  if(state) return NextResponse.next();

   return NextResponse.redirect(new URL("/register/signup",request.nextUrl));
  }

}


export const config = {
  matcher: ['/register/signup','/register/login','/shop'],
}