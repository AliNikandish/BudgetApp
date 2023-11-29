import { getAllMatchingItems } from "../../helpers";

export async function budgetLoader({ params }:paramsType|any) {
  
    const budget = await getAllMatchingItems({
      category: "budgets",
      key: "id",
      value: params.id,
    })[0];
  
    const expenses = await getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });
  
    if (!budget) {
      throw new Error("بودجه ای که به دنبال آن می گردید پیدا نشد !");
    }


  
    return { budget, expenses };
  }