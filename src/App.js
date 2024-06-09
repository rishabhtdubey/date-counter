import React, { useState } from 'react';


const Counter = () => {

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);
    
    
    // let date = new Date().getDate();
    // let month = new Date().getMonth() + 1;
    // let year = new Date().getFullYear();


    return (
      <div className='counter'>
        <div>
            <button onClick={() => setStep((s) => s-1)}>-</button>
            <span>Step: {step}</span>
            <button onClick={() => setStep((s) => s+1)}>+</button>
        </div>

        <div>
            <button onClick={() => setCount((c) => c-step)}>-</button>
            <span>Count: {count}</span>
            <button onClick={() => setCount((c) => c+step)}>+</button>
        </div>

        <p>{date.toDateString()}</p>

      </div>  
    )
}

const App = () => {
  return (
    <Counter/>
  )
}

export default App