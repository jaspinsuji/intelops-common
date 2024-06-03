import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
    const [tabRecord, setTabRecord] = useState(props.tabDetails);

    return (
        <>
            <div
                id="input sizing"
                className="grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible"
            >
                <div class="relative">
                    <ul class="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl" nav-pills role="tablist">
                        {tabRecord &&
                            tabRecord.length > 0 &&
                            tabRecord.map((iteration, index) => {
                                return (
                                    <li class="z-30 flex-auto text-center" key={index}>
                                        <a
                                            href={iteration.href}
                                            class="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                                            nav-link
                                            active
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            <span class="text-slate-700" width="16px" height="16px">
                                                {iteration.icon}
                                            </span>
                                            <span class="ml-1">{iteration.label}</span>
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
};

Tab.propTypes = {
    /**
     * Specify a custom `Tab Details` for the `<Tab>` component.
     */
    tabDetails: PropTypes.array
};

export default Tab;
