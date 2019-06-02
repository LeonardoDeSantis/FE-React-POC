import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoute } from '../../actions'
import './Navigation.css'

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

class Navigation extends Component {

    render() {
        const {route, setRoute} = this.props;
        return (
            <nav>
                <div className='navFirst'></div>
                {getNavEntry('CompExample', 'comp', setRoute, route)}
                {getNavEntry('RouteB', 'routeb', setRoute, route)}
                {getNavEntry('RouteC', 'routec', setRoute, route)}
                <div className='navLast'></div>
            </nav>
        )
    }

}

function getNavEntry(name, route, setRoute, selected) {
    let className = 'navEntry';
    if (selected === route) {
        className += ' selected';
    }
    return <div className={className} onClick={() => setRoute(route)}>{name}</div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);