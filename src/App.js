import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        
        <span>Step: {step}</span>
        
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))}></input>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <div style={{ textAlign: "center" }}>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </div>
      </p>
      {(count !== 0 || step !== 1) ? <div style={{ textAlign: "center" }}>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div>
  );
}
