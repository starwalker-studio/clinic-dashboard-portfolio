import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStaffSnake } from '@fortawesome/free-solid-svg-icons';
import style from './Login.module.scss';

export const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className={style.login_page}>
      <div className={style.login_container}>
        <div className={style.header_style}>
          <h3>Iniciar sesión</h3>
          <span><FontAwesomeIcon icon={faStaffSnake} /></span>
        </div>
        <form className={style.login_form} onSubmit={handleSubmit}>
          <div className={style.form_group}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className={style.form_group}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className={style.btn_login} >
            Entrar
          </button>

          <p className={style.forgot_password}>¿Olvidaste tu contraseña?</p>
        </form>
      </div>
    </div>
  )
}
