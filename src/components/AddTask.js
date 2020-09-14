import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from "react-router-dom";


function AddTask(props) {

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

    const classes = useStyles();
    const [redirect, setRedirect] = React.useState(false);
    const [taskName, setTaskName] = React.useState('');
    const [taskStatus, setTaskStatus] = React.useState('');

    const handleTaskStatus = (event) => {
        setTaskStatus(event.target.value);
    }

    const handlerAddTask = (event) => {
        event.preventDefault();
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name: taskName, status: taskStatus})
        };

        fetch('http://localhost:3001/tasks', requestOptions)
            .then((response) => {
                console.log(response.json());
                setRedirect(true);
            });
    }

    if (redirect) return <Redirect to="/task/list"/>;
    return (
        <div>
            <Typography className={classes.title} component="h1" variant="h5">
                Add Task
            </Typography>
            <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="taskName"
                    label="taskName"
                    name="taskName"
                    autoComplete="taskName"
                    onChange={e => setTaskName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Select
                    variant="outlined"
                    fullWidth
                    label="taskStatus"
                    id="taskStatus"
                    value={taskStatus}
                    onChange={handleTaskStatus} >
                        <MenuItem value={"ongoing"}>Ongoing</MenuItem>
                        <MenuItem value={"pending"}>Pending</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handlerAddTask}>
                Add Task
            </Button>
            </form>
        </div>
    )
}

export default AddTask;