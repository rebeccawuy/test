import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';

var a = 5;
var b = 10;
var result = `15 is ${a+b} not ${a}`;
console.log('result:' + result);
console.log(`result: 15 is ${a + b} not ${a}`);
var materials = [
  'plastic',
  'metal'
];
var m1 = materials.map(m => m.length);
var m2 = materials.map(m => {
  m += 'aa'
  return m.length;
});
console.log(m1 + ';' + m2);


var sum = 98;
var result1 = (sum < 60) ? 'failed' : (sum < 90) ? 'good' : 'excellent';
console.log(result1)

function FormateName(user){
  return user.firstName + ' ' + user.lastName;
}
// var user = {
//   firstName: 'Rebecca',
//   lastName: 'Wu'
// };
const element = <FormateName firstName="Rebecca" lastName="Zeng"/>; 

// function Clock(props){
//     return(
//         <h3>It is {props.date.toLocaleTimeString()}</h3>
//     );
// }

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
            age: 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        // this.setState(
        //     {date: new Date()},
        //     {age: age++}
        // );
        this.setState((prevState) => ({
            age: prevState.age + 1,
            date: new Date()
        }));

        // this.setState();
    }

    render(){
        return (
            <div className='App'>
                <h3 className='App'>Hello {element}</h3>
                <h3>result {a}</h3>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
                <h3>{this.state.age}</h3>
            </div>
        );
    }
}

class App extends Component{
    render(){
        return(
            <div>
                <Clock />
                <Clock />
                <Clock />
            </div>
        );
    }   
}

// function Tick(){
//   const element1 = (
//     <div>
//       {/* <h1>Hello {FormateName(user)}</h1> */}
//       <h1>Hello {element}</h1>
      
      
//     </div>
//   );

  
// }
// tick()
// setInterval(Tick, 1000);

// function Avatar(props){
//     return (
//         <img className="Avatar" 
//         src={props.user.avatarUrl} 
//         alt={props.user.name} />
//     );
// }
// function UserInfo(props){
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
// function Comment(props) {
//     return (
//       <div className="Comment">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">
//           {props.text}
//         </div>
//       </div>
//     );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

export default App;