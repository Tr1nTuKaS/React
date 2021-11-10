import { useState } from "react";

export default function Salary(props) {
  const [budgets, setBudgets] = useState(props.obj.budget);

  const onIncrement = () => {
    console.log("onIncement");
    setBudgets(budgets + 100);
  };
  const onDecrement = () => {
    console.log("onIncement");
    setBudgets(budgets - 100);
  };

  const cool = () => {
    let col = "";
    if (budgets < 0) {
      col = "night";
    }
    if (budgets > 0) {
      col = "day";
    }
    return col;
  };

  const neap = () => {
    setBudgets(budgets + 1);
  };

  const night = () => {
    let nights = "counter-container";
    // if (props.obj.budget++) {
    //   nights = "click";
    // }
    return nights;
  };

  console.log(props);

  return (
    <div className={night()}>
      <h2>{props.obj.name}</h2>
      <p>Amount: {budgets}eur</p>

      <button onClick={onIncrement}>Increase</button>
      <button onClick={onDecrement}>Decrease</button>
      <button className={cool()} onClick={neap}>
        Night
      </button>
    </div>
  );
}
