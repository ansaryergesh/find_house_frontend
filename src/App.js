/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { Fragment, Component } from 'react';
import {
  Route, Switch, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './components/profile';
import LoginForm from './components/loginForm';
import Home from './components/home';
import AddHouse from './components/addHouse';
import Favourites from './components/favourites';
import HomeDetail from './components/homeeDetail';
import Register from './components/register';
import { postHouse, fetchHouses } from './actions/houses';
import {
  postFavourite, fetchFavourites, deleteFavourite, isFavoure,
} from './actions/favourite';
import { fetchCurrentUser } from './actions/user';
import Nav from './components/nav';
import NotFound from './components/notFound';
import './App.css';

const mapDispatchToProps = (dispatch) => ({
  fetchHouses: () => { dispatch(fetchHouses()); },
  fetchFavourites: () => { dispatch(fetchFavourites()); },
  postHouse: (name, description, price) => dispatch(postHouse(name, description, price)),
  postFavourite: (home_id) => dispatch(postFavourite(home_id)),
  deleteFavourite: (home_id) => dispatch(deleteFavourite(home_id)),
  isFavoure: (home_id) => dispatch(isFavoure(home_id)),
  fetchCurrentUser: () => { dispatch(fetchCurrentUser()); },
});

const mapStateToProps = (state) => ({
  houses: state.houses || [],
  favourites: state.favourites || [],
  message: state.message || [],
  status: state.status || [],
});

class App extends Component {
  componentDidMount() {
    this.props.fetchHouses();
    if (localStorage.getItem('jwt')) this.props.fetchCurrentUser();
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
        <Route exact path='/registration' component={Register} />
        <Route exact path ='/home' component={() => <Home
          favourites={this.props.favourites}
          houses={this.props.houses}
          message= {this.props.message}
          postFavourite={this.props.postFavourite}
          deleteFavourite={this.props.deleteFavourite}
          isFavoure={this.props.isFavoure}/>} />
        <Route path="/home/:idHouse" render={({ match }) => <HomeDetail
          house={this.props.houses.houses.filter((house) => house.id === parseInt(match.params.idHouse, 10))[0]}
          isLoading={this.props.houses.isLoading}
          favourites={this.props.favourites}
          status={this.props.status}
          errMess={this.props.houses.errMess}
          deleteFavourite={this.props.deleteFavourite}
          isFavoure={this.props.isFavoure}
          postFavourite={this.props.postFavourite}/>}
          />
        <Route exact path ='/favourites' component={() => <Favourites favourites={this.props.favourites} deleteFavourite={this.props.deleteFavourite} />} />
        <Route exact path='/addHouse' component={() => <AddHouse postHouse={this.props.postHouse}/>} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
