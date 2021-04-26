
function Banner() {
  return (
    <div>
       <p>hello world</p>
    </div>
  );
}



export default Banner;


// import React from 'react';
// import ReactDOM from 'react-dom';


//   var n= ()  =>
//     {
//       var a=5;
//     if(a===5)
//     {
//       let a=10;
//       document.getElementById('root').innerHTML=a;
//     }
//     // document.getElementById('root').innerHTML=a;
//   }
//   n();
  


//inline style creation
// var mystyle={
//   color: 'red',
//   textAlign: 'center',
// }
// const myele =<div style={mystyle}>
//  <h1>myworld</h1>
//  <h1>mutliple element</h1>
//  <p>to create it {2+2}</p>
//  </div>
// ReactDOM.render(myele, document.getElementById('root'));

//external styling//
// const myele =<div>
//   <h1 className="header">myworld</h1>
//   <h1>mutliple element</h1>
//   <p>to create it</p>
//   </div>
// ReactDOM.render(myele, document.getElementById('root'));

//function creation
// function Header(){
//   return <div>
//     <h1>single function</h1>
//   <p>learning</p>
//   </div>
  
// }
// function Section()
// {
//   return <h1>mutliple function</h1> 
// }
// function Footer(){
//   return <h1>calling</h1>
   
// }

// function Mypage(){
//   return <div>
//     <Header />
//     <Section />
//     <Footer />
//   </div>
// }
// ReactDOM.render(<Mypage />,document.getElementById('root'));

//class componetn
// class Mywebpage extends React.Component{
//   render()
//   {
//     return <h2>class Component</h2>
//   }
// }
// class Mynewwebpage extends React.Component{
//   render()
//   {
//     return <div>
//     <Mywebpage />
//     <h2> mutliple class Component</h2>
//     </div>
   
//   }
// }
// ReactDOM.render(<Mynewwebpage />,document.getElementById('root'));


//props
// class Learnreactpropsparents extends React.Component{
//   render()
//   {
//     return <h2>React props in { this.props.var}</h2>
//   }
// }

// class Learnreactpropschild extends React.Component{
//   render()
//   {
//     const v="english";
//     return <Learnreactpropsparents var={v}/>
//   }
// }

// ReactDOM.render(<Learnreactpropschild />,document.getElementById('root'));


//Mutliple variables in props

// class Learnreactpropsparents extends React.Component{
//   render()
//   {
//     return <h2>React props in {this.props.topic} in {this.props.langugage}</h2>
//   }
// }
// //default value

// Learnreactpropsparents.defaultProps={topic:"tamil", langugage:"reactjs"}

// // class Learnreactpropschild extends React.Component{
// //   render(){

// //     const v={topic:"reactjs", langugage:"english"}
// //     return <Learnreactpropsparents var={v} />
  
// // }
// // }
// ReactDOM.render(<Learnreactpropsparents topic="english" />,document.getElementById('root'));

//state 

// class Reactstate extends React.Component{
//   constructor(){
//   super();
// this.state={initalvalue:"welcome",name:"page"}
//   }
//   changevalue = () =>
//   {
//     this.setState({initalvalue:"thanks you for watching"})
//   }
//   render(){
//     return <div>
// <h1>{this.state.initalvalue} {this.state.name}</h1>
    
//     <button type="button" onClick={this.changevalue}>exit</button>

//     </div>
    
//   }
// }
// ReactDOM.render(<Reactstate />,document.getElementById('root'));


//lifecycle

// class Lifecycle extends React.Component{
//   constructor(){
//   super();
// this.state={initalvalue:"welcome",name:"page"}
//   }

  
//   render(){
//     return <div>
//       <h1>{this.state.initalvalue} {this.state.name}</h1>
//       <button type="button" onClick={this.changevalue}>change value</button>
//       <button type="button" onClick={this.newchangevalue}>detele</button>
//       </div>
//   }
//   changevalue = () =>
//   {
//     this.setState({name:"learn"})
//   }
//   newchangevalue = () =>
//   {
//     this.setState({initalvalue:false,name:false})
//   }
//   componentWillMount(){
//     alert("learn reactjs lifecycle");
//   }
 
//   componentDidMount()
//   {
//     setTimeout(() => {
      
//       this.setState({initalvalue:"thankyou"})
//     }, 4000);
    
//   }
//   componentWillUpdate(){
//     alert("do you want any update this page")
//   }
  // componentDidUpdate(){
//    document.getElementById('mydiv').innerHTML="new value updated successfully"+this.state.initalvalue;
//   }
//   shouldComponentUpdate(){
//     return true;
//   }
//   componentWillUnmount(){

//   }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));


// this keyword usage 

/* <button id="btn">click me</button>
    <h1 id="myheading">its heading tag</h1>
    <div id="mydiv">its div tag</div>
    <p>regular function<b>this</b> keywords represent:</p>
    <p id="demo"></p> */
    
// <script>
// class Regular { 
//       changeColor = () => {
//         document.getElementById("demo").innerHTML += this;
//       }
//     }

//     var regular =new Regular();
//     window.addEventListener("load", regular.changeColor);
//     document.getElementById("btn").addEventListener("click", regular.changeColor);
//     document.getElementById("mydiv").addEventListener("click", regular.changeColor);
//     document.getElementById("myheading").addEventListener("click", regular.changeColor);



//     </script>


// eventhandling , in parametealso
// class Evenblind extends React.Component{
//     constructor(){
  //     super()
  //     this.state={
  //       msg:"welcome"
  //     }
  //   }
  // // clickEvent =() => {
  // //   this.setState({
  // //     msg:"thank you"
  // //   })
  
  //   clickEvent =(a) => {
  //     this.setState({
  //       msg:a
  //     })
  // }
  
  // render(){
  //    return <div>
  //      <h1>{this.state.msg}</h1>
  //      {/* <button onClick={this.clickEvent}>click</button> */}
  //      {/* argument passed */}
  //      <button onClick={this.clickEvent.bind(this,"my events is")}>click</button>
  //    </div>
      
  //   }
  // }
  
  // ReactDOM.render(<Evenblind />,document.getElementById('root'))



  //styling , inline,

  // class Reactstyle extends React.Component{
//   render() 
//   {
//     const mystyle={
//       color: "yellow",
      
//     };
//        return (
//          <div>
//            <h1 style={{color:"red",textAlign:"center"}}> hello world</h1>
//             <h2 style={mystyle}>welcome</h2>
//             <h3 className="App">thank you</h3>
//          </div>
//        )
//     }
//   }
//   ReactDOM.render(<Reactstyle />,document.getElementById('root'));

// external style sheet
// /class Reactstyle extends React.Component{
  //   render() 
  //   {
  //     const mystyle={
  //       color: "yellow",
        
  //     };
  //        return (
  //          <div>
  //            <h1 style={{color:"red",textAlign:"center"}}> hello world</h1>
  //             <h2 style={mystyle}>welcome</h2>
  //             <h3 className={styles.module}>thank you</h3>
  //          </div>
  //        )
  //     }
  //   }
  //   ReactDOM.render(<Reactstyle />,document.getElementById('root'));