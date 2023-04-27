import React, { useState } from 'react';
import Menu from '../Menu';
import '../Nav.css';
import FOOTER from '../Footre';


function Calculator() {
    const [result, setResult] = useState(0); // état pour stocker le résultat
    const [input, setInput] = useState(''); // état pour stocker l'entrée utilisateur

    // fonction pour mettre à jour l'entrée utilisateur
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    // fonction pour effacer l'entrée utilisateur
    const handleClearInput = () => {
        setInput('');
    };

    // fonction pour ajouter un chiffre à l'entrée utilisateur
    const handleDigitClick = (digit) => {
        setInput((prevInput) => prevInput + digit);
    };

    // fonction pour effectuer le calcul
    const handleCalculate = () => {
        try {
            setResult(eval(input));
            setInput('');
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className='ZZDC'>
            <Menu />
            <div className='titrCalculatris'><h1>Calculator <h4>tapper pour faire un Operation </h4></h1>

            </div>

            <div className="calculator">

                <input className='IKK' type="text" value={input} placeholder='=' onChange={handleInputChange} />
                <p className='RUP'> {result}</p>
                <br />
                <div className='contenirC'>
                    <button className='Btn-OI' onClick={() => handleDigitClick('7')}>7</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('8')}>8</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('9')}>9</button>
                    <button className='Btn-OO' onClick={() => handleDigitClick('+')}>+</button>
                    <br />
                    <button className='Btn-OI' onClick={() => handleDigitClick('4')}>4</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('5')}>5</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('6')}>6</button>
                    <button className='Btn-OO' onClick={() => handleDigitClick('-')}>-</button>
                    <br />
                    <button className='Btn-OI' onClick={() => handleDigitClick('1')}>1</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('2')}>2</button>
                    <button className='Btn-OI' onClick={() => handleDigitClick('3')}>3</button>
                    <button className='Btn-OO' onClick={() => handleDigitClick('*')}>*</button>
                    <br />

                    <button className='Btn-OI' onClick={() => handleDigitClick('0')}>0</button>
                    <button className='Btn-OO' onClick={() => handleClearInput()}>C</button>
                    <button className='Btn-OO' onClick={() => handleCalculate()}>=</button>
                    <button className='Btn-OO' onClick={() => handleDigitClick('/')}>/</button>
                    <br /></div>

            </div> <FOOTER /></div>
    );
}

export default Calculator;
