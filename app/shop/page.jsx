import Header from "./Header"
import Sorter from "./Sorter"
import Items from "./Items"

const page = () => {
  return <div className="pb-20">
    <div className="w-[95%] mx-auto flex flex-col items-center pt-32">
      <Header />
      <Sorter />
      <Items />
    </div>
    </div>
}

export default page
