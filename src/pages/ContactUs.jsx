function ContactUs() {
  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p className="hero-subtitle">We're here to help bring your LED display vision to life</p>
        </div>
      </div>

      <div className="page-content">
        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          <div className="contact-card email-card">
            <div className="contact-card-icon">📧</div>
            <h3>Email Us</h3>
            <p className="contact-value">vinod9032657813@gmail.com</p>
            <p className="contact-description">Send us your inquiries anytime</p>
          </div>

          <div className="contact-card phone-card">
            <div className="contact-card-icon">📞</div>
            <h3>Call Us</h3>
            <p className="contact-value">+91 9032657813</p>
            <p className="contact-description">Mon-Sat, 9:00 AM - 7:00 PM</p>
          </div>

          <div className="contact-card location-card">
            <div className="contact-card-icon">📍</div>
            <h3>Visit Us</h3>
            <p className="contact-value">India</p>
            <p className="contact-description">Serving nationwide</p>
          </div>

          <div className="contact-card hours-card">
            <div className="contact-card-icon">⏰</div>
            <h3>Business Hours</h3>
            <p className="contact-value">Mon - Sat</p>
            <p className="contact-description">9:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* Services Section */}
        <div className="contact-services-section">
          <h2>Our LED Display Services</h2>
          <div className="contact-services-grid">
            <div className="contact-service-item">
              <div className="service-icon-large">🗄️</div>
              <h4>LED Cabinets</h4>
              <p>Custom LED cabinet solutions for all applications</p>
            </div>
            <div className="contact-service-item">
              <div className="service-icon-large">📺</div>
              <h4>Fixed LED Screens</h4>
              <p>Permanent LED display installations</p>
            </div>
            <div className="contact-service-item">
              <div className="service-icon-large">🔧</div>
              <h4>Repairs & Maintenance</h4>
              <p>2-year free repair warranty included</p>
            </div>
            <div className="contact-service-item">
              <div className="service-icon-large">⚙️</div>
              <h4>LED Fabrication</h4>
              <p>Custom LED display manufacturing</p>
            </div>
            <div className="contact-service-item">
              <div className="service-icon-large">🔨</div>
              <h4>Free Installation</h4>
              <p>Professional installation at no cost</p>
            </div>
            <div className="contact-service-item">
              <div className="service-icon-large">🤝</div>
              <h4>Consultation</h4>
              <p>Expert advice for your LED projects</p>
            </div>
          </div>
        </div>

        {/* Quote Request Section */}
        <div className="quote-section">
          <div className="quote-content">
            <h2>Request a Free Quote</h2>
            <p>Ready to start your LED display project? Contact us for a free consultation and quote!</p>
            <div className="quote-info">
              <div className="quote-item">
                <span className="quote-icon">✓</span>
                <span>Free consultation</span>
              </div>
              <div className="quote-item">
                <span className="quote-icon">✓</span>
                <span>Competitive pricing</span>
              </div>
              <div className="quote-item">
                <span className="quote-icon">✓</span>
                <span>Custom solutions</span>
              </div>
              <div className="quote-item">
                <span className="quote-icon">✓</span>
                <span>Fast response time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Contact Us Section */}
        <div className="why-contact-section">
          <h2>Why Choose CEV ADS?</h2>
          <div className="why-contact-grid">
            <div className="why-contact-item">
              <div className="why-icon">⚡</div>
              <h4>Quick Response</h4>
              <p>We respond within 24 hours</p>
            </div>
            <div className="why-contact-item">
              <div className="why-icon">💎</div>
              <h4>Premium Quality</h4>
              <p>Authorized Zuper LED Media partner</p>
            </div>
            <div className="why-contact-item">
              <div className="why-icon">🆓</div>
              <h4>Free Services</h4>
              <p>Free installation & 2-year warranty</p>
            </div>
            <div className="why-contact-item">
              <div className="why-icon">🏆</div>
              <h4>Expert Team</h4>
              <p>5+ years of LED experience</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today and let's discuss your LED display needs!</p>
          <div className="cta-buttons">
            <a href="mailto:vinod9032657813@gmail.com" className="cta-btn primary">
              📧 Email Us
            </a>
            <a href="tel:+919032657813" className="cta-btn secondary">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs