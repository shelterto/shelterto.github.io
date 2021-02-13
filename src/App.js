import logo from './logo.svg';
import './App.css';
import InfoCard from './infoCard/InfoCard'
import DonoCard from './donoCard/DonoCard'
import ParentDonoContainer from './parentDonoContainer/parentDonoContainer'

function App() {

  return (
    <div className="App">
      <ParentDonoContainer shelterName="Toronto Community Center"/>
    </div>
  );
}

export default App;
