// component import
import ExpenseItem from "./ExpenseItem";


const Table = ({ expenses, showBudget = true }:tableProps) => {

  
  return(
    <div className="container mx-auto mt-20">
      <div className='bg-gray-700 shadow-md rounded my-6'>
      <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-900 text-gray-600 uppercase text-sm leading-normal">

                        {["نام", "میزان", "تاریخ", showBudget ? "بودجه" : "", "عملیات"].map(
                          (i, index) => (
                            <th className="py-3 px-6 text-right text-slate-300 text-lg" key={index}>{i}</th>
                          )
                        )}
                        </tr>
                    </thead>
                    <tbody className="text-slate-300 text-sm font-light">
                        {expenses.map((expense:any) => (
                        <tr className="border-b border-gray-200 hover:bg-gray-500" key={expense.id}>
                          <ExpenseItem expense={expense} showBudget={showBudget} />
                        </tr>
                      ))}
                    </tbody>
    </table>
      </div>
    </div>

  )
};
export default Table;
