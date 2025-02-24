import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex flex-col gap-3 items-center">
    <p className="text-3xl animate-spin"><FaSpinner/></p>
    </div>
  )
}

export default Loader;
