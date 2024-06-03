import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const [buttonVariant, setButtonVariant] = useState(
        'inline-block font-bold text-center align-middle transition-all rounded-lg cursor-pointer leading-pro ease-soft-in tracking-tight-soft hover:scale-102'
    );
    const {
        id,
        name,
        className,
        children,
        variant,
        color = 'orange',
        textColor = 'darkGray',
        borderColor = 'orange',
        fontSize = 'extraSmall',
        padding = 'medium',
        href,
        type = 'button',
        textTransform,
        disabled,
        dataTarget,
        dataToggle,
        dataId,
        shadow = ' shadow-soft-xs',
        margin='none',
        onClick = () => {}
    } = props;

    const paddingSizes = {
        extraSmall: 'px-2 py-1',
        small: 'px-4 py-1.5',
        medium: 'px-6 py-3',
        large: 'px-7 py-4',
        extraLarge: 'px-8 py-4'
    };
    const marginSizes = {
        left: 'ml-2',
        right: 'mr-2',
        top: 'mt-2',
        bottom: 'mb-2',
        leftRight: 'mx-2',
        topBottom: 'my-2',
        none:'m-0'
    };

    const textSize = {
        extraSmall: 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        extraLarge: 'text-xl'
    };
    const buttonsColor = {
        fuchsia: 'bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300',
        slate: 'bg-gradient-to-tl from-slate-600 to-slate-300 border-slate-100',
        lime: 'bg-gradient-to-tl from-green-600 to-lime-400 border-lime-300',
        red: 'bg-gradient-to-tl from-red-600 to-rose-400',
        orange: 'bg-gradient-to-tl from-red-500 to-yellow-400',
        cyan: 'bg-gradient-to-tl from-blue-600 to-cyan-400 border-cyan-200',
        gray: 'bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100',
        darkGray: 'bg-gradient-to-tl from-gray-900 to-slate-800 border-slate-100',
        transparent: ''
    };

    const textsColors = {
        fuchsia: 'text-fuchsia-500',
        slate: 'text-slate-700',
        lime: 'text-lime-600',
        red: 'text-red-600',
        orange: 'text-orange-400',
        blue: 'text-blue-800',
        teal: 'text-teal-550',
        Yellow: 'text-yellow-400',
        cyan: 'text-cyan-500',
        sky: 'text-sky-600',
        gray: 'text-gray-200',
        darkGray: 'text-slate-800',
        white: 'text-white',
        black: 'text-black',
        transparent: ''
    };

    const bordersColor = {
        fuchsia: 'border-fuchsia-300',
        slate: 'border-slate-700',
        lime: 'border-lime-500',
        red: 'border-red-600',
        orange: 'border-orange-400',
        blue: 'border-blue-800',
        teal: 'border-teal-550',
        Yellow: 'border-yellow-400',
        cyan: 'border-cyan-200',
        sky: 'border-sky-600',
        gray: 'border-gray-200',
        darkGray: 'border-slate-700',
        white: 'border-white',
        black: 'border-black',
        transparent: 'border-transparent'
    };

    const buttonColor = buttonsColor[color];
    useEffect(() => {
        const textColors = textsColors[textColor];
        const borderColors = bordersColor[borderColor];
        const paddingSize = paddingSizes[padding];
        const marginSize = marginSizes[margin];
        const fontSizes = textSize[fontSize];
        switch (variant) {
            case 'contained':
                setButtonVariant(
                    `${buttonVariant} mr-3 text-white shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs ${paddingSize} ${fontSizes} ${marginSize} `
                );
                break;
            case 'gradient':
                setButtonVariant(
                    `${buttonVariant}  mr-3 text-white shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs ${paddingSize} ${fontSizes} ${marginSize} `
                );
                break;
            case 'outlined':
                setButtonVariant(
                    `${buttonVariant} mr-3 bg-none border bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs ${shadow} ${paddingSize} ${borderColors} ${textColors} ${fontSizes} ${marginSize}`
                );
                break;
            case 'text':
                setButtonVariant(
                    ` ${buttonVariant}  ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 ${fontSizes}  ${textColors} ${marginSize}`
                );
                break;
            case 'setIcon':
                setButtonVariant(
                    `${buttonVariant} px-6 mr-3 text-white shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs' ${paddingSize} ${fontSizes} ${marginSize} `
                );
                break;
            default:
                setButtonVariant(buttonVariant);
        }
    }, []);

    const handleButtonClick = (event) => {
        onClick(event);
    };

    return (
        <div className="buttonWrapper">
            {disabled ? (
                <button
                    id={id}
                    name={name}
                    type={type}
                    data-Id={dataId}
                    disabled={disabled}
                    href ={href}
                    className={`${buttonVariant} ${textTransform} ${className} ${
                        disabled ? 'bg-slate-500 setup_disable' : buttonColor
                    }`}
                    onClick={handleButtonClick}
                >
                    {children}
                </button>
            ) : dataToggle === 'modal' ? (
                <button
                    id={id}
                    name={name}
                    type={type}
                    data-target={dataTarget}
                    data-Id={dataId}
                    data-toggle={dataToggle}
                    data-dismiss={dataDismiss}
                    className={` ${buttonVariant} ${textTransform} ${className} ${buttonColor} `}
                    onClick={handleButtonClick}
                >
                    {children}
                </button>
            ) : (
                <button
                    id={id}
                    name={name}
                    type={type}
                    data-Id={dataId}
                    href ={href}
                    className={`${buttonVariant} ${textTransform} ${className} ${buttonColor} `}
                    onClick={handleButtonClick}
                >
                    {children}
                </button>
            )}
        </div>
    );
};

Button.propTypes = {
    /**
     * Specify a custom `id` for the `<button>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `name` for the `<button>`
     */
    name: PropTypes.string,

    /**
     * Specify a custom `className` for the `<button>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Type of the button component.
     */
    type: PropTypes.string,

    /**
     * If `true`, the component is disabled
     */
    disabled: PropTypes.bool,

    /**
     * `onClick` handler that is called whenever the
     * `<button>` is clicked
     */
    onClick: PropTypes.func,

    /**
     *Specify the  Button Variant.
     *
     */
    variant: PropTypes.string,

    /**
     *Specify the  font size of the button.
     *
     */
     fontSize: PropTypes.string,

    /**
     *Specify the  Button background color.
     *
     */
    color: PropTypes.string,

    /**
     *Specify the  Button padding.
     *
     */
    padding: PropTypes.string,

    /**
     *Specify the  Button text color.
     *
     */
    textColor: PropTypes.string,

    /**
     *Specify the  Button border color.
     *
     */
    borderColor: PropTypes.string,

    /**
     *Specify the  Button  text transformation.
     *
     */
     textTransform: PropTypes.string,

     /**
      *Specify the  Button padding.
      *
      */
      padding: PropTypes.string,

      /**
      *Specify the  Button margin.
      *
      */
      margin: PropTypes.string,

      /**
       *Specify the  Button shadow.
       *
       */
      shadow: PropTypes.string,

      /**
       *Specify the  Button link.
       *
       */
       href: PropTypes.string,

       /**
        *Specify the Modal Button target.
        *
        */
        dataTarget: PropTypes.string,

        /**
        *Specify the Modal Button.
        *
        */
        dataToggle: PropTypes.string,

        /**
        *Specify the button Data Id.
        *
        */
        dataId: PropTypes.string
};

export default Button;