import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const [avatarVariant, setAvatarVariant] = useState(
        'inline-flex items-center justify-center mr-2 text-white transition-all duration-200 ease-in-out text-sm'
    );

    const { id, className, children, variant, size } = props;
    const avatarSize = {
        xsmall: 'w-6 h-6',
        small: 'w-9 h-9',
        medium: 'w-12 h-12',
        large: 'w-14 h-14',
        xlarge: 'w-19 h-19'
    };

    useEffect(() => {
        const imageSize = avatarSize[size];
        if (variant === 'square') {
            setAvatarVariant(`${avatarVariant} rounded-xl ${imageSize}`);
        }
        if (variant === 'circle') {
            setAvatarVariant(`${avatarVariant} rounded-circle ${imageSize}`);
        }
    }, []);
    return (
        // <div id={id} className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
        <div id={id} className={className}>
            <img src={props.src} alt={props.alt} class={avatarVariant} size={avatarSize} />
            {children}
        </div>
    );
};

Avatar.propTypes = {
    /**
     * Specify a custom `id` for the `<Avatar>`
     */
    id: PropTypes.string,

    /**
     * Specify a custom `className` for the `<Avatar>`
     */
    className: PropTypes.string,

    /**
     * The content of the component.
     */
    children: PropTypes.node,

    /**
     *Specify the  Avatar Variant - shape.
     *
     */
     variant: PropTypes.string,
    
     /**
     *Specify the Avatar size.
     *
     */
    size: PropTypes.string
};

export default Avatar;
