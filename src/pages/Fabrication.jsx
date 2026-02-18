function Fabrication() {
  return (
    <div>
      <div className="page-content">
        <h1>LED Display Fabrication Services</h1>
        <div className="service-details">
          <h2>Custom LED Display Manufacturing</h2>
          <p>We provide comprehensive LED display fabrication services, from chip assembly to complete display systems, using cutting-edge technology and precision manufacturing processes.</p>
          
          {/* Image Gallery - Masonry Style */}
          <div className="fabrication-gallery">
            <h3 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2em', color: '#2c3e50' }}>Our Fabrication Process</h3>
            <div className="gallery-grid">
              <div className="gallery-item large">
                <img src="./images/g1.jpg" alt="LED Fabrication Process 1" />
                <div className="gallery-overlay">
                  <h4>LED Module Assembly</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img src="./images/g2.webp" alt="LED Fabrication Process 2" />
                <div className="gallery-overlay">
                  <h4>Quality Testing</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img src="./images/g3.png" alt="LED Fabrication Process 3" />
                <div className="gallery-overlay">
                  <h4>Cabinet Manufacturing</h4>
                </div>
              </div>
              <div className="gallery-item large">
                <img src="./images/g5.webp" alt="LED Fabrication Process 5" />
                <div className="gallery-overlay">
                  <h4>Final Assembly</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="features">
            <h3>LED Fabrication Process:</h3>
            <ul>
              <li><strong>LED Chip Production:</strong> Manufacturing high-quality LED chips with precise color and brightness specifications</li>
              <li><strong>SMD Assembly:</strong> Surface-mount device technology for mounting LEDs on circuit boards with 98.5% placement accuracy</li>
              <li><strong>PCB Manufacturing:</strong> Custom printed circuit boards designed for optimal LED performance</li>
              <li><strong>Module Assembly:</strong> Precision assembly of LED modules with automated pick-and-place machines</li>
              <li><strong>Cabinet Fabrication:</strong> Die-cast aluminum and steel cabinet manufacturing for durability</li>
              <li><strong>Resin Coating:</strong> Protective coating application for weather resistance and longevity</li>
              <li><strong>Wire Bonding:</strong> Gold wire bonding for reliable electrical connections</li>
              <li><strong>Quality Control:</strong> Comprehensive testing for brightness, color uniformity, and functionality</li>
            </ul>
          </div>

          <div className="equipment">
            <h3>Manufacturing Technologies:</h3>
            <ul>
              <li><strong>SMD Technology:</strong> Surface Mounted Device for compact and efficient LED placement</li>
              <li><strong>COB Technology:</strong> Chip-On-Board manufacturing for enhanced durability and heat dissipation</li>
              <li><strong>Automated Assembly:</strong> High-speed machines processing 25,000+ components per hour</li>
              <li><strong>Vision Systems:</strong> Precision alignment within ±0.005 mm tolerance</li>
              <li><strong>Reflow Soldering:</strong> Advanced soldering techniques for secure connections</li>
              <li><strong>Calibration Systems:</strong> Color and brightness calibration for uniform displays</li>
            </ul>
          </div>

          <div className="industries">
            <h3>Custom Fabrication Capabilities:</h3>
            <ul>
              <li><strong>Indoor LED Displays:</strong> Fine pixel pitch (P1.2 to P3) for close viewing</li>
              <li><strong>Outdoor LED Displays:</strong> High brightness (5000-8000 nits) weather-resistant screens</li>
              <li><strong>Flexible LED Modules:</strong> Curved and creative display configurations</li>
              <li><strong>Transparent LED Screens:</strong> See-through display technology</li>
              <li><strong>Rental LED Systems:</strong> Quick-lock modular systems for events</li>
              <li><strong>Custom Sizes:</strong> Any dimension from small panels to large billboards</li>
              <li><strong>Special Applications:</strong> Stadium perimeters, retail displays, control rooms</li>
            </ul>
          </div>

          <div className="warranty">
            <h3>Quality Standards:</h3>
            <ul>
              <li>✓ ISO Certified Manufacturing Process</li>
              <li>✓ 100% Component Testing</li>
              <li>✓ Color Uniformity Calibration</li>
              <li>✓ Thermal Cycling Tests</li>
              <li>✓ IP65 Weatherproof Rating (Outdoor)</li>
              <li>✓ Energy Efficiency Optimization</li>
              <li>✓ 2-Year Manufacturing Warranty</li>
            </ul>
          </div>

          <div className="contact-section">
            <h3>Custom LED Fabrication Quote</h3>
            <p>Partner with us for professional LED display fabrication. From concept to completion, we deliver excellence.</p>
            <p><strong>📧 Email:</strong> vinod9032657813@gmail.com</p>
            <p><strong>📞 Phone:</strong> +91 9032657813</p>
            <p><strong>🏭 Services:</strong> Custom LED manufacturing, module assembly, cabinet fabrication, and complete display systems</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fabrication
