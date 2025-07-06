import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleLoaded = () => {
      videoEl.currentTime = 3; // start at 0:03
    };

    videoEl.addEventListener('loadedmetadata', handleLoaded);

    return () => {
      if (videoEl) {
        videoEl.removeEventListener('loadedmetadata', handleLoaded);
      }
    };
  }, []);

  return (
    <div className="app-wrapper">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Your Trip. Your Vibe.</h1>
          <p>Plan unforgettable journeys with AI that matches your energy, mood, and travel goals — all in seconds.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Sample Itinerary</button>
            <button className="btn-outline">Join the Waitlist</button>
          </div>
        </div>
      </section>

      {/* IPHONE DEMO SCROLLING UI */}
      <section className="scroll-demo">
        <video
          ref={videoRef}
          className="ghana-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/ghana-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="iphone-frame">
          <img src="/dark_iphone_frame_mock.png" alt="iPhone Frame" className="frame-img" />
          <div className="screen-scroll-content">
            {/* Screen 1 */}
            <div className="mock-screen">
              <h2>Start Your Trip</h2>
              <p>Let’s build your perfect trip. Tell us what kind of traveler you are.</p>
              <button className="mock-button">Get Started</button>
            </div>

            {/* Screen 2 */}
            <div className="mock-screen">
              <h2>Choose Your Travel Style</h2>
              <ul>
                <li>🌿 Chill Explorer</li>
                <li>🎒 Adventurer</li>
                <li>💼 Urban Hustler</li>
              </ul>
            </div>

            {/* Screen 3 */}
            <div className="mock-screen">
              <h2>Pick Your Vibe</h2>
              <p>What kind of energy are you feeling for this trip?</p>
              <ul>
                <li>🌅 Slow & Reflective</li>
                <li>🔥 Fast-Paced & Bold</li>
                <li>🧘 Balanced & Curious</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why AItinerary Works</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>✨ Personalized</h3>
            <p>Your itinerary, built around your travel personality and pace.</p>
          </div>
          <div className="feature">
            <h3>⚡ Instant</h3>
            <p>No more hours of planning. Just tap, and go.</p>
          </div>
          <div className="feature">
            <h3>🌍 Authentic</h3>
            <p>Explore local gems curated for your vibe.</p>
          </div>
          <div className="feature">
            <h3>📱 Mobile Preview</h3>
            <p>Visualize your trip right on your phone before it starts.</p>
          </div>
        </div>
      </section>

      {/* SAMPLE ITINERARY */}
      <section className="sample-itinerary">
        <h2>3-Day Ghana Escape</h2>
        <div className="itinerary-cards">
          <div className="card">
            <h4>Day 1: Arrival</h4>
            <ul>
              <li>🛬 Land in Accra</li>
              <li>🏨 Stay at Kempinski</li>
              <li>🍽️ Dinner at Skybar25</li>
            </ul>
          </div>
          <div className="card">
            <h4>Day 2: Culture & History</h4>
            <ul>
              <li>🏛️ Du Bois Memorial</li>
              <li>🎨 Nubuke Foundation</li>
              <li>🥘 Street food tasting</li>
            </ul>
          </div>
          <div className="card">
            <h4>Day 3: Coastal Adventure</h4>
            <ul>
              <li>🌊 Cape Coast Castle</li>
              <li>🌉 Kakum Bridge</li>
              <li>🌅 Sunset in Elmina</li>
            </ul>
          </div>
        </div>
        <button className="btn-primary">See Full Trip</button>
      </section>

    </div>
  );
}

export default App;