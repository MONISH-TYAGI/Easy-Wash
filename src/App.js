import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import 'tw-elements';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './Component/Products';

function App() {
  return (
    <div className="App  bg-gray-200 h-screen ">
 <BrowserRouter>
 <Routes>
  <Route path="/Services" element={<Products></Products>}></Route>
  <Route path="*" element={<Home></Home>}></Route>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
