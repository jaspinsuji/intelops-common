import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../Typography/src/Typography';

const SwitchButton = (props) => {
    const { id, name, className, checked, variant, disabled = false, color="gray", onChange = () => {} } = props;
    const defaultChecked = checked ? checked : false;
    const [checkedState, setCheckedState] = useState(defaultChecked);
    const handleChange = (e) => {
        setCheckedState(!checkedState);
        onChange(e.target.checked);
    };

    return (
        <div class="min-h-6 mb-0.5 flex items-center">
            <input
                id={id}
                disabled={disabled}
                checked ={checked}
                name={name}
                className={`${className} rounded-10 duration-300 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-300 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right`}
                type="checkbox"
                onChange={handleChange}
            />
            <Typography variant="small" className=" pl-3 " color="slate">{name}</Typography>
        </div>
    );
};

SwitchButton.propTypes = {
    /**
     * Specify a custom `id` for the `<switch>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<switch>`
     */
    className: PropTypes.string,

    /**
     * If `true`, the component is on
     */
    checked: PropTypes.bool,

    /**
     * The name of the component.
     */
    name: PropTypes.string,

    /**
     * If `true`, the component is disabled
     */
    disabled: PropTypes.bool,

    /**
     * `onChange` handler that is called whenever the
     * `<switch>` is clicked
     */
    onChange: PropTypes.func
};
export default SwitchButton;
