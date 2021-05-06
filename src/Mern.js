import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import Footer from "./components/Footer"



import './mern.css';


export class Mern extends Component {
    render() {
        return (
            <Router>
            <div >
            <Navbar />
            <br/>
            {/* <Route path="/" exact component={ExercisesList} /> */}
            {/* <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} /> */}
            <Footer/>
            </div>
          </Router>
        )
    }
}

export default Mern
