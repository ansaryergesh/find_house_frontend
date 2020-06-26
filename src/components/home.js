import React, { Component } from 'react';
import { Card, Icon, Image,Header, Grid, Segment,Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Loading} from './Loader';
import AddFavourite from './favourAdd';
const Home = props => {
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
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>List of Houses</h2>
    <div className='ui four column stackable grid'>
    
    
        {props.houses.houses.map(house => (
  
              <Grid.Column>
                {/* <Segment> */}
                <div key={house.id}>
                  <Card className='ui fluid card'>
                    <Link to={`/home/${house.id}`}>
                      <Image width="100%" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnaLeVAeQkPPz720Kq9WxuAVqqHTCihrX8SQ&usqp=CAU' />
                      </Link>
                      <Card.Content>
                      <Card.Header className="houseName">{house.name}</Card.Header>
                      <Card.Meta>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(house.created_at)))}</Card.Meta>
                      <Card.Description>{house.price}</Card.Description>
                      <AddFavourite />
                      </Card.Content>
                 

                  </Card>
          </div>
                {/* </Segment> */}
              </Grid.Column>
         
         
        ))}
      </div>
      </div>
  
  );
};

export default Home;

