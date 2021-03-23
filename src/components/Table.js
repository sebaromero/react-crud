import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUserMinus } from "@fortawesome/free-solid-svg-icons";

import "../styles/Button.css";

export const Table = ({ users }) => {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th key="name">Name</th>
          <th key="email">Email</th>
          <th key="username">Username</th>
        </tr>
      </thead>
      <tbody>
        {
          users.length
            ? users.map((user) => (
                <tr>
                  <td key="name"> {user.name}</td>
                  <td key="email"> {user.email}</td>
                  <td key="username"> {user.username}</td>
                  <td key="delete" className="button delete">
                    <FontAwesomeIcon
                      size="1x"
                      icon={faUserMinus}
                    ></FontAwesomeIcon>
                  </td>
                  <td key="edit" className="button edit">
                    <FontAwesomeIcon
                      size="1x"
                      icon={faUserEdit}
                    ></FontAwesomeIcon>
                  </td>
                </tr>
              ))
            : console.log(
                users.length
              ) /* (
          <tr>
            <td>Aún no hay usuarios registrados</td>
          </tr>
        ) */
        }
      </tbody>
    </table>
  );
};
