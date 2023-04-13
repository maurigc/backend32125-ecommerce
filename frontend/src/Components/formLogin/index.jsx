import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../Context/userProvider';
import userImage from '../../../src/assets/img/userIcon_64.png';
import passwordImage from '../../../src/assets/img/passwordIcon_64.png';
import './styles.css';

const FormLogin = () => {

  const { setToken } = useContext(User);
  
  const navigate = useNavigate();
  
  const hanldeSubmit = async(e) => {
      e.preventDefault();

      const username = document.getElementById("input-username").value;
      const password = document.getElementById("input-password").value;

      const user = {
          username,
          password
      }

      const respuesta = await fetch('http://localhost:8000/api/auth/login', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user),
        })

      const respuestaJson = await respuesta.json()

      setToken(respuestaJson.token);  

      navigate('/productos')

  }

  return (
    <>
    <img className='userImage' src={userImage} alt='imagen-formulario'/>
      <div className='container-form-login'>
          <form className='form-login' onSubmit={hanldeSubmit}>
              <h1 className='title-form-login'>Sign In</h1>
              <div className='container-input-form-login'>
                <img src={userImage} className='userImage-form-login' alt='imagen-user'/>
                <input placeholder='Username' className='input-form-login' type="email" id='input-username' name='username' />

              </div>

              <div className='container-input-form-login'>
                <img src={passwordImage} alt='imagen-password'/>
                <input placeholder='Password' className='input-form-login' id='input-password' name='password' type="password" />

              </div>

              <button className='button-form-login'>Login</button>
          </form>
      </div>
      <p className='p-form-login'>No tienes una cuenta? <span>Registrate aqui</span></p>
    </>
  )
}

export default FormLogin