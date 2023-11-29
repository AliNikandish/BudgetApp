// rrd imports
import { useLoaderData } from "react-router-dom";


// component imports
import Table from "../../components/Table";


const ExpensesPage = () => {
  const { expenses }:any = useLoaderData();

  

  return (
    <div className="">
      <h1 className="text-slate-300 text-5xl font-bold my-10">همه ی هزینه ها</h1>
      {expenses && expenses.length > 0 ? (
        <div className="">
          <h2 className="text-slate-300 text-lg font-medium">
           هزینه های اخیر <small>( مجموع : {expenses.length})</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>هیچ هزینه ای وجود ندارد</p>
      )}
    </div>
  );
};

export default ExpensesPage;
