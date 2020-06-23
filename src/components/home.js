import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Loading} from './Loader';

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
    <div className="container">
      <div className="row">
        <div className="col-12">
        <h3>Homes</h3>
          <hr />

        </div>
      </div>
      <div className="row">
          
        {props.houses.map(house => (
          <div key={house.id} className="col-12 col-md-5 m-1">
            <Card>
              {/* <Link to={`/menu/${meal.idMeal}`}> */}
                {/* <CardImg width="100%" src={meal.strMealThumb} alt={meal.strMeal} /> */}
                {/* <CardImgOverlay> */}
                  <Card.Header className="houseName">{house.name}</Card.Header>

                {/* </CardImgOverlay> */}
                <Card.Description className="category">{house.price}</Card.Description>
              {/* </Link> */}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;