// rrd import
import { redirect } from "react-router-dom";

// Icon
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems } from "../helpers";



export function deleteBudget({ params }:paramsType|any) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense:expenseType) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("بودجه با موفقیت حذف شد");
  } catch (e) {
    throw new Error("مشکلی در حذف بودجه به وجود آمده است.");
  }
  return redirect("/");
}
