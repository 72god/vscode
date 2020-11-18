import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import VirtulDom4 from './components/Myfristcomponent'
import VirtulDom5 from './components/Secondcomponent'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

let message = '这是一条消息'
// let arr = [1, 2, 3, 4, 5, 6]
// let liArr = [<li key={1}>1</li>, <li key={2}>2</li>, <li key={3}>3</li>]
// let users = [{
//   id: 1,
//   username: '小明',
//   age: 12
// }, {
//   id: 2,
//   username: '小明2',
//   age: 12
// }, {
//   id: 3,
//   username: '小明3',
//   age: 12
// },]


// let virtulDom = React.createElement('h1', { id: 'box' }, '这是一个标题')
// let virtulDom2 = <div><h2>这是另一个h2标签</h2></div>

// let virtulDom3 = <div><h2>这是另一个h2标签2</h2></div>
// console.log(virtulDom);

// let virtulDom4 = (<div>
//   <p>这是第一行</p>
//   <p>这是第二行</p>
//   <p>这是第三行</p>
//   <p>这是第四行</p>

//   {users.map((value, index) => {
//     return <ul key={value.id}>
//       <li>{value.id}</li>
//       <li>{value.username}</li>
//       <li>{value.age}</li>
//     </ul>
//   })}
//   <ul>
//     {liArr}
//   </ul>
// </div>)


ReactDOM.render(
  // <React.StrictMode>
  // {/* <App /> */}
  // virtulDom,
  // virtulDom2,
  // virtulDom3,
  // <VirtulDom4 message={message} />,
  <VirtulDom5 message={message} />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
