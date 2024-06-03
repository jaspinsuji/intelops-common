import react from 'react';
import Banner from './Banner';

export default {
    title: 'Banner',
    component: Banner
};

export const BannerDesign = () => (
<Banner 
    width ='6/12'
    title="No Page Found" 
    message="This is a banner message" 
    buttonLabel="Banner Action Label" 
    actionLink="https://www.google.com/" 
    titleIcon="InformationCircleIcon"
/>);
