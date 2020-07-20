/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Loader } from 'semantic-ui-react';
import * as actions from '../actions';

const withAuth = (WrappedComponent) => {
  class AuthorizedComponent extends React.Component {
    componentDidMount() {
      if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser();
    }

    render() {
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />;
      } if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
        return <Loader active inline="centered" />;
      }
      return <Redirect to="/login" />;
    }
  }

  const mapStateToProps = (reduxStoreState) => ({
    loggedIn: reduxStoreState.usersReducer.loggedIn,
    authenticatingUser: reduxStoreState.usersReducer.authenticatingUser,
  });

  const mapDispatchToProps = (dispatch) => ({
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
  });

  return connect(
    mapStateToProps,
    actions,
  )(AuthorizedComponent);
};

export default withAuth;
