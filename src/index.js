import './styles/main.scss';
//import Icon from './test1.png';
import ReactDom from 'react-dom';
import HelloWorld from './components/HelloWorld';
import React from 'react';

ReactDom.render(
  <HelloWorld num='5' styleNames='hello' />,
  document.getElementById('root')
);
