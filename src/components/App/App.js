import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import BookingService from "../../booking-service/BookingService";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../Home/home';
import Countries from "../Countries/countries";
import Hosts from "../Hosts/hosts";
import Accommodations from "../Accommodations/AccommodationsList/accommodations";
import Categories from "../Categories/categories";
import Edit from "../Accommodations/AccommodationsEdit/edit";
import Add from '../Accommodations/AccommodationsAdd/add';

class App extends Component{
    constructor() {
        super();
        this.state = {
            countries: [],
            hosts: [],
            accommodations : [],
            categories : [],
            selectedAccommodation : {},
            bookedAccommodations : []
        }
    }

  componentDidMount() {
    this.loadCountries();
    this.loadHosts();
    this.loadAccommodations();
    this.loadCategories();
  }

  loadCountries = () =>
  {
    BookingService.fetchAllCountries()
        .then((data) => {
          this.setState({
            countries : data.data
          })
        })
  }

  loadHosts = () => {
        BookingService.fetchAllHosts()
            .then((data) => {
                this.setState({
                    hosts : data.data
                })
            })

  }

  loadAccommodations = () => {
        BookingService.fetchAllAccommodations()
            .then((data) => {
                this.setState({
                    accommodations : data.data
                })
            })
  }

  loadCategories = () => {
        BookingService.fetchAllCategories()
            .then((data) => {
                this.setState({
                    categories:data.data
                })
            })
  }

  saveAccommodation = (name, category, numRooms, hostId) => {
        BookingService.saveAccommodation(name, category, numRooms, hostId)
            .then(() => this.loadAccommodations());
  }

  deleteAccommodation = (id) => {
        BookingService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations()
            })
  }
  findAccommodationById = (id) => {
        BookingService.findAccommodationById(id)
            .then((data) => {
                this.setState({
                    selectedAccommodation : data.data
                })
            })
  }
    editAccommodation = (id, name, category, numRooms, hostId) => {
        BookingService.editAccommodation(id, name, category, numRooms, hostId)
            .then(() => this.loadAccommodations())
    };

    rentAccommodation = (id) => {
        BookingService.markAccommodationAsBooked(id)
            .then(() => {
                this.setState(prevState => ({
                    bookedAccommodations : [...prevState.bookedAccommodations, id]
                }))
                this.loadAccommodations();
            })
    }

  render() {
    return (
        <Router>
            <main>
                <Home></Home>
            </main>
          <Routes>
              <Route path={'/countries'} element={<Countries countries={this.state.countries}></Countries>}></Route>
              <Route path={'/hosts'} element={<Hosts hosts={this.state.hosts}></Hosts>}></Route>
              <Route path={"/accommodations/add"} element={<Add hosts={this.state.hosts}
                                                                onAddAccommodation={this.saveAccommodation}
                                                                categories={this.state.categories}></Add>}>
              </Route>
              <Route path={'/accommodations/edit/:id'} element={<Edit
                  selected={this.state.selectedAccommodation}
                  categories={this.state.categories}
                  onEditAccommodation={this.editAccommodation}
                  hosts={this.state.hosts}></Edit>}></Route>

              <Route path={'/accommodations'}
                     element={<Accommodations accommodations={this.state.accommodations}
                                              onDelete={this.deleteAccommodation}
                                              onRent={this.rentAccommodation}
                                              bookedAccommodations={this.state.bookedAccommodations}
                                              onEdit={this.findAccommodationById}></Accommodations>}></Route>
              <Route path={"/categories"}
                     element={<Categories
                  categories={this.state.categories}></Categories>}></Route>
          </Routes>
        </Router>
    )
  }

}

export default App;
