import logo from './logo.svg';
import utensilsImg from './images/utensils.svg'
import './App.css';
import InfoCard from './infoCard/InfoCard'
import DonoCard from './donoCard/DonoCard'

function App() {

  return (
    <div className="App">
      <DonoCard DonoColor="green" DonoText="Food" DonoImg={utensilsImg}/>
    </div>
  );
}

export default App;
