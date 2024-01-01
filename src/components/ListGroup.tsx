import React, { useState } from "react";
interface Props {
    cities: string[],
    heading: string
}
export default function ListGroup({ cities, heading }: Props) {
    const [current, setCurrent] = useState(0)
    function handleClick(i: number) {
        setCurrent(i)
    }
    return (
        <>
            <h1>{heading}</h1>
            {cities.length === 0 && <p>No Item found</p>}
            <ul className="list-group">
                {cities.map((city, i) => (<li key={city} onClick={() => handleClick(i)} className={`list-group-item ${(current === i) ? 'active' : ''}`} >{city}</li>))}
            </ul>
        </>
    )
}