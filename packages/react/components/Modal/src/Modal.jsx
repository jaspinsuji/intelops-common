import React, { useEffect, useState } from "react";
import Button from "../../Button/src/Button";
import PropTypes from 'prop-types';

const Modal = ({ header, content, footer, footerContent, modalClose, id, modalWidth }) => {
  return (
    <>
        <div
          class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto transition-opacity ease-linear opacity-0 z-sticky outline-0"
          id={id}
          aria-hidden="true"
        >
          <div class={`relative ${modalWidth} m-2 transition-transform duration-300 pointer-events-none sm:m-7 sm:max-w-125 sm:mx-auto lg:mt-48 ease-soft-out -translate-y-13`}>
            <div class="relative flex flex-col w-full bg-white border border-solid pointer-events-auto dark:bg-gray-950 bg-clip-padding border-black/20 rounded-xl outline-0">
              <div class="flex items-center justify-between p-4 border-b border-solid shrink-0 border-slate-100 rounded-t-xl">
                {header && (
                  <h5
                    class="mb-0 leading-normal dark:text-white"
                    id="ModalLabel"
                  >
                    {header}
                  </h5>
                )}

                {modalClose ? (
                  <Button
                  type="button"
                  data-toggle="modal"
                  data-target={`#${id}`}
                  color='transparent'
                  class="fa fa-close w-4 h-4 ml-auto box-content p-2 text-black dark:text-white border-0 rounded-1.5 opacity-50 cursor-pointer -m-2 "
                  data-dismiss="modal"
                ></Button>
                ) : (
                  ""
                )}
              </div>
              {content && (
                <div class="relative flex-auto p-4">
                  {content}
                </div>
              )}

              {footer ? (
                <div class="flex flex-wrap items-center justify-end p-3 border-t border-solid shrink-0 border-slate-100 rounded-b-xl">
                 {footerContent}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
    </>
  );
};

Modal.propTypes = {
    /**
     * Specify a custom `header` title for the `<Modal>`
     */
    header: PropTypes.string,

    /**
     * The `content` of the `<Modal>`
     */
    content: PropTypes.string,
    /**
     * Specify a custom `footer` for the `<Modal>`
     */
    footer: PropTypes.string,

    /**
     * The `footer` Content of the `<Modal>`
     */
    footerContent: PropTypes.string,
    
    /**
     * Specify a custom `Close` button for the `<Modal>`
     */
    modalClose: PropTypes.node,
    
    /**
     * Specify a custom `width` for the `<Modal>`
     */
    modalWidth: PropTypes.string,

    /**
     * Specify a custom `id` for the `<Modal>`
     */
    id: PropTypes.string,

};

export default Modal;
