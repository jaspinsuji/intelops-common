import React, { useState } from 'react';
import Typography from '../../Typography/src/Typography';
import Button from '../../Button/src/Button';
import PropTypes from 'prop-types';

const PageNotFound = ({ title, message, actionLabel, titleIcon, actionLink }) => {
    return (
        <>
            <main class="mt-0 transition-all duration-200 ease-soft-in-out">
                <section class="my-48">
                    <div class="container">
                        <div class="flex flex-wrap -mx-3">
                            <div class="w-full text-center max-w-full px-3 my-auto shrink-0 lg:flex-0 lg:w-full ">
                                <Typography variant="h3" color="slate">
                                    {titleIcon}
                                    {title}
                                </Typography>
                                <p class="font-normal leading-relaxed text-xl">{message}</p>
                                <a
                                    href={actionLink}
                                    class="inline-block px-6 py-3 mt-6 mb-4 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                                >
                                    {actionLabel}
                                </a>
                            </div>
                            <div class="relative w-full max-w-full px-3 my-auto shrink-0 lg:flex-0 lg:w-6/12"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

PageNotFound.propTypes = {
    /**
     * Specify a custom `message` for the `<PageNotFound>`
     */
    message: PropTypes.string,

    /**
     * Specify a custom button `label` for the `<PageNotFound>`
     */
    actionLabel: PropTypes.string,

    /**
     * Specify a custom `action link` for the `<PageNotFound>`
     */
    actionLink: PropTypes.node
};
export default PageNotFound;
