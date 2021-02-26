import {Button} from "react-bootstrap";
import React from "react";
import "./LaunchesComponent.css";

function LaunchesComponent(props) {
  
  return (
      <div className="launches-container">
        <h1>Launches</h1>
        {!props.launches.length && (
            <p>No Launches scheduled yet</p>
        )}
        <ol>
          {props.launches && props.launches.map(launch => (
              <li key={launch.id}>
                <Button className="mr-2" size="sm" onClick={() => props.removeLaunch(launch.id)}>X</Button>
                {launch.name} | Weight: {launch.mass.kg} kg
              </li>
          ))}
        </ol>
      </div>
  )
}


export default LaunchesComponent;