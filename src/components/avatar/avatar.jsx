import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css"

const Avatar = (props) => {

    const [avatarVarient, setAvatarVarient] = useState('inline-flex items-center justify-center w-12 h-12 mr-2 text-white transition-all duration-200 ease-in-out text-sm');

    useEffect(() => {
        if (props.varient === "square") {
            setAvatarVarient(avatarVarient+ ' rounded-xl');
        }
        if (props.varient === "rounded") {
            setAvatarVarient(avatarVarient+ ' rounded-circle');
        }
    }, [props]);

    return (
        <div id='input sizing' className='grid place-items-center w-full min-h-[140px] bg-[#f8fafc] p-6 border border-blue-grey-50 rounded-lg scroll-mt-48 overflow-x-scroll lg:overflow-visible'>
            <img
                src={props.src}
                alt={props.alt}
                class={avatarVarient}
            />
            {/* <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
                alt="avatar image"
                class="inline-flex items-center justify-center w-12 h-12 mr-2 text-white transition-all duration-200 ease-in-out text-sm rounded-circle"
            /> */}
        </div>
    )
}

export default Avatar