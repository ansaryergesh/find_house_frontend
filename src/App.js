import React, { Fragment, Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import { connect } from 'react-redux';
import LoginForm from './components/loginForm'
import Home from './components/home'
import AddHouse from './components/addHouse'
import {postHouse} from './actions/houses';
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'


const mapDispatchToProps = (dispatch) => ({ 
  postHouse:(name,description,price) => dispatch(postHouse(name,description,price)),
})

const mapStateToProps=(state)=> {

}
class App extends Component {
  render() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path ='/home' component={Home} />
        <Route exact path='/addHouse' component={() => <AddHouse postHouse={this.props.postHouse}/>} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App)); //withRouter is a Higher Order Component (HOC) that returns a COPY of App with React router props injected
