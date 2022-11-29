import React from "react";
import ProTypes from 'prop-types';

function Food({name, picture}) {
    return(
        <div>
            <h1>I like {name} </h1>
            <h4>{rating}/5.0</h4>
            <img src = {picture} />
        </div>
    );
}
const foodILike = [
    {
        id: 1,
        name:'kimchi',
        image:'https://bit.ly/3d14HVx',
        rating:4.9,
    },
    {
        id:2,
        name:'Samgyeopsal',
        image:'http://asq.kr/wttMFjg1IkYC',
        rating:5,
    }
];
function App(){
    return(
        <div>
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
            ))}
        </div>
    );
}
