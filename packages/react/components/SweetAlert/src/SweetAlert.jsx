import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/src/Button';

const SweetAlert = (props) => {
    const { className, children, variant, width = '4/12', message, onClick = () => {}, type, subMessage = ''} = props;
    const [alertVariant, setAlertVariant] = useState("soft.showSwal('basic')");

    useEffect(() => {
        switch (variant) {
            case 'basic':
                setAlertVariant("soft.showSwal('basic')");
                break;
            case 'success-message':
                setAlertVariant("soft.showSwal('success-message')");
                break;
            case 'custom-html':
                setAlertVariant("soft.showSwal('custom-html')");
                break;
            case 'input-field':
                setAlertVariant("soft.showSwal('input-field')");
                break;
            case 'title-and-text':
                setAlertVariant("soft.showSwal('title-and-text')");
                break;
            case 'auto-close':
                setAlertVariant("soft.showSwal('auto-close')");
                break;
            case 'warning-message-and-confirmation':
                setAlertVariant("soft.showSwal('warning-message-and-confirmation')");
                break;
            case 'warning-message-and-cancel':
                setAlertVariant("soft.showSwal('warning-message-and-cancel')");
                break;
            case 'rtl-language':
                setAlertVariant("soft.showSwal('rtl-language')");
                break;
            default:
                setAlertVariant(alertVariant);
        }
    }, []);

    return (
        <>
            <div>
                <div class={`w-full max-w-full px-3 shrink-0 md:flex-0 md:w-${width} `}>
                    <div class="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                        <div class="flex-auto p-6 text-center">
                            <p>{message}</p>
                            <Button variant="gradient" color="orange" transform="uppercase" onclick={alertVariant}>
                                {children}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
SweetAlert.propTypes = {
    /**
     * Specify a custom `className` for the `<button>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * `onClick` handler that is called whenever the
     * `<button>` is clicked
     */
    onClick: PropTypes.func,

    /**
     *Specify the  `<SweetAlert>` Variant.
     *
     */
    variant: PropTypes.string,

    /**
     *Specify the  `<SweetAlert>` width.
     *
     */
     width: PropTypes.string,

    /**
     *Specify the  `<SweetAlert>` message.
     *
     */
     message: PropTypes.string
};

export default SweetAlert;
