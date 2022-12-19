import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css";

const Progress = (props) => {
    const [progressVarient, setProgressVarient] = useState('bg-gradient-to-tl w-4/5 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white');

    const handleProgressVarient = () => {
        switch (props.varient) {
            case 'fuchsia':
                return setProgressVarient(progressVarient + ' from-purple-700 to-pink-500');
            case 'slate':
                return setProgressVarient(progressVarient + ' from-slate-600 to-slate-300');
            case 'cyan':
                return setProgressVarient(progressVarient + ' from-blue-600 to-cyan-400');
            case 'lime':
                return setProgressVarient(progressVarient + ' from-green-600 to-lime-400');
            case 'red':
                return setProgressVarient(progressVarient + ' from-red-600 to-rose-400');
            case 'orange':
                return setProgressVarient(progressVarient + ' from-red-500 to-yellow-400');
            default:
                return progressVarient
        }
    }

    useEffect(() => {
        handleProgressVarient();
    }, []);

    return (
        <div id='dismissible alert' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>

            <div class="w-full mb-5">
                <div class="flex mb-2">
                    <span class="mr-2 font-semibold leading-normal capitalize text-sm">{props.children}</span>
                    <span class="ml-auto font-semibold leading-normal text-sm">{props.progressPercentage}</span>
                </div>
                <div>
                    <div class="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                        <div class={progressVarient}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress