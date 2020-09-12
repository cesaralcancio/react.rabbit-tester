import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BuildIcon from '@material-ui/icons/Build';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import API from 'fetch-api'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Clip.mx
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      marginBottom: theme.spacing(3)
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Home() {

    const classes = useStyles();
    const [environment, setEnv] = React.useState('');
    const [type, setT] = React.useState('');
    const [response, setResponse] = React.useState('');
    const [pokemon, setPokemon] = React.useState('');
    const [pokemonDreamWorld, setPokemonDreamWorld] = React.useState('');

    const handleEnvironment = (event) => {
        setEnv(event.target.value);
    };

    const handleType = (event) => {
        setT(event.target.value, environment);
    };

    const handleSendMessage = (event) => {
        const api = new API({
            baseURI: 'https://pokeapi.co/api/v2/'
        });
  
        const pokeNumber = Math.floor(Math.random() * 150) + 1;
        api.get('pokemon/' + pokeNumber, (err, res, otro) => {
            if (otro) {
                setResponse(otro.forms[0].name)
                setPokemon(otro.sprites.front_default)
                setPokemonDreamWorld(otro.sprites.other.dream_world.front_default)
            } else {
                setResponse("Undefined")
                setPokemon("NaN")
            }
        });
    };
    
    return (
        <div>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <BuildIcon />
            </Avatar>
            <Typography className={classes.title} component="h1" variant="h5">
                Rabbit Tester
            </Typography>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Select
                    variant="outlined"
                    fullWidth
                    label="Environment"
                    id="environment"
                    value={environment}
                    onChange={handleEnvironment} >
                    <MenuItem value={"dev"}>Dev</MenuItem>
                    <MenuItem value={"stage"}>Stage</MenuItem>
                    <MenuItem value={"prod"}>Prod</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                    variant="outlined"
                    fullWidth
                    label="type"
                    id="type"
                    value={type}
                    onChange={handleType} >
                    <MenuItem value={"AMQP"}>Async</MenuItem>
                    <MenuItem value={"RPC"}>Sync</MenuItem>s
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="queue"
                    label="Queue"
                    name="queue"
                    autoComplete="queue"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    placeholder="Write the message you want to send..."
                    variant="outlined"
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                    multiline
                    rows={15}
                    rowsMax={15}
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSendMessage}>
                Send message
                </Button>
                <Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title} component="h1" variant="h5">
                    {response}
                    </Typography>
                    <img alt="pokemon dream world" src={pokemonDreamWorld}/>
                </Grid>
                </Grid>
            </div>
            <Box mt={5}>
            <Copyright />
            </Box>
        </div>
    );
}

export default Home;