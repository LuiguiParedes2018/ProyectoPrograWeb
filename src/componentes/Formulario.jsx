import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../Styles/Formulario.css";
import usuarios from "../assets/usuarios.json"; 

const Formulario = () => {
  const [ActivarFormulario, setActivarFormulario] = useState("login");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const MostrarTablaLogin = () => {
    setActivarFormulario("login");
  };

  const MostrarTablaRegistro = () => {
    setActivarFormulario("registro");
  };

  const MostrarTablaRecuperar = () => {
    setActivarFormulario("recuperar");
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    const usuario = usuarios.find(
      (user) => user.correo === correo && user.contraseña === contraseña
    );
    if (usuario) {
      navigate("/enlace0");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="tabla">
      <div className={`logeador ${ActivarFormulario === "login" ? "" : "hidden"}`}>
        <form onSubmit={manejarSubmit}>
          <h2>Ingreso para clientes registrados</h2>
          <div className="input-box">
            <MdEmail className="icono" />
            <input
              type="text"
              placeholder="Correo Electronico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <FaLock className="icono" />
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <div className="recordarme-olvidaste">
            <label>
              <input type="checkbox" />
              Recordarme <a href=""></a>
            </label>
            <a href="#" onClick={MostrarTablaRecuperar}>¿Olvidaste tu Contraseña?</a>
          </div>
          <button type="submit">Ingresar</button>
          <div className="register-link">
            <p>¿No tienes una cuenta? <a href="#" onClick={MostrarTablaRegistro}>Registrate</a></p>
          </div>
        </form>
      </div>
      <br />
      {/* Secciones de registro y recuperación de contraseña no se modifican */}
      <div className={`registrador ${ActivarFormulario === "registro" ? "" : "hidden"}`}>
        <form action="">
          <h2>Registra una nueva cuenta</h2>
          <div className="input-box">
            <FaUser className="icono" /><input type="text" placeholder="Nombre" required />
          </div>
          <div className="input-box">
            <FaUser className="icono" /><input type="text" placeholder="Apellido" required />
          </div>
          <div className="input-box">
            <MdEmail className="icono" /><input type="text" placeholder="Correo Electronico" required />
          </div>
          <div className="input-box">
            <FaLock className="icono" /><input type="password" placeholder="Contraseña" required />
          </div>
          <div className="input-box">
            <FaLock className="icono" /><input type="password" placeholder="Confirmar contraseña" required />
          </div>
          <div className="acuerdo">
            <label><input type="checkbox" />Estoy de acuerdo con los terminos y condiciones<a href=""></a></label>
          </div>
          <button type="submit">Crear cuenta nueva</button>
          <div className="already-account">
            <p>¿Ya tienes una cuenta? <a href="#" onClick={MostrarTablaLogin}>Login</a></p>
          </div>
        </form>
      </div>
      <div className={`recuperador ${ActivarFormulario === "recuperar" ? "" : "hidden"}`}>
        <form action="">
          <h2>Ingrese su correo para enviar contraseña</h2>
          <div className="input-box">
            <MdEmail className="icono" /><input type="text" placeholder="Correo Electronico" required />
          </div>
          <button type="submit">Enviar</button>
          <div className="regresar-login">
            <a href="#" onClick={MostrarTablaLogin}> Regresar a Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
