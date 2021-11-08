import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

function App() {
  return (
    <div className="App">
      <div>
       <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
