import React from 'react';
import _ from 'lodash';
import { square } from '../math.js';

class HelloWorld extends React.Component{
    
  render(){
    let {num,styleNames} = this.props;
    let text = _.join(['Hello World',`${num}: ${square(num)}`],' and ');
    return (<div className={styleNames}>
      {text}
    </div>);
  }
}

export default HelloWorld;