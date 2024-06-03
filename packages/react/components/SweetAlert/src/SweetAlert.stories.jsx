import React from "react";
import SweetAlert from "./SweetAlert";

export default {
    title: 'SweetAlert',
    component: SweetAlert
};

export const Basic = () => <SweetAlert children="Try me!" variant='basic' message="Basic example"/>;
export const Success = () => <SweetAlert children="Try me!" variant='success-message' message="This is a sucess message"/> ;
export const CustomHtml = () => <SweetAlert children="Try me!" variant='custom-html' message="Custom HTML description"/>;
export const InputField = () => <SweetAlert children="Try me!" variant='input-field' message="Github avatar request"/>;
export const TitleText = () => <SweetAlert children="Try me!" variant='title-and-text' message="A title with a text under"/>;
export const AutoClose = () => <SweetAlert children="Try me!" variant='auto-close' message="A message with auto close"/>;
export const Confirmation = () => <SweetAlert children="Try me!" variant='warning-message-and-confirmation' message="A warning message, with a function attached to the 'Confirm' Button..."/>;
export const Cancel = () => <SweetAlert children="Try me!" variant='warning-message-and-cancel' message="...and by passing a parameter, you can execute something else for 'Cancel'"/>;
export const rtlLanguage = () => <SweetAlert children="Try me!" variant='rtl-language' message="Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages"/>;