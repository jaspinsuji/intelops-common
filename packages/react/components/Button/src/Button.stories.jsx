import react from "react";
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
};

export const contained = () => <Button variant='contained' textTransform='uppercase'> Contained</Button>
export const gradient = () => <Button variant='gradient' fontSize = 'large'> Gradient</Button>
export const outlined = () => <Button variant='outlined' color='transparent' padding="extraLarge" fontSize="large" borderColor='orange' textColor="orange">Outlined</Button>
export const text = () => <Button variant='text' textColor='orange' color='transparent' fontSize="large"> Text</Button>

export const Basic = () => {return(<>
<div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
    <Button variant='contained' color='orange' textTransform='uppercase' margin="leftRight"> Contained</Button>
    <Button variant='gradient'  color='orange' textTransform='uppercase' margin="leftRight"> Gradient</Button>
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' margin="leftRight">Outlined</Button>
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
    </div></>)}

export const sizes = () => {return(<>
<div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
    <Button variant='contained' color='orange' textTransform='uppercase' fontSize = 'extraSmall' margin="leftRight"> Contained</Button>
    <Button variant='contained' color='orange' textTransform='uppercase' fontSize = 'small' margin="leftRight"> Contained</Button>
    <Button variant='contained' color='orange' textTransform='uppercase' fontSize = 'medium' margin="leftRight"> Contained</Button>
    <Button variant='contained' color='orange' textTransform='uppercase' fontSize = 'large' margin="leftRight"> Contained</Button>
    <Button variant='contained'  color='orange' textTransform='uppercase' fontSize = 'extraLarge' margin="leftRight"> Contained</Button>
    </div>
    <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
    <Button variant='gradient'  color='orange' textTransform='uppercase' fontSize = 'small' margin="leftRight"> Gradient</Button>
    <Button variant='gradient'  color='orange' textTransform='uppercase' fontSize = 'medium' margin="leftRight"> Gradient</Button>
    <Button variant='gradient'  color='orange' textTransform='uppercase' fontSize = 'large' margin="leftRight"> Gradient</Button>
    <Button variant='gradient'  color='orange' textTransform='uppercase' fontSize = 'extraLarge' margin="leftRight"> Gradient</Button>
    </div>
    <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' fontSize = 'extraSmall' margin="leftRight">Outlined</Button>
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' fontSize = 'small' margin="leftRight">Outlined</Button>
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' fontSize = 'medium' margin="leftRight">Outlined</Button>
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' fontSize = 'large' margin="leftRight">Outlined</Button>
    <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' fontSize = 'extraLarge' margin="leftRight">Outlined</Button>
    </div>
    <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' fontSize = 'extraSmall' margin="leftRight"> Text</Button>
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' fontSize = 'small' margin="leftRight"> Text</Button>
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' fontSize = 'medium' margin="leftRight"> Text</Button>
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' fontSize = 'large' margin="leftRight"> Text</Button>
    <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' fontSize = 'extraLarge' margin="leftRight"> Text</Button>
    </div></>)}

export const colors = () => {return(<>
    <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
        <Button variant='gradient'  color='fuchsia' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='slate' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='lime' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='red' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='cyan' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='gray' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='darkGray' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        <Button variant='gradient'  color='transparent' textTransform='uppercase' margin="leftRight"> Gradient</Button>
        </div>
        <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
        <Button variant='outlined' color='transparent' borderColor='fuchsia' textColor="fuchsia" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='slate' textColor="slate" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='lime' textColor="lime" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='red' textColor="red" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='orange' textColor="orange" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='blue' textColor="blue" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='teal' textColor="teal" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='Yellow' textColor="Yellow" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='cyan' textColor="cyan" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='sky' textColor="sky" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='gray' textColor="gray" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='darkGray' textColor="darkGray" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='white' textColor="white" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='black' textColor="black" textTransform='uppercase' margin="leftRight">Outlined</Button>
        <Button variant='outlined' color='transparent' borderColor='transparent' textColor="transparent" textTransform='uppercase' margin="leftRight">Outlined</Button>
        </div>
        <div className="flex relative bottom-0 right-0 flex-wrap mt-6 items-center py-6 px-3 border border-solid shrink-0 border-slate-100">
        <Button variant='text' textColor='fuchsia' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='slate' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='lime' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='red' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='orange' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='blue' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='teal' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='yellow' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='cyan' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='sky' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='gray' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='darkGray' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='white' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='black' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        <Button variant='text' textColor='transparent' color='transparent' textTransform='uppercase' margin="leftRight"> Text</Button>
        </div></>)}
