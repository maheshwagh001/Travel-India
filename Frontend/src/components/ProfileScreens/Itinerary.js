import React from 'react';
import '../../Css/Planner.css';

const Itinerary = ({ itinerary }) => {
  return (
    <div className="itinerary">
      <h2 className="itinerary-title">Your Itinerary</h2>
      {itinerary.map((activities, index) => (
        <div key={index} className="day">
          <h3 className="day-title">Day {index + 1}</h3>
          <p className="day-activities">{activities}</p>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
