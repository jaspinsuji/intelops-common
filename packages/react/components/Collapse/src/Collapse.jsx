import React from 'react';
import PropTypes from 'prop-types';

const Collapse = (props) => {
    const { id, className, summary, details } = props;

    return (
        <div class="w-full mx-auto">
            <div accordion>
                <div accordion-section class="mb-4 rounded-t-1">
                    <h5 class="mb-0">
                        <button
                            section-trigger
                            class="relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-700 rounded-t-1"
                            aria-expanded="true"
                        >
                            {summary}
                            <i section-open-icon class="absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-plus text-xs"></i>
                            <i section-close-icon class="absolute right-0 pt-1 mr-4 leading-tight fa fa-minus text-xs"></i>
                        </button>
                    </h5>
                    <div section-content class="overflow-hidden transition-all ease-soft-in-out duration-350">
                        <div class="p-4 leading-normal text-sm opacity-80 ">{details}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Collapse.propTypes = {
    /**
     * Specify a custom `id` for the `<Collapse>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Collapse>`
     */
    className: PropTypes.string,

    /**
     * Specify a custom `summary` for the `<Collapse>`
     */
    summary: PropTypes.string,

    /**
     * Specify a custom `details` for the `<Collapse>`
     */
    details: PropTypes.string,
};
export default Collapse;
