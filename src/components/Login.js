import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../services/services';
import style from '../style/login.css'

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
  
    const cargarUsuario = () => {
      localStorage.setItem('user', 'true')
      return <Navigate to='/Menu' />
    }
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      getUser(uname.value, pass.value).then(function (data) {
        // Compare user info
        console.log(data)
        if (data.message) {
          if (data.error === 1) {
            setErrorMessages({ name: "uname", message: errors.uname });
          } else {
            setErrorMessages({ name: "pass", message: errors.pass });
          }
        } else {
          setIsSubmitted(true);
        }
  
  
  
      })
  
  
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className={style.card}>
        <form onSubmit={handleSubmit}>
          <h1>Inicio de sesión</h1>
          <div className="input-container">
            <label>Username </label>
            <input type="text" placeholder="Usuario" name="user" required className='form-control'/>
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" placeholder="Contraseña" name="pass" required className='form-control'/>
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <button type="submit" value="Ingresar" id="btn" className='btn btn-primary'>Iniciar sesión</button>
  
          </div>
        </form>
      </div>
    );

    return (
        <div className={style.container}>
        <div className="login-form">
          {isSubmitted ? cargarUsuario() : renderForm}
        </div>
      </div>
    )
}
export default Login;