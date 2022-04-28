import React, { useState } from 'react';
import '../Input/input.scss'

const TextAreaField = ({ fieldName, labelField, placeholder, onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = event => {
        setInputValue(event.target.value)
        onInputChange(event);
    };

    return (
        <div className='field'>
            <label className='field__label'>{labelField}</label>
            <textarea 
                name={fieldName}
                placeholder={placeholder || 'Input text'}
                className='field__input'
                onChange={handleOnChange}
                value={inputValue}
            ></textarea>
        </div>
    );
};

export default TextAreaField;