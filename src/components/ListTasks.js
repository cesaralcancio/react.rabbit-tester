import React, { useEffect } from 'react';
import API from 'fetch-api';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

function ListTask() {

    const refreshState = "nunca";
    const [tasks, setTasks] = React.useState([]);
    const fetchTasks = () => {
        const api = new API({
            baseURI: 'http://localhost:3001/'
        });

        api.get('tasks', (err, res, body) => {
            if (body) {
                setTasks(body);
            }
        });
    }

    useEffect(() => {
        fetchTasks();
    }, [refreshState]);

    const useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 650,
        },
        table_head_row_cell: {
            fontWeight: "bolder",
        },
        title: {
            marginBottom: theme.spacing(3)
        }
    }));

    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.title} component="h1" variant="h5">
                List Task
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell className={classes.table_head_row_cell} align="left">ID</TableCell>
                        <TableCell className={classes.table_head_row_cell} align="left">Task</TableCell>
                        <TableCell className={classes.table_head_row_cell} align="left">Status</TableCell>
                        <TableCell className={classes.table_head_row_cell} align="left">Created</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tasks.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell align="left">{row._id}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left">{row.created_date}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <br/>
            {/* {tasks.map((task) => (
                <div key={task._id}>
                    <div key={task._id}>{task._id}</div>
                    <div>{task.name}</div>
                    <div>{task.status}</div>
                    <div>{task.created_date}</div>
                    <br/>
                </div>
            ))} */}
        </div>
    )
}

export default ListTask;