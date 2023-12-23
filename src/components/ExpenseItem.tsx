// rrd imports
import { Link, useFetcher } from "react-router-dom";

// Icon import
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";


const ExpenseItem = ({ expense, showBudget }: ExpenseItemProps) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td className="py-3 px-6 text-right">
        <div className="flex items-center">
          <span> {expense.name}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-right">
        <p className="text-lg">{formatCurrency(expense.amount)}</p>
      </td>
      <td className="py-3 px-6 text-right hidden sm:block">
        <p className="text-lg">{formatDateToLocaleString(expense.createdAt)}</p>
      </td>

      {showBudget && (
        <td className="py-3 px-4 text-right hidden sm:block ">
          <Link to={`/budget/${budget.id}`}>
            <span
              style={{ backgroundColor: `hsl(${budget.color})` }}
              className="text-slate-300 py-1.5 px-3 rounded-full font-medium"
            >
              {budget.name}
            </span>
          </Link>
        </td>
      )}

      <td className="py-3 px-4 text-right">
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="bg-red-500 text-white transform hover:scale-110 px-2 py-1 flex items-center justify-center rounded w-24"
            aria-label={`Delete ${expense.name} expense`}
          >
            <span className="text-lg font-medium">حذف</span>
            <div className="w-5 mr-2 ">
              <TrashIcon />
            </div>
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};
export default ExpenseItem;
