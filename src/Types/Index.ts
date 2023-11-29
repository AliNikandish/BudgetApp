type expenseType={
    amount:number,
      color:string,
      createdAt:number,
      id:string,
      name:string,
      budgetId:string
  }
  
  type paramsType={
    params:{
      id:string
    }
  }

  type budgetType={
    amount:number,
    color:string,
    createdAt:number,
    id:string,
    name:string
  }
  
  interface budgets{
    budgets:budgetType[]
  }
  
 
  
  type BudgetItemProps={
    budget:budgetType,
    showDelete?:boolean
    key?:string
  }  

  type NavPropsType={
    userName:string
  }
  


  
  type BudgetPageType={
    budget:budgetType,
    expenses:expenseType[]
  }|any
  

  type dashboardLoaderData=
  {userName:string,
   budgets:budgetType[],
   expenses:expenseType[]
  }|any


  type getAllMatchingItemsType={
    category:string,
    key:string,
    value:string
  }

  type deleteItemType={
    key:string,
    id?:string
  }

  type itemsType={
    amount:number,
    color:string,
    createdAt:number,
    id:string,
    name:string,
    budgetId?:string
  }

  type createBudgetType={
    name:string,
    amount:string
  }

  type createExpenseType={
    name:string
    amount:number
    budgetId:string
  }

  
  type tableProps={
    expenses:expenseType[],
    showBudget?:boolean
  }

  interface ExpenseItemProps{
    expense:expenseType,
    showBudget:boolean,
  }