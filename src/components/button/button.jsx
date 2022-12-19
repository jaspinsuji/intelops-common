import React, { useEffect, useState } from 'react';
import "../../style/soft-ui-dashboard-tailwind.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Buttton = (props) => {

    const [buttonVarient, setButtonVarient] = useState('inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft hover:scale-102');
    
    useEffect(() => {
        
        switch (props.varient) {
            case 'contained':
                return setButtonVarient(buttonVarient + ' text-white bg-fuchsia-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs');
            case 'gradient':
                return setButtonVarient(buttonVarient + ' text-white bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs');
            case 'outlined':
                return setButtonVarient(buttonVarient + ' bg-transparent border border-fuchsia-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500');
            case 'text':
                return setButtonVarient(buttonVarient + ' bg-fuchsia-500/0 bg-150 bg-x-25 hover:bg-fuchsia-500/25 active:bg-fuchsia/45 text-fuchsia-500');
            case 'setIcon':
                return setButtonVarient(buttonVarient + 'text-white bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 active:opacity-85 hover:shadow-soft-xs');
            default:
                return buttonVarient
        }
    }, []);

    const handleButtonClick = () => {
        props.onClick()
    }

    return (
        <div style={{ padding: '1.5rem', borderRadius: '0.5rem', backgroundColor: '#f5f3f4' }}>
            {(props.varient === 'setIcon') ?
                <button type="button"
                    className={buttonVarient}
                    onClick={handleButtonClick}>
                    {props.children}
                    <FontAwesomeIcon icon={faList} />
                </button>
                :
                <button type="button"
                    className={buttonVarient}
                    onClick={handleButtonClick}>
                    {props.children}</button>
            }
        </div>
    )
}

export default Buttton