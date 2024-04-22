import React from 'react';

const Categories = (props) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th>Categories</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term) => {
                            return (<tr>
                                <td>{term}</td>
                            </tr>)
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Categories;