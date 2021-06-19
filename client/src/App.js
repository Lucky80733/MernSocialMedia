import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import PrimarySearchAppBar from './components/Menu/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/auth/Auth';
import ShowEvent from './components/calendar/ShowEvent';
const App = () => {
  const classes = useStyles();

  return (
  <BrowserRouter>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Social</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>

     <Container> <Grid container justify="space-between"> <PrimarySearchAppBar /> </Grid> </Container>
     </Container>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Auth" exact component={Auth} />
          <Route path="/ShowEvent" exact component={ShowEvent} />
      </Switch>   
    
  </BrowserRouter>
  );
};

export default App;
