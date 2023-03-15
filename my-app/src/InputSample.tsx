import { setUncaughtExceptionCaptureCallback } from 'process';
import {useRef, useState} from 'react';

const InputSample = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const [input, setInput] = useState({
      name: '',
      nickname: '',
    });

    const{name, nickname} = input;
    
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        setInput({...input, [name]:event.target.value}); //Spread Operator
    };

    const clearInput = () => {
        setInput({name:'', nickname: ''});
        if(inputRef.current){
          inputRef.current.focus(); // 이름으로 포커스
        }
    }
    
    return (
      <div>
      <input ref={inputRef} name="name" placeholder="이름" value={name} onChange={changeInput}/>
      <input name="nickname" placeholder="닉네임" value={nickname} onChange={changeInput}/>
      <button onClick={clearInput}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
    );
  };

  export default InputSample;