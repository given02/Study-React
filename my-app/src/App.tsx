import './App.css';
import Hello from './Hello';
import InputSample from './InputSample';
// 함수선언식
function App2() {
  const name = "my name is"; 
  return (
    <div className='test'>
      <h5>스타일</h5>
      <Hello name="react" color="red" isSpecial={false}/>
      {/** 주석 */}
      <Hello name="react" color="blue" isSpecial={true}/>
    </div>
  );
}

function App(){
  return (
    <div>
        <InputSample />
    </div>
  )
}

export default App;
