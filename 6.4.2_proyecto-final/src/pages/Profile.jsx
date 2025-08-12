// Profile.js
import './Profile.css'; // Importamos el archivo CSS

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>Perfil</h1>
      {user && <p>Nombre de usuario: {user.username}</p>}
    </div>
  );
};

export default Profile;