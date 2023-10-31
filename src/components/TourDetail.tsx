import React, { useState } from "react";
import "./TourDetail.css";
import GoogleMap from "./GoogleMap";

type Tour = {
  id: number;
  name: string;
  image: string;
  description: string;
  place: string;
  type: string;
};

function TourDetail({ tour, onClose }: { tour: Tour; onClose: () => void }) {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="tour-detail">
      <div className="left-container">
        <img src={tour.image} alt={tour.name} />
      </div>
      <div className="right-container">
        <h2>{tour.name}</h2>
        <p>Place: {tour.place}</p>
        <p>Description: {tour.description}</p>
        {/* Add any other details you want to display here */}
        <button className="back-button" onClick={onClose}>
          Back
        </button>
        <div className="Map">
          <button className="view" onClick={toggleMap}>
            {showMap  ? "Close Location" : "See the location Here!"}
          </button>
          {showMap && <GoogleMap location={tour.place} />}
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
