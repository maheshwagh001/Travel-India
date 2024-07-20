// src/components/LandingPage.js

import React, {useEffect,useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../Css/Home.css';

const Home = () => {
  const bool = localStorage.getItem("authToken") ? true : false
    const [auth, setAuth] = useState(bool)

    useEffect(() => {

        setAuth(bool)

    }, [bool])



  return (
    <div className="container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover the India and relish your Experience</h1>
          <p>Travel the India and enjoy every moment of your life.</p>
          {
            auth ? 
            <Link className="styled-link" to="/blog">Explore</Link>
            :
            <Link className="styled-link" to="/register">Get Started</Link>
          }
          
          
        </div>
      </section>


      <section className="values-section">
        <h2>Top Values For You</h2>
        <div className="card-container">
          <div className="card">
            <div className="card-icon">🌍</div>
            <h3 className="card-title">Plan a Trip</h3>
            <p className="card-description">Plan your itinerary using AI for a seamless and customized travel experience.</p>
          </div>
          <div className="card">
            <div className="card-icon">🗺️</div>
            <h3 className="card-title">Explore and Save</h3>
            <p className="card-description">Find hidden gems and save travel stories for inspiration and unique travel insights."</p>
          </div>
          <div className="card">
            <div className="card-icon">🏖️</div>
            <h3 className="card-title">Share Your Tails</h3>
            <p className="card-description">Share your unique travel experiences and adventures with our community</p>
          </div>
        </div>
      </section>


      <section className="blog-section">
        <h2>Our Stories</h2>
        <div className="card-container">
          <div className="card">
            <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHANFqmPtv_3xFg2b7bSGcqkOKZV5yVRfctg&s" alt="Bumbai" />
            <h3 className="card-title">The Gateway of India</h3>
            <p className="card-description">It is an arch monument built during the 20th century in Mombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911. It commemorates the 70,000 Indian soldiers who lost their lives fighting for the British Army during the World War I.</p>
          </div>
          <div className="card">
            <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIRSpe5-6i0ufDJbtobS17uR_PNjbT60NFA&s" alt="Sun Temple" />
            <h3 className="card-title">Sun Temple at Konark </h3>
            <p className="card-description">It offers a glimpse into India's rich heritage, architecture and intricate stone carvings. It's a UNESCO World Heritage Site, significant for its historical, cultural, and religious importance. The temple's beautiful coastal location and nearby attractions enhance the experience</p>
          </div>
          <div className="card">
            <img className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVsLAqZ6l8XsJWSWhaw2X99f4Ne7rtmIGPg&s" alt="Taj Mahal" />
            <h3 className="card-title">Taj Mahal</h3>
            <p className="card-description">Visiting the Taj Mahal is a captivating experience for its breathtaking architectural beauty, symbolizing eternal love. This UNESCO World Heritage Site, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, showcases exquisite Mughal architecture with intricate marble inlay work. </p>
          </div>
        </div>
        < Link to='/blog'>Read more..</Link>
      </section>
      
      
    </div>
  );
};

export default Home;
