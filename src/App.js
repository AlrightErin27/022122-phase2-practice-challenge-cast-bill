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

  //console.log(bills);

  return (
    <div>
      <BillsCast />
      <BillCollection bills={bills} />
    </div>
  );
}
