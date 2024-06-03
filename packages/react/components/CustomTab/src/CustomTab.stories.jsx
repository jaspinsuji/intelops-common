import react from 'react';
import CustomTab from './CustomTab';
import VerticalTabs from './VerticalTab';


export default {
    title: 'CustomTab',
    component: CustomTab
};

export const CustomTabDesign = () => <CustomTab
tabsCount={3}
tabData={[
  {
    tab: 1,
    icon: <i className="fas fa-space-shuttle text-base mr-1"></i>,
    title: 'Menu 1',
    data: <h4>Testing Content 1</h4>,
  },
  {
    tab: 2,
    icon: <i className="fas fa-briefcase text-base mr-1"></i>,
    title: 'Menu 2',
    data: <h4>Testing Content 2</h4>,
  },
  {
    tab: 3,
    icon: <i className="fas fa-briefcase text-base mr-1"></i>,
    title: 'Menu 3',
    data: <h4>Testing Content 3</h4>,
  },
]}
/>

export const VerticalTabDesign = () =>  <VerticalTabs
tabsCount={3}
tabData={[
  {
    tab: 1,
    icon: <i className="fas fa-space-shuttle text-base mr-1"></i>,
    title: 'Repository',
    categoryData:'Repository',
    data: (<h4>Testing Content 1</h4>),
  },
  {
    tab: 2,
    icon: <i className="fas fa-briefcase text-base mr-1"></i>,
    title: 'Clusters',
    categoryData:'Cluster',
    data: (<h4>Testing Content 2</h4>),
  },
  {
    tab: 3,
    icon: <i className="fas fa-briefcase text-base mr-1"></i>,
    title: 'Sync History',
    categoryData:'History',
    data: (<h4>Testing Content 3</h4>),
  },
]}
bgColor="gray"
/>
{/* <VerticalTabs/>; */}

