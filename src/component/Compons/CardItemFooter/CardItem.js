import React from 'react';
import "../CardItemFooter/Cardstyle.scss"



const CardItem = (props)=>{
    return(
        <div className='card'>
            <div className="card__img">
                <img src={props.img}/>
            </div>
            <div className="card__info">
                <div className="card__info--name">{props.name}</div>
                <div className="card__info--price">${props.price}</div>
            </div>
        </div>
    );
}

export default CardItem;