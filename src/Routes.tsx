// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";

// Routes
import { createBrowserRouter } from "react-router-dom";
//---------Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";
import { dashboardLoader } from "./pages/Dashboard/dashboardLoader";
import { dashboardAction } from "./pages/Dashboard/dashboardAction";
//---------BudgetPage
import BudgetPage from "./pages/BudgetPage/BudgetPage";
import { budgetLoader } from "./pages/BudgetPage/budgetLoader";
import { budgetAction } from "./pages/BudgetPage/budgetAction";
//---------ExpensesPage
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import { expensesLoader } from "./pages/ExpensesPage/expensesLoader";
import { expensesAction } from "./pages/ExpensesPage/expensesAction";
//---------Error Page
import Error from "./pages/Error";



export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: dashboardLoader,
          action: dashboardAction,
          errorElement: <Error />,
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          loader: budgetLoader,
          action: budgetAction,
          errorElement: <Error />,
          children: [
            {
              path: "delete",
              action: deleteBudget,
            },
          ],
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          loader: expensesLoader,
          action: expensesAction,
          errorElement: <Error />,
        },
        {
          path: "logout",
          action: logoutAction,
        },
      ],
    },
  ]);
  