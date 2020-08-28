import React from 'react';
import "./UsersRow.scss";


class UsersRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_additional: false
        };

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick() {
        this.setState((prevState) => {
            return {
                show_additional: !prevState.show_additional
            }
        })
    }

    render() {
        return (
            <>
                <tr className={this.state.show_additional ? "table-row table-row_selected" : "table-row"}
                    onClick={this.handleRowClick}>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.username}</td>
                    <td>{this.props.data.first_name}</td>
                    <td>{this.props.data.last_name}</td>
                    <td>{this.props.data.is_active.toString()}</td>

                </tr>
                {this.state.show_additional && <tr>
                    <td colSpan="5" className="table-row-additional">
                        {Object.keys(this.props.data).map((key, index) => (
                            <div key={index} className="table-row-additional__item">
                                <b>{key}</b>: {String(this.props.data[key])}
                            </div>
                        ))}
                    </td>
                </tr>}
            </>
        );
    }
}

export default UsersRow;
