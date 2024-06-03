import React from 'react';

const CustomRadioButton = ({ children, checked, onChange, value, className, color = 'orange' }) => {

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
        <div className=' w-full p-2'>
       <label className="custom-radio">
            <input
                type="radio"
                className={`${className} w-4 h-4 ease-soft text-base rounded-full checked:border checked:border-gray-300  checked:${buttonColor} relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100 `}
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <span className="ml-2">{children}</span>
        </label>
        </div>
    );
};

export default CustomRadioButton;
