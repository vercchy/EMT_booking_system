import axios from '../custom-axios/axios';

const BookingService = {
    fetchAllCountries : () => {
        return axios.get("/countries")
    },
    fetchAllHosts : () => {
        return axios.get("/hosts")
    },
    fetchAllAccommodations : () => {
        return axios.get("/accom");
    },
    fetchAllCategories : () => {
      return axios.get("/categories");
    },
    saveAccommodation : (name, category, numRooms, hostId) => {
        return axios.post("/accom/save", {
            "name" : name,
            "category" : category,
            "numRooms" : numRooms,
            "hostId" : hostId
        });
    },

    deleteAccommodation : (id) => {
        return axios.delete(`/accom/delete/${id}`)
    },
    editAccommodation : (id, name, category, numRooms, hostId) => {
        return axios.put(`/accom/edit/${id}`, {
            "name" : name,
            "category" : category,
            "numRooms" : numRooms,
            "hostId" : hostId
        })
    },
    findAccommodationById : (id) => {
        return axios.get(`/accom/${id}`)
    },
    markAccommodationAsBooked : (id) => {
        return axios.put(`/accom/book/${id}`)
    }
}

export default BookingService;