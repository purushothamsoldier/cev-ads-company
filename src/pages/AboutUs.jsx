function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About CEV ADS</h1>
          <p className="hero-subtitle">Your Trusted LED Display Partner</p>
        </div>
      </div>

      <div className="page-content">
        {/* Company Story Section */}
        <div className="about-section story-section">
          <div className="section-icon">📖</div>
          <h2>Our Story</h2>
          <p>Founded with a vision to revolutionize the LED display industry in India, CEV ADS has grown to become a trusted name in LED technology. We combine cutting-edge technology with expert craftsmanship to deliver stunning visual solutions for businesses, events, and advertising.</p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide high-quality, reliable, and innovative LED display solutions that help our clients communicate their message effectively while maintaining the highest standards of professionalism and technical excellence.</p>
          </div>
          <div className="vision-card">
            <div className="card-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>To be India's leading LED display solutions provider, recognized for innovation, quality, and customer satisfaction in every project we undertake.</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="about-section values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💎</div>
              <h4>Quality</h4>
              <p>We use only premium LED components and materials</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Reliability</h4>
              <p>24/7 support and guaranteed uptime</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h4>Innovation</h4>
              <p>Latest LED technology and display solutions</p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h4>Customer Focus</h4>
              <p>Your success is our priority</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✅</div>
              <h4>Integrity</h4>
              <p>Transparent pricing and honest service</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏆</div>
              <h4>Excellence</h4>
              <p>Commitment to delivering the best</p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="about-section expertise-section">
          <div className="section-icon">⚡</div>
          <h2>Our Expertise</h2>
          <p>Our team of certified LED technicians and engineers brings years of experience in LED display installation, programming, and maintenance. We handle projects of all sizes - from small indoor displays to large outdoor LED billboards.</p>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Installations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="about-section why-choose-section">
          <h2>Why Choose CEV ADS?</h2>
          <div className="why-choose-grid">
            <div className="why-item">✓ 5+ Years of LED Industry Experience</div>
            <div className="why-item">✓ 500+ Successful Installations</div>
            <div className="why-item">✓ Premium Quality LED Modules</div>
            <div className="why-item">✓ Competitive Pricing</div>
            <div className="why-item">✓ Comprehensive Warranty</div>
            <div className="why-item">✓ Expert Technical Support</div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="partner-section">
          <div className="partner-badge">
            <div className="badge-icon">🤝</div>
            <h3>Authorized Partner</h3>
            <div className="partner-name">Zuper LED Media</div>
            <p className="partner-location">Hyderabad</p>
          </div>
          <div className="partner-description">
            <p>CEV ADS is proud to be an authorized partner of <strong>Zuper LED Media</strong>, a leading manufacturer and supplier of premium LED display solutions. This partnership ensures that our clients receive authentic, high-quality LED products backed by industry-leading warranties and technical support.</p>
            <p>Through our partnership with Zuper LED Media, we have access to the latest LED technology, competitive pricing, and comprehensive after-sales support, enabling us to deliver exceptional value to our customers.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="about-contact-section">
          <h2>Get in Touch with CEV ADS</h2>
          <p>Ready to transform your space with stunning LED displays? Contact us today!</p>
          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <strong>Email</strong>
                <p>vinod9032657813@gmail.com</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon">📞</div>
              <div className="contact-info">
                <strong>Phone</strong>
                <p>+91 9032657813</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon">📍</div>
              <div className="contact-info">
                <strong>Location</strong>
                <p>India</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-icon">⏰</div>
              <div className="contact-info">
                <strong>Business Hours</strong>
                <p>Mon-Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs