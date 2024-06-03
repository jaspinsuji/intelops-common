import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icons from '../../Icon/src/Icon';

const Checkbox = (props) => {
    const { id, children, className, name, checked, disabled = false, onChange = () => {}, color = 'orange' } = props;
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const handleChange = (e) => {
        setIsChecked(!isChecked);
        onChange(e.target.checked);
    };

    const checksColor = {
        fuchsia: 'bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300',
        slate: 'bg-gradient-to-tl from-slate-600 to-slate-300 border-slate-100',
        lime: 'bg-gradient-to-tl from-green-600 to-lime-400 border-lime-300',
        red: 'bg-gradient-to-tl from-red-600 to-rose-400',
        orange: 'bg-gradient-to-tl from-red-500 to-yellow-400',
        cyan: 'bg-gradient-to-tl from-blue-600 to-cyan-400 border-cyan-200',
        gray: 'bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100',
        darkGray: 'bg-gradient-to-tl from-gray-900 to-slate-800 border-slate-100',
        transparent: ''
    };
    const checkColor = checksColor[color];

    return (
        <div class="block min-h-6 pl-7">
            <label>
                <input
                    id={id}
                    disabled={disabled}
                    name={name}
                    className=" w-5 h-5 ease-soft text-base -ml-7 rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain  bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                    // className={`w-5 h-5 ease-soft text-base -ml-7 rounded-1.4 checked:${checkColor} checked:${<Icons variant='extraSmall' color="#a3017e" icon="ChartPieIcon"/>} after:text-xxs after:font-awesome after:900 after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer  appearance-none border border-solid border-slate-150 bg-white bg-contain  bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100`}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
                <label for="checkbox-1" className="cursor-pointer select-none text-slate-700">
                    {children}
                </label>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    /**
     * Specify a custom `id` for the `<checkbox>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<checkbox>`
     */
    className: PropTypes.string,

    /**
     * If `true`, the component is checked.
     */
    checked: PropTypes.bool,

    /**
     *	If `true`, the component is disabled.
     */
    disabled: PropTypes.string,

    /**
     * The name of the component.
     */
    name: PropTypes.string,

    /**
     * The label of the component.
     */
    children: PropTypes.string,

    /**
     * `onChange` Callback fired when the state is changed.
     */
    onChange: PropTypes.func
};

export default Checkbox;
