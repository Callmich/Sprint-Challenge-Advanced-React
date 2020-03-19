import React from 'react';
import './index.css';
import { CardText, CardTitle, CardSubtitle } from 'reactstrap';

  const ProfileCard = (props) => {
 
      return(
        <div>
            <CardTitle>Name: {props.player.name} </CardTitle>
            <CardSubtitle>Country: {props.player.country}</CardSubtitle>
            <CardText>Searches: {props.player.searches}</CardText>
        </div>
      )
  }

  export default ProfileCard