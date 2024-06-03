import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Typography = (props) => {
    const { id, className, variant, children, color } = props;
    const textColors = {
        fuchsia: 'text-fuchsia-500',
        slate: 'text-slate-700',
        lime: 'text-lime-600',
        green: 'text-emerald-800',
        red: 'text-red-600',
        orange: 'text-orange-400',
        blue: 'text-blue-800',
        teal: 'text-teal-550',
        Yellow: 'text-yellow-400',
        cyan: 'text-cyan-500',
        purple: 'text-purple-800',
        sky: 'text-sky-600',
        gray: 'text-gray-200',
        darkGray: 'text-slate-700',
        white: 'text-white',
        black: 'text-black',
        transparent: ''
    };
    const typographyColor = textColors[color];
    useEffect(() => {
        getVariant();
    });
    const getVariant = () => {
        switch (variant) {
            case 'h1':
                return (
                    <h1 id={id} className={` ${typographyColor} ${className} `}>
                        {children}
                    </h1>
                );
            case 'h2':
                return (
                    <h2 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h2>
                );
            case 'h3':
                return (
                    <h3 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h4>
                );
            case 'h5':
                return (
                    <h5 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h5>
                );
            case 'h6':
                return (
                    <h6 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h6>
                );
            case 'body':
                return <p className={`leading-tight text-base  ${typographyColor} ${className}`}>{children}</p>;
            case 'small':
                return <small className={`font-normal leading-normal  ${typographyColor} ${className}`}>{children}</small>;
            default:
                return (
                    <h4 id={id} className={`${typographyColor} ${className} `}>
                        {children}
                    </h4>
                );
        }
    };

    return <>{getVariant()}</>;
};

Typography.propTypes = {
    /**
     * Specify a custom `id` for the `<Typography>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Typography>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `color` for the `<Typography>`
     */
    color: PropTypes.string,

    /**
     * Applies the typography styles.
     * @default 'h5'
     */
    variant: PropTypes.oneOfType([PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'small']), PropTypes.string])
};

export default Typography;
