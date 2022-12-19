import React from 'react'
import Button from './src/components/button/button'

function Test() {
    return (
        <div>
            <Button varient="outlined"
                onClick={() => {
                    alert('clicked');
                }}
            >
                Click me
            </Button>
        </div>
    )
}

export default Test