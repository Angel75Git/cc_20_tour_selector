import React from "react";
import Gallery from "./components/Gallery";
import "./styles/styles.css";

function App() {
  return (
    <main>
      <header className="app-header">
        <h1>Tour Gallery</h1>
        <p>Explore amazing destinations and plan your next adventure!</p>
      </header>
      <Gallery />
      <footer className="app-footer">
        <p>&copy; 2025 Tour Selector. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;