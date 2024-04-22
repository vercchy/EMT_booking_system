import React from 'react'

const Hosts = (props) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.hosts.map((term) => {
                            return (<tr>
                                <td>{term.name}</td>
                                <td>{term.surname}</td>
                                <td>{term.country.name}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Hosts;