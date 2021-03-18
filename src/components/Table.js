import '../styles/Table.css';

export default function Table({users}) {

    return (
        <div className='container'>
            <table className='table-container'>
                <thead>
                    <tr className='header'>
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
                            </tr>
                        )) : <tr><td>Aún no hay usuarios registrados</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}