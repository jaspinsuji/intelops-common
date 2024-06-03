import react from 'react';
import Modal from './Modal';

export default {
    title: 'Modal',
    component: Modal
};

export const ModalDesign = () => (
    <>
        <button
            type="button"
            data-toggle="modal"
            data-target="#import"
            class="inline-block px-8 py-2 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs border-fuchsia-500 text-fuchsia-500 hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:scale-100 active:border-fuchsia-500 active:bg-fuchsia-500 active:text-white hover:active:border-fuchsia-500 hover:active:bg-transparent hover:active:text-fuchsia-500 hover:active:opacity-75"
        >
            Import
        </button>
        <Modal
            header="Modal Testing"
            modalClose={true}
            modalWidth={'w-auto'}
            content={<div>Content </div>}
            footer={true}
            footerContent={
                <div>
                    <button
                        type="button"
                        class="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        class="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-slate-600 to-slate-300 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                    >
                        Close
                    </button>
                </div>
            }
        />
    </>
);
