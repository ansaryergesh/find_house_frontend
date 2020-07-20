/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Segment, Message,
} from 'semantic-ui-react';
import withAuth from '../hocs/withAuth';
// import {Form,Input} from 'semantic-ui-react-form-validator'
import { postHouse, emptyMessage } from '../actions/houses';

const mapStateToProps = state => ({
  message: state.message || [],
});

class AddHouse extends Component {
    state = {
      name: '', descripton: '', price: '', redirectTo: false, visible: true,
    }

    handleChange = (e, semanticInputData) => {
      e.preventDefault();
      this.setState({ [semanticInputData.name]: semanticInputData.value });
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.postHouse(this.state.name, this.state.descripton, this.state.price);
      this.setState({
        name: '', descripton: '', price: '', redirectTo: true, visible: false,
      });
    }

    handleDismiss = () => {
      this.setState({ visible: false });
      this.props.emptyMessage();
    }

    handleMessage = () => {
      this.setState({ visible: true });
    }

    render() {
      return (
        <div>
          <h1>Add House</h1>
          {this.props.message.error !== null && this.state.visible === true
            ? <Message className='container'
              error
              onDismiss={this.handleDismiss}
              header={this.props.message.error}
            />
            : null }
          {this.props.message.error === null && this.props.message.success !== null && this.state.visible === true
            ? <Message className='container'
              success
              onDismiss={this.handleDismiss}
              header={this.props.message.success}
            />
            : null }
          <Segment className='container'>
            <Form
              onSubmit={this.handleSubmit}
              size="mini"
              key="mini"
            >
              <Message error header={this.props.errMess} />
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
      );
    }
}

export default withAuth(connect(mapStateToProps, { postHouse, emptyMessage })(AddHouse));
