import React, { useState, useEffect } from "react";
import BillCollection from "./components/BillCollection";
import BillsCast from "./components/BillsCast";

export default function App() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bills")
      .then((res) => res.json())
      .then((bills) =>
        setBills(
          bills.map((d) => {
            return { ...d, isCast: false };
          })
        )
      )
      .catch((err) => console.log("🔥", err));
  }, []);

  //changes isCast Boolean to true if HIRE is clicked
  function changeCastBoolean(newBill) {
    console.log(newBill);
    let arr = [];
    for (let i = 0; i < bills.length; i++) {
      if (bills[i].id === newBill.id && newBill.isCast === true) {
        bills[i].isCast = true;
        arr.push(bills[i]);
      } else if (bills[i].id === newBill.id && newBill.isCast === false) {
        arr.push(bills[i]);
      }
    }
    setBills(arr);
  }

  return (
    <div>
      <BillsCast
        bills={bills.filter((bill) => !bill.isCast === false)}
        changeCastBoolean={changeCastBoolean}
      />
      <BillCollection
        bills={bills.filter((bill) => !bill.isCast === true)}
        changeCastBoolean={changeCastBoolean}
      />
    </div>
  );
}
