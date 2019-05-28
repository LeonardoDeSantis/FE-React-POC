import React from 'react';

const Navigation = ({ changeNavEntry }) => {
    return (
        <nav>
            <p onClick={() => changeNavEntry('projects')}>Projects</p>
            <p onClick={() => changeNavEntry('skills')}>Skills</p>
        </nav>
    )
}

export default Navigation;