import logo from './logo.svg';
import './App.css';
import ParentFunctionComponent from './components/ParentFunctionComponent';
import ParentClassComponent from './components/ParentClassComponent';

function App() {
  return (
    <div className="App">
      <ParentClassComponent/>
      <ParentFunctionComponent />
    </div>
  );
}

export default App;
