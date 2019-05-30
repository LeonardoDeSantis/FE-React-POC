import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: "projects"
    }
  }

  setRoute = (route) => {
    this.setState({ route: route });
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        <Navigation setRoute={this.setRoute}></Navigation>
        {getComponentFromRoute(route)}
      </div>
    );
  }
}

function getComponentFromRoute(route) {
  switch (route) {
    case 'projects': return <Projects />
    case 'skills': return <Skills />
    default: return <Projects />
  }
}

export default App;
