import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'; // Import your NavigationBar component
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import Footer from './components/Footer/Footer';
import CryptoDetailsPage from './pages/CyptoDetailsPage/CryptoDetailsPage';
import Auth from './pages/Account/Auth';
import { supabase } from './apis/supabaseClient'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <>
      {/* <Router basename={"/crypto-cruiser"}> */}
      <Router>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="account" element={!session ? <Auth /> : <Account key={session.user.id} session={session} />}/>
            <Route path="crypto/:id" element={<CryptoDetailsPage/>} />
          </Routes>
        </div>
        <footer><Footer/></footer>
      </Router>
    </>
  );
}

export default App;
