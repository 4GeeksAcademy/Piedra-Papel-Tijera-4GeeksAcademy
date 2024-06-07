import React from "react";

export const Choice = ({ value, valueSelect }) => <div className="card p-5" onClick={() => valueSelect(value)}>
    {value === 'rock' ? <i className="fa-regular fa-2xl fa-hand-back-fist"></i> : ''}
    {value === 'paper' ? <i className="fa-regular fa-2xl fa-hand"></i> : ''}
    {value === 'scissors' ? <i className="fa-regular fa-2xl fa-hand-scissors"></i> : ''}
</div>