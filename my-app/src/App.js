import './App.css';
import E08 from './component/e08/E08'

function App() {
   
  const buttonOnClick08 = () => {
    return <E08 />
  }

  return (
    <div className="App">
      <button onClick={buttonOnClick08}>E08 화면 출력</button>
    </div>
  );
}

export default App;
