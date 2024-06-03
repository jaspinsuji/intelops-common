import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
    const [alertVariant, setAlertVariant] = useState('relative w-full p-4 mb-4 text-white border');
    const [closeAlert, setCloseAlert] = useState(false);

    const { id, className, variant, children } = props;

    const handleCloseAlert = () => {
        setCloseAlert(true);
    };

    useEffect(() => {
        switch (variant) {
            case 'fuchsia':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300`);
                break;
            case 'slate':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-slate-600 to-slate-300 border-slate-100`);
                break;
            case 'lime':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-green-600 to-lime-400 border-lime-300`);
                break;
            case 'red':
                setAlertVariant(`${alertVariant} border-red-300 border-solid rounded-lg bg-gradient-to-tl from-red-600 to-rose-400`);
                break;
            case 'orange':
                setAlertVariant(`${alertVariant} border-orange-100 border-solid rounded-lg bg-gradient-to-tl from-red-500 to-yellow-400`);
                break;
            case 'cyan':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 border-cyan-200`);
                break;
            case 'gray':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100`);
                break;
            case 'darkGray':
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 border-slate-100`);
                break;
            default:
                setAlertVariant(`${alertVariant} border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300`);
        }
    }, [variant]);

    return (
        <>
            {!closeAlert ? (
                <>
                    <div alert class={alertVariant} id={id} >
                        {children}
                        <button
                            alert-close
                            type="button"
                            className={`${className} box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2 `}
                            onClick={handleCloseAlert}
                        >
                            <span aria-hidden="true" className="text-center cursor-pointer">
                                &#10005;
                            </span>
                        </button>
                    </div>
                </>
            ) : null}
        </>
    );
};

Alert.propTypes = {
    /**
     * Specify a custom `id` for the `<Alert>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Alert>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `variant` for the `<Alert>`
     */
    variant: PropTypes.string
};

export default Alert;
