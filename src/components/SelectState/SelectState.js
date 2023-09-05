import React from 'react';
import { setValue } from '../../actions';
import { states } from '../Form/countryList';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Composant pour sélectionner un état (state) dans le formulaire.
 * @returns {JSX.Element} Le composant SelectState.
 */
function SelectState() {
  // Récupération de l'état Redux 'newEmployee' et du dispatch
  const newEmployee = useSelector((state) => state.newEmployee);
  const dispatch = useDispatch();

  /**
   * Gère le changement de sélection d'état.
   * @param {Event} event - L'événement de changement.
   * @param {string} inputName - Le nom de l'entrée de données à mettre à jour.
   */
  const handleChange = (event, inputName) => {
    const inputValue = event.target.value;
    dispatch(setValue(inputName, inputValue));
  };

  return (
    <select
      id="select"
      value={newEmployee.state}
      onChange={(event) => handleChange(event, 'state')}
    >
      {states.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default SelectState;
