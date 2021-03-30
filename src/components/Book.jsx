import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { fetchbooks } from '../actions/BookAction'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class Book extends Component {
    componentDidMount() {
        console.log("CALLING", this.props)
    }
    render() {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
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
                            {this.props.bookReducer.map((row) => (
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
        )
    }
}

const mapStateToProps = (state) => {
    console.log("STATE", state.bookReducer.books)
    return {
        bookReducer: state.bookReducer.books || []
    }
}

export default connect(mapStateToProps, fetchbooks)(Book)


