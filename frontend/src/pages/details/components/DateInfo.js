import React from "react";
import './DateInfo.css';

const DateInfo = ({game}) => {
    return (
        <div className="dateInfo">{game.released}</div>
    )
}

export default DateInfo;