import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
    const {
        id,
        className,
        rows = 5,
        value,
        required = false,
        disabled = false,
        placeholder,
        name,
        children,
        ariaLabel,
        onChange = () => {},
        onBlur = () => {}
    } = props;

    const handleOnChange = (event) => {
        onChange(event);
    };
    const handleChange = (evt) => {
        onBlur(evt);
    };

    return (
        <textarea
            id={id}
            name={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            ariaLabel={ariaLabel}
            onChange={handleOnChange}
            onBlur={handleChange}
            value={value}
            className={`${className} focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none`}
        >
            {children}
        </textarea>
    );
};

Textarea.propTypes = {
    /**
     * Specify a custom `id` for the `<Textarea>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Textarea>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a `rows` for the `<Textarea>`
     */
    rows: PropTypes.number,

    /**
     * Specify a `value` for the `<Textarea>`
     */
    value: PropTypes.string,

    /**
     * Specify a `required` for the `<Textarea>`
     */
    required: PropTypes.bool,

    /**
     * If `true`, the component is disabled
     */
    disabled: PropTypes.bool,

    /**
     * Specify a `placeholder` for the `<Textarea>`
     */
    placeholder: PropTypes.string,

    /**
     * Specify a `name` for the `<Textarea>`
     */
    name: PropTypes.string,

    /**
     * Specify a `label` for the `<Textarea>`
     */
    ariaLabel: PropTypes.string,

    /**
     * Optionally provide an `onBlur` handler that is called whenever `<Textarea>`
     * is updated
     */
    onBlur: PropTypes.func,

    /**
     * Optionally provide an `onChange` handler that is called whenever `<Textarea>`
     * is updated
     */
    onChange: PropTypes.func
};

export default Textarea;
