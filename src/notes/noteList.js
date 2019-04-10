import React from 'react';

const NoteListComponent = (props) => (
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
            {props.notes.length > 0 ? (
                props.notes.map(note => (
                    <tr key={note.id}>
                        <td>{note.name}</td>
                        <td>{note.surname}</td>
                        <td>{note.age}</td>
                        <td>
                            <button onClick={() => props.onEditUser(note)} className='btn btn-primary mr-2'>Edit</button>
                            <button onClick={() => props.onDeleteUser(note.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={4}>No notes</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default NoteListComponent;