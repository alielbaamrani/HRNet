import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';

/**
 * Composant pour afficher la page d'accueil.
 * @returns {JSX.Element} Le composant Home.
 */
function Home() {
  return (
    <div>
      {/* Barre de navigation avec le titre "HRnet" */}
      <Navbar title="HRnet" />
      
      {/* Lien pour accéder à la liste des employés actuels */}
      <Link className="employee-list" to="/employee-list">
        View Current Employee
      </Link>
      
      <h2 className="create-employee"> Create Employee</h2>
      
      {/* Composant Form pour créer un nouvel employé */}
      <Form />
    </div>
  );
}

export default Home;
