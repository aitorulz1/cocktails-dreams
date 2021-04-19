import React from 'react';
import logo from '../../assets/images/thegentlemen.png';

import './Header.css';

export default function Header() {
    return (
        <div className="header-container">
            <img src={logo} />
            <div className="cocktail">cocktail</div>
        </div>
    )
}
