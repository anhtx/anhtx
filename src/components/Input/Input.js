import React, { useState } from 'react';
import './input.scss'

const InputField = ({ type, fieldName, labelField, placeholder, onInputChange, inputValue, isDisabled }) => {
    const [value, setValue] = useState('');

    console.log('isDisabled', isDisabled);
    const handleOnChange = event => {
        setValue(event.target.value)
        onInputChange(event);
    };

    return (
        <div className='field'>
            <label className='field__label'>{labelField}</label>
            <input type={type || 'text'}
                name={fieldName}
                placeholder={placeholder || 'Input text'}
                className='field__input'
                onChange={handleOnChange}
                value={value || inputValue}
                disabled={isDisabled}
            />
        </div>
    );
};

export default InputField;