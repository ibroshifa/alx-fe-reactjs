import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    
    const bottonStyle ={
        'margin':'10px'
    }
    return (
      <div>
        <p>Current Count: {count}</p>
        <button style={bottonStyle} onClick={() => setCount(count + 1)}>Increment</button>
        <button style={bottonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={bottonStyle} onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  }
  export default Counter;