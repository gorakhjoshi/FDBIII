import React from "react";
import { Outlet } from "react-router-dom";

function Invoices() {
  return (
    <div>
      Invoices
      <Outlet />
    </div>
  );
}

export default Invoices;
