import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM1 from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const backDropDOM = document.getElementById('backDrop');

// const Backdrop = () => {
//   return ReactDOM1.createPortal(
//     <div
//       style={
//         {
//           position: 'fixed',
//           top: 0,
//           bottom: 0,
//           left: 0,
//           right: 0,
//           background: 'rgba(0,0,0,.3)',
//           zIndex: 9999
//         }
//       }>
//     </div>, backDropDOM);
//   // return <div
//   // style={
//   //   {
//   //     position: 'fixed',
//   //     top: 0,
//   //     bottom: 0,
//   //     left: 0,
//   //     right: 0,
//   //     background: 'rgba(0,0,0,.3)',
//   //     zIndex: 9999
//   //   }
//   // }
//   // >
//   // </div>
// };

// const Box = props => {
//   return <div
//     style={
//       {
//         width: 100,
//         height: 100,
//         background: props.bgColor,

//         // 开启定位
//         position: 'relative',
//         zIndex: 1
//       }
//     }
//   >
//     {props.children}
//   </div>
// };
// const App = () => {
//   return <div>
//     <Box bgColor='yellowgreen'>
//       <Backdrop />
//     </Box>
//     <Box bgColor='orange' />
//   </div>;
// };
// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


