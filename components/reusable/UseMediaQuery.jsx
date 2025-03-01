"use client";

function UseMediaQuery({children}) {
  return ( 
  <>
  <p>{window.innerWidth}</p>
  {children}
  </>
  )
}

export default UseMediaQuery
