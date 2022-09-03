import React from 'react';
import OutputScreenRow from './outputScreenRow';


// Functional Component.
// Use this guy to hold 2 screen rows
const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value = {props.question}/>
            <OutputScreenRow value = {props.answer}/>
        </div>
    )
}

export default OutputScreen;