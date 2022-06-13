import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path='/cart'  component={Cart}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
