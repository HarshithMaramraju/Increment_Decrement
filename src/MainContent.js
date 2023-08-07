import React from "react";

function MainContent(){
    return(
        <div>
            <h1>am learning react in scrimba</h1>
        </div>
    );
}
export default MainContent;

//call in app class
{/* <MainContent name='har' heroname='prabhas' />
      <MainContent name ='dat' heroname='mahesh' />
      <MainContent name='jay' heroname='pavan' /> */}

// const MainContent = props => {
// console.log(props);
// return(
//     <div>
//          <h1>hello {props.name}  {props.heroname}</h1>
//     </div>
//     )
// }
// export default MainContent

// const h1 = document.createElement('hi')
// h1.textContent = "this is a react code"
// h1.className = "header"
// document.getElementsByClassName("App").append(h1)

// const MainContent = ()=>{
//     return React.createContext(
//         'div',
//         null,
//         React.createContext('hi',null,'hello harshith')
//     )
// }
// export default MainContent