import { useRouteError, Link, useNavigate } from "react-router-dom"

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const Error = () => {
  const error:any = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-28 font-bold text-5xl text-slate-300 mb-5" >متاسفانه مشکلی پیش آمده است</h1>
      <p className="text-lg font-medium text-slate-300">{error.message || error.statusText}</p>
      <div className="flex gap-x-5">
        <button
          className=' mt-5 bg-slate-950 text-white p-2 rounded w-[160px] flex gap-x-2 items-center'
          onClick={() => navigate(-1)}
          
        >
          <ArrowUturnLeftIcon width={20} />
          <span>بازگشت به عقب</span>
        </button>
        <Link
          to="/"
          className="className=' mt-5 bg-slate-950 text-white p-2 rounded w-[160px] flex gap-x-2 items-center'"
        >
          <HomeIcon width={20} />
          <span>بازشگت به خانه</span>
        </Link>
      </div>
    </div>
  )
}
export default Error