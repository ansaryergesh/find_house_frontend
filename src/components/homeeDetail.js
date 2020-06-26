import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Grid } from 'semantic-ui-react'
import { Loading} from './Loader';

function RenderHome({house,onclick}) {
    return (
            <Grid textAlign='center' verticalAlign='middle'>
                {/* <h2>{home.name}</h2> */}
                <Card>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnaLeVAeQkPPz720Kq9WxuAVqqHTCihrX8SQ&usqp=CAU' />
                    <Card.Content>
                    <Card.Header>{house.name}</Card.Header>
                    <Card.Meta>Price: {house.price} $</Card.Meta>
                    <Card.Description>{house.descripton}</Card.Description>
                    </Card.Content>
                </Card>
            </Grid>
    
    )
}

const HomeDetail = (props) => {
    if (props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    if (props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      );
    }
    if (props.house) {
      return (
        <div className="container">
          <div className="row">
            {/* <Breadcrumb>
              <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.meal.name}</BreadcrumbItem>
            </Breadcrumb> */}
            <div className="col-12">
              <h3>{props.house.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <RenderHome house={props.house} />
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div />
    );
  };
  
  export default HomeDetail;