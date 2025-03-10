import Header from "../../../components/shop/Header"
import Sorter from "../../../components/shop/Sorter"
import Items from "../../../components/shop/Items"

import { Suspense } from "react";

const page = ({searchParams}) => {
  return <div className="pb-20">
    <div className="flex flex-col items-center pt-32">
      <Header />
      <Suspense fallback={<div>loadind...</div>}>
      <Sorter/>
      </Suspense>
      <Items searchParams={searchParams}/>
    </div>
    </div>
}

export default page
