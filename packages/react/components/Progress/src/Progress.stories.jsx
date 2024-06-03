import react from "react";
import Progress from "./Progress";
import '../../../assets/style/soft-ui-dashboard-tailwind.css';

export default {
    title: "Progress",
    component: Progress,
};

export const fuchsia = () => <Progress variant='fuchsia' progressPercentage="40%"> fuchsia</Progress>
export const slate = () => <Progress variant='slate' progressPercentage="50%"> slate</Progress>
export const cyan = () => <Progress variant='cyan' progressPercentage="60%"> cyan</Progress>
export const lime = () => <Progress variant='lime' progressPercentage="70%"> lime</Progress>
export const red = () => <Progress variant='red' progressPercentage="80%"> red</Progress>
export const orange = () => <Progress variant='orange' progressPercentage="90%"> orange</Progress>