// rrd imports
import { Form, NavLink } from "react-router-dom";
//Icons
import { HomeIcon, TrashIcon } from "@heroicons/react/24/solid";

const Nav = ({ userName }: NavPropsType) => {
  return (
    <nav className="pt-5">
      <div className=" container mx-auto flex justify-between items-center">
        <div className="w-48">
          <NavLink
            className="flex gap-x-2 items-center"
            to="/"
            aria-label="Go to home"
          >
            <HomeIcon className="text-white" width={28} />
            <span className="text-white font-medium">صفحه اصلی</span>
          </NavLink>
        </div>
        {userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("پاک کردن کاربر و حذف همه ی اطلاعات؟")) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="flex justify-center text-slate-300 bg-red-500 rounded p-2 gap-x-2"
            >
              <TrashIcon width={20} />
              <span className="font-medium">حذف کاربر</span>
            </button>
          </Form>
        )}
      </div>
    </nav>
  );
};
export default Nav;
