import Counter from "./Counter";

function CounterList() {
  const countersArr = ["London", "Paris", "Vilnius", "Ryga"];
  return (
    <div className="counter-list">
      {countersArr.map((c) => (
        <Counter key={c} title={c} />
      ))}
    </div>
  );
}
export default CounterList;
