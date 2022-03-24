import React from "react";
import BillCard from "./BillCard";

export default function BillsCast({ bills, changeCastBoolean }) {
  const renderCastBills = bills.map((bill) => {
    return (
      <BillCard
        key={bill.id}
        bill={bill}
        changeCastBoolean={changeCastBoolean}
        isCast={bill.isCast}
      />
    );
  });

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">{renderCastBills}</div>
      </div>
    </div>
  );
}
