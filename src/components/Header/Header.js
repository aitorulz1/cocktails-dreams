import React from 'react';
import logo from '../../assets/images/logo-on.png';

import './Header.css';

export default function Header() {
    return (
        <div className="header-container">
            <img src={logo} />
        </div>
    )
}
