import react from "react";
import Avatar from "./Avatar";

export default {
    title: "Avatar",
    component: Avatar,
};

export const square = () => <Avatar variant='square'
    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
    alt="avatar image" />
export const rounded = () => <Avatar variant="circle"
    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
    alt="avatar image" />

