import React from 'react'
import {useNavigate} from "react-router-dom";

const Edit = (props) => {

const navigator = useNavigate();

const [formData, updateFormData] = React.useState({
    name : "",
    category : "",
    numRooms : 0,
    hostId : 0
});

const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name] : e.target.value.trim()
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name !== "" ? formData.name : props.selected.name;
    const category = formData.category !== "" ? formData.category : props.selected.category;
    const numRooms = formData.numRooms !== 0 ? formData.numRooms : props.selected.numRooms;
    const hostId = formData.hostId !==0  ?  formData.hostId : props.selected.host.id;
    props.onEditAccommodation(props.selected.id, name, category, numRooms, hostId);
    navigator("/accommodations");


}

return (
    <div className="container mt-5">
    <div className="row mt-5">
        <div className="col-md-5">
            <form onSubmit={handleSubmit}>
                <div className={"form-group"}>
                    <label htmlFor={"name"}>Name</label>
                    <input type="text"
                           id="name"
                           name="name"
                           placeholder={props.selected.name}
                           onChange={handleChange}
                           className={"form-control"}/>

                </div>
                <div className={"form-group"}>
                    <label htmlFor={"numRooms"}>Number of rooms</label>
                    <input type="number"
                           id="numRooms"
                           name="numRooms"
                           placeholder={props.selected.numRooms}
                           onChange={handleChange}
                           className={"form-control"}/>

                </div>
                <div className={"form-group"}>
                    <label htmlFor={"category"}>Category</label>
                    <select name="category"
                            id="category"
                            onChange={handleChange}
                            className={"form-control"}>
                        {props.categories.map((term) => {
                            if (props.selected.category !== undefined &&
                                props.selected.category === term)
                                return <option selected={props.selected.category}
                                               value={term}>{term}</option>
                            else return <option value={term}>{term}</option>
                        })}
                    </select>

                </div>

                <div className={"form-group"}>
                    <label htmlFor={"hostId"}>Host</label>
                    <select name="hostId"
                            id="hostId"
                            onChange={handleChange}
                            className={"form-control"}>
                        {props.hosts.map((term) => {
                            if (props.selected.host !== undefined &&
                                props.selected.host.id === term.id)
                                return <option selected={props.selected.host.id}
                                               value={term.id}>{term.name}</option>
                            else return <option value={term.id}>{term.name}</option>
                        })}
                    </select>

                </div>
                <button type={"submit"} className={"btn btn-outline-primary"}>Submit</button>
            </form>
        </div>
    </div>
    </div>
)
}

export default Edit;