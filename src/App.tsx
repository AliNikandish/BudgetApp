import {RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
// Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
function App() {
  return (
    <div className="font-VazirMedium mx-2" dir="rtl">
      <RouterProvider router={Routes} />
      <ToastContainer />
    </div>
  );
}

export default App;
