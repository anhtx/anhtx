import React, { useState } from 'react';
import './index.scss';
import { useNavigate } from "react-router-dom";

import Button from './components/Button/Button';
import InputField from './components/Input/Input';
import TextAreaField from './components/TextAreaField/TextAreaField';
import FileField from './components/FileField/FileField';

const MailInputLayout = () => {
    const navigate = useNavigate();

    const [formField, setFormField] = useState({
        inspNumber: '',
        linkKey: '',
        prepareHeader: '',
        titleMail: '',
        titleFirstDescription: '',
        textFirstDescriptionA: '',
        textFirstDescriptionB: '',
        titleSecondDescription: '',
        textSecondDescriptionA: '',
        textSecondDescriptionB: '',
        nameProduct: '',
        subProductContent: '',
        linkHeader: '',
        linkProductTK1: '',
        linkProductTK2: '',
        linkProductONC1: '',
        linkProductONC2: '',
        heightLogoImage: '',
        heightMainImage: '',
        heightMainImageTitleProduct: '',
        heightImageProductTK1: '',
        heightImageLineProductTK: '',
        heightImageProductTK2: '',
        heightMainImageTitleProductONC: '',
        heightImageProductONC1: '',
        heightImageLineProductONC: '',
        heightImageProductONC2: '',
        heightImageLastLineProductONC: '',
        altMainImageTitle: '',
        altProductTK1: '',
        altProductTK2: '',
        altMainImageTitleProductONC: '',
        altProductONC1: '',
        altProductONC2: '',
        detailProduct: '',
    });
    
    const [formImageField, setFormImageField] = useState({
        logoImage: '',
        mainImage:'',
        mainImageTitleProduct: '',
        imageProductTK1: '',
        imageLineProductTK: '',
        imageProductTK2: '',
        mainImageTitleProductONC: '',
        imageProductONC1: '',
        imageLineProductONC: '',
        imageProductONC2: '',
        imageLastLineProductONC: ''
    });

    const handleSubmit = () => {
        const dataForm = {
            ...formField,
            ...formImageField
        };

        navigate(
            '/mail-view',
            { replace: false, state: dataForm }
        );
    };

    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        formField[fieldName] = fieldValue;
        setFormField({...formField});
    };


    const handleInputFileChange = (event, heightImage) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const nameHeightInputImage = 'height' + fieldName[0].toUpperCase() + fieldName.substring(1);
        
        formImageField[fieldName] = fieldValue;
        formField[nameHeightInputImage] = heightImage;

        setFormField({...formField});
        setFormImageField({...formImageField});
    };

    return (
        <div className='main'>
            <h2 className='text--center'>SUNTORY Input Content Mail</h2>
            <form onSubmit={handleSubmit}>
                <div className='form'>
                    <div className='form__ticket'>
                        <InputField fieldName='inspNumber'
                            inputValue={formField.inspNumber}
                            onInputChange={handleInputChange}
                            labelField='insp' />
                        <InputField fieldName='linkKey'
                            inputValue={formField.linkKey}
                            onInputChange={handleInputChange}
                            labelField='LINKKEY' />
                    </div>
                    <div className='form__content'>
                        <InputField fieldName='linkHeader'
                            inputValue={formField.linkHeader}
                            placeholder='Input link'
                            onInputChange={handleInputChange}
                            labelField='Link header' />
                        <InputField fieldName='prepareHeader'
                            inputValue={formField.prepareHeader}
                            onInputChange={handleInputChange}
                            labelField='Prepare header' />
                        <div className='image__uploads'>
                            <div className='image__uploads-item'>
                                <div className='image__content'>
                                    <FileField fieldName='logoImage'
                                        onInputChange={handleInputFileChange}
                                        labelField='Logo image' />
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightLogoImage' 
                                        inputValue={formField.heightLogoImage}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                            </div>
                        </div>
                        <InputField fieldName='titleMail'
                            onInputChange={handleInputChange}
                            labelField='Title mail' />
                        <div className='image__uploads'>
                            <div className='image__uploads-item'>
                                <div className='image__content'>
                                    <FileField fieldName='mainImage'
                                        onInputChange={handleInputFileChange}
                                        labelField='Main image' />
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightMainImage' 
                                        inputValue={formField.heightMainImage}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                            </div>
                        </div>
                        <InputField fieldName='titleFirstDescription'
                            inputValue={formField.titleFirstDescription}
                            onInputChange={handleInputChange}
                            labelField='Title first description' />
                        <TextAreaField fieldName='textFirstDescriptionA'
                            onInputChange={handleInputChange}
                            labelField='Text first description A (<span style="font-weight: bold;">Text Bold</span>)' />
                        <TextAreaField fieldName='textFirstDescriptionB'
                            onInputChange={handleInputChange}
                            labelField='Text first description B (<span style="font-weight: bold;">Text Bold</span>)' />
                        <InputField fieldName='titleSecondDescription'
                            inputValue={formField.titleFirstDescription}
                            onInputChange={handleInputChange}
                            labelField='Title second description' />
                        <TextAreaField fieldName='textSecondDescriptionA'
                            onInputChange={handleInputChange}
                            labelField='Text second description A (<span style="font-weight: bold;">Text Bold</span>)' />
                        <TextAreaField fieldName='textSecondDescriptionB'
                            onInputChange={handleInputChange}
                            labelField='Text second description B (<span style="font-weight: bold;">Text Bold</span>)' />
                        <InputField fieldName='nameProduct'
                            inputValue={formField.nameProduct}
                            onInputChange={handleInputChange}
                            labelField='Name product' />
                        <InputField fieldName='subProductContent'
                            inputValue={formField.subProductContent}
                            onInputChange={handleInputChange}
                            labelField='Sub product content' />
                        <div className='image__uploads'>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='mainImageTitleProduct'
                                        onInputChange={handleInputFileChange}
                                        labelField='Main image title product'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightMainImageTitleProduct'
                                        inputValue={formField.heightMainImageTitleProduct}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altMainImageTitle'
                                        inputValue={formField.altMainImageTitle}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Main image title alt' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageProductTK1'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image product tk 1'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageProductTK1'
                                        inputValue={formField.heightImageProductTK1}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-link'>
                                    <InputField fieldName='linkProductTK1'
                                        inputValue={formField.linkProductTK1}
                                        placeholder='Input link'
                                        onInputChange={handleInputChange}
                                        labelField='Link product tk 1' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altProductTK1'
                                        inputValue={formField.altProductTK1}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Alt product tk 1' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageLineProductTK'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image line product tk'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageLineProductTK'
                                        inputValue={formField.heightImageLineProductTK}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageProductTK2'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image product tk 2'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageProductTK2'
                                        inputValue={formField.heightImageProductTK2}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-link'>
                                    <InputField fieldName='linkProductTK2'
                                        inputValue={formField.linkProductTK2}
                                        placeholder='Input link'
                                        onInputChange={handleInputChange}
                                        labelField='Link product tk 2' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altProductTK2'
                                        inputValue={formField.altProductTK2}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Alt product tk 2' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='mainImageTitleProductONC'
                                        onInputChange={handleInputFileChange}
                                        labelField='Main image title product onc'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightMainImageTitleProductONC'
                                        inputValue={formField.heightMainImageTitleProductONC}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altMainImageTitleProductONC'
                                        inputValue={formField.altMainImageTitleProductONC}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Alt main image title product onc' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageProductONC1'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image product onc 1'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageProductONC1'
                                        inputValue={formField.heightImageProductONC1}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-link'>
                                    <InputField fieldName='linkProductONC1'
                                        inputValue={formField.linkProductONC1}
                                        placeholder='Input link'
                                        onInputChange={handleInputChange}
                                        labelField='Link product onc 1' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altProductONC1'
                                        inputValue={formField.altProductONC1}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Alt product onc 1' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageLineProductONC'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image line product onc'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageLineProductONC'
                                        inputValue={formField.heightImageLineProductONC}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageProductONC2'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image product onc 2'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageProductONC2'
                                        inputValue={formField.heightImageProductONC2}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                                <div className='image__product-link'>
                                    <InputField fieldName='linkProductONC2'
                                        inputValue={formField.linkProductONC2}
                                        placeholder='Input link'
                                        onInputChange={handleInputChange}
                                        labelField='Link product onc 2' />
                                </div>
                                <div className='image__product-alt'>
                                    <InputField fieldName='altProductONC2'
                                        inputValue={formField.altProductONC2}
                                        placeholder='Input alt'
                                        onInputChange={handleInputChange}
                                        labelField='Alt product onc 2' />
                                </div>
                            </div>
                            <div className='image__uploads-item --border'>
                                <div className='image__content'>
                                    <FileField fieldName='imageLastLineProductONC'
                                        onInputChange={handleInputFileChange}
                                        labelField='Image last line product onc'/>
                                </div>
                                <div className='image__height'>
                                    <InputField fieldName='heightImageLastLineProductONC'
                                        inputValue={formField.heightImageLastLineProductONC}
                                        onInputChange={handleInputChange}
                                        placeholder='Height auto fill'
                                        isDisabled
                                        labelField='Height' />
                                </div>
                            </div>
                        </div>
                        <TextAreaField fieldName='detailProduct' placeholder='Input text with multiple line' onInputChange={handleInputChange} labelField='Detail product (<p style="font-size: 12px; margin:0 0 14px; padding:0;">Content</p>)'/>
                    </div>
                    <div className='form__button'>
                        <Button type='button' label='Create the HTML file' onClickAction={handleSubmit}/>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default MailInputLayout;