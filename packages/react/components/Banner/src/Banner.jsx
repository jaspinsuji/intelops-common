import React, { useState } from 'react';
import Icons from '../../Icon/src/Icon';
import Button from '../../Button/src/Button';
import Typography from '../../Typography/src/Typography';
import PropTypes from 'prop-types';
const Banner = ({ title, message, buttonLabel= "Go to Dashboard", actionLink, titleIcon, width="6/12" }) => {
    return (
        <>
            <div class={`w-full max-w-full px-3 flex-0 lg:w-${width} banner-center`}>
                <div class="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                    <div class="flex-auto p-4">
                        <div class="flex">
                            <div class="mx-auto">
                                <Typography variant="h3" color="slate">
                                <Icons variant='large' color="orange" icon={titleIcon} className="pr-2" />
                                    {title}
                                </Typography>
                            </div>
                        </div>
                        <hr class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <p class="mt-4 dark:text-white/60 text-center"> 
                            {message}
                        </p>
                        <hr class="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <div class="w-full text-center max-w-full px-3 my-auto shrink-0 lg:flex-0 lg:w-full ">
                        <Button variant='gradient' transform ="uppercase" color='orange' href={actionLink}>{buttonLabel}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Banner.propTypes = {
    /**
     * Specify a custom `title` for the `<Banner>`
     */
    title: PropTypes.string,

    /**
     * Specify a custom `message` for the `<Banner>`
     */
    message: PropTypes.string,

    /**
     * The button label content of the component.
     */
    actionLabel: PropTypes.string,

    /**
     *The button action link of the component.
     *
     */
     actionLink: PropTypes.string,
    
     /**
     *Specify the Banner width.
     *
     */
     width: PropTypes.string,

     /**
     *Specify the icon Name.
     *
     */
     titleIcon: PropTypes.node
};
export default Banner;
