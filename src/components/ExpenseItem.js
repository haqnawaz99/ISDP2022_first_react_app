import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-item__description">{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      {/* <button>Change Text</button> */}
    </div>
  );
};
export default ExpenseItem;
