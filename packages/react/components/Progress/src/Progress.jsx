import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
    const [progressVariant, setProgressVariant] = useState(
        'bg-gradient-to-tl transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white'
    );
    const { id, className, variant, children, progressPercentage } = props;

    const handleProgressVariant = () => {
        switch (variant) {
            case 'fuchsia':
                return setProgressVariant(progressVariant + ' from-purple-700 to-pink-500');
            case 'slate':
                return setProgressVariant(progressVariant + ' from-slate-600 to-slate-300');
            case 'cyan':
                return setProgressVariant(progressVariant + ' from-blue-600 to-cyan-400');
            case 'lime':
                return setProgressVariant(progressVariant + ' from-green-600 to-lime-400');
            case 'red':
                return setProgressVariant(progressVariant + ' from-red-600 to-rose-400');
            case 'orange':
                return setProgressVariant(progressVariant + ' from-red-500 to-yellow-400');
            default:
                return progressVariant;
        }
    };

    useEffect(() => {
        handleProgressVariant();
    }, []);

    return (
        <>
            {' '}
            <div className={`${className} w-full mb-5`} id={id}>
                <div className="flex mb-2">
                    <span className="mr-2 font-semibold leading-normal capitalize text-sm">{children}</span>
                    <span className="ml-auto font-semibold leading-normal text-sm">{progressPercentage}</span>
                </div>
                <div>
                    <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                        <div className={progressVariant} style={{width:progressPercentage}}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

Progress.propTypes = {
    /**
     * Specify a custom `id` for the `<Progress>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Progress>`
     */
    className: PropTypes.string,

    /**
     *Specify the  `<Progress>` Variant.
     *
     */
    variant: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `percentage` for the `<Progress>`
     */
    progressPercentage: PropTypes.string
};

export default Progress;
