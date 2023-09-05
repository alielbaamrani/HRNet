import React from 'react';
import "./navbar.scss";

/**
 * Composant pour afficher une barre de navigation.
 * @param {object} props - Les propriétés du composant Navbar.
 * @param {string} props.title - Le titre à afficher dans la barre de navigation.
 * @returns {JSX.Element} Le composant Navbar.
 */
function Navbar(props) {
  return <div className='navbar'>{props.title}</div>;
}

export default Navbar;
