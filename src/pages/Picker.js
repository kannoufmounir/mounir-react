import React, { useState } from 'react';
import Menu from '../Menu';
import '../Nav.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FOOTER from '../Footre';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <Menu />
      <h1 className='titeCalond'>Réservez votre Produit  en lgine</h1>
      <div className='Cont_CAL'>

        <label>Départ</label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <label>Retour</label>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <button className='btn1_cal' type="submit"><h4>Rechercher</h4></button>
      </div> <FOOTER /></div>
  );
}

export default DateRangePicker;
