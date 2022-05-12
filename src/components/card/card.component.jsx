import React from 'react'
import './card.css'

const Card = ({ monster }) => {
    const { email, id, name } = monster;
    return (
        <div
            className='card-container'
            key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                style={{ width: 150, marginLeft: '16%' }}
            />
            <h2 style={{ fontFamily: 'cursive' }}> {name} </h2>
            <p style={{ fontFamily: 'monospace', color: 'burlywood' }}>{email}</p>
        </div>
    )
}
export default Card;