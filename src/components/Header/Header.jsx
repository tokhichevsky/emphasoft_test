import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import {logout} from "../../store/actions";
import {connect} from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleLogoutClick() {
        this.props.logout();
    }

    render() {
        return (
            <header className="header">
                <Link to="/" className="header__title"><h2 >Emphasoft Test</h2></Link>
                {this.props.is_authorized && <div className="header__button" onClick={this.handleLogoutClick}>Выйти</div>}
            </header>
        );
    }
}

const mapDispatchToProps = {
    logout
};

const mapStateToProps = state => ({
    is_authorized: !!state.login.token
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
