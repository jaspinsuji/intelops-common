import React from 'react';
import PropTypes from 'prop-types';

const StatsCard = (props) => {
    const { id, className, amount, title, percentageChange, icon, width = '6/12'} = props;

    return (
        <div
            id={id}
            className={`${className} relative flex flex-col min-w-0 mb-6 md:w-${width} break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border`}
        >
            <div className="flex-auto p-4">
                <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-2/3 max-w-full px-3">
                        <div>
                            <p className="mb-0 font-sans font-semibold leading-normal text-sm">{title}</p>
                            <h5 className="mb-0 font-bold">
                                {amount}
                                <span className="leading-normal text-sm font-weight-bolder text-lime-500">{percentageChange}</span>
                            </h5>
                        </div>
                    </div>
                    {icon && (
                        <div className="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                            <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-xl">
                               <i class="relative top-1.5" aria-hidden="true"> {icon}</i>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

StatsCard.propTypes = {
    /**
     * Specify a custom `id` for the `<StatsCard>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<StatsCard>`
     */
    className: PropTypes.string,

    /**
     * Specify a custom `amount` for the `<StatsCard>`
     */
    amount: PropTypes.string,

    /**
     * Specify a custom `title` for the `<StatsCard>`
     */
    title: PropTypes.string,
    
    /**
    *Specify the Card width.
    *
    */
    width: PropTypes.string,

    /**
     * Specify a custom `percentageChange` for the `<StatsCard>`
     */
    percentageChange: PropTypes.string,

    /**
     * Specify a custom `icon` for the `<StatsCard>`
     */
    icon: PropTypes.node
};

export default StatsCard;
