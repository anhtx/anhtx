import React, { useState } from 'react';
import '../Input/input.scss'

const FileField = ({ fieldName, labelField, onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const imageReader = (file, event, callback) => {
        let fileReaderImage = new FileReader;

        fileReaderImage.onload = () => {
            let newImg = new Image;

            newImg.onload = () => {
                const height = newImg.height;
                const width = newImg.width;
                
                parserDimension(event, { width, height });
            };
            newImg.src = fileReaderImage.result;
        };

        fileReaderImage.readAsDataURL(file);
    };

    const parserDimension = (event, {width, height}) => {
        onInputChange(event, height);
    };

    const handleOnChange = event => {
        const fileValue  = event.target.files[0];
        imageReader(fileValue, event, parserDimension);

        setInputValue(event.target.value)
    };

    return (
        <div className='field'>
            <label className='field__label'>{labelField}</label>
            <input 
                type='file'
                name={fieldName}
                className='field__input field__input--file'
                onChange={handleOnChange}
                value={inputValue}
            />
        </div>
    );
};

export default FileField;