import {Button} from "react-bootstrap";
import RocketDetailsComponent from "./RocketDetailsComponent";
import React from "react";

function RocketsComponent(props) {
  
  return (
      <div className="rockets-container">
        <h1>Rockets</h1>
        {!props.rockets.length && (
            <Button onClick={props.fetchRockets}>Load Rockets</Button>
        )}
        <div>
          <RocketDetailsComponent rockets={props.rockets}></RocketDetailsComponent>
        </div>
      </div>
  );
}

export default RocketsComponent;