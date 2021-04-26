import React from 'react';
import ReactDOM from 'react-dom';



class Evenblind extends React.Component{
       constructor(){
        super()
       this.state={
        msg:"welcome"
      }
         }
        
      clickEvent =() => {
       this.setState({
        msg:"thank you"
        })

      render() {
          return <div>
          <h1>{this.state.msg}</h1>
        <button onClick={this.clickEvent}>click</button> 
     
     </div>
      }
            
   
      }
    }
        
     ReactDOM.render(<Evenblind />,document.getElementById('root'))
      