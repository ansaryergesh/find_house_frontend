import React, {Component} from 'react';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { postHouse } from '../actions/houses'

const mapStateToProps = () => ({
  
})
  
const mapDispacthToProps = dispatch => ({
});
class AddHouse extends Component {
    state = { name: '', description: '', price: '',}
    handleChange = (e, semanticInputData) => {
        this.setState({ [semanticInputData.name]: semanticInputData.value })
    }

    handleSubmit = () => { //semantic forms preventDefault for you
        // this.props.postHouse(this.state.name, this.state.description, this.state.price)
        console.log(this.state.name, this.state.description, this.state.price)
        this.setState({ name: '', description: '', price: '' }) //reset form to initial state
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
                    {/* <Message error header={this.props.failedLogin ? this.props.error : null} /> */}
                    <Form.Group widths="equal">
                        <Form.Input
                        label="name"
                        placeholder="name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        />
                        <Form.Input
                        type="text"
                        label="description"
                        placeholder="description"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
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