import React from 'react';
import NavEntry from './NavEntry'
import './Navigation.css'

const Navigation = ({ setRoute }) => {
    return (
        <nav>
            <div className='firstBlock'></div>
                {
                    getEntries(setRoute).map((element, index) => {
                        return <NavEntry
                            key={index}
                            name={element.name}
                            onClick={element.onClick} />
                    })
                }
            <div className='lastBlock'></div>
        </nav>
    )
}

function getEntries(setRoute) {
    return [
        { "name": 'About', "onClick": () => setRoute('about') },
        { "name": 'Projects', "onClick": () => setRoute('projects') },
        { "name": 'Skills', "onClick": () => setRoute('skills') }
    ];
}

export default Navigation;