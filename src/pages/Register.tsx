import React, { useState } from 'react';
import RickImage from '../images/rickAndMorty.jpg';

import './styles/login.css'
import { Link, useHistory } from 'react-router-dom';
import Authentication from '../auth/Authentication';
import AuthHelper from '../auth/AuthHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
  let history = useHistory();
  let useAuth = Authentication.useAuth();
  
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({hasError: false, message: ''})
  
  const submitValue = async () => {
    if (email === '' || password === '' || rePassword === '') {
      setError({hasError: true, message: 'Debes llenar todos los campos antes de continuar'});
      return ;
    }

    if (!AuthHelper.isValidEmail(email)) {
      setError({hasError: true, message: 'Email inválido.'});
      return ;
    }

    if (password !== rePassword) {
      setError({hasError: true, message: 'Las contraseñas no coinciden'});
      return ;
    }

    const userCredentials = {
      'email' : email,
      'password' : password
    }

    try {
      if (error.hasError) setError({hasError: false, message: ''});

      setIsLoading(true);

      await useAuth.register(userCredentials);

      history.replace('/');
    } catch (error) {
      setError({hasError: true, message: 'Error'});
    }

    setIsLoading(false);
  }
 
  return (
    <div className="container container-login auth-content">
      <div className="row w-100">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="login-form">
            <div className="row">
              <div className="col-12 col-md-7">
                <form className="p-4">
                  <h2>Register</h2>
                  <hr/>
                  <div className="input-group input-container d-flex align-items-center mt-4">
                    <FontAwesomeIcon icon={faUser} className="" color="#636363" />
                    <input name="email" onChange={e=> setEmail(e.target.value)} type="email" className="form-control login-input"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="input-group input-container d-flex align-items-center mt-3">
                    <FontAwesomeIcon icon={faLock} className="" color="#636363" />
                    <input onChange={e=> setPassword(e.target.value)} name="password" type="password"
                    className="form-control login-input" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="input-group input-container d-flex align-items-center mt-3">
                    <FontAwesomeIcon icon={faLock} className="" color="#636363" />
                    <input onChange={e=> setRePassword(e.target.value)} name="repassword" type="password"
                    className="form-control login-input" id="exampleInputPassword2" placeholder="Repeat Password"/>
                  </div>

                  { error.hasError && (<small className="form-text text-danger mb-3">{error.message}</small>) }
                  { !error.hasError && (<small className="form-text mb-3 text-secondary">Enter your data to register</small>) }

                  <button onClick={submitValue} type="button" className="btn btn-success mt-1" disabled={isLoading ?? false}>SUBMIT</button>
                  <small className="text-secondary mt-2 d-block">Already have an account? <Link className="text-primary" to="/login">login</Link></small>
                </form>
              </div>
              <div className="col-5 d-flex flex-column justify-content-center align-items-center pl-0">
                <img src={RickImage} alt="logo" className="login-image d-none d-sm-flex" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;