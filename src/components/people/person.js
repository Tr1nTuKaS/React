import { useState, useEffect } from "react";

export default function Person(props) {
  const [clickNr, setClickNr] = useState(1);

  useEffect(() => {
    document.title = "Person stuff";
    console.log("title changed");
  }, []);

  const onButtonPress = () => {
    console.log("Wow you cliked");
    setClickNr(clickNr + 10);
  };
  const onButton = () => {
    console.log(-1);
    setClickNr(clickNr - 1);
  };

  const resBtn = () => {
    setClickNr(0);
  };
  return (
    <div className="person">
      <h2 onClick={resBtn}>{props.children}</h2>
      <p>{clickNr}</p>
      <button onClick={onButtonPress}>Click</button>
      {clickNr > 0 && <button onClick={onButton}>Click</button>}
      {/* <button disabled={click < 0 } onClick={onButton}>Click</button> */}
    </div>
  );
}
