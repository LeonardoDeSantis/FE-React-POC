import React from 'react';
import './Navigation.css'

const Navigation = ({ setRoute, selected }) => {
    return (
        <nav>
            <div className='navFirst'></div>
            {getNavEntry('CompExample', 'comp', setRoute, selected)}
            {getNavEntry('RouteB', 'routeb', setRoute, selected)}
            {getNavEntry('RouteC', 'routec', setRoute, selected)}
            <div className='navLast'></div>
        </nav>
    )
}

function getNavEntry(name, route, setRoute, selected) {
    let className = 'navEntry';
    if (selected === route) {
        className += ' selected';
    }
    return <div className={className} onClick={() => setRoute(route)}>{name}</div>;
}

export default Navigation;