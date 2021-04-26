import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Demo.module.css';


class Box1 extends React.Component{
    render()
    {
   return <div>
     
  <h6 className={styles.box} style={{textAlign:"center"}}>{this.props.container1}{this.props.value}</h6>
  </div>
    }
}
export default Box1;