import React, { Component } from 'react';
class AddUserComponent extends Component {

    initialState = { 
        name: '',
        surname: '',
        age: ''
    }

    state = this.initialState;

    handleChange = (event) => {
        //add name prop to each element and target it's value based on 'event.target.name'
        const {name, value} = event.target;
        // const target = event.target;
        // const name = target.name;
        // const value = target.value;
        this.setState({
            //computed property name []
            [name]: value
        })
    }

    submitForm = () => {
        this.props.onAddUser(this.state);
        this.setState(this.initialState);
    }

    render() { 
        return ( 
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleChange} name='name' className='form-control' type='text'/>
                </div>
                <div className='form-group'>
                    <label>Surname</label>
                    <input value={this.state.surname} onChange={this.handleChange} name='surname' className='form-control' type='text'/>
                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input value={this.state.age} onChange={this.handleChange} name='age' className='form-control' type='number'/>
                </div>
                <button onClick={this.submitForm} type='button' className='btn btn-success'>Add new user</button>
            </form>
        );
    }
}
 
export default AddUserComponent;