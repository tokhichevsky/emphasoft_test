import React, {Component} from 'react';
import './LoginForm.scss';
import {connect} from "react-redux";
import {login} from "../../store/actions";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.username, this.state.password)
        this.props.login(this.state.username, this.state.password)

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleFormSubmit}>
                <h2 className="login-form__title">{this.props.is_authorized ? "Вы уже вошли!" : "Авторизация"}</h2>
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
