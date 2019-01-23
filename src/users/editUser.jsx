import React, { Component } from 'react';
class EditUserComponent extends Component {
    constructor(props){
        super(props);

        this.initialState = { 
            name: '',
            surname: '',
            age: ''
        }
        this.state = this.props.user;
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
        this.props.onUpdateUser(this.state);
        this.setState(this.initialState);
    }

    cancelEditForm = () => {
        this.props.onCancelUpdateUser();
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
            <button onClick={this.submitForm} type='button' className='btn btn-success mr-2'>Update user</button>
            <button onClick={this.cancelEditForm} type='button' className='btn btn-secondary'>Cancel</button>
        </form>
        );
    }
}
 
export default EditUserComponent;