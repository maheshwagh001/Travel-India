import React, { useState } from 'react';
import axios from 'axios';
import '../../Css/Planner.css';
import { baseUrl } from '../../Urls';

const TripForm = ({ setItinerary, setLoading }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const today = new Date();
  const dayTomorrow = new Date(today);
  dayTomorrow.setDate(today.getDate() + 1);

  const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
      try {
        const response = await axios.post(`${baseUrl}/user/planner`, {
          destination,
          startDate,
          endDate,
        });
        setItinerary(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching itinerary:', error);
      }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <div className="form-group">
        <label>Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          min={formatDate(dayTomorrow)}
          required
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          min={startDate}
          required
        />
      </div>

      <button type="submit" className="submit-btn">Plan Trip</button>
    </form>
  );
};

export default TripForm;
