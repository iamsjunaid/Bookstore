import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route>
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
