import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const ProfileCard = (props) => {
      return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.player.name} </CardTitle>
                    <CardSubtitle>Country: {props.player.country}</CardSubtitle>
                    <CardText>Searches: {props.player.searches}</CardText>
                </CardBody>
            </Card>
        </div>
      )
  }

  export default ProfileCard