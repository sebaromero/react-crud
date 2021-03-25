import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <FontAwesomeIcon size="2x" icon={faHome}></FontAwesomeIcon>
      </div>
      <div className="user">
        <div className="avatar">
          <div className="icon">NS</div>
          <div className="username">Name and Surname</div>
        </div>
      </div>
    </div>
  );
};
