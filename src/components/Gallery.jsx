import React, { useState, useEffect } from "react";
import TourCard from "./TourCard";
import DestinationSelector from "./DestinationSelector";
import "../styles/styles.css";

function Gallery() {
  const [tours, setTours] = useState([]); // State to hold the list of tours
  const [filteredTours, setFilteredTours] = useState([]); // State for filtered tours
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state
  const [selectedDestination, setSelectedDestination] = useState("All Destinations"); // State for selected destination

  const fetchTour = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"
      );
      if (!response.ok) throw new Error("Network connection is not ok");
      const data = await response.json();
      setTours(data); // Set the fetched tours in state
      setFilteredTours(data); // Initialize filtered tours with all tours
    } catch (error) {
      console.error("Error fetching tours:", error);
      setError("Failed to fetch tours. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    setFilteredTours(newTours);
  };

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
    if (destination === "All Destinations") {
      setFilteredTours(tours); // Show all tours if "All Destinations" is selected
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination)); // Filter tours by destination
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <h2>Loading Next Travels...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <section className="error-message">
        <h2>{error}</h2>
        <button onClick={fetchTour}>Try Again</button>
      </section>
    );
  }

  if (filteredTours.length === 0) {
    return (
      <section>
        <h2>No Tours Available</h2>
        <button onClick={fetchTour}>Refresh</button>
      </section>
    );
  }

  return (
    <section>
      <h2>Our Tours</h2>
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        onDestinationChange={handleDestinationChange}
      />
      <div className="tours-list">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={removeTour} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;