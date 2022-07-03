import './App.css';
import {Navbar} from './components/Navbar'
import {Home} from './components/Home'
import {Footer} from './components/Footer'
import {Routes,Route} from "react-router-dom"
import { Chicken } from './components/Chicken';
import { Single } from './components/Single';
import {Checkout} from './components/Checkout'
import {Payment} from './components/Payment'
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/chicken" element={<Chicken/>}></Route>
      <Route path="/chicken/:id" element={<Single/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
