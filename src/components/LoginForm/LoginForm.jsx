import React, {Component} from 'react';
import './LoginForm.scss';
import {connect} from "react-redux";
import {login} from "../../store/actions";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            usernameMessages: [],
            passwordMessages: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (!this.state.usernameMessages.length && !this.state.passwordMessages.length)
            this.props.login(this.state.username, this.state.password)

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
        this.setState(prevState => {
            const messages = [];
            if (!prevState.username.match(/^(?:[\w.@+-]+){1,150}$/))
                messages.push("Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.");
            return {usernameMessages: messages}


        });
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
        this.setState(prevState => {
            const messages = [];
            if (!prevState.password.match(/^(?=.*[A-Z])(?=.*\d).{8,128}$/))
                messages.push("Required. 128 characters or fewer. Password does't meet the conditions.");
            return {passwordMessages: Array.from(new Set(messages))}


        });
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleFormSubmit}>
                <h2 className="login-form__title">{this.props.is_authorized ? "Вы уже вошли!" : "Авторизация"}</h2>
                <ErrorMessage messages={[...this.state.usernameMessages, ...this.state.passwordMessages]}/>
                <input className="login-form__field"
                       type="text"
                       value={this.state.username}
                       onChange={this.handleUsernameChange}
                       placeholder="Имя пользователя"/>
                <input className="login-form__field"
                       type="password"
                       value={this.state.password}
                       onChange={this.handlePasswordChange}
                       placeholder="Пароль"/>
                <input type="submit" className="login-form__auth-button" value="Войти"/>
            </form>
        );
    }
}

const mapDispatchToProps = {
    login
};

const mapStateToProps = state => ({
    is_authorized: !!state.login.token
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
