import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css";

const AlertBox = (props) => {
    const [alertVarient, setAlertVarient] = useState('relative p-4 pr-12 mb-4 text-white border rounded-lg bg-gradient-to-tl');

    const handleAlertVarient = () => {
        switch (props.varient) {
            case 'fuchsia':
                return setAlertVarient(alertVarient + ' border-solid from-purple-700 to-pink-500 border-fuchsia-300');
            case 'slate':
                return setAlertVarient(alertVarient + ' border-solid from-slate-600 to-slate-300 border-slate-100');
            case 'lime':
                return setAlertVarient(alertVarient + ' border-solid from-green-600 to-lime-400 border-lime-300');
            case 'red':
                return setAlertVarient(alertVarient + ' border-red-300 border-solid from-red-600 to-rose-400');
            case 'orange':
                return setAlertVarient(alertVarient + ' border-orange-100 border-solid from-red-500 to-yellow-400');
            case 'cyan':
                return setAlertVarient(alertVarient + ' border-solid from-blue-600 to-cyan-400 border-cyan-200');
            case 'gray':
                return setAlertVarient(alertVarient + ' border-solid from-gray-400 to-gray-100 border-slate-100');
            case 'darkGray':
                return setAlertVarient(alertVarient + ' border-solid from-gray-900 to-slate-800 border-slate-100');
            default:
                return alertVarient
        }
    }

    useEffect(() => {
        handleAlertVarient();
    }, []);

    return (
        <div id='dismissible alert' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
            <div alert
                className={alertVarient}>
                A simple fuchsia alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button alert-close type="button" class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>

            {/* <div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300">
                A simple fuchsia alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button alert-close type="button" class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-slate-600 to-slate-300 border-slate-100">
                A simple slate alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-green-600 to-lime-400 border-lime-300">
                A simple lime alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-red-300 border-solid rounded-lg bg-gradient-to-tl from-red-600 to-rose-400">
                A simple red alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-orange-100 border-solid rounded-lg bg-gradient-to-tl from-red-500 to-yellow-400">
                A simple orange alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 border-cyan-200">
                A simple cyan alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-gray-400 to-gray-100 border-slate-100">
                A simple gray alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm bg-transparent border-0 rounded text-slate-700 w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            <div alert class="relative p-4 pr-12 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-gray-900 to-slate-800 border-slate-100">
                A simple dark gray alert with
                <a href="javascript:;" class="font-semibold text-white">an example link</a>. Give it a click if you like.
                <button type="button" alert-close class="box-content absolute top-0 right-0 p-4 text-sm text-white bg-transparent border-0 rounded w-4 h-4 z-2">
                    <span aria-hidden="true" class="text-center cursor-pointer">&#10005;</span>
                </button>
            </div>
            </div> */}
        </div>
    )
}

export default AlertBox