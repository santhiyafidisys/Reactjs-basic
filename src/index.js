import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Demo.module.css'; 
import Box1 from './Box1.js';
import Box2 from './Box2.js';
import Button from './Button.js';

class Parents extends React.Component {
  // function changeValue {
  //   return(
  //     const v="update";
  //   )
    
  // }
 constructor(props){
    super(props)
    this.state={value:"update"}
   }
     changevalue = () =>
 		{
 this.setState({value:"update"})
 		}
  render() 
  {
      return  <div  className={styles.parentbox}>
        <h5 className={styles.parent}>Container component </h5>
        <Box1 container1="Box1 title"  />
        <Box2  container2="Box2 title"/>
        <Button />
      </div>
  }
}

   ReactDOM.render(<Parents/>,document.getElementById('root'));



  