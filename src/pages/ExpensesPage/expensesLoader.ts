import { fetchData } from "../../helpers";

export async function expensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
  }