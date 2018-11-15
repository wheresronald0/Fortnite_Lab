(function() {
    "use strict";

// class CharacterShowcase extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//     console.log("hi from the component")
//     return (
//         <div>
//             <p>React Component!</p>
//         </div>
//      )
// };
// }

const CharacterShowcase = (props) => {
    console.log("Hi from the component");
}


ReactDOM.render(CharacterShowcase, document.getElementById("react-root"))
