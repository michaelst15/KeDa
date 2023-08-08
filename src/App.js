import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './login';
import Home from './Home';

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
