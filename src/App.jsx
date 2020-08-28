import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import {connect} from "react-redux";
import UsersPage from "./pages/UsersPage/UsersPage";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <div className="app__container">
                        <Switch>
                            {this.props.is_authorized && <Route component={UsersPage} path="/" exact/>}
                            <Route component={LoginPage} path="*" exact/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    is_authorized: !!state.login.token
});

export default connect(mapStateToProps, null)(App);
