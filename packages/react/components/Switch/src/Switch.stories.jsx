import react from 'react';
import SwitchButton from './Switch';

export default {
    title: 'SwitchButton',
    component: SwitchButton
};

export const Switch = () => <SwitchButton children="Switch button" />;
export const defaultOn = () => <SwitchButton children="Switch button on" checked={true}/>;
export const disabled = () => <SwitchButton children="Disabled Swich Button" disabled={true}/>;
export const disabledOn = () => <SwitchButton children="Disabled Swich Button On" checked={true} disabled={true}/>;
