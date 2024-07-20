import React, { useState } from 'react';
import TripForm from './TripForm';
import Itinerary from './Itinerary';
import Loading from '../GeneralScreens/Loader';
import '../../Css/Planner.css';

const Planner = () => {
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="planner-content">
      <h1 className="planner-title">Travel Planner</h1>
      <TripForm setItinerary={setItinerary} setLoading={setLoading} />
      {loading && <Loading />}
      {itinerary.length > 0 && !loading && <Itinerary itinerary={itinerary} />}
    </div>
  );
};

export default Planner;
