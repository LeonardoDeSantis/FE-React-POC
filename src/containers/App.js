import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import RouteC from '../components/RouteC';
import RouteB from '../components/RouteB';
import { connect } from 'react-redux';
import { setRoute } from '../actions'

const mapStateToProps = (state) => {
  return {
    route: state.route
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => dispatch(setRoute(route))
  }
}

class App extends Component {

  render() {
    const { route, setRoute } = this.props;
    return (
      <div>
        <Navigation setRoute={setRoute} selected={route}></Navigation>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
