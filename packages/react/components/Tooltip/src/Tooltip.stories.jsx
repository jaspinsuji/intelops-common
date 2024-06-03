import react from "react";
import Tooltip from "./Tooltip";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Tooltip",
    component: Tooltip,
};

export const Top = () => <Tooltip alignPlace="top" children="Tooltip Top"/>
export const Bottom = () => <Tooltip alignPlace="bottom" children="Tooltip Bottom"/>
export const Left = () => <Tooltip alignPlace="left" children="Tooltip Left"/>
export const Right = () => <Tooltip alignPlace="right" children="Tooltip Right"/>