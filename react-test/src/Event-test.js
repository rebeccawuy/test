import React, { Component } from 'react';

class LoginButton extends Component{
    constructor(props){
        super(props)
        this.state = {isEnter: false}
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    // //[function name] + [=] + [(param1, param2,...)] + [=>] + [{function body}]
    // //[function name] + [(param1, param2,...)] + [{}]
    // handleEnter(){
    //     this.setState({
    //         isEnter: true
    //     })
    // }

    handleEnter = () => {
        // this.setState(prevState => ({
        //     isEnter: !prevState.isEnter
        // }));
        this.setState(
            {isEnter: true}
        )
        console.log(this.state.isEnter)
    }

    handleLeave = () => {
        this.setState({
            isEnter: false
        })
        console.log(this.state.isEnter)
    }
    
    render(){
        const isEnter = this.state.isEnter
        return(
            <div>
                <button onMouseEnter={this.handleEnter} onMouseLeave={(e) => this.handleLeave(e)}>
                    {isEnter ? 'clicke me' : 'not'}
                </button>
            </div>
        );
    }
}

class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn : true};
        this.handleCick = this.handleCick.bind(this)
    }

    handleCick(){
        this.setState(
            function(prevState){
                return{
                    isToggleOn: !prevState.isToggleOn
                };
            }
        );
    }

    render(){
        return(
            <div>
                <button onClick={this.handleCick}>
                    {this.state.isToggleOn ? 'rebecca' : 'shadow'}
                </button>
            </div>
        );
    }
}

class Greetings extends Component{
    constructor(props){
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleLoginCick = this.handleLoginCick.bind(this)
        this.state = {isLogin: false}
    }
    
    handleLoginClick(){
        this.setState({isLogin: true})
    } 

    handleLogoutClick(){
        this.setState({isLogin: false})
    }

    handleLoginCick(){
        this.setState(
            function(prevState){
                return {isLogin: !prevState.isLogin}
            }
        )
    }

    render(){
        const isLogin = this.state.isLogin

        return(
            <div>
                <SplitPane 
                    left={<Greeting isLogin = {isLogin}/>}
                    right={
                        <button onClick={this.handleLoginCick}>
                            {this.state.isLogin ? 'Logout' : 'Login'}
                        </button>
                    }
                 />   
            </div>
        )
    }
}

function SplitPane(props){
    return(
        <div className='SplitPane'>
            <div className='SplitPane-left'>
                {props.left}
            </div>
            <div className='SplitPane-right'>
                {props.right}
            </div>
        </div>
    )
}

function Greeting(props){
    const isLogin = props.isLogin
    if(isLogin){
        return <UserGreeting />
    }else{
        return <GuestGreeting />
    }
}
function UserGreeting() {
    return <h1>Welcome back!</h1>
}
function GuestGreeting(){
    return <h1>Sign in please!</h1>
}

// function ListItem(props){
//     return <li>{props.value}</li>
// }

function BlogTest(props){
    const posts = props.posts
    // // index可以直接获取number的索引(只有没有id的时候才会选择这样的方式)
    // const numberItem = numbers.map( (number, index) => 
    //     <ListItem value={number} key={index} />
    // )
    const topBar = (
        <ul>
            {posts.map( post => 
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    )
    const content = posts.map(post =>
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )       
    
    return (
        <div>
            {topBar}
            <hr/>
            {content}
        </div>
    )
}


class Result extends Component{
    render(){
        let posts = [
            {
                id:1, title: 'test articleTitle1', content: 'article 1'
            },
            {
                id:2, title: 'test articleTitle2', content: 'article 2'
            },
            {
                id:3, title: 'test articleTitle3', content: 'article 3'
            }
        ]
        return(
            <div>
                <Toggle />
                <LoginButton />
                <Greetings />
                <BlogTest posts={posts} />
            </div>
        );
    }
}

export default Result;