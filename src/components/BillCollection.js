import React from "react";
import BillCard from "./BillCard";

export default function BillCollection({ bills }) {
  //console.log(bills);
  const billsCards = bills.map((bill) => {
    return <BillCard bill={bill} key={bill.id} />;
  });

  return (
    <div className="ui four column grid">
      <div className="row">{billsCards}</div>
    </div>
  );
}
