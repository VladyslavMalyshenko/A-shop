import React from "react";

import Rates from "../../utils/Rates";

import "../../styles/components/UI/Card.scss"

type CardProps = {
    title: string,
    image: string,
    price: number,
    status: string,
    id: number,
    rate: number
}

const Card = ({ title, image, price, status, id, rate }: CardProps) => {
    return (
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${image})`}} ></div>
            <p>{ title }</p>
            <p>{ price }</p>
            <p>{ status }</p>
            <div className="rates">
                <Rates rate={rate}/>
            </div>
        </div>
    )
}

export default Card;