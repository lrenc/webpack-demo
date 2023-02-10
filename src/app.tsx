import React from 'react';
import img from './img.png';
import './style.less';
import './app.less';

const App = () => {
  return (
    <div>
      <div>hello world</div>
      <img src={img} />
    </div>
  );
}

export default App;