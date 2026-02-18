import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cabinets from './pages/Cabinets'
import FixedScreens from './pages/FixedScreens'
import Repairs from './pages/Repairs'
import Fabrication from './pages/Fabrication'
import Installation from './pages/Installation'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <nav className="top-navbar">
          <div className="email">
            📧 vinod9032657813@gmail.com
          </div>
          <div className="partner-text">
            🤝 Authorized Partner: Zuper LED Media, Hyderabad
          </div>
          <div className="company-name">
            CEV ADS Company
          </div>
        </nav>

        {/* Main Navigation Bar */}
        <nav className="main-navbar">
          <div className="navbar-content">
            {/* Logo and Company Name */}
            <div className="logo-section">
              <div className="logo">
                CA
              </div>
              <div className="company-logo-name">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  CEV ADS
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
              <li><Link to="/cabinets">Cabinets</Link></li>
              <li><Link to="/fixed-screens">Fixed Screens</Link></li>
              <li><Link to="/repairs">Repairs</Link></li>
              <li><Link to="/fabrication">Fabrication</Link></li>
              <li><Link to="/installation">Installation</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Profile Icon */}
            <div className="profile-icon">
              👤
            </div>
          </div>
        </nav>

        {/* Main Content Area with Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabinets" element={<Cabinets />} />
            <Route path="/fixed-screens" element={<FixedScreens />} />
            <Route path="/repairs" element={<Repairs />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App