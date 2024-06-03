import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FileUpload = (props) => {
    const {
        id,
        className,
        name,
        type="file",
        accept="",
        children="Upload",
        onChange = () => {},
        icon,
    } = props;

    const handleOnChange = (evt) => {
        onChange(evt);
    };

    return (
        <>
            <label
                className="w-full inline-block py-3 mb-4 pl-2 font-normal text-sm leading-5.6 text-gray-500 text-center align-middle transition-all bg-transparent border border-solid 
              border-gray-300 rounded-lg shadow-none cursor-pointer hover:scale-102 ease-soft-in tracking-tight-soft active:opacity-85 active:shadow-soft-xs  hover:border-slate-500 hover:bg-transparent hover:opacity-75 active:border-slate-500 active:bg-slate-500 active:text-white"
            >
                <span>
                    {icon}
                </span>
                <span className="pr-2">{children}</span>
                <input type={type} name={name} accept={accept} className={`hidden ${className}`} id={id} onChange={handleOnChange} />
            </label>
        </>
    );
};

FileUpload.propTypes = {
    /**
     * Specify a custom `id` for the `<fileupload>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<fileupload>`
     */
    className: PropTypes.string,

    /**
     * The name of the component.
     */
    name: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Type of the input component.
     */
    type: PropTypes.string,

    /**
     * To add the needed icon.
     */
    icon: PropTypes.node,

    /**
     * The acceptance file type.
     */
    accept: PropTypes.string,

    /**
     * `onChange` handler that is called whenever the
     * `<fileupload>` is clicked
     */
    onChange: PropTypes.func
};
export default FileUpload;
