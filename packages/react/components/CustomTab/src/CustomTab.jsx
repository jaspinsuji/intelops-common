import React from "react";
import PropTypes from 'prop-types';

const Tabs = (props) => {
    const bgcolor = 'bg-darkorange';
    const [openTab, setOpenTab] = React.useState(1);
    const { tabData } = props;

    const getTabs = (openTab, bgcolor) => {
        const tabHeader = tabData && tabData.map((data, index) => (
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={index}>
                <a
                    className={
                        "text-xs font-bold capitalize text-3\.5 px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === data.tab
                            ? "text-white " + bgcolor
                            : "bg-lightgray dark:bg-gray-950")
                    }
                    style={{ 
                        borderRadius: "15px 15px 0px 0px"
                     }}
                    onClick={e => {
                        e.preventDefault();
                        setOpenTab(data.tab);
                    }}
                    data-toggle="tab"
                    href={`#link${data.tab}`}
                    role="tablist"
                >
                    {data.icon} {data.title}
                </a>
            </li>
        ));
        return tabHeader
    }

    const getTabContent = (openTab) => {
        const tabContent = tabData && tabData.map((item, index) => (
            <div className={openTab === item.tab ? "block" : "hidden"} id="link1">
                {item.data}
            </div>
        ));
        return tabContent
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-column bg-gray-200"
                        role="tablist"
                    >
                        {getTabs(openTab, bgcolor)}
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:bg-gray-950 dark:shadow-soft-dark-xl">
                            <div className="tab-content tab-space">
                                {getTabContent(openTab)}
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Tabs.propTypes = {
    /**
    * Specify the data table of the `<Tabs>`
    */
    tabData: PropTypes.array,
 };

export default Tabs;