import React from "react";
import BillCard from "./BillCard";

export default function BillsCast({ bills, handleClick, handleFire }) {
  console.log(bills);

  const renderBills = bills.map((bill) => {
    return (
      <BillCard
        bill={bill}
        key={bill.id}
        handleClick={handleClick}
        handleFire={handleFire}
      />
    );
  });

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">{renderBills}</div>
      </div>
    </div>
  );
}
