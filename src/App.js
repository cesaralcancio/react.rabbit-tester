import React from 'react';
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import { Route, Switch, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <main>
      <Container component="main" maxWidth="lg">
      <CssBaseline />
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/form">Form</Link></MenuItem>
              <MenuItem><Link to="/about">About</Link></MenuItem>
            </MenuList>
          </Paper>
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Container>
    </main>
  );
}

export default App;