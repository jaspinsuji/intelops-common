import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomCheckList from './CustomCheckList';

export default {
  title: 'CustomCheckList',
  component: CustomCheckList,
};

export const Unchecked = () => (
  <CustomCheckList
    title="Unchecked Item"
    listData="abc,test,capten,management"
    onChange={action('Checkbox Checked')}
    checked={false}
  />
);

export const Checked = () => (
  <CustomCheckList
    title="Checked Item"
    listData="abc,test,capten,management"
    onChange={action('Checkbox Unchecked')}
    checked={true}
  />
);


