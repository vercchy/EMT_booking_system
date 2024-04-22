import React from 'react'
import {useNavigate} from "react-router-dom";

const Add = (props) => {
    const navigator = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "",
        numRooms: 0,
        hostId: 4
    });

const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name] : e.target.value.trim()
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name;
    const category = formData.category;
    const numRooms = formData.numRooms;
    const hostId = formData.hostId;
    props.onAddAccommodation(name,category, numRooms, hostId);
    navigator("/accommodations");
}

return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-5">
                <form onSubmit={handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               required
                               onChange={handleChange}
                               className={"form-control"}/>

                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="numRooms">Number of rooms</label>
                        <input type="number"
                               id="numRooms"
                               name="numRooms"
                               required
                               onChange={handleChange}
                               className={"form-control"}/>

                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="category">Category</label>
                        <select name="category"
                                id="category"
                                onChange={handleChange}
                                className={"form-control"}>
                            {props.categories.map((term => {
                                return <option value={term}>{term}</option>
                            }))}
                        </select>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor="hostId">Host</label>
                        <select name="hostId"
                                id="hostId"
                                onChange={handleChange}
                                className={"form-control"}>
                            {props.hosts.map((term => {
                                return <option value={term.id}>{term.name}</option>
                            }))}
                        </select>


                    </div>
                    <button type={"submit"} className={"btn btn-outline-primary"}>Submit</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Add;