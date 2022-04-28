import React from 'react';
import './button.scss';

const Button = ({ type, label, onClickAction }) => {
    const handleClick = () => {
        onClickAction()
    };

    return (
        <button
            type={type}
            className='button'
            onClick={handleClick}
        >{label || 'Click me'}</button>
    );
};

export default Button;