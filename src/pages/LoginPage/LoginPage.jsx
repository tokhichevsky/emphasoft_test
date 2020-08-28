import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginPage.scss";

class LoginPage extends React.Component {

    render() {
        return (
            <div className="login-page">
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;
