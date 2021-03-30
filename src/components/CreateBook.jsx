import React, { Component } from 'react'

export default class CreateBook extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputName1">Author Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputName"
                                        aria-describedby="NameHelp"
                                        placeholder="Enter Author Name"
                                    />

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputBook1">Book Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputBook"
                                        aria-describedby="BookHelp"
                                        placeholder="Enter Book Name"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary m-2"
                                    >
                                        Submit
                                </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary m-2"
                                    >
                                        Cancel
                                </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
