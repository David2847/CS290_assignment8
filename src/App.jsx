import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import RegistrationPage from './pages/RegistrationPage'
import items from './data/items';


function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={ <OrderPage />}></Route>
          <Route path="/contact" element={ <RegistrationPage />}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
