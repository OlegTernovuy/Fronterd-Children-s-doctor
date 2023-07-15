import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { SideBar } from "./components/sidebar";

import { Ecommerce } from "./pages/ecommerce";
import { Orders } from "./pages/orders";
import { Employees } from "./pages/employees";
import { Customers } from "./pages/customers";

import "./statistics.css";

const Statistics = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className={menuActive ? "SmallMainStat" : "MainStat"}>
        <div className="someStat">
          <Routes>
            <Route index element={<Ecommerce />} />
            <Route path="orders" element={<Orders />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />
          </Routes>
        </div>
        <SideBar active={menuActive} setActive={setMenuActive} />
      </div>
    </>
  );
};

export default Statistics;
