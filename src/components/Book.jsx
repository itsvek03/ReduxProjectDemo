import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { books } from '../books'
import React from 'react';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});


export default function Book() {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.Name}</TableCell>
                                <TableCell>{row.Book}</TableCell>
                                <TableCell>{row.category.genre}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className="m-2"
                                    >
                                        Edit
                                    </Button>

                                    <Button variant="contained" color="secondary" className="m-2">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
