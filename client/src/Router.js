import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// components
import NavBar from "./views/components/NavBar";
// users
import Join from "./views/users/Join";
import Login from "./views/users/Login";
// Routes
import Search from "./views/Routes/Search";
import Home from "./views/Routes/Home";
import TV from "./views/Routes/TV";
import Movies from "./views/Routes/Movies";

export default () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tv" component={TV} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
)