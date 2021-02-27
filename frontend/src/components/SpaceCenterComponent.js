import React, { useState } from "react";
import LaunchesComponent from "./LaunchesComponent";
import RocketsComponent from "./RocketsComponent";

function SpaceCenterComponent() {
  const [rockets, setRockets] = useState([]);
  const [launches, setLaunches] = useState([]);

  function fetchRockets() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((res) => res.json())
      .then((data) => setRockets(data));
  }

  function scheduleLaunch(rocket) {
    if (!launches.includes(rocket)) {
      setLaunches([...launches, rocket]);
    }
  }

  function removeLaunch(rocketId) {
    const rockets = this.launches.filter((rkt) => {
      return rocketId != rkt.id;
    });
    setLaunches(rockets);
  }

  return (
    <div>
      <LaunchesComponent launches={launches} removeLaunch={removeLaunch} />
      <RocketsComponent
        rockets={rockets}
        fetchRockets={fetchRockets}
        scheduleLaunch={scheduleLaunch}
      />
    </div>
  );
}

export default SpaceCenterComponent;
