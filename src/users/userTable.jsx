import React from 'react';

const UserTableComponent = (props) => {
    return (
        <table className='table table-bordered'>
            <thead className='thead-light'>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={() => props.onEditUser(user)} className='btn btn-primary mr-2'>Edit</button>
                                <button onClick={() => props.onDeleteUser(user.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default UserTableComponent;