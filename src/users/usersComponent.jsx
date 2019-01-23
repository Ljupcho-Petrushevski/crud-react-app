import React, { Component } from 'react';
import UserTableComponent from './userTable';
import AddUserComponent from './addUser';
import EditUserComponent from './editUser';

import userAPI from './usersAPI'



class UsersComponent extends Component {
    constructor() {
        super();
        this.state = { 
            userData: [],
            user: {
                name: '',
                surname: '',
                age: ''
            },
            edit: false
        }
    }

    componentWillMount() {
        userAPI.getUsers()
            .then(data => {
                this.setState({
                    userData: data
                })
            })
            .catch(err => console.log('error', err));
    }

    componentWillUnmount() {
        
    }

    addUser = (user) => {
        user.id = this.state.userData.length + 1; 
        this.setState({
            userData: [...this.state.userData, user]
        })
    }

    onUpdateUser = (user) => {
        // filter out the users list with the user that is being curently updated
        const userList = this.state.userData.filter(u => u.id !== user.id); 
        this.setState({
            edit: false,
            //update users list with the filtered list + add the updated user
            userData: [...userList, user]
        })
    }

    onCancelUpdateUser = () => {
        //just switch boolean variable edit to false to display the addUser component (condition for it is in render method)
        this.setState({edit: false})
    }
    // TODO: find solution to :
    // state does not update when clicked edit for different users
    editUser = (data) => {
        this.setState({
            // set edit variable to true so the condition inside the render method is met accordingly
            edit: true,
            // update the user object inside the state with the user sent from edit button 
            user: data
        })
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
                                <EditUserComponent onUpdateUser={this.onUpdateUser} onCancelUpdateUser={this.onCancelUpdateUser} user={this.state.user}></EditUserComponent>
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