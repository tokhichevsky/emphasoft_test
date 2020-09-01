import React from 'react';
import "./ErrorMessage.scss";

class ErrorMessage extends React.Component {

    render() {
        if (this.props.messages && this.props.messages.length)
            return (
                <div className="error-message">
                    {this.props.messages.map((message, index) => (
                        <p key={index} className="error-message__text">{message}</p>
                    ))}
                </div>
            );
        return null;
    }
}

export default ErrorMessage;
