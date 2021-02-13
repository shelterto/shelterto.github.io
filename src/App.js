import logo from './logo.svg';
import utensilsImg from './images/utensils.svg'
import './App.css';
import InfoCard from './infoCard/InfoCard'
import DonoCard from './donoCard/DonoCard'
import ParentDonoContainer from './parentDonoContainer/parentDonoContainer'

function App() {

  return (
    <div className="App">
      <DonoCard DonoColor="green" DonoText="Food" DonoImg={utensilsImg}/>
      <ParentDonoContainer />
    </div>
  );
}

export default App;
