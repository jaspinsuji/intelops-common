import react from "react";
import Typography from "./Typography";

export default {
    title: "Typography",
    component: Typography,
};

export const h1 = () => <Typography variant='h1'> Text - h1</Typography>
export const h2 = () => <Typography variant='h2' color='orange'> Text - h2</Typography>
export const h3 = () => <Typography variant='h3'> Text - h3</Typography>
export const h4 = () => <Typography variant='h4'> Text - h4</Typography>
export const h5 = () => <Typography variant='h5'> Text - h5</Typography>
export const h6 = () => <Typography variant='h6'> Text - h6</Typography>
export const body = () => <Typography variant='body'> Text - body part</Typography>
export const small = () => <Typography variant='small'> Text - small text part</Typography>
