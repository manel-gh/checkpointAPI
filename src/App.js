
import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Drink from './Pages/Drink/Drink';
import Drinks from './Pages/Drinks/Drinks';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route  path="/Drinks" component={Drinks} />
       <Route  path="Drinks/Drink/:id" component={Drink} />
       <Route  path="/*" component={Error} />

      
     </Switch>
    </div>
  );
}

export default App;
