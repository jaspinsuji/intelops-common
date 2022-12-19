import React, { useState } from 'react'
import Button from './src/components/button/button';
import ButttonTest from './src/components/button/butttonTest';

function Test1() {
    return (
        <div>
            <ButttonTest varient={'outlined'}
                onClick={() => {
                    alert('clicked');
                }}>
               Click me
            </ButttonTest>
            {/* <Button varient={'setIcon'}>
            User2
            </Button> */}
        </div>
    )
}

export default Test1