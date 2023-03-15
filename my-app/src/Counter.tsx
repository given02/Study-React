import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    // 코드 차이 위에는 두번 적용 안됨. 아래는 됨.
    const onIncrease = () => {
        setCount(count+1);
        setCount(count+1);
        //setCount((count) => count + 1);
        //setCount((count) => count + 1);
    };
    const onDecrease = () => {
        setCount(count-1);
        setCount(count-1);
        //setCount((count) => count - 1);
        //setCount((count) => count - 1);
    };

    return (
        <div>
          <h1>Count : {count}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;