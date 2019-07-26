import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const content = 'text.';
const element = <p>This is a line of {content}</p>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
