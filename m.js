import React from "react";
function Food({name, picture}) {
    return(
        <div>
            <h1>I like {name} </h1>
            <img src = {picture} />
        </div>
    );
}
const foodILike = [
    {
        name:'kimchi',
        image:'https://bit.ly/3d14HVx',
    },
    {
        name:'Samgyeopsal',
        image:'http://asq.kr/wttMFjg1IkYC',
    }
];
function renderFood(dish){
    return<Food name={dish.name} picture={dish.image} />;
}

function App(){
    return(
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}
