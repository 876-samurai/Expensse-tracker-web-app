import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItems;