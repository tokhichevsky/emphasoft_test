import React from 'react';
import './UsersPage.scss';
import UsersTable from "../../components/UsersTable/UsersTable";
import {getUsersRequest} from "../../requests/requests";
import {connect} from "react-redux";
import Loader from "../../components/Loader/Loader";

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        getUsersRequest(this.props.token)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    users: result,
                    isLoaded: true
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    error: error
                })
            })
    }

    render() {
        return (
            <div className="page-users">
                {this.state.isLoaded ? <UsersTable users={this.state.users}/> : <Loader/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.login.token
});

export default connect(mapStateToProps, null)(UsersPage);
