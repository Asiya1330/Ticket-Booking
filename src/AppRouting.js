import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TicketsPage from "./pages/TicketsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankyouPage from "./pages/ThankyouPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";

const AppRouting = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="league" exact element={<HomePage />} />
        <Route path="see-tickets" exact element={<TicketsPage />} />
        <Route path="checkout" exact element={<CheckoutPage />} />
        <Route path="thankyou" exact element={<ThankyouPage />}/>
        <Route path="login" exact element={<LoginPage />}/>
        <Route path="signup" exact element={<SignupPage />}/>
        <Route path="dashboard" exact element={<DashboardPage />}/>
        <Route path="users" exact element={<UsersPage />}/>
      </Routes>
    </div>
  );
};

export default AppRouting;
