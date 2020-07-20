/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/user';

class LoginForm extends React.Component {
  state = { username: '', password: '' }

  handleChange = (e, semanticInputData) => {
    this.setState({ [semanticInputData.name]: semanticInputData.value });
  }

  handleLoginSubmit = () => {
    this.props.loginUser(this.state.username, this.state.password);
    this.setState({ username: '', password: '' });
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>

      <Header as='h2' color='orange' textAlign='center'>
          Sign In
      </Header>
      <p style={{ letterSpacing: '.95px' }}> Hello There. <br></br>Sign In and start managing your system</p>
            <Form size='large'
              onSubmit={this.handleLoginSubmit}
              size="mini"
              key="mini"
              loading={this.props.authenticatingUser}
              error={this.props.failedLogin}
            >
              <Segment stacked>
                <Message error header={this.props.failedLogin ? this.props.error : null} />
                  <Form.Input fluid
                    icon='user'
                    iconPosition='left'
                    placeholder="username"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <Button color='orange' fluid size='large' type="submit">Login</Button>
              </Segment>
            </Form>
            <p className='register'>Already have an account? <Link to='/registration'>  Register</Link></p>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({
  usersReducer: {
    authenticatingUser, failedLogin, error, loggedIn,
  },
}) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
