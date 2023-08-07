import React,{ Component } from "react";
class Subscribe_button extends Component{
    constructor(){
        super()
        this.state = {
            message: 'subscribe here'
        }
    }

    changeMessage(){
        this.setState({
            message: 'you are subscribed'
        })
    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>
        );
    }
}
export default Subscribe_button