import React, { useState, useEffect } from 'react'
import './form.scss'
import { setValue } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import SelectState from '../SelectState/SelectState'
import { DatePicker } from 'antd'
import { add } from '../../reducers/employeeSlice'
import Modal from 'ael-modal'
/**
 * Composant Form pour la saisie des données d'un nouvel employé.
 */
const Form = () => {
  // Utilisation de useEffect pour ajouter un gestionnaire d'événements lors du rendu initial.
  useEffect(() => {
    // Gestionnaire d'événement pour fermer le modal lorsque l'utilisateur clique en dehors de celui-ci.
    let handler = (e) => {
      if (e.target.classList.contains("custom-modal")) {
        setModalIsDisplayed(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  // Déclaration d'un état pour le modal
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  // Sélection des données du nouvel employé depuis le state global
  const newEmployee = useSelector((state) => state.newEmployee);
  const dispatch = useDispatch();

  // Format de date pour le DatePicker
  const dateFormatList = ['DD/MM/YYYY'];

  // Fonction de gestionnaire de changement de date de naissance
  const onChange = function (date, dateString) {
    dispatch(setValue('dateOfBirth', dateString));
    console.log(dateString);
  };

  // Fonction de gestionnaire de changement de date de début
  const onChangeStart = function (date, dateString) {
    dispatch(setValue('startDate', dateString));
    console.log(dateString);
  };

  // Fonction de gestionnaire de changement d'entrée de texte
  const handleChange = (event, inputName) => {
    const inputValue = event.target.value;
    dispatch(setValue(inputName, inputValue));
  };

  // Fonction de gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    // Afficher le modal lors de la soumission du formulaire
    setModalIsDisplayed(true);

    e.preventDefault();
    console.log(newEmployee);

    // Dispatch de l'action pour ajouter le nouvel employé
    dispatch(add(newEmployee.CreateEmployee));
    console.log('handleSubmit');
  };

  return (
    <div className="container">
      {/* Modal pour afficher un message de succès */}
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={() => setModalIsDisplayed(false)}
        content={
          <div className="modal">
            <p>L'employé a bien été ajouté à la liste !</p>
          </div>
        }
      />

      <form onSubmit={handleSubmit}>
        {/* Champs de saisie des informations de l'employé */}
        <label>
          First Name
          <input
            type="text"
            value={newEmployee.firstName}
            onChange={(event) => handleChange(event, 'firstName')}
            className="firstName"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            value={newEmployee.lastName}
            onChange={(event) => handleChange(event, 'lastName')}
            className="lastName"
          />
        </label>
        <label>
          Date
          <DatePicker format={dateFormatList} onChange={onChange} />
        </label>
        <label>
          Start Date
          <DatePicker format={dateFormatList} onChange={onChangeStart} />
        </label>

        {/* Champs d'adresse */}
        <div className="address">
          <label>
            Street
            <input
              type="text"
              value={newEmployee.street}
              onChange={(event) => handleChange(event, 'street')}
              className="Street"
            />
          </label>
          <label>
            City
            <input
              type="text"
              value={newEmployee.city}
              onChange={(event) => handleChange(event, 'city')}
              className="City"
            />
          </label>
          <label>
            State
            <SelectState />
          </label>
          <label>
            Zip Code
            <input
              type="number"
              value={newEmployee.zipCode}
              onChange={(event) => handleChange(event, 'zipCode')}
              className="Zip Code"
            />
          </label>
        </div>

        {/* Sélection du département */}
        <label>Department</label>
        <select
          className="department"
          value={newEmployee.departement}
          onChange={(event) => handleChange(event, 'departement')}
          id="department"
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        {/* Bouton de soumission du formulaire */}
        <input className="submit" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default Form;
