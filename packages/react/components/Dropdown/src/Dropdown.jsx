import React, { useState } from "react";
import PropTypes from 'prop-types';

const Dropdownlist = (props) => {
  const { children,className, onChange = () => {} } = props;
  const [contentDetails, setContentetails] = useState(props.content);

  const handleChange = () => {};
  return (
    <>
     <div class="relative">
        <button
          dropdown-trigger="true"
          aria-expanded="false"
          type="button"
          class={`inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-sm ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs ${className}`}
          onChange={handleChange}
        >
          {children}
        </button>
        <p class="hidden transform-dropdown-show"></p>
        <ul
          dropdown-menu="true"
          class="dark:shadow-soft-dark-xl z-100 dark:bg-gray-950 text-sm top-1 lg:shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 before:text-5.5 transform-dropdown pointer-events-none absolute right-0 left-auto m-0 -mr-4 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-0 py-2 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-7 before:left-auto before:top-0 before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
        >
          {contentDetails &&
            contentDetails.length > 0 &&
            contentDetails.map((iteration, index) => {
              return (
                <li key={index}>
                  <a
                    class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 hover:bg-gray-200 hover:text-slate-700 dark:text-white dark:hover:bg-gray-200/80 dark:hover:text-slate-700 lg:transition-colors lg:duration-300"
                    href={iteration.href}
                  >
                    {iteration.option}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

Dropdownlist.propTypes = {

  /**
   * Specify a custom `className` for the `<Dropdownlist>`
   */
  className: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * `onChange` handler that is called whenever the `<Dropdownlist>`  is clicked.
   */
  onChange: PropTypes.func,
};
export default Dropdownlist;
