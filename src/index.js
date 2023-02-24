import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Main 컴포넌트 확인 시에는 root.render(<Main />);
root.render(<Router />);
