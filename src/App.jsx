import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'; // Import your NavigationBar component
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="account" element={<Account/>} />
          </Routes>
        </div>
        <footer><Footer/></footer>
      </Router>
    </>
  );
}

export default App;
