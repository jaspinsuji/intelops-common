import React from 'react';
import "../../style/soft-ui-dashboard-tailwind.css"

const SwitchButton = () => {
    return (
        <div id='input sizing' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
            <div class="min-h-6 mb-0.5 flex items-center">
                <input id="remember" class="rounded-10 duration-300 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-300 checked:after:translate-x-5.3 h-5 mt-0.5 relative float-left w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
                <label for="remember" class="inline-block pl-3 mb-0 ml-0 font-normal cursor-pointer select-none text-sm text-slate-700">Remember me</label>
            </div>
        </div>
    )
}

export default SwitchButton