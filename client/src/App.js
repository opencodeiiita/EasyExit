import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/login';


function App() {
  return (
    // <div >     //whenever want to run login signup page uncomment this
    // <LoginSignup/>
    // </div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;



