// react imports
import { useEffect, useRef } from "react"

// rrd imports
import { useFetcher } from "react-router-dom"

// Icon 
import { PlusCircleIcon } from "@heroicons/react/24/solid"





const AddExpenseForm = ({ budgets }:budgets) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting";

  const formRef:any = useRef()
  const focusRef:any = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset()
      // reset focus
      focusRef.current.focus()
    }

  }, [isSubmitting])

  
  return(
    <>
      <fetcher.Form
        method="post"
        className=""
        ref={formRef}
      >
    <div className='bg-gray-700 w-[500px] 2xl:w-[700px] h-[340px] p-10 mt-10'>
            <h3 className='text-3xl font-bold text-slate-300'>اضافه کردن هزینه</h3>
              <div className='flex justify-between gap-x-3'>
                  <div className='mt-5 flex flex-col w-full'>
                  <label className='text-slate-300 font-bold mb-2' htmlFor="newExpense">نام هزینه</label>
                  <input
                    type="text"
                    name="newExpense"
                    id="newExpense"
                    placeholder="خرید لباس"
                    ref={focusRef}
                    required
            />
                </div>
                <div className='mt-5 flex flex-col w-full'>
                  <label className="text-slate-300 font-bold mb-2" htmlFor="newExpenseAmount">مقدار</label>
                  <input
                    type="number"
                    step="0.01"
                    inputMode="decimal"
                    name="newExpenseAmount"
                    id="newExpenseAmount"
                    placeholder="1000"
                    required
            />
                </div>
              </div>
              <div className='mt-5 flex flex-col w-full' hidden={budgets.length === 1}>
                  <label className="text-slate-300 font-bold mb-2" htmlFor="newExpenseBudget">دسته بندی بودجه</label>
                  <select name="newExpenseBudget" id="newExpenseBudget" required>
                  {
                    budgets
                      .sort((a:budgetType, b:budgetType) => a.createdAt - b.createdAt)
                      .map((budget:budgetType) => {
                        return (
                          <option key={budget.id} value={budget.id}>
                            {budget.name}
                          </option>
                        )
                      })
               }
                  </select>
                </div>
                <input type="hidden" name="_action" value="createExpense" />
            <button className=' mt-5 bg-slate-950 text-white p-2 rounded w-[165px] flex gap-x-2 items-center' disabled={isSubmitting}>
                {
                isSubmitting ? <span>در حال ثبت شدن</span> : (
                  <>
                    <span>اضافه کردن هزینه</span>
                    <PlusCircleIcon width={20} />
                  </>
                )
              }
            </button>
          </div>
          </fetcher.Form>
    </>
    
  )
}
export default AddExpenseForm