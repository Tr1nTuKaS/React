import Salary from "./salary";

export default function SalaryList() {
  const sal = [
    {
      name: "Jhon",
      budget: 355,
    },
    {
      name: "Kate",
      budget: 444,
    },
    {
      name: "Mike",
      budget: 222,
    },
    {
      name: "Jule",
      budget: 333,
    },
    {
      name: "Jane",
      budget: 111,
    },
    {
      name: "Jhony",
      budget: 345,
    },
    {
      name: "Mark",
      budget: 456,
    },
    {
      name: "Kim",
      budget: 235,
    },
  ];

  return (
    <div>
      {sal.map((c) => (
        <Salary key={c} obj={c} />
      ))}
    </div>
  );
}
