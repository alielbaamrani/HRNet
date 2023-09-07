import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

/**
 * Composant Datepicker pour la sélection de dates.
 */
function Datepicker() {
  /**
   *
   * @param {moment.Moment | null} date - La date sélectionnée (ou null si aucune date n'est sélectionnée).
   * @param {string} dateString - La date sous forme de chaîne de caractères (formatée selon le format spécifié).
   */
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      {/* Composant DatePicker d'Ant Design avec gestionnaire de changement défini */}
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default Datepicker;
