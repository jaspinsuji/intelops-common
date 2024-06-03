import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CustomCheckList = (props) => {

    const {id, name, title, listData, className, checked, onChange = () => {} } = props;
    const [checkedState, setCheckedState] = useState(checked || false);

    function handleChange(e) {
       setCheckedState(e.target.checked);
       onChange(e);
    }

    return (
        <div className={`${className} block p-4 border border-gray-300 rounded`}>
            <label className="flex items-center">
                <input
                    id={id}
                    name={name}
                    type="checkbox"                
                    className=" w-5 h-5 ease-soft text-base rounded-1.4 checked:bg-gradient-to-tl checked:from-gray-900 checked:to-slate-800 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left mt-1 cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\f00c'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100"
                    checked={checkedState}
                    onChange={handleChange}
                />
                <span className="ml-2 cursor-pointer select-none text-slate-700">
                    {title}
                </span>
            </label>
            {listData && (
            <div className="mt-2">
                <p className="text-slate-800">{listData}</p>
            </div>
            )}
        </div>
    );
};

CustomCheckList.propTypes = {

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
      * The data of the component.
      */
     listData: PropTypes.string,
 
     /**
      * `onChange` handler that is called whenever the
      * `<checkbox>` is clicked
      */
     onChange: PropTypes.func
};

export default CustomCheckList;
