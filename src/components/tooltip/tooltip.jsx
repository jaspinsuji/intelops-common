import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css"

const Tooltip = (props) => {

    // const [tooltipVarient, setTooltipVarient] = useState('focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none');

    // useEffect(() => {
    //     switch (props.varient) {
    //         case 'top':
    //             return setTooltipVarient(tooltipVarient + ' py-1');
    //         case 'right':
    //             return setTooltipVarient(tooltipVarient + ' py-2');
    //         case 'bottom':
    //             return setTooltipVarient(tooltipVarient + ' py-3');
    //         case 'left':
    //             return setTooltipVarient(tooltipVarient + ' py-3');
    //         default:
    //             return tooltipVarient
    //     }
    // }, []);

    return (
        <div id='input sizing' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
            <button type="button" data-placement="top" data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">Tooltip top</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
            </div>

            <button type="button" data-placement="top" data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">Tooltip top</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
            </div>

            <button type="button" data-placement="right" data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">Tooltip right</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
            </div>

            <button type="button" data-placement="bottom" data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">Tooltip bottom</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
            </div>

            <button type="button" data-placement="left" data-target="tooltip_trigger" class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs">Tooltip left</button>
            <div class="z-50 hidden px-2 py-1 text-center text-white bg-black rounded-lg max-w-46 text-sm" id="tooltip" role="tooltip" data-target="tooltip">
                My tooltip
                <div id="arrow" class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow></div>
            </div>
        </div>
    )
}

export default Tooltip