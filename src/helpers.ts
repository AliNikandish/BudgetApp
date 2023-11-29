export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// colors
const generateRandomColor = () =>{
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData =(key:string) => {
  let val:any=localStorage.getItem(key)
  return JSON.parse(val);
};

export const getAllMatchingItems = ({ category, key, value }:getAllMatchingItemsType) => {
  const data = fetchData(category) ?? [];
  
  return data.filter((item:itemsType[]|any) => item[key] === value);
};



export const deleteItem = ({ key, id }:deleteItemType) => {
  const existingData = fetchData(key);
  //for if id exist delete specific expense or budget and if id dosent exist (when logout) remove all expense or budget
  if (id) {
  
    
    const newData = existingData.filter((item:itemsType[]|any) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }


  return localStorage.removeItem(key);
};


// create budget


export const createBudget = ({ name, amount }:createBudgetType) => {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  
  //if doesn't exist put []
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense


export const createExpense = ({ name, amount, budgetId }:createExpenseType) => {
  const newItem = {
    id: crypto.randomUUID(),
    name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  //if doesn't exist put []
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// total spent by budget


export const calculateSpentByBudget = (budgetId:string) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc:number, expense:expenseType) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// FORMATTING
export const formatDateToLocaleString = (epoch:number) =>
  new Date(epoch).toLocaleDateString('fa-IR');

// Formating percentages
export const formatPercentage = (amt:number) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};


export const formatCurrency = (amt:number) => {
  return `${amt.toLocaleString()} تومان`
};
