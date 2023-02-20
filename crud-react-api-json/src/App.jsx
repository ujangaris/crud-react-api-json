// import './App.css';
import Home from './crud/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Craete from './crud/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Craete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
