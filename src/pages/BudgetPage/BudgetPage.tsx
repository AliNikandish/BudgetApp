// rrd imports
import { useLoaderData } from "react-router-dom";

// components
import AddExpenseForm from "../../components/AddExpenseForm";
import BudgetItem from "../../components/BudgetItem";
import Table from "../../components/Table";




const BudgetPage = () => {
  const { budget, expenses }:BudgetPageType = useLoaderData();


  return (
    <div
      className=""
      style={{
      }}
    >
      <h1 className="text-slate-300 text-5xl font-bold my-10">
        نگاه کلی به <span style={{color:`hsl(${budget.color})`}} className="">{budget.name}</span>
      </h1>
      <div className="flex flex-col items-center lg:items-start">
        <BudgetItem budget={budget} showDelete={true} />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="">
          <h2 className="text-slate-300 text-4xl font-bold my-10">
          هزینه های <span style={{color:`hsl(${budget.color})`}} className="">{budget.name}</span> 
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};
export default BudgetPage;
