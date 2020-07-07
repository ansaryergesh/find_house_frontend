import React from 'react';
import { Card, Icon, Image, Grid,Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Loading} from './Loader';


const Home = props => {
  const handleClick = (e, homeId) => {
    e.preventDefault();
    props.postFavourite(homeId);
  };

  const handleRemove = (e, homeId) => {
    e.preventDefault();
    props.deleteFavourite(homeId);
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
  const sorted = props.houses.houses.sort(function(a,b) {return b.id - a.id});
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>List of Houses</h2>

    <div className='container ui one column stackable grid'>
        {sorted.map(house => (
              <Grid.Column>
                {/* <Segment> */}
                <div key={house.id}>
                  <Card className='ui fluid card'>
                    <Link to={`/home/${house.id}`}>
                      <Image width="100%" src='https://wallpapercave.com/wp/wp2124316.jpg' />
                      </Link>
                      <Card.Content>
                      <Card.Header className="houseName">{house.name}</Card.Header>
                      <Card.Meta>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(house.created_at)))}</Card.Meta>
                      <Card.Description>{house.price} $</Card.Description>
                      <br></br>  <br></br>  <br></br>
                      {props.message.success !==null ?
                         <Message className='container favoureMessage'
                         success
                             header={props.message.success}
                         />
                      : null }
                      <Button  onClick={e=> handleClick(e, house.id)} icon>
                        <Icon color='black' name='heart'/> Favoure
                      </Button>

                      <Button  onClick={e=> handleRemove(e, house.id)} icon>
                        <Icon color='red' name='heart'/> Unfavoure
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

export default Home;

