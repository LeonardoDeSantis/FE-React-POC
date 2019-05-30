import React from 'react';
import './Navigation.css'

const Navigation = ({ setRoute, selected }) => {
    return (
        <nav>
            <div className='navFirst'></div>
            {getNavEntry('About', 'about', setRoute, selected)}
            {getNavEntry('Projects', 'projects', setRoute, selected)}
            {getNavEntry('Skills', 'skills', setRoute, selected)}
            <div className='navLast'></div>
        </nav>
    )
}

function getNavEntry(name, route, setRoute, selected) {
    let className = 'navEntry';
    if (selected === route) {
        className += ' transparent';
    }
    return <div className={className} onClick={() => setRoute(route)}>{name}</div>;
}

export default Navigation;