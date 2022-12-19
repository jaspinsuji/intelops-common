import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css"

const Textbox = (props) => {

    const [textboxVarient, setTextboxVarient] = useState('focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none');

    useEffect(() => {
        switch (props.varient) {
            case 'small':
                return setTextboxVarient(textboxVarient + ' py-1');
            case 'default':
                return setTextboxVarient(textboxVarient + ' py-2');
            case 'large':
                return setTextboxVarient(textboxVarient + ' py-3');
            default:
                return textboxVarient
        }
    }, []);

    return (
        <div id='input sizing' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
            <input type="text" placeholder={props.placeholder} className={textboxVarient}></input>
            {/* <input type="text" placeholder="Default input" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none py-1"></input>
            <input type="text" placeholder="Default input" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none py-2"></input>
            <input type="text" placeholder="Default input" class="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none py-3"></input> */}

        </div>
    )
}

export default Textbox