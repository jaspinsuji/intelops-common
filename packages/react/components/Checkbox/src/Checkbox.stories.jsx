import react from 'react';
import Checkbox from './Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox
};

export const CheckboxDesign = () => <Checkbox children="Checkbox" />;
export const defaultChecked = () => <Checkbox children="Checked" checked={true}/>;
export const disabled = () => <Checkbox children="Unchecked" disabled={true}/>;
export const disabledChecked = () => <Checkbox children="Checked" checked={true} disabled={true}/>;
