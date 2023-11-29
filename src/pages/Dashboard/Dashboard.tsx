// rrd imports
import { Link, useLoaderData } from "react-router-dom";

// components
import Intro from "../../components/Intro";
import AddBudgetForm from "../../components/AddBudgetForm";
import AddExpenseForm from "../../components/AddExpenseForm";
import BudgetItem from "../../components/BudgetItem";
import Table from "../../components/Table";


const Dashboard = () => {
  const { userName, budgets, expenses }:dashboardLoaderData= useLoaderData();

  return (
    <>
      {userName ? (
        <div className="mt-10 ">
          <h1 className="text-slate-300 text-5xl font-bold">
           <span >{userName}</span> عزیز خوش آمدی 
          </h1>
          <div className="flex flex-col">
            {budgets && budgets.length > 0 ? (
              <div className="flex flex-col items-center mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2 className="mt-28 font-bold text-5xl text-slate-300 mb-5">بودجه های موجود</h2>
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5 items-center">
                  {budgets.map((budget:budgetType) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses && expenses.length > 0 && (
                  <div className="w-full">
                    <h2 className="mt-28 font-bold text-5xl text-slate-300 mb-5" >هزینه های اخیر</h2>
                    <Table
                      expenses={expenses
                        .sort((a:expenseType, b:expenseType) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 5 && (
                     <div className="my-5">
                         <Link to="expenses" className="text-slate-300 font-medium text-lg">
                           مشاهده همه ی هزینه ها
                         </Link>
                     </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-5">
                <p className="text-slate-300 font-medium text-lg ">همین حالا شروع کنید</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
export default Dashboard;
