import '../styles/Table.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUserMinus  } from "@fortawesome/free-solid-svg-icons";

export default function Table({users}) {

    return (
        <div className='container'>
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo electronico</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length ? users.map(user => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td><FontAwesomeIcon size="1x" icon={faUserMinus}></FontAwesomeIcon></td>
                                    <td><FontAwesomeIcon size="1x" icon={faUserEdit}></FontAwesomeIcon></td>
                                </tr>
                            )) : <tr><td>Aún no hay usuarios registrados</td></tr>
                        }
                    </tbody>
                </table>
            </div>
    )
}