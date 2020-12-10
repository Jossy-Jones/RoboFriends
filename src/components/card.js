import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="_cards">
            <img alt="robots" src={`img/test${id}.png`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;