import react from "react";
import Icons from "./Icon";

export default {
    title: "Icons",
    component: Icons,
};

export const extraSmallIcon = () => <Icons variant='extraSmall' color="#a3017e" icon="ChartPieIcon"/>
export const smallIcon = () => <Icons variant='small' color="#a3017e" icon="ChartPieIcon"/>
export const mediumIcon = () => <Icons variant='medium' color="#a3017e" icon="ChartPieIcon"/>
export const largeIcon = () => <Icons variant='large'  color="orange" icon="ChartPieIcon"/>
export const extraLargeIcon = () => <Icons variant='extraLarge'  color="#a3017e" icon="ChartPieIcon"/>
export const iconButton = () => <Icons type="button" color="#fff" icon="ChartPieIcon" variant="small"/>