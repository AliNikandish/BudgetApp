import { toast } from "react-toastify";
import { createExpense, deleteItem } from "../../helpers";



export async function budgetAction({ request }:any) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
  
    if (_action === "createExpense") {
      try {
        createExpense({
          name: values.newExpense,
          amount: values.newExpenseAmount,
          budgetId: values.newExpenseBudget,
        });
        return toast.success(`هزینه ${values.newExpense} اضافه شد!`);
      } catch (e) {
        throw new Error("در ایجاد هزینه ی جدید مشکل پیش آمده است");
      }
    }
  
    if (_action === "deleteExpense") {
      try {
        deleteItem({
          key: "expenses",
          id: values.expenseId,
        });
        return toast.success("هزینه پاک شد !");
      } catch (e) {
        throw new Error("مشکلی در پاک کردن هزینه به وجود آمد");
      }
    }
  }