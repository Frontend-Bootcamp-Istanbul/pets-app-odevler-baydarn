import React from 'react';
import {Route, Switch} from "react-router";
import {FavoritesPage, HomePage} from "../pages";
import detaypage from "../pages/detaypage";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/favoriler" component={FavoritesPage}/>
                <Route exact path = "/detaypage/:id" component={detaypage}/>
            </Switch>
        </div>
    );
}

export default Main;
