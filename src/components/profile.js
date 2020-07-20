/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Grid } from 'semantic-ui-react';
import withAuth from '../hocs/withAuth';

const Profile = ({ username, bio }) => (
  <Grid textAlign='center' verticalAlign='middle'>
  <Card className='profilePage'>
    <Image src='https://semantic-ui.com/images/avatar2/large/matthew.png' />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>Joined in 2020</Card.Meta>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
  </Card>
  </Grid>
);

const mapStateToProps = ({ usersReducer: { user: { avatar, username, bio } } }) => ({
  avatar,
  username,
  bio,
});

export default withAuth(connect(mapStateToProps)(Profile));
