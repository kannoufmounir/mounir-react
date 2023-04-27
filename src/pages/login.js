import React, { useState } from 'react';
import Menu from '../Menu';
import '../Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // effectuer la validation du formulaire de connexion
    // par exemple, appeler une API pour vérifier les informations d'identification
    if (email === 'mounir' && password === 'kannouf') {
      // Connexion réussie, rediriger vers la page d'accueil
      if (props.history) {
        props.history.push('/MAP');
      }
    } else {
      // Afficher un message d'erreur
      setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  };

  return (
    <div>
      <Menu />

      <div className="COnt-Login">
        <div className="login">
          <div className='formLogin'>
            <form onSubmit={handleLoginSubmit}>

              <label>
                <h1>Login</h1>
                <h3>bienvenu Chez mon App</h3>

                <input type="text" placeholder='Email' onChange={handleEmailChange} />
              </label>
              <br /><br />
              <label>

                <input type="password" placeholder='Password' onChange={handlePasswordChange} />

              </label>
              <br />
              <button className='btn1' type="submit"><h4>Login</h4></button>


              {errorMessage && <p>{errorMessage}</p>}
              <div className='BY'></div>
              <h4>Mounir kannouf, 2023</h4>

            </form>
          </div></div></div>  </div>
  );
}

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };


  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // effectuer la validation du formulaire d'inscription
    // par exemple, appeler une API pour créer un nouvel utilisateur
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      console.log('Registration successful!');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleRegisterSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <br />
        <button type="submit">Register</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export { Login, Register };