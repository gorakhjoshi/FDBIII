import React from "react";
import Contact from "./Contact";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import Invoices from "./Invoices";
import Invoice from "./Invoice";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<div>Not Found</div>} />

        <Route path="invoices" element={<Invoices />}>
          <Route path="invoice" element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
