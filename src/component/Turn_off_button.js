import React,{Component} from "react";
class Turn_off_button extends Component{
    constructor(){
        super()
        this.state = {
            message: 'click this button to off'
        }
    }

    nextMessage(){
        this.setState(
            {
                message: "turned off"
            }
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.nextMessage()}>press to off</button>
            </div>
        )
    }
}
export default Turn_off_button