import react from 'react';
import Navbar from './Navbar';

export default {
    title: 'Navbar',
    component: Navbar
};

export const NavbarDesign = () => (
    <Navbar
        className="navbar"
        breadcrumb={true}
        homeUrl=""
        pageTitle="Intelops"
        search={true}
        signin={true}
        signinUrl="#"
        notifications={true}
        notificationDetails={[
            { id: 1, content: 'Payment Successfull', name: 'Laur', href: '' },
            { id: 2, content: 'New album', name: 'scott', href: '' },
            {
                id: 3,
                content: 'Something else here',
                name: 'Laur',
                href: ''
            }
        ]}
        settings={false}
        settingsContent={<div></div>}
    />
);
