import React from 'react';

const Button = (props) => {
    return (
        <input onClick = {this.handleClick}
        type="button"
        value={props.label}
        />
    );
}

export default Button;