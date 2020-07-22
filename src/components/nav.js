/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  const handleClick = event => {
    event.preventDefault();
    localStorage.removeItem('jwt');
    window.location.reload(false);
  };

  return (
    <Menu pointing secondary className='ui fixed borderless huge navigationBar'>
      {loggedIn ? (
        <Fragment>
          <Menu fluid widths={5}>
            <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === 'Profile'}> <Icon name='user circle' /></Menu.Item>
            <Menu.Item as={NavLink} to="/home" name="Home" active={pathname === 'Home'}><Icon name='home' /></Menu.Item>
            <Menu.Item as={NavLink} to='/addHouse' name='Post House' active={pathname === 'Post House'}><Icon name='plus square outline' /></Menu.Item>
            <Menu.Item as={NavLink} to='/favourites' name='Favourites' active={pathname === 'Favourites'}><Icon name='heart'/></Menu.Item>
            <Menu.Item as= {NavLink} to="/login" onClick={handleClick} name="Logout"/>
          </Menu>
        </Fragment>
      ) : (
        <Fragment>
          <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
        </Fragment>

      )}
    </Menu>
  );
};

const mapStateToProps = ({ usersReducer: user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Nav));
