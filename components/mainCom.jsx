import {Route,Switch,Redirect} from "react-router-dom";
import React, { Component }  from "react";
import Home from "./home";
import Users from "./users";
import About from "./about";
import Navbar from "./navbar";
import "./App.css"

class MainComponent extends Component{
    render() {
        return (
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/users" component={Users}/>
                    {/* <Route path="/home" component={Home}/> */}
                    <Redirect from='/' to="/home" />
                </Switch>
           
            </div>
        )
    }
}

export default MainComponent;
