import React from 'react';
import API from 'fetch-api';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    }
  }));

function Pokemon() {
    const classes = useStyles();
    const [pokemonName, setPokemonName] = React.useState('');
    const [pokemonDreamWorld, setPokemonDreamWorld] = React.useState('');

    const handleGoPokeball = (event) => {
        const api = new API({
            baseURI: 'https://pokeapi.co/api/v2/'
        });
  
        const pokeNumber = Math.floor(Math.random() * 150) + 1;
        api.get('pokemon/' + pokeNumber, (err, res, otro) => {
            if (otro) {
                setPokemonName(otro.forms[0].name)
                setPokemonDreamWorld(otro.sprites.other.dream_world.front_default)
            }
        });
    };

    return (
        <div>
            <h1>Random Pokémon!!!</h1>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleGoPokeball}>
                Go Pokéball!!!
            </Button>
            <div>
                <h2>{pokemonName}</h2>
                <img alt="No Pokémon" src={pokemonDreamWorld}/>
            </div>
        </div>
    );
}

export default Pokemon;