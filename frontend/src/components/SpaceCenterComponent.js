import React from 'react';
import LaunchesComponent from "./LaunchesComponent";
import RocketsComponent from "./RocketsComponent";

class SpaceCenterComponent extends React.Component {
  
  state = {
    rockets: [],
    launches: []
  }
  
  fetchRockets = () => {
    fetch("https://api.spacexdata.com/v4/rockets")
        .then(res => res.json())
        .then(data => this.setState({rockets: data}))
  };
  
  scheduleLaunch = (i) => {
    if (!this.state.launches.includes(i)) {
      this.setState({ launches: [...this.state.launches, i] });
    }
  };
  
  render() {
    return (
        <div>
          <LaunchesComponent launches={this.state.launches} removeLaunch={this.removeLaunch}/>
          <RocketsComponent rockets={this.state.rockets} fetchRockets={this.fetchRockets} scheduleLaunch={this.scheduleLaunch}/>
        </div>
    );
  }
}

export default SpaceCenterComponent;