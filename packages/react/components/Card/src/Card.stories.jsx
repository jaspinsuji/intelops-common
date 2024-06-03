import react from "react";
import Card from "./Card";
import StatsCard from "./StatsCard";
import Icons from '../../Icon/src/Icon';


export default {
    title: "Card",
    component: Card,
};

export const CardDesign = () => <Card
    imageURL="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
    caption="Project #3"
    actionName="View Project"
    title="Modren"
    width = "4/12"
    body="As Uber works through a huge amount of internal management turmoil." />

export const CardDesign1 = () => <StatsCard
    title={`Today's Money`} amount="$53,000" width = "4/12" percentageChange="+55%" icon={<Icons variant='medium' color="#fff" icon="ChartPieIcon"/>} />