import './App.css'
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Cabinets from './pages/Cabinets'
import FixedScreens from './pages/FixedScreens'
import Repairs from './pages/Repairs'
import Fabrication from './pages/Fabrication'
import Installation from './pages/Installation'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return null
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <Router>
      <ScrollToTop />
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
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={closeMobileMenu}>
                  CEV ADS
                </Link>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <span className={mobileMenuOpen ? 'active' : ''}></span>
              <span className={mobileMenuOpen ? 'active' : ''}></span>
              <span className={mobileMenuOpen ? 'active' : ''}></span>
            </button>

            {/* Navigation Links */}
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><Link to="/cabinets" onClick={closeMobileMenu}>Cabinets</Link></li>
              <li><Link to="/fixed-screens" onClick={closeMobileMenu}>Fixed Screens</Link></li>
              <li><Link to="/repairs" onClick={closeMobileMenu}>Repairs</Link></li>
              <li><Link to="/fabrication" onClick={closeMobileMenu}>Fabrication</Link></li>
              <li><Link to="/installation" onClick={closeMobileMenu}>Installation</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
            </ul>
          </div>
        </nav>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}

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