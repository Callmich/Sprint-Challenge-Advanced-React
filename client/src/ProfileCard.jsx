import React from 'react';
import './index.css';
import { useDarkMode } from './useDarkMode';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const ProfileCard = (props) => {

    const [darkMode, setDarkMode] = useDarkMode(false);
 
      return(
        <div>
                    <CardTitle>Name: {props.player.name} </CardTitle>
                    <CardSubtitle>Country: {props.player.country}</CardSubtitle>
                    <CardText>Searches: {props.player.searches}</CardText>
        </div>
      )
  }

  export default ProfileCard