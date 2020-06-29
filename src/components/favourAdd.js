import React, { Component } from 'react';
import { Icon,Button } from 'semantic-ui-react'
import {postFavourite} from '../actions/favourite';
import withAuth from '../hocs/withAuth';
import { connect } from 'react-redux'

const mapStateToProps = () => ({
    
})
class AddFavoure extends Component {
    handleFavoure() {
      this.props.postFavourite();
    }
    render(){
      return(
        <Button onClick={this.handleFavoure} icon>
        <Icon name='heart'/>
      </Button>
      )
    }
  }
  
  export default withAuth(connect(mapStateToProps, { postFavourite })(AddFavoure))