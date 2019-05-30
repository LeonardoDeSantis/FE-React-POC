import React from 'react';

const NavEntry = ({ name, onClick }) => {
    return (
            <div className='navEntry' onClick={onClick}>{name}</div>
    )
}

export default NavEntry;