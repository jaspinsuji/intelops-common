import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css";

const Chips = (props) => {
    const [chipsVarient, setChipsVarient] = useState('py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl align-baseline font-bold uppercase leading-none ');

    const handleAlertVarient = () => {
        switch (props.varient) {
            case 'fuchsia':
                return setChipsVarient(chipsVarient + ' from-purple-700 to-pink-500 text-white');
            case 'slate':
                return setChipsVarient(chipsVarient + ' from-slate-600 to-slate-300 text-white');
            case 'cyan':
                return setChipsVarient(chipsVarient + ' from-blue-600 to-cyan-400 text-white');
            case 'lime':
                return setChipsVarient(chipsVarient + ' from-green-600 to-lime-400 text-white');
            case 'red':
                return setChipsVarient(chipsVarient + ' from-red-600 to-rose-400 text-white');
            case 'orange':
                return setChipsVarient(chipsVarient + ' from-red-500 to-yellow-400 text-white');
            case 'gray':
                return setChipsVarient(chipsVarient + ' from-gray-400 to-gray-100 text-slate-500');
            case 'darkGray':
                return setChipsVarient(chipsVarient + ' from-gray-900 to-slate-800 text-white');
            default:
                return chipsVarient
        }
    }

    useEffect(() => {
        handleAlertVarient();
    }, []);

    return (
        <div id='dismissible alert' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
           
            <span class={chipsVarient}>chip content</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-slate-600 to-slate-300 align-baseline font-bold uppercase leading-none text-white">chip slate</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-blue-600 to-cyan-400 align-baseline font-bold uppercase leading-none text-white">chip cyan</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-green-600 to-lime-400 align-baseline font-bold uppercase leading-none text-white">chip lime</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-red-600 to-rose-400 align-baseline font-bold uppercase leading-none text-white">chip red</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-red-500 to-yellow-400 align-baseline font-bold uppercase leading-none text-white">chip orange</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-gray-400 to-gray-100 align-baseline font-bold uppercase leading-none text-slate-500">chip gray</span>
            <span class="py-2.2 px-3.6 text-xs rounded-1.8 inline-block whitespace-nowrap text-center bg-gradient-to-tl from-gray-900 to-slate-800 align-baseline font-bold uppercase leading-none text-white">chip dark</span>
        </div>
    )
}

export default Chips