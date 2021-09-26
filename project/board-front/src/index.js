import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 부트스트랩 적용
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// index.js에서 App.js에서 정의된 내용을 렌더링 한다
ReactDOM.render(
  <React.StrictMode>
    <App />               
  </React.StrictMode>,
  document.getElementById('root')
);

