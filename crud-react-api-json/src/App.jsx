// import './App.css';
import Home from './crud/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Craete from './crud/Create';
import Update from './crud/Update';
import Read from './crud/Read';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Craete />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
