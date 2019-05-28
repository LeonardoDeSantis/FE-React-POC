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

  changeNavEntry = (entry) => {
    this.setState({ route: entry });
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        <Navigation changeNavEntry={this.changeNavEntry}></Navigation>
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
