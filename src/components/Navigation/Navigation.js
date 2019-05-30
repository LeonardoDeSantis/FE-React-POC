import React from 'react';
import NavEntry from './NavEntry'
import './Navigation.css'

const Navigation = ({ setRoute }) => {
    return (
        <nav className='navigation bg-light-blue ba pr5'> {
            getEntries(setRoute).map((element, index) => {
                return <NavEntry
                    key={index}
                    name={element.name}
                    onClick={element.onClick} />
            })}
        </nav>
    )
}

function getEntries(setRoute) {
    return [
        { "name": 'Projects', "onClick": () => setRoute('projects') },
        { "name": 'Skills', "onClick": () => setRoute('skills') }
    ];
}

export default Navigation;