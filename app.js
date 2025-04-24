import React from "react";
import ReactDOM from "react-dom/client";
// const element = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "Rahul",
//     style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
//   },
//   "Hello Coder Army"
// );
// console.log(element);

//               React                Render
// React.createElement() =>  react element(JSObject) => HTML Element
// ReactDOM.render() => HTML Element => Browser DOM

// const element2 = React.createElement(
//   "h2",
//   {
//     id: "second",
//     className: "Rahul",
//     style: { backgroundColor: "black", fontSize: "25px", color: "white" },
//   },
//   "Kaise ho aap sab log"
// );
// const div1 = React.createElement(
//   "div",
//   {
//     id: "first",
//     className: "Rahul",
//     style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
//   },
//   [element, element2]
// );

// React.createElement('h1', {}, 'Hello Coder Army')
// const newElement = <h1>Hello Coder Army</h1>
// babel :                          React                      Render
// JSX => React.createElement() => React element(JSObject) => HTML Element

// Reactroot.render(div1);

// const newElement = <h1>Hello Coder Army</h1>

// JSX : JS ke expression ko HTML me likhne ka tarika
const names = "Rohit";
const obj = {
  name: "Rohit",
  age: 22,
  address: "Delhi",
};

const obj2 = {
  backgroundColor: "black",
  fontSize: "30px",
  color: "pink",
};

// React Element
const newElement = (
  <>
    <h1 id="first" className="second">
      Hello Coder Army{" "}
    </h1>
    <h2 money={23} style={obj2}>
      Kaise ho aap sab log
    </h2>
    <h3
      style={{
        backgroundColor: "black",
        fontSize: "30px",
        color: "pink",
      }}
    >
      Name - {names} Age - {obj.age}{" "}
    </h3>
  </>
);

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(newElement);

// React Component
// function based component
function greet() {
  return <h1> Aur bhai kaisa hai </h1>;
}
const meet = () => {
  return <h1> Mai thik hu bhai </h1>;
};
const newElement2 = greet();
const newElement3 = meet();
const newElement4 = <> {newElement2} {newElement3} </>
// Reactroot.render(newElement2);
// Reactroot.render(newElement3);
// Reactroot.render(<> {greet() } { meet()} </>);
Reactroot.render(<> {newElement4 } </>);
