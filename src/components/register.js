import React from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { withRouter, Redirect } from 'react-router'
import { registerUser } from '../actions/user'
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
class Register extends React.Component {
  state = { username: '', password: '', bio: ''}

  // handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleChange = (e, semanticInputData) => {
    this.setState({ [semanticInputData.name]: semanticInputData.value })
  }

  handleLoginSubmit = () => { //semantic forms preventDefault for you
    this.props.registerUser(this.state.username, this.state.password, this.state.bio)
    this.setState({ username: '', password: '', bio: '' }) //reset form to initial state
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>

      <Header as='h2' color='orange' textAlign='center'>
          Registration
      </Header>
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
              icon='book'
              iconPosition='left'
              placeholder="Bio"
              name="bio"
              onChange={this.handleChange}
              value={this.state.bio}
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
     
          <Button color='orange' fluid size='large' type="submit">Register</Button>
        
      </Segment>
      </Form>
      <p className='register'>Registred already? <Link to='/login'>  Login</Link></p>
      </Grid.Column>
  </Grid>
    )
  }
}

// const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, user, loggedIn } }) => ({
//   authenticatingUser,
//   failedLogin,
//   error,
//   user,
//   loggedIn
// })

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
//     failedLogin: reduxStoreState.usersReducer.failedLogin,
//     error: reduxStoreState.usersReducer.error,
//     loggedIn: reduxStoreState.usersReducer.loggedIn
//   }
// }

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, error, loggedIn } }) => ({
  authenticatingUser,
  failedLogin,
  error,
  loggedIn
})


// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (username, password) => dispatch(loginUser(username, password))
//   }
// }

// const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
// const connectedToReduxLoginForm = connectedToReduxHOC(LoginForm)
// const connectedToReduxHOCWithRouterLoginForm = withRouter(connectedToReduxLoginForm)
//
// export default connectedToReduxHOCWithRouterLoginForm


export default connect(mapStateToProps, { registerUser })(Register)
