
import './../styles/App.css';
import React,{useState} from "react";
import ReactDOM from 'react-dom';

const App = () => {
    let [num,setNum]=useState(0);

    function updateNum()
    {
        setNum(num+1);
    }

//  let [place,setPlace]=useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {num} times</p>
        <button onClick={updateNum}>Click me</button>
    </div>
  )
}
export default App
