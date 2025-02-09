import { useState } from 'react'
import './App.css'
import MapComponent from './MapComponent'

function App() {
  // States for evaluation inputs
  const [soilRating, setSoilRating] = useState(0);
  const [waterAvailability, setWaterAvailability] = useState(0);
  const [projectSize, setProjectSize] = useState(0);
  const [evaluationScore, setEvaluationScore] = useState(null);

  // Handler for calculating the evaluation score
  const handleCalculate = (e) => {
    e.preventDefault();
    // Weighted evaluation: soil (40%), water (30%), project size (30%)
    const score = (soilRating * 0.4) + (waterAvailability * 0.3) + (projectSize * 0.3);
    setEvaluationScore(score.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Land Evaluation System</h1>
      
      <form onSubmit={handleCalculate}>
        <div>
          <label htmlFor="soil">Soil Rating (0-100): </label>
          <input
            id="soil"
            type="number"
            value={soilRating}
            onChange={(e) => setSoilRating(Number(e.target.value))}
            min="0"
            max="100"
          />
        </div>
        <div>
          <label htmlFor="water">Water Availability (0-100): </label>
          <input
            id="water"
            type="number"
            value={waterAvailability}
            onChange={(e) => setWaterAvailability(Number(e.target.value))}
            min="0"
            max="100"
          />
        </div>
        <div>
          <label htmlFor="size">Project Size (0-100): </label>
          <input
            id="size"
            type="number"
            value={projectSize}
            onChange={(e) => setProjectSize(Number(e.target.value))}
            min="0"
            max="100"
          />
        </div>
        <button type="submit">Evaluate</button>
      </form>

      {evaluationScore !== null && (
        <div className="results">
          <h2>Evaluation Score: {evaluationScore}</h2>
          <p>
            {evaluationScore >= 70
              ? "High suitability"
              : evaluationScore >= 40
              ? "Moderate suitability"
              : "Low suitability"}
          </p>
        </div>
      )}

      {/* Google Map Component */}
      <h2>Location Map</h2>
      <MapComponent />
    </div>
  );
}

export default App
