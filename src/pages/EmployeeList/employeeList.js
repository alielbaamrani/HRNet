import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './employeeList.scss';
import TableList from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';

/**
 * Composant pour afficher la liste des employés actuels.
 * @returns {JSX.Element} Le composant EmployeeList.
 */
function EmployeeList() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Barre de navigation avec le titre "Current Employees" */}
      <Navbar title="Current Employees" />
      
      {/* Composant TableList pour afficher la liste des employés */}
      <TableList />
      
      <div className="tableBottom">
        <button onClick={() => navigate('/')}> Home</button>
      </div>
    </div>
  );
}

export default EmployeeList;
