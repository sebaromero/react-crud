import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUserMinus } from "@fortawesome/free-solid-svg-icons";

import "../styles/Table.css";
import "../styles/Buttons.css";

export default function Table({ users }) {
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td className="button delete">
                  <FontAwesomeIcon
                    size="1x"
                    icon={faUserMinus}
                  ></FontAwesomeIcon>
                </td>
                <td className="button edit">
                  <FontAwesomeIcon
                    size="1x"
                    icon={faUserEdit}
                  ></FontAwesomeIcon>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Aún no hay usuarios registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
