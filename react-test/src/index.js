import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

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
const element = <FormateName firstName="Shadow" lastName="Zeng"/>; 

// function Clock(props){
//     return(
//         <h3>It is {props.date.toLocaleTimeString()}</h3>
//     );
// }

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
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
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello {element}</h1>
                <h2>result {a}</h2>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
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

  ReactDOM.render(
    // element1,
    <Clock />,
    document.getElementById('root')
  );
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
