import React, { useState } from 'react';
import RadioButtonGroup from './RadioButtonGroup';
import CustomRadioButton from './RadioButton';

export default {
    title: 'RadioButtonGroup',
    component: RadioButtonGroup
};

export const radioButtonGroup = () => {
    return <RadioButtonGroup options={['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'white']} title="colors" />;
};

export const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div>
            <CustomRadioButton children="Option 1" checked={selectedOption === 'option1'} onChange={handleRadioChange} value="option1" />
            <CustomRadioButton children="Option 2" checked={selectedOption === 'option2'} onChange={handleRadioChange} value="option2" />
        </div>
    );
};

export const RadioButtonColors = () => {
    return (
        <>
            <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
                <RadioButtonGroup options={['fuchsia']} color="fuchsia" title="fuchsia" checked="fuchsia" />
                <RadioButtonGroup options={['slate']} color="slate" title="slate" checked="slate" />
                <RadioButtonGroup options={['lime']} color="lime" title="lime" checked="lime" />
                <RadioButtonGroup options={['red']} color="red" title="red" checked="red" />
                <RadioButtonGroup options={['cyan']} color="cyan" title="cyan" checked="cyan" />
                <RadioButtonGroup options={['gray']} color="gray" title="gray" checked="gray" />
                <RadioButtonGroup options={['darkGray']} color="darkGray" title="darkGray" checked="darkGray" />
                <RadioButtonGroup options={['transparent']} color="transparent" title="transparent" />
            </div>
        </>
    );
};
