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
                        icon='building outline'
                        iconPosition='left'
                        label="name"
                        placeholder="name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        validators={['required']} 
                        errorMessages={['this field is required']} 
                        />
                        <Form.Input
                        icon= 'clipboard'
                        iconPosition='left'
                        type="text"
                        label="descripton"
                        placeholder="descripton"
                        name="descripton"
                        onChange={this.handleChange}
                        value={this.state.descripton}
                        />
                         <Form.Input
                         icon='dollar sign'
                        iconPosition='left'
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