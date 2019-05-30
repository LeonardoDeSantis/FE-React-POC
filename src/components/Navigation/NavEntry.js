import React from 'react';

const NavEntry = ({ name, onClick }) => {
    return (
            <p className='pointer hover-yellow f3 pa2 shadow-1 mr5 ml5' onClick={onClick}>{name}</p>
    )
}

export default NavEntry;