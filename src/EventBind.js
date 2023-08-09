import React from "react";
function EventBind(){
    function EventBind(props) {
    //   super(props)
      this.state = {
         message: "hello"
      }
    }
    return(
        <div>
            <div>this.state.message</div>
            <button>click me</button>
        </div>
    )
}export default EventBind