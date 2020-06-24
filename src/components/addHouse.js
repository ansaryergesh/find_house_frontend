import React, {Component} from 'react';
import withAuth from '../hocs/withAuth';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
// import {Form,Input} from 'semantic-ui-react-form-validator'
import { postHouse } from '../actions/houses'

const required = (val) => val && val.length;

const mapStateToProps = () => ({
  
})
  
const mapDispacthToProps = dispatch => ({
});
class AddHouse extends Component {
    state = { name: '', descripton: '', price: '', redirectTo: false}
    handleChange = (e, semanticInputData) => {
        e.preventDefault();
        this.setState({ [semanticInputData.name]: semanticInputData.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()//semantic forms preventDefault for you
        this.props.postHouse(this.state.name, this.state.descripton, this.state.price)
        // console.log(this.state.name, this.state.descripton, this.state.price)
        this.setState({ name: '', descripton: '', price: '', redirectTo: true }) //reset form to initial state
    }
    
    render() {
        // if (this.state.redirectTo === true) {
        //     return <Redirect to="/home" />
        // }
        return (
            <div>
                <h1>Add House</h1>
        {/* <h2>{this.props.session.user.id}</h2> */}
                <Segment>
                    <Form
                    onSubmit={this.handleSubmit}
                    size="mini"
                    key="mini"
                    >
                    <Message error header={this.props.housesPostFailed ? this.props.error : null} />
                    <Form.Group widths="equal">
                        <Form.Input
                        label="name"
                        placeholder="name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        validators={['required']} 
                        errorMessages={['this field is required']} 
                        />
                        <Form.Input
                        type="text"
                        label="descripton"
                        placeholder="descripton"
                        name="descripton"
                        onChange={this.handleChange}
                        value={this.state.descripton}
                        />
                         <Form.Input
                        type='number'
                        label="price"
                        placeholder="price"
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.price}
                        />
                    </Form.Group>
                    <Button type="submit">Post House</Button>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default withAuth(connect(mapStateToProps, { postHouse })(AddHouse))