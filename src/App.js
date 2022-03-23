import React, { useState, useEffect } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

export default function App() {
  const jLink = "http://localhost:3000/bills";

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(jLink)
      .then((res) => res.json())
      .then(setBills)
      .catch((err) => {
        console.log("🤯", err);
      });
  }, []);

  function castBill(id, cast = true) {
    setBills(
      bills.map((bill) => (id === bill.id ? { ...bill, isCast: cast } : bill))
    );
  }
  function fireBill(id) {
    setBills(bills.filter((bill) => id !== bill.id));
  }
  return (
    <div>
      <BillsCast
        bills={bills.filter((bill) => bill.isCast)}
        handleClick={(id) => castBill(id, false)}
        handleFire={fireBill}
      />
      <BillCollection
        bills={bills}
        handleClick={castBill}
        handleFire={fireBill}
      />
    </div>
  );
}
