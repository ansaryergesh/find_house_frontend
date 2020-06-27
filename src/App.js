import React, { Fragment, Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import { connect } from 'react-redux';
import LoginForm from './components/loginForm'
import Home from './components/home'
import AddHouse from './components/addHouse'
import Favourites from './components/favourites'
import HomeDetail from './components/homeeDetail'
import {postHouse, fetchHouses} from './actions/houses';
import {postFavourite, fetchFavourites} from './actions/favourite'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'


const mapDispatchToProps = (dispatch) => ({ 
  fetchHouses:() => {dispatch(fetchHouses());},
  fetchFavourites:()=> {dispatch(fetchFavourites());},
  postHouse:(name,description,price) => dispatch(postHouse(name,description,price)),
  postFavourite:(home_id)=>dispatch(postFavourite(home_id))
})

const mapStateToProps=(state) => ({
  houses: state.houses || [],
  favourites: state.favourites || [],
})

const HomeWithId = ({ match }) => {
  return (
      <HomeDetail
          house={this.props.houses.houses.filter(house => house.id === parseInt(match.params.houseId, 10))[0]}
          isLoading={this.props.houses.isLoading}
          errMess={this.props.houses.errMess}
      />
  );
}

class App extends Component {
  componentDidMount() {
    this.props.fetchHouses();
    if (localStorage.getItem('jwt')) this.props.fetchFavourites();
  }
  render() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path ='/home' component={() => <Home houses={this.props.houses} postFavourite={this.props.postFavourite}/>} />
        <Route exact path ='/favourites' component={() => <Favourites favourites={this.props.favourites} />} />
        <Route path="/home/:homeId" component={HomeWithId} />
        <Route exact path='/addHouse' component={() => <AddHouse postHouse={this.props.postHouse}/>} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  )
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
