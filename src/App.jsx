// import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid'
import CoffeeList from './components/CoffeeList';

function App() {
  // console.log(nanoid());
  const id = nanoid();

  return (
    <div className="App">
      <header className="App-header">
        <CoffeeList />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>2 + 2 = {2 + 2}</p>
        <p>{id}</p>
      </header>
    </div>
  );
}

export default App;
