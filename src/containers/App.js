import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import RouteC from '../components/RouteC';
import RouteB from '../components/RouteB';
import Robo from '../components/Robo/Robo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        route: state.changeRoute.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

class App extends Component {

    render() {
        const { route } = this.props;
        return (
            <div className='App'>
                <Navigation></Navigation>
                {getComponentFromRoute(route)}
                <footer>Photo by Jackson Hendry on Unsplash</footer>
            </div>
        );
    }
}

function getComponentFromRoute(route) {
    switch (route) {
        case 'routec': return <RouteC />
        case 'routeb': return <RouteB />
        case 'robo': return <Robo />
        default: return <Robo />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
