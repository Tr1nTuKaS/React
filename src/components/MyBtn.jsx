import { useEffect, useState } from "react";

function MyBtn() {
  console.log("App.js component");

  const btnNames =['click me','back','delete']
  const currentName = btnNames[0]

  // sukuriamw count state kintamaji kurio pradine reiksme 0
  //ji mes galim pakeisti su setCount funkscija
  const [count,setCount] = useState(0)
  const [currrentBtnIndex, setCurrentBtnIndex] = useState(0);

  
  // const myArr = ['yes',54]

  // const [answer,nr] =myArr
  // console.=>log(answer,nr)

  //naudojamas kaip veiksmas vykstantis viena karta  tik susikurus komonentui
  useEffect(()=>{
    console.log('use effect MyBtn.js')
  },[])

  useEffect(()=>{
  console.log('use effect MyBtn.js to change count')
  setCount(2)
},[])


return (
  <div>
    <button onClick={() => setCount(10)}>
      {btnNames[currrentBtnIndex]} {count}
    </button>
    <button onClick={() => setCurrentBtnIndex(1)}>set name to index 1</button>
  </div>
);
}
  export default MyBtn;