import Header from "../../../components/shop/Header"
import Sorter from "../../../components/shop/Sorter"
import Items from "../../../components/shop/Items"

const page = () => {
  return <div className="pb-20">
    <div className="flex flex-col items-center pt-32">
      <Header />
      <Sorter />
      <Items />
    </div>
    </div>
}

export default page
