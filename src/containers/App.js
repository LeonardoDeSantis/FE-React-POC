import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import RouteC from '../components/RouteC';
import RouteB from '../components/RouteB';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: "routeb"
    }
  }

  setRoute = (route) => {
    this.setState({ route: route });
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        <Navigation setRoute={this.setRoute} selected={route}></Navigation>
        {getComponentFromRoute(route)}
      </div>
    );
  }
}

function getComponentFromRoute(route) {
  switch (route) {
    case 'routec': return <RouteC />
    case 'routeb': return <RouteB />
    default: return <RouteB />
  }
}

export default App;
