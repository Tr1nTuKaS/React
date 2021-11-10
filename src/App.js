import "./App.css";
//import Counter from "./components/Counter/Counter";
// import MyBtn from "./components/MyBtn";
//import CounterList from "./components/Counter/CounterList";
//import Person from "./components/people/person";
//import Salary from "./components/salary/salary";
import SalaryList from "./components/salary/salaryList";

function App() {
  // const myArr = ["green", "blue", "ref"];
  // console.log("App.js component");
  return (
    <div className="App">
      {/* {myArr.map((c, ind) => (
        <li key={ind}>{c}</li>
      ))}

      <MyBtn></MyBtn> */}

      {/* <CounterList /> */}

      {/* <Person>James Bond</Person> */}
      <SalaryList />
    </div>
  );
}

export default App;
