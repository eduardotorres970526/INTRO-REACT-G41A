// Home.js
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ user, logout }) => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Twitter</h1>
      {user ? (
        <>
          <p>Hola, {user.username}!</p>
          <button onClick={logout} className="home-button">
            Cerrar sesión
          </button>
          <Link to="/profile" className="home-link">
            Ir a mi perfil
          </Link>
        </>
      ) : (
        <p>
          No has iniciado sesión. <Link to="/login">Inicia aquí</Link>
        </p>
      )}
    </div>
  );
};

export default Home;
