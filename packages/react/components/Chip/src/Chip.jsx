import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Chip = (props) => {
    const [chipVariant, setChipVariant] = useState(
        'py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl'
    );

    const { id, className, variant, children } = props;

    useEffect(() => {
        switch (variant) {
            case 'fuchsia':
                setChipVariant(`${chipVariant} from-purple-700 to-pink-500 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'slate':
                setChipVariant(`${chipVariant} from-slate-600 to-slate-300 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'cyan':
                setChipVariant(`${chipVariant} from-blue-600 to-cyan-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'lime':
                setChipVariant(`${chipVariant} from-green-600 to-lime-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'red':
                setChipVariant(`${chipVariant} from-red-600 to-rose-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'orange':
                setChipVariant(`${chipVariant} from-red-500 to-yellow-400 align-baseline font-bold uppercase leading-none text-white`);
                break;
            case 'gray':
                setChipVariant(`${chipVariant} from-gray-400 to-gray-100 align-baseline font-bold uppercase leading-none text-slate-500`);
                break;
            case 'dark':
                setChipVariant(`${chipVariant} from-gray-900 to-slate-800 align-baseline font-bold uppercase leading-none text-white`);
                break;
            default:
                setChipVariant(`${chipVariant} from-purple-700 to-pink-500 align-baseline font-bold uppercase leading-none text-white`);
        }
    }, [variant]);

    return (
        <div id={id}>
            <span className={`${chipVariant} ${className}`}> {children} </span>
        </div>
    );
};

Chip.propTypes = {
    /**
     * Specify a custom `id` for the `<Chip>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Chip>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     * Specify a custom `variant` for the `<Chip>`
     */
    variant: PropTypes.string
};

export default Chip;
