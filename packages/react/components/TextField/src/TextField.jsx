import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icons from '../../Icon/src/';

const TextField = (props) => {
    const {
        id,
        className,
        name,
        type,
        value,
        required = false,
        disabled = false,
        variant,
        placeholder,
        label,
        ariaLabel,
        choice = false,
        onChange = () => {},
        onClick = () => {},
        onBlur = () => {},
        iconName,
        variation
    } = props;
    const [textboxVariant, setTextboxVariant] = useState(
        'focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none'
    );

    const labelNode = label ? <label htmlFor={id}>{label}</label> : null;

    const handleOnChange = (evt) => {
        onChange(evt);
    };
    const handleOnClick = (evt) => {
        onClick(evt);
    };
    const handleChange = (evt) => {
        onBlur(evt);
    };

    useEffect(() => {
        switch (variant) {
            case 'small':
                setTextboxVariant(textboxVariant + ' py-1');
                break;
            case 'default':
                setTextboxVariant(textboxVariant + ' py-2');
                break;
            case 'large':
                setTextboxVariant(textboxVariant + ' py-3');
                break;
            case 'file':
                setTextboxVariant(' py-3');
                break;
            default:
                setTextboxVariant(textboxVariant);
        }
    }, []);

    return (
        <>
            {variation === 'iconInput' ? (
                <>
                    {labelNode}
                    <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                {iconName}
                </span>
                <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className={`${textboxVariant} ${className} pl-9 `}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                        name={name}
                        value={value}
                        ariaLabel={ariaLabel}
                        required={required}
                        disabled={disabled}
                        choice={choice}
                    />
                {/* <input type="text" class="pl-9 text-sm focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." /> */}
              </div>
                </>
            ) : variation === 'standard' ? (
            <>
             <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                {iconName}
                </span>
                <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className={` ${className} pl-9 focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none border-b border-solid border-gray-300 bg-white bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:outline-none`}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                        name={name}
                        value={value}
                        ariaLabel={ariaLabel}
                        required={required}
                        disabled={disabled}
                        choice={choice}
                    />
                    </div>
            </>
            ):variation === 'filled' ? (
                <>
                <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className={`${className} focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300  dark:bg-gray-700 bg-gray-50 bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none `}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                        name={name}
                        value={value}
                        ariaLabel={ariaLabel}
                        required={required}
                        disabled={disabled}
                        choice={choice}
                    />
                </>
                ): variation === 'disabled' ? (
                    <>
                      {labelNode}
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className={` ${textboxVariant} ${className} cursor-not-allowed`}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                        name={name}
                        value={value}
                        ariaLabel={ariaLabel}
                        required={required}
                        disabled={disabled}
                        choice={choice}
                    />
                    </>
                    ):variation === 'readonly' ? (
                        <>
                          {labelNode}
                        <input
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            className={` ${textboxVariant} ${className} `}
                            onChange={handleOnChange}
                            onClick={handleOnClick}
                            name={name}
                            value={value}
                            ariaLabel={ariaLabel}
                            required={required}
                            disabled={disabled}
                            choice={choice}
                            readonly="true"
                        />
                        </>
                        ):
            (
                <>
                    {labelNode}
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className={`${textboxVariant} ${className}`}
                        onChange={handleOnChange}
                        onClick={handleOnClick}
                        name={name}
                        value={value}
                        ariaLabel={ariaLabel}
                        required={required}
                        disabled={disabled}
                        choice={choice}
                    />
                </>
            )}
        </>
    );
};

TextField.propTypes = {
    /**
     * Specify a custom `id` for the `<input>`
     */
    id: PropTypes.string.isRequired,

    /**
     * Specify a custom `className` for the `<b utton>`
     */
    className: PropTypes.string,

    /**
     * Specify the value of the `<input>`
     */
    value: PropTypes.string,

    /**
     * Provide the text that will be read by a screen reader when visiting this
     * control
     */
    label: PropTypes.node,

    /**
     * Optionally provide an `onChange` handler that is called whenever `<input>`
     * is updated
     */
    onChange: PropTypes.func,

    /**
     * Optionally provide an `onClick` handler that is called whenever the
     * `<input>` is clicked
     */
    onClick: PropTypes.func,

    /**
     * Optionally provide an `onBlur` handler that is called whenever the
     * `<input>` is clicked
     */
    onBlur: PropTypes.func,

    /**
     * Specify the placeholder attribute for the `<input>`
     */
    placeholder: PropTypes.string,

    /**
     * Name attribute of the `<input>` element.
     */
    name: PropTypes.string,

    /**
     * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
     */
    type: PropTypes.string,

    /**
     * The value of the `input` element, required for a controlled component.
     */
    value: PropTypes.any,

    /**
     * The multiple `choice` value of the `input` element.
     */
    choice: PropTypes.bool,

    /**
     * If `true`, the label is displayed as required and the `input` element is required.
     * @default false
     */
    required: PropTypes.bool,

    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool
};

export default TextField;
