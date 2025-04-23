const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  "Hello Coder Army"
);
const element2 = React.createElement(
  "h2",
  {
    id: "second",
    className: "Rahul",
    style: { backgroundColor: "black", fontSize: "25px", color: "white" },
  },
  "Kaise ho aap sab log"
);
const div1 = React.createElement(
  "div",
  {
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  [element, element2]
);
// ReactDOM.render(element, document.getElementById("root"));

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(element);
// Reactroot.render(element2);
Reactroot.render(div1);
