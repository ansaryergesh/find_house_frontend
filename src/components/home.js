/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, Icon, Image, Grid, Button, Message,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loading } from './Loader';
import { fetchFavourites } from '../actions/favourite';

const mapStateToProps = (props) => ({
  favourites: props.favourites,
});
const Home = (props) => {
  const handleClick = (e, homeId) => {
    e.preventDefault();
    props.postFavourite(homeId);
  };

  const handleRemove = (e, homeId) => {
    e.preventDefault();
    props.deleteFavourite(homeId);
  };

  function Buttons(value) {
    if (props.favourites.favourites.some((elem) => elem.id === value)) {
      return (
        <div>
          <Button onClick={(e) => handleRemove(e, value)} icon>
         <Icon color='red' name='heart'/>
       </Button>
        </div>
      );
    }
    return (
        <div>
          <Button onClick={(e) => handleClick(e, value)} icon>
          <Icon color='black' name='heart'/>
        </Button>
        </div>
    );
  }
  if (props.houses.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.houses.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.houses.errMess}</h4>
        </div>
      </div>
    );
  }
  const sorted = props.houses.houses.sort((a, b) => b.id - a.id);
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>List of Houses</h2>

    <div className='container ui one column stackable grid'>
        {sorted.map((house) => (
              <Grid.Column>
                <div key={house.id}>
                  <Card className='ui fluid card'>

                    <Link to={`/home/${house.id}`} >
                      <Image width="100%" src='https://wallpapercave.com/wp/wp2124316.jpg' />
                    </Link>

                      <Card.Content>
                      <Card.Header className="houseName">{house.name}</Card.Header>
                      <Card.Meta>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(house.created_at)))}</Card.Meta>
                      <Card.Description>{house.price} $</Card.Description>
                      <br></br>  <br></br>  <br></br>
                      {props.message.success !== null
                        ? <Message className='container favoureMessage'
                         success
                             header={props.message.success}
                         />
                        : null }
                      {
                        Buttons(house.id)
                      }
                      </Card.Content>
                  </Card>
          </div>
              </Grid.Column>
        ))}
        </div>
      </div>
  );
};

export default connect(mapStateToProps, { fetchFavourites })(Home);
