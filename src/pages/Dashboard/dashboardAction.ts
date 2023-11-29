import { toast } from "react-toastify";
import { createBudget, createExpense, deleteItem, waait } from "../../helpers";

export async function dashboardAction({ request }:any) {
    
    await waait();
  
    const data = await request.formData();

    // to Object
    const { _action, ...values } = Object.fromEntries(data);
  
    // new user submission
    if (_action === "newUser") {
      try {
        localStorage.setItem("userName", JSON.stringify(values.userName));
        return toast.success(`${values.userName}  عزیز خوش آمدید`);
      } catch (e) {
        throw new Error("در ساخت کاربر جدید مشکلی به وجود آمده است. ");
      }
    }

    // Create New Budget
  
    if (_action === "createBudget") {
      try {
        createBudget({
          name: values.newBudget,
          amount: values.newBudgetAmount,
        });
        return toast.success("بودجه جدید ساخته شد");
      } catch (e) {
        throw new Error("در ساخت بودجه جدید مشکلی به وجود آمده است.");
      }
    }

    // Create New Expense

  
    if (_action === "createExpense") {
      try {
        createExpense({
          name: values.newExpense,
          amount: values.newExpenseAmount,
          budgetId: values.newExpenseBudget,
        });
        return toast.success(`هزینه ی ${values.newExpense} اضافه شد!`);
      } catch (e) {
        throw new Error("در ایجاد هزینه ی جدید مشکل پیش آمده است");
      }
    }

      // delete  Expense

  
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