// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";


// components
import Nav from "../components/Nav";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}


const Main = () => {
  const { userName }:string|any = useLoaderData()

  return (
    <div className="bg-gray-800">
      <Nav userName={userName} />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
export default Main