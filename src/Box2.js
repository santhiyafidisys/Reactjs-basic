import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Demo.module.css';

class Box2 extends React.Component{
    render()
    {
   return <div>
     
  <h6 className={styles.box} style={{textAlign:"center"}}>{this.props.container2}</h6>
  
  </div>
    }
}
export default Box2;