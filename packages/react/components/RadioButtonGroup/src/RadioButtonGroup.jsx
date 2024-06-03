import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RadioButtonGroup = (props) => {
    const { title, className, options, checked, onChange = () => {}, color = 'orange' } = props;
    const [checkedState, setCheckedState] = useState(checked || false);

    const handleClick = (e) => {
        setCheckedState(e.target.value);
        onChange(e);
    };

    const buttonsColor = {
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
    const buttonColor = buttonsColor[color];
    return (
        <>
            <label className=" w-full p-2">
                {title && <span className="ml-2 cursor-pointer text-xl select-none text-slate-700 font-bold">{title}</span>}
                {options &&
                    options.length > 0 &&
                    options.map((iteration) => {
                        return (
                            <div class="z-30 flex-auto">
                                <div className="block p-4 border border-gray-300 rounded">
                                    <label>
                                        <input
                                            id={iteration}
                                            type="radio"
                                            value={iteration}
                                            className={`${className} w-4 h-4 ease-soft text-base rounded-full checked:border checked:border-gray-300 checked:${buttonColor} relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100 `}
                                            checked={checkedState === iteration}
                                            onClick={handleClick}
                                        />
                                        <span className="ml-2 text-slate-700">{iteration}</span>
                                    </label>
                                </div>
                            </div>
                        );
                    })}
            </label>
        </>
    );
};

RadioButtonGroup.propTypes = {
    /**
     * Specify a custom `id` for the `<checkbox>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<checkbox>`
     */
    className: PropTypes.string,

    /**
     * Title of the checkbox component.
     */
    title: PropTypes.string,

    /**
     * The name of the component.
     */
    name: PropTypes.string,

    /**
     * Specify a `checked` state for the `<checkbox>`
     */
    checked: PropTypes.bool,

    /**
     * `onChange` handler that is called whenever the
     * `<checkbox>` is clicked
     */
    onChange: PropTypes.func
};

export default RadioButtonGroup;
