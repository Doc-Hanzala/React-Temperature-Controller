import { useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";

function App() {
  const [temperature, setTemperature] = useState(0);

  const handleIncreaseTemp = () => {
    setTemperature(temperature + 1);
  };

  const handleDecreaseTemp = () => {
    setTemperature(temperature - 1);
  };

  return (
    <section>
      <Title text={"temperature controller"} />
      <div className="card">
        <div className={`card-header ${temperature>0 ?"red":"blue"}  `}>
          <h2>{temperature}° C</h2>
        </div>
        <div className="card-footer">
          <Button text={"-"} onClick={handleDecreaseTemp} />
          <Button text={"+"} onClick={handleIncreaseTemp} />
        </div>
      </div>
    </section>
  );
}

export default App;
