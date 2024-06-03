import react from "react";
import Tablist from "./Tab";
import Icons from '../../Icon/src/Icon';

export default {
    title: "Tablist",
    component: Tablist,
};

export const TablistDesign = () => <Tablist
tabDetails={[
  {
    id: 1,
    label: "App",
    url: "#",
    icon: <Icons variant='extraSmall' color="slate" icon="ViewListIcon"/>,
  },
  {
    id: 2,
    label: "Messages",
    url: "#",
    icon: <Icons variant='extraSmall' color="slate" icon="MailIcon"/>,
  },
  {
    id: 3,
    label: "Settings",
    url: "#",
    icon: <Icons variant='extraSmall' color="slate" icon="AdjustmentsIcon"/>,
  },
]}/>