import React, { useState } from 'react';

import TextField from './packages/react/components/TextField/src/TextField';
import Button from './packages/react/components/Button/src/Button';
import Alert from './packages/react/components/Alert/src/Alert';
import Chip from './packages/react/components/Chip/src/Chip';
import Progress from './packages/react/components/Progress/src/Progress';
import Typography from './packages/react/components/Typography/src/Typography';
import Textarea from './packages/react/components/Textarea/src/Textarea';
import Card from './packages/react/components/Card/src/Card';
import StatsCard from './packages/react/components/Card/src/StatsCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        console.log('handleChange value=>', e.target.value);
    };
    return (
        <div>
            <TextField onChange={handleChange} varient="large" id="cdcf" />
            <Button>Button</Button>
            <Button varient="outlined">
                <FontAwesomeIcon icon={faList} />
            </Button>
            <Alert varient="slate">Helooovijhbnjkhjgvbn</Alert>
            <Chip>Heloo</Chip>
            <Progress varient="fuchsia" progressPercentage="100%" />
            <Typography variant="h6">Hello</Typography>
            <Textarea>Heloooo world</Textarea>
            <div>
                <StatsCard title={`Today's Money`} amount="$53,000" percentageChange="+55%" icon={<FontAwesomeIcon icon={faList} />} />
            </div>
            <Card
                imageURL="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/home-decor-1.jpg"
                caption="Project #3"
                actionName="View Project"
                title="Modren"
                body="As Uber works through a huge amount of internal management turmoil."
                avatarList={[
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-4.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-4.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    },
                    {
                        imageURL:
                            'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/team-3.jpg'
                    }
                ]}
            />
        </div>
    );
};
export default App;
