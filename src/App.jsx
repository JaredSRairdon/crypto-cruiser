import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'; // Import your NavigationBar component
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Account from './components/pages/Account/Account';

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
      </Router>
    </>
  );
}

export default App;
