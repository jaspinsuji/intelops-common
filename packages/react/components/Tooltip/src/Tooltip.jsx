import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
    const{alignPlace="top",children}=props;

  return (
        <>
            <button type="button" data-placement={alignPlace} data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">{children}</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="true"></div>
            </div>
        </>
    )
}

Tooltip.propTypes = {
  /**
   * Specify a custom `columns` for the `<Table>`
   */
  alignPlace: PropTypes.string,

  /**
   * The content of the `<Table>` component.
   */
  children: PropTypes.node
};

export default Tooltip