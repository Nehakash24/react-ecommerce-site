import Home from './Component/Home'
import './App.css';
import { BrowserRouter,  Routes , Route  } from 'react-router-dom';
import Cart from './Component/Cart';
import NavbarComponent from './NavbarComponent';
import Men from './Component/Men'
import Women from './Component/Women'
import Jewellary from './Component/Jewellary'
import Electronics from './Component/Electronics'



function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />

    <Routes>
      {/* Define your routes */}
      <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/men' element={<Men />}/>
        <Route path='/wommen' element={<Women />}/>
        <Route path='/jewellary' element={<Jewellary />}/>
        <Route path='/electronics' element={<Electronics />}/>
      </Routes>
  </BrowserRouter>
);
}
 

export default App;
