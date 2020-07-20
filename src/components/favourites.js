/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import {
  Card, Icon, Image, Grid, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Loading } from './Loader';

const Favourites = props => {
  const handleRemove = (e, homeId) => {
    e.preventDefault();
    props.deleteFavourite(homeId);
  };
  if (props.favourites.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.favourites.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.favourites.errMess}</h4>
        </div>
      </div>
    );
  }
  const lengthFav = props.favourites.favourites.length;
  if (lengthFav === 0) {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>List of Favourites</h2>
        <i className='heart outline'></i>
        <br></br>  <br></br>  <br></br>
        <Image className='ui centered grid' src='https://lh3.googleusercontent.com/proxy/Q7RCqJMmlY1k45V2FpuzqOld9Lodvy8wHgkFGxx6QrTzHf_DoAWWQ8BW2y6u-LorkVMaLh5QjRsHtJuNkkAsRzMZhw' />
        <br></br> <br></br> <br></br> <br></br>
        <p style={{ textAlign: 'center', fontSize: '25px' }}>No Favourites Yet</p>
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>List of Favourites</h2>
    <div className='container ui one column stackable grid'>
        {props.favourites.favourites.map(favourite => (
              <Grid.Column>
                <div key={favourite.id}>
                  <Card className='ui fluid card'>
                    <Link to={`/home/${favourite.id}`}>
                      <Image width="100%" src='https://wallpapercave.com/wp/wp2124316.jpg' />
                      </Link>
                      <Card.Content>
                      <Card.Header className="houseName">{favourite.name}</Card.Header>
                      <Card.Meta>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(favourite.created_at)))}</Card.Meta>
                      <Card.Description>{favourite.price}</Card.Description>
                      <Button onClick={e => handleRemove(e, favourite.id)} icon>
                        <Icon color='red' name='heart'/>
                      </Button>
                      </Card.Content>
                  </Card>
                </div>
              </Grid.Column>
        ))}
      </div>
      </div>

  );
};

export default Favourites;
