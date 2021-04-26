import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Demo.module.css';
class Button extends React.Component{

    // constructor(){
    //     super();
    //    this.state={intial:"Box 1 title", name:" "}
    //      }
    //     changevalue = () =>
    //     {
    //      this.setState({name:"update"})
    //      }


    
    render()
    

    
    {
   return <div>
     
     <button className={styles.button} type="button" onClick={this.changevalue}>button component</button>
  </div>
    }
}
export default Button;