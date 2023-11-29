import { Form } from "react-router-dom"

// Icon
import { UserPlusIcon } from "@heroicons/react/24/solid";

import illustration from "../assets/LogoIntro.png"


const Intro = () => {
  return (
    <div className="mt-20 flex flex-col">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-slate-300">
          خوش آمدید
        </h1>
        <p className="text-lg mt-5 text-slate-300 font-medium">
          همین حالا نام خود را وارد کنید و شروع به مدیریت بودجه خود کنید
        </p>
        <Form method="post" className="flex mt-5 gap-x-5">
          <input
            type="text"
            name="userName"
            required
            placeholder="نام خود را وارد کنید..." aria-label="Your Name" autoComplete="given-name"
          className="w-60 h-10 rounded"
         />
          <input type="hidden" name="_action" value="newUser"  />
          <button type="submit" className="flex items-center bg-black text-white gap-x-2 p-2 w-28 h-10 rounded justify-center">
            <span>ثبت نام</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
        <img className="mt-20 w-[650px]" src={illustration} alt="" />
      </div>
    </div>
  )
}
export default Intro