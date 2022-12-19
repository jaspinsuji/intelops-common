import React from 'react'
import Progress from './src/components/progress/progress';

const TestProgressBar = () => {
    return (
        <div>
            <Progress varient="cyan" progressPercentage="80%">progress slate
            </Progress>
        </div>
    )
}

export default TestProgressBar