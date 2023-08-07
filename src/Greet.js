import React from "react";

// const Greet = props=>{
//     console.log(props);
//     // return <h1>harshith age21 </h1>
//     return (
//         <div>
//         <h1>harshith {props.name} a.k.a {props.heroname}</h1>
//         {props.children}
//         </div>
//     )
// }
// export default Greet 

      {/* <Greet name='har' heroname='prrabhas'><p>this is the children class</p></Greet>
      <Greet name='dat' heroname='mahesh'><button>press here </button></Greet>
      <Greet name='jay' heroname='pavan' />  */}


const Greet = ({name, heroname})=>{
    return (
        <div>
        <h1>harshith {name} a.k.a {heroname}</h1>
        </div>
    )
}
export default Greet 

