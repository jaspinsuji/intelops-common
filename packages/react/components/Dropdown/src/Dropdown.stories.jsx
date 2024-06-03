import react from "react";
import Dropdownlist from "./Dropdown";

export default {
    title: "Dropdownlist",
    component: Dropdownlist,
};

export const Dropdown = () => (
    <Dropdownlist
        children="Dropdown"
        className="mybutton"
        content={[
            { id: 1, option: 'Action', value: '', href: '' },
            { id: 2, option: 'Another action', value: '', href: '' },
            {
                id: 3,
                option: 'Something else here',
                value: '',
                href: ''
            }
        ]}
    />
);