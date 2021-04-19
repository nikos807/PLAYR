import './App.css';
import {useState} from 'react'
import './css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//Import components 
import NavigationView from "./components/navigationView.js";







function App() {

  const [active, setActive] = useState(1);


  return (
    <div className="App">
      <NavigationView/>
    </div>
  );
}

export default App;
