import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from "./pages/Login/Login";
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Main 컴포넌트 확인 시에는 root.render(<Main />);
root.render(<Router />);
