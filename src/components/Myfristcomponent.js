//函数式组件

import React from 'react';

// let liArr = [<li key={1}>1</li>, <li key={2}>2</li>, <li key={3}>3</li>]
let users = [{
    id: 1,
    username: '小明',
    age: 12
}, {
    id: 2,
    username: '小明2',
    age: 12
}, {
    id: 3,
    username: '小明3',
    age: 12
},]

function Myfristcomponent(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.message}</h2>
            {users.map((value, index) => {
                return <ul key={index}>
                    <li>{value.id}</li>
                    <li>{value.username}</li>
                    <li>{value.age}</li>
                </ul>
            })}
        </div>)
}

export default Myfristcomponent;