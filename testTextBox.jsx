import React from 'react'
import Textbox from './src/components/textBox/textbox';

const TestTextBox = () => {
    return (
        <div>
            <Textbox varient="small"
                type="text" 
                placeholder="input Text"
            >
            </Textbox>
        </div>
    )
}

export default TestTextBox