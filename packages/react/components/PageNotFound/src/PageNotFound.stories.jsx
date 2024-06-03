import React from 'react';
import PageNotFound from './PageNotFound';
import Icons from '../../Icon/src/Icon';

export default {
  title: 'PageNotFound',
  component: PageNotFound,
};

export const PageNotFoundDesign = () =><PageNotFound 
title= "Access Denied"
actionLabel="Go to Management" 
actionLink="https://www.google.com/" 
titleIcon={<Icons variant="large" color="slate" icon="InformationCircleIcon" className="pr-2" />}
message="We suggest you to connect with Organisation admin and get the Capten roles assigned."/>;
