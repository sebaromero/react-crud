import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import "../styles/Header.css";

export const Header = () => {
  let history = useHistory();
  return (
    <div className="header-container">
      <div
        className="logo"
        onClick={() => {
          history.push("/");
        }}
      >
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
