/* eslint-disable react/prop-types */
/* eslint arrow-parens: [2, "as-needed"] */
import React from 'react';
import {
  Card, Image, Button, Icon, Divider, Header, Comment, Form,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Loading } from './Loader';

const HomeDetail = props => {
  const handleRemove = (e, homeId) => {
    e.preventDefault();
    props.deleteFavourite(homeId);
    props.isFavoure(homeId);
  };

  const handleClick = (e, homeId) => {
    e.preventDefault();
    props.postFavourite(homeId);
    props.isFavoure(homeId);
  };

  function Buttons(value) {
    if (props.favourites.favourites.some(elem => elem.id === value)) {
      return (
        <div>
          <Button onClick={e => handleRemove(e, value)} icon >
            <Icon color='red' name='heart'/>
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Button onClick={e => handleClick(e, value)} icon>
          <Icon color='black' name='heart'/>
        </Button>
      </div>
    );
  }

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
        <div className="col-12">
          <Link to={'/home'}>
            <Button color = 'orange' className='container backButton' icon><Icon name='angle left' />Back</Button>
          </Link>
          <br></br>  <br></br>  <br></br>
        </div>
        <div className="row">
          <div className="col-12">
            <div className='container ui one column stackable grid'>
              <Divider horizontal>
                <Header as='h4'>
                  <Icon name='tag' />
                  {props.house.name}
                </Header>
              </Divider>
              <Card className='ui fluid card'>
                <Image src='https://wallpapercave.com/wp/wp2124316.jpg' />
                <Card.Content>
                  <Card.Header>{props.house.name}</Card.Header>
                  <br></br>
                  <Card.Meta>Price: {props.house.price} $</Card.Meta>
                  <hr></hr>
                  <br></br>
                  <Card.Description>Description: {props.house.descripton}</Card.Description>

                  <br></br>
                  {
                    Buttons(props.house.id)
                  }
                </Card.Content>

                <Button color = 'orange'className='container' icon><Icon name='' />Apply to Rent</Button>
              </Card>
              <br></br>

            </div>

            <Comment.Group className='container'>
              <Header as='h3' dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Matt</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <div>Yesterday at 12:30AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>This has been very useful for my research. Thanks as well!</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>Elliot you are always so right :)</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button color = 'orange' content='Add Reply' labelPosition='left' icon='edit' />
              </Form>
            </Comment.Group>
            <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
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
