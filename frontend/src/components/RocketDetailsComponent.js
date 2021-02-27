import { Button, Card, ListGroup } from "react-bootstrap";
import React from "react";

function RocketDetailsComponent(props) {
  return (
    <div>
      {props.rockets &&
        props.rockets.map((rocket, i) => (
          <div key={rocket.id}>
            <Card style={{ width: "46rem" }} className="mt-4">
              <Card.Header>{rocket.name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>{rocket.description}</ListGroup.Item>
                <ListGroup.Item>Weight: {rocket.mass.kg} kg</ListGroup.Item>
              </ListGroup>
              {/* TODO: Fix schedule launches.*/}
              <Button onClick={() => props.scheduleLaunch(rocket)}>
                Schedule Launch
              </Button>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default RocketDetailsComponent;
