import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// index.html에서 app이라는 id를 가진 태그 내에 실제로 App이라는 컴포넌트를 그리겠다는 의미
ReactDOM.render(<App/>, document.getElementById('app'));