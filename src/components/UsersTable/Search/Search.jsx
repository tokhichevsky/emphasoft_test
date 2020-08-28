import React from 'react';
import {searchChange} from "../../../store/actions";
import {connect} from "react-redux";
import "./Search.scss";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }


    handleSearchChange(event) {
        this.props.searchChange(event.target.value);
    }

    render() {
        return (
            <label className="table-search">
                <input className="table-search__field" type="text" value={this.props.searchText}
                       onChange={this.handleSearchChange}
                       placeholder="Введите username пользователя"/>
                <div className="table-search__loupe-icon">&#128269;</div>
            </label>
        );
    }
}

const mapDispatchToProps = {
    searchChange
};

const mapStateToProps = state => ({
    searchText: state.users.searchText
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
