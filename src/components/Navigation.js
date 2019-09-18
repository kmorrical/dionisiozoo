import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav">
            <NavLink to="/" className="navLink">HOME</NavLink>
            <NavLink to="/adobo" className="navLink">ADOBO</NavLink>
            <NavLink to="/tiki" className="navLink">TIKI</NavLink>
            <NavLink to="/fish" className="navLink">FISH</NavLink>
            <NavLink to="/animalofweek" className="navLink">ANIMAL OF WEEK!</NavLink>
        </div>
    );
};

export default Navigation;