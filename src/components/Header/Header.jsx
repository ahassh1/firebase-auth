import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <ul>
                {/* li*4>a */}
                <NavLink to="/">Home</NavLink>
            </ul>
          
        </nav>
    );
};

export default Header;