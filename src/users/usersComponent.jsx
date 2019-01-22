import React, { Component } from 'react';
import UserTableComponent from './userTable';
import AddUserComponent from './addUser';
import EditUserComponent from './editUser';



class UsersComponent extends Component {
    
    state = { 
        userData: [
            {id:0, name: 'User 1', surname: 'Test 1', age: 31 },
            {id:1, name: 'User 2', surname: 'Test 2', age: 32 },
            {id:2, name: 'User 3', surname: 'Test 3', age: 33 },
            {id:3, name: 'User 4', surname: 'Test 4', age: 34 }
        ],
        user: {
            name: '',
            surname: '',
            age: ''
        },
        edit: false
    }

    addUser = (user) => {
        user.id = this.state.userData.length + 1; 
        this.setState({
            userData: [...this.state.userData, user]
        })
    }

    editUser = (data) => {
        console.log(data);
        // this.setState({
        //     edit: true, 
        // })
    }

    deleteUser = (id) => {
        let newUserData = this.state.userData.filter(user => user.id !== id);
        this.setState({
            userData: newUserData
        })
    }
    

    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        {this.state.edit ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserComponent></EditUserComponent>
                            </div>
                        ) : 
                        (
                            <div>
                                <h2>Add user</h2>
                                <AddUserComponent onAddUser={this.addUser}></AddUserComponent>
                            </div>
                        )}
                    </div>
                    <div className='col-md-6'>
                        <UserTableComponent users={this.state.userData} onEditUser={this.editUser} onDeleteUser={this.deleteUser}></UserTableComponent>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default UsersComponent;