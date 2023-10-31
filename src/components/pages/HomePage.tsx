import React, { useState } from "react";
import Toursdata from "../../common/Config";
import "./HomePage.css";
import TourDetail from "../TourDetail";
import Header from "../../common/Header";

type Tour = {
  id: number;
  name: string;
  image: string;
  description: string;
  place: string;
  type: string;
};

function HomePage() {
  const [tours] = useState<Tour[]>(Toursdata);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPlaceType, setSelectedPlaceType] = useState<string>("");
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  // Function to handle changes in the search input
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle changes in the select input
  const handlePlaceTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlaceType(event.target.value);
  };

  // Function to open the tour detail when the "View" button is clicked
  const handleViewTour = (tour: Tour) => {
    setSelectedTour(tour);
  };

  // Function to close the tour detail
  const handleCloseTour = () => {
    setSelectedTour(null);
  };

  // Function to filter tours based on the search query and selected place type
  const filteredTours = tours.filter((tour) => {
    const matchesSearchQuery =
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.place.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPlaceType =
      !selectedPlaceType || tour.type.includes(selectedPlaceType);

    return matchesSearchQuery && matchesPlaceType;
  });

  return (
    <>
    <Header/>
    <div className="page">
      {selectedTour ? (
        <TourDetail tour={selectedTour} onClose={handleCloseTour} />
      ) : (
        <div className="container">
          <header>
            <h1 className="head">Fantastic Tours Vlog</h1>
          </header>

          <main>
            <div className="overlay">
              <div className="Description">
                <p className="text-box">
                  Welcome to Fantastic Tours Vlog! Discover amazing tours and
                  adventures that await you. Whether you're an adventure
                  enthusiast or a culture explorer, we have the perfect tours for
                  you. Explore our featured tours below.
                </p>
              </div>

              <div className="search-bar">
                <select
                  className="place-type-select"
                  id="placeType"
                  value={selectedPlaceType}
                  onChange={handlePlaceTypeChange}
                >
                  <option value="">All</option>
                  <option value="Forest">Forest</option>
                  <option value="River">River</option>
                  <option value="Hill Station">Hill Station</option>
                  <option value="Beach">Beach</option>


                </select>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by name or location"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
            </div>

            <section className="tour-list">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="tour">
                  <h3>{tour.name}</h3>
                  <div className="image-container">
                    <img src={tour.image} alt={tour.name} />
                  </div>
                  <p>{tour.description}</p>
                  <p>Address: {tour.place}</p>
                  <button className="view" onClick={() => handleViewTour(tour)}>View</button>
                </div>
              ))}
            </section>
          </main>
        </div>
      )}

      <footer className="footer">
        <p>"Where Will Your Next Adventure Take You?"</p>
      </footer>
    </div>
    </>
  );
}

export default HomePage;
