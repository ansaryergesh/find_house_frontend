import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

const Nav = ({ user: { loggedIn }, location: { pathname }}) => {
  const handleClick = event => {
    event.preventDefault();
    localStorage.removeItem("jwt");
    window.location.reload(false);
  };
  return (
    <Menu pointing secondary>
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
          <Menu.Item as={NavLink} to="/home"  name="Home" active={pathname === '/home'} />
          <Menu.Menu position="right">
            {/* TODO: logout */}
            <Menu.Item as= {NavLink} to="/login"  onClick={handleClick} name="Logout"/>
          </Menu.Menu>
        </Fragment>
      ) : ( 
        <Fragment>
                  <Menu.Item as={NavLink} to="/login"  name="Login" active={pathname === '/login'} />
                  <Menu.Item as={NavLink} to="/home"  name="Home" active={pathname === '/home'} />

        </Fragment>    

      )}
    </Menu>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
