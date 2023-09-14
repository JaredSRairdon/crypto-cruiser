import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'; // Import your NavigationBar component
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
