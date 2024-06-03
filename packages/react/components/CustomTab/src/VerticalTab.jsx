// src/components/VerticalTabs.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const VerticalTabs = ({ tabData, bgColor = 'gray' }) => {
    const [activeTab, setActiveTab] = useState(tabData?.[0]?.title || '');
    const [activeTabContent, setActiveTabContent] = useState('');

    const handleClick = (category) => {
        setActiveTab(category);
        const activeContent = tabData.find((data) => data.title === category);
        setActiveTabContent(activeContent.data);
    };

    useEffect(() => {
        if (tabData && tabData.length > 0) {
            setActiveTab(tabData?.[0]?.title);
            const activeContent = tabData.find((data) => data.title === tabData?.[0]?.title);
            if (activeContent) {
                setActiveTabContent(activeContent.data);
            }
        }
    }, [tabData]);

    const menuBgColors = {
        fuchsia: 'bg-fuchsia-500',
        slate: 'bg-slate-700',
        lime: 'bg-lime-500',
        red: 'bg-red-600',
        orange: 'bg-orange-400',
        blue: 'bg-blue-800',
        teal: 'bg-teal-550',
        Yellow: 'bg-yellow-400',
        cyan: 'bg-cyan-500',
        sky: 'bg-sky-600',
        gray: 'bg-gray-200',
        darkGray: 'bg-slate-700',
        white: 'bg-white',
        black: 'bg-black',
        transparent: ''
    };
    const bgColors = menuBgColors[bgColor];
    return (
        <div className="flex">
            <div className={`w-1/4 ${bgColors} dark:bg-gray-950`}>
                <div className="p-4">
                    {tabData &&
                        tabData.map((item, index) => (
                            <div
                                key={index}
                                className={`p-2 cursor-pointer secutity-tools ${
                                    activeTab === item.title ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                                }`}
                                onClick={() => handleClick(item.title)}
                            >
                                {item.title}
                                {activeTab === item.title && <i className="pl-4 fas fa-chevron-right mr-1 text-3\.5"></i>}
                            </div>
                        ))}
                </div>
            </div>
            <div className="w-3/4 p-4">
                <div className="border p-4">{activeTabContent}</div>
            </div>
        </div>
    );
};

VerticalTabs.propTypes = {
    /**
     * Specify the data table of the `<VerticalTabs>`
     */
    tabData: PropTypes.array
};

export default VerticalTabs;
