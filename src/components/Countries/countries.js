import React from 'react';

const Countries = (props) => {
 return (
     <div className="container mt-5">
         <div className="row">
             <div className="col-8">
                 <table className={"table table-striped"}>
                     <thead>
                     <tr>
                         <th>Name</th>
                         <th>Continent</th>
                     </tr>
                     </thead>
                     <tbody>
                     {props.countries.map((term) => {
                         return (<tr>
                             <td>{term.name}</td>
                             <td>{term.continent}</td>
                         </tr>)
                     })}
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
 )
}

export default Countries;