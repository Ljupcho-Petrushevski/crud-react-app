import React, { Component } from 'react';
class AddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.initialState = { 
            name: '',
            surname: '',
            age: ''
        }
        this.state = this.initialState;
    }


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
        //trigger the onAddUser function found as an attribute to the addUser component passing the current state
        this.props.onAddUser(this.state);
        this.setState(this.initialState);
    }

    render() { 
        return ( <form>
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
            <button onClick={this.submitForm} disabled={this.state.name === ""} type='button' className='btn btn-success'>Add new user</button>
        </form>
        );
    }
}
 
export default AddUserComponent;