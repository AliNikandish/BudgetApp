// rrd imports
import { Form, Link } from "react-router-dom";
import { ExclamationCircleIcon} from "@heroicons/react/24/solid";

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";



const BudgetItem = ({ budget, showDelete = false }:BudgetItemProps) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  return(
    <div className='w-[500px] min-h-[200px] bg-gray-900 p-5 flex flex-col justify-between'>
          <div style={{color:`hsl(${color})`}}  className='flex justify-between'>
            <p>{name}</p>
            <p >{formatCurrency(amount)} بودجه</p>
          </div>
          <div>
            <div className="mt-2 bg-gray-400 rounded-full">
            {/* <div style={{width:`${(spent / amount*100) >= 100 ? `100%` : (`${formatPercentage(spent / amount)}`)}`, backgroundColor:`hsl(${color})`}} className="mt-2 py-0 rounded-full"><div style={{backgroundColor:`hsl(${color})`}} className=" text-white text-sm inline-block px-2 rounded-full"></div></div> */}
              <div style={{width:`${(spent / amount*100) >= 100 ? `100%` : (`${formatPercentage(spent / amount)}`)}`, backgroundColor:`hsl(${color})`}} className="mt-2 py-0 rounded-full"><div style={{backgroundColor:`hsl(${color})`}} className=" text-white text-sm inline-block px-2 rounded-full"></div></div>
            </div>
          </div>
          <div className='flex justify-between'>
            <p style={{color:`hsl(${color})`}} >{formatCurrency(spent)} هزینه شده</p>
            {/* <p className='text-gray-600'>{formatCurrency(amount - spent)} باقیمانده</p> */}
            {(amount - spent)>=0 ? <p className='text-gray-600'>{formatCurrency(amount - spent)} باقیمانده</p>:<div className="flex gap-x-1 items-center justify-center"><ExclamationCircleIcon width={20} color="red"/><p className='text-red-600'>{formatCurrency(amount - spent)} هزینه اضافه</p></div>}
          </div>
          {showDelete ? (

            <div>
            <Form
              method="post"
              action="delete"
              onSubmit={(event) => {
                if (
                  !confirm(
                    "آیا مطمئن به پاک کردن دائمی بودجه هستید ؟"
                  )
                ) {
                  event.preventDefault();
                }
              }}
            >
              <div className='text-center'>
                <button style={{backgroundColor:`hsl(${color})`}} className=' text-white p-2 rounded'> حذف</button>
            </div>
            </Form>
            </div>

          ) : (

            <div className='text-center'>
            <Link to={`/budget/${id}`}>
              <button style={{backgroundColor:`hsl(${color})`}} className=' text-white p-2 rounded'>مشاهده جزئیات</button>
            </Link>
          </div>


          )}

        
        </div>
  )
};
export default BudgetItem;
