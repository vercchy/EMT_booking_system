import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ReactPaginate from "react-paginate";

class Accommodations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page : 0,
            size : 5
        }
    }


    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accommodations.length / this.state.size)
        const accoms = this.getAccommodationsPage(offset, nextPageOffset);

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8">
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Number of rooms</th>
                                <th>Host</th>
                                <th>Availability</th>
                            </tr>
                            </thead>
                            <tbody>
                            {accoms}
                            </tbody>
                        </table>
                        <ReactPaginate previousLabel={"back"}
                                       nextLabel={"next"}
                                       breakLabel={<a href="/#">...</a>}
                                       breakClassName={"break-me"}
                                       pageClassName={"ml-1"}
                                       pageCount={pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination m-4 justify-content-center"}
                                       activeClassName={"active"}/>

                        <div className={"mt-3"}>
                            <Link to={"/accommodations/add"}
                                  className={"btn btn-outline-dark"}>
                                Add a new accommodation</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }


    getAccommodationsPage = (offset, nextPageOffset) => {
        return this.props.accommodations.map((term) => {
                return (<tr>
                    <td>{term.name}</td>
                    <td>{term.category}</td>
                    <td>{term.numRooms}</td>
                    <td>{term.host.name}</td>
                    <td>{!term.booked ? <span>Available</span> : <span>Rented</span>}</td>
                    <td>
                        <Link onClick={() => this.props.onDelete(term.id)}
                              className={"btn btn-outline-danger"}
                              to={"/accommodations"}>
                            Delete
                        </Link>
                    </td>
                    <td>
                        <Link onClick={() => this.props.onEdit(term.id)}
                              className={"btn btn-outline-info"}
                              to={`/accommodations/edit/${term.id}`}>
                            Edit
                        </Link>
                    </td>
                    <td>
                        {!term.booked ? (
                            <Link onClick={() => this.props.onRent(term.id)}
                                  className={"btn btn-outline-success"}
                                  to={`/accommodations`}>
                                Rent
                            </Link>
                        ) : ( <span></span> )}
                    </td>
                </tr>)
            }).filter((accom, index) => {
                return index >= offset && index < nextPageOffset;
        })
    }
}

export default Accommodations;