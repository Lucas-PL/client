import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

async function message() {

  const memo = await fetch("http://localhost:4000/message", {
    // method: "GET",
    mode: "no-cors",
    // headers: {
    //     "Content-Type": "application/json"
    // }
}).then((response) => response)
  .then((data) => console.log("to jest: ",data))

}

message();

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Button />
      </header>
    </div>
  )
}

export default App;
