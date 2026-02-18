import { useState, useEffect } from 'react'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "./images/i.avif",
      title: "Premium LED Display Solutions",
      description: "High-resolution LED displays for indoor and outdoor applications"
    },
    {
      id: 2,
      image: "./images/i2.avif",
      title: "Digital Advertising Displays",
      description: "Eye-catching digital signage for maximum impact"
    },
    {
      id: 3,
      image: "./images/i3.jpg",
      title: "Interactive LED Video Walls",
      description: "Engaging interactive displays for modern businesses"
    },
    {
      id: 4,
      image: "./images/i4.jpg",
      title: "Outdoor LED Billboards",
      description: "Large-scale outdoor LED installations for advertising"
    },
    {
      id: 5,
      image: "./images/led-display-lifetime.jpg",
      title: "Corporate Display Solutions",
      description: "Professional LED displays for corporate environments"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="home-page">
      {/* LED Display Slider */}
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className="cta-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-btn prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          &#8250;
        </button>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* LED Display Products Grid */}
      <div className="led-products-section">
        <h2 className="section-title">Our LED Display Solutions</h2>
        <div className="led-cards-grid">
          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/CABINET 1.jpg" alt="LED Cabinet Module" />
            </div>
            <div className="led-card-content">
              <h3>Outdoor Pixel 4.8P Cabinet</h3>
              <p>Cabinet of outdoor pixel 4.8p with good viewing and price is ₹20,000</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cabinet 2.png" alt="Outdoor LED Module" />
            </div>
            <div className="led-card-content">
              <h3>Indoor Pixel 3.9P Cabinet</h3>
              <p>Cabinet of indoor pixel 3.9p with good viewing and price is ₹17,500</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cabinet 3.jpg" alt="LED Display Cabinet" />
            </div>
            <div className="led-card-content">
              <h3>Outdoor Pixel 3.9P Cabinet</h3>
              <p>Cabinet of outdoor pixel 3.9p with good viewing and price is ₹18,500</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cABINET 4.jpg" alt="Rental LED Cabinet" />
            </div>
            <div className="led-card-content">
              <h3>Outdoor Pixel 3.7P Cabinet</h3>
              <p>Cabinet of outdoor pixel 3.7p with good viewing and price is ₹23,500</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cabint 6.webp" alt="Fine Pitch LED Module" />
            </div>
            <div className="led-card-content">
              <h3>Indoor Pixel 2.5P Cabinet</h3>
              <p>Cabinet of indoor pixel 2.5p with good viewing and price is ₹35,000</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cabint7.jpg" alt="Transparent LED Cabinet" />
            </div>
            <div className="led-card-content">
              <h3>Outdoor Pixel 5.0P Cabinet</h3>
              <p>Cabinet of outdoor pixel 5.0p with good viewing and price is ₹32,000</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/cabint 8.png" alt="Curved LED Module" />
            </div>
            <div className="led-card-content">
              <h3>Indoor Pixel 3.0P Cabinet</h3>
              <p>Cabinet of indoor pixel 3.0p with good viewing and price is ₹29,500</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" alt="Stadium LED Cabinet" />
            </div>
            <div className="led-card-content">
              <h3>Outdoor Pixel 6.0P Cabinet</h3>
              <p>Cabinet of outdoor pixel 6.0p with good viewing and price is ₹31,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="page-content">
        <div className="welcome-section">
          <h1>Welcome to CEV ADS</h1>
          <p className="welcome-text">Your trusted partner for premium LED displays, cabinets, screens, repairs, fabrication, and installation services.</p>
        </div>

        {/* Services Overview */}
        <div className="services-overview">
          <h2>Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h3>Cabinets</h3>
              <p>Custom cabinet solutions for your needs</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📺</div>
              <h3>LED Displays</h3>
              <p>High-quality LED display installations</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Repairs</h3>
              <p>Professional repair services</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Fabrication</h3>
              <p>Custom fabrication solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed LED Screens Section */}
      <div className="led-products-section">
        <h2 className="section-title">Fixed LED Screen Solutions</h2>
        <div className="led-cards-grid">
          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/f1.png" alt="Fixed LED Screen" />
            </div>
            <div className="led-card-content">
              <h3>P5 Outdoor LED Screen</h3>
              <p>P5 outdoor LED screen with excellent viewing quality. Price is ₹3,900 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/f2.avif" alt="Outdoor Fixed Screen" />
            </div>
            <div className="led-card-content">
              <h3>P4 Outdoor LED Screen</h3>
              <p>P4 outdoor LED screen with excellent viewing quality. Price is ₹4,200 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/f3.jpg" alt="Wall Mounted LED" />
            </div>
            <div className="led-card-content">
              <h3>P3 Outdoor LED Screen</h3>
              <p>P3 outdoor LED screen with excellent viewing quality. Price is ₹5,800 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/f4.avif" alt="Fixed Video Wall" />
            </div>
            <div className="led-card-content">
              <h3>P2.5 Outdoor LED Screen</h3>
              <p>P2.5 outdoor LED screen with excellent viewing quality. Price is ₹6,800 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="./images/f5.webp" alt="Billboard LED Screen" />
            </div>
            <div className="led-card-content">
              <h3>P2.5 Indoor LED Screen</h3>
              <p>P2.5 indoor LED screen with excellent viewing quality. Price is ₹4,200 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" alt="Stadium Fixed Screen" />
            </div>
            <div className="led-card-content">
              <h3>P2 Indoor LED Screen</h3>
              <p>P2 indoor LED screen with excellent viewing quality. Price is ₹5,800 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&q=80" alt="Corporate Fixed Display" />
            </div>
            <div className="led-card-content">
              <h3>P1.8 Indoor LED Screen</h3>
              <p>P1.8 indoor LED screen with excellent viewing quality. Price is ₹7,200 per sq.ft</p>
            </div>
          </div>

          <div className="led-card">
            <div className="led-card-image">
              <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80" alt="Retail Fixed Screen" />
            </div>
            <div className="led-card-content">
              <h3>Retail Fixed LED Screen</h3>
              <p>Eye-catching fixed LED screens for retail stores and shopping centers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <h2>Why Choose CEV ADS?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h4>✨ Premium Quality</h4>
              <p>We use only the highest quality materials and components</p>
            </div>
            <div className="feature-item">
              <h4>🚀 Fast Installation</h4>
              <p>Quick and efficient installation with minimal downtime</p>
            </div>
            <div className="feature-item">
              <h4>🛠️ Expert Support</h4>
              <p>Professional support and maintenance services</p>
            </div>
            <div className="feature-item">
              <h4>💰 Competitive Pricing</h4>
              <p>Best value for money with transparent pricing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
