import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counterslice.jsx";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  function handleAdd() {
    // Logic to handle adding a counter
    dispatch(increment());
  }
  function handleRemove() {
    // Logic to handle removing a counter
    dispatch(decrement());
  }
  function handleReset() {
    // Logic to handle resetting the counter
    dispatch(reset());
  }
  function handleIncrementByAmount() {
    // Logic to handle incrementing by a specific amount
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className="container">
        <button onClick={handleAdd}>Add +</button>
        <p>{count}</p>
        <button onClick={handleRemove}>Remove -</button>
        <br />
        <br />
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <br />
        <br />
        <button onClick={handleIncrementByAmount}>Inc by amount</button>
      </div>
    </>
  );
}

export default App;
