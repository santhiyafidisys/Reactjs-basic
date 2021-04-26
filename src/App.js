import logo from './logo.svg';
import './App.css';
import Banner from './Banner.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <h1>react introduction</h1>
         <h2>learn about</h2>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about React
        </a>
      </header>
    </div>
  );
}


class Mynewwebpage extends React.Component{
  render()
  {
    return 
    
    <h2> mutliple class Component</h2>
    
   
  }
}


export default Mynewwebpage;
