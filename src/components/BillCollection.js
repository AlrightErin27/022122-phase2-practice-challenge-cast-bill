import React from "react";
import BillCard from "./BillCard";

export default function BillCollection({ bills, changeCastBoolean }) {
  const renderBills = bills.map((bill) => {
    if (bill.isCast === false) {
      return (
        <BillCard
          bill={bill}
          key={bill.id}
          changeCastBoolean={changeCastBoolean}
        />
      );
    }
  });

  return (
    <div className="ui four column grid">
      <div className="row">{renderBills}</div>
    </div>
  );
}
