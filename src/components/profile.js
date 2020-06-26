import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Grid } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = ({ avatar, username, bio }) => (
  <Grid textAlign='center' verticalAlign='middle'>
  <Card>
    <Image src='https://semantic-ui.com/images/avatar2/large/matthew.png' />
    <Card.Content>
      <Card.Header>{username}</Card.Header>
      <Card.Meta>Joined in 2020</Card.Meta>
      <Card.Description>{bio}</Card.Description>
    </Card.Content>
  </Card>
  </Grid>
)

// const mapStateToProps = (reduxStoreState) => {
//   return {
//     avatar: reduxStoreState.usersReducer.user.avatar,
//     username: reduxStoreState.usersReducer.user.username,
//     bio: reduxStoreState.usersReducer.user.bio
//   }
// }

const mapStateToProps = ({ usersReducer: { user: { avatar, username, bio } } }) => ({
  avatar,
  username,
  bio
})

// const connectedToReduxHOC = connect(mapStateToProps)
// const connectedProfile = connectedToReduxHOC(Profile)
//
// const withAuthProfile = withAuth(connectedProfile)
//
// export default withAuthProfile

export default withAuth(connect(mapStateToProps)(Profile))
