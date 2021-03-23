import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <FontAwesomeIcon size="2x" icon={faHome}></FontAwesomeIcon>
      </div>
      <div className="user">
        <div className="avatar">
          <div className="icon">NA</div>
          <div className="username">Nombre y Apellido</div>
        </div>
      </div>
    </div>
  );
};

export default Header