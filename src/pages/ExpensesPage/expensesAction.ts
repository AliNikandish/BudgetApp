import { toast } from "react-toastify";
import { deleteItem } from "../../helpers";

export async function expensesAction({ request }:any) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
  
    if (_action === "deleteExpense") {
      try {
        deleteItem({
          key: "expenses",
          id: values.expenseId,
        });
        return toast.success("هزینه حذف شد");
      } catch (e) {
        throw new Error("مشکلی در حذف کردن هزینه به وجود آمده است");
      }
    }
  }
  