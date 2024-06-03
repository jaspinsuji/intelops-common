import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Spinner = ({show = false, title="Processing...", width = "w-screen"}) => {
  return (
    <>
    {show ? (<>
      <div class={`z-990 fixed bg-black top-0 left-0 ${width} h-screen transition-opacity ease-linear opacity-80`}>
        <div className="flex justify-center items-center h-screen">
          <span
            class="inline-flex items-center px-4 py-2 from-red-500 to-yellow-400 font-semibold leading-6 text-sm shadow rounded-md text-white  hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
          >
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="px-2 text-slate-400 dark:text-white dark:opacity-80">{title}</span>
          </span>
        </div>
      </div>
    </>) : null}
      
    </>
  );
};

Spinner.propTypes = {
    /**
     * Specify a custom  `<Spinner>` status
     */
    show: PropTypes.string,

    /**
     * Specify a custom `title` for the `<Spinner>`
     */
    title: PropTypes.string,

    /**
     * Specify a custom `width` of the `<Spinner>`
     */
    width: PropTypes.string
};

export default Spinner;
