import React, { Component } from 'react'

 class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Count: 0
      }
    }

    increment(){
        this.setState({
            Count: this.state.Count+1
        },
        // ()=>{console.log('callback value',this.state.Count)}
        )
        // this.state.Count = this.state.Count+1
        console.log(this.state.Count);
    }
    decrement(){
        this.setState({
            count: this.state.Count-1
        })
        console.log(this.state.Count);
    }

    // incrementFive(){
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }
  render() {
    return (
        <div>
            <div>press here to increment - {this.state.Count}</div>
            <button onClick={()=>this.increment()}>increment</button>
            {/* <div>press here to drecrement-{this.state.Count}</div> */}
            <button onClick={()=>this.decrement()}>derement</button>
        </div>
    )
  }
}

export default Count