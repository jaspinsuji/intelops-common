import react from 'react';
import TextField from './TextField';
import '../../../assets/style/soft-ui-dashboard-tailwind.css';
import Icons from '../../Icon/src/';

export default {
    title: 'TextField',
    component: TextField
};

export const small = () => <TextField variant="small" placeholder={'Small Text'} />;
export const defaultText = () => <TextField variant="default" placeholder={'default Text'} />;
export const large = () => <TextField variant="large" placeholder={'large Text'} />;
export const iconInput = () => (
    <TextField
        variation="iconInput"
        variant="large"
        iconName={<Icons icon="SearchIcon" variant="extraSmall" color="slate" />}
        placeholder={'Type here ....'}
    />
);
export const filled = () => <TextField variation="filled" variant="large" placeholder={'Filled input'} className="py-2" />;
export const standard = () => (
    <TextField
        variation="standard"
        variant="large"
        iconName={<Icons icon="UserIcon" variant="extraSmall" color="slate" />}
        placeholder={'Enter Name'}
    />
);
export const disabled = () => (
    <TextField variation="disabled" variant="default" disabled="true" placeholder={'Disabled Text'} />
);
export const readonly = () => (
    <TextField variation="readonly" variant="default" value="Disabled readonly input" placeholder={'Disabled readonly input'} />
);
