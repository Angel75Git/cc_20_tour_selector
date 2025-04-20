import React from "react";

function DestinationSelector({ tours, selectedDestination, onDestinationChange }) {
  // Extract unique destination names from the tours
  const destinations = ["All Destinations", ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Choose a Destination: </label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={(e) => onDestinationChange(e.target.value)}
      >
        {destinations.map((destination, index) => (
          <option key={index} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;