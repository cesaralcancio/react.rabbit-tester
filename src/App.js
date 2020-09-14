import React from 'react';
import Home from './components/Home';
import CallRabbitForm_v1 from './components/CallRabbitForm_v1';
import Form from './components/Form';
import About from './components/About';
import { Route, Switch, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Pokemon from './components/Pokemon';
import ListTask from './components/ListTasks';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="main" maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/call-rabbit-form">Rabbit</Link></MenuItem>
              <MenuItem><Link to="/form">Form</Link></MenuItem>
              <MenuItem><Link to="/pokemon">Pokémon</Link></MenuItem>
              <MenuItem><Link to="/task/list">List Task</Link></MenuItem>
              <MenuItem><Link to="/about">About</Link></MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/call-rabbit-form" component={CallRabbitForm_v1}/>
            <Route path="/form" component={Form}/>
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/task/list" component={ListTask} />
            <Route path="/about" component={About}/>
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;