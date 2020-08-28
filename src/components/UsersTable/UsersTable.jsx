import React from 'react';
import UsersRow from "./UsersRow/UsersRow";
import "./UsersTable.scss";
import Search from "./Search/Search";
import {connect} from "react-redux";


class UsersTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [...this.props.users].sort((a, b) => a.id - b.id),
            sorting_by_id_asc: true
        };
        this.handleSortingClick = this.handleSortingClick.bind(this);
    }


    handleSortingClick() {
        this.setState((prevState) => {
            return {
                users: [...prevState.users].sort(((a, b) =>
                    prevState.sorting_by_id_asc ? b.id - a.id : a.id - b.id)),
                sorting_by_id_asc: !prevState.sorting_by_id_asc
            }
        });
    }

    render() {
        return (
            <>
                <h2>Пользователи</h2>
                <Search/>
                <table className="users-table">
                    <thead>
                    <tr className="users-table__headers">
                        <th className="users-table__header_sorted"
                            onClick={this.handleSortingClick}>id&#32;{this.state.sorting_by_id_asc ? "↑" : "↓"}</th>
                        <th>username</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>is_active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(this.state.users.filter(item =>
                        item.username.match(new RegExp(this.props.searchText))
                    ).map((data, index) => (
                        <UsersRow key={index} data={data}/>
                    )))}
                    </tbody>
                    <tfoot>
                    <tr className="users-table__footer">
                        <td colSpan="5">
                            Всего пользователей: {this.state.users.length}
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    searchText: state.users.searchText
});

export default connect(mapStateToProps, null)(UsersTable);
