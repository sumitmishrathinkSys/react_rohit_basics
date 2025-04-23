// Create element through JS

const React = {
    createElement : function(tag, styles, children) {
        const element = document.createElement(tag);
        if(typeof styles == "object") {
            for(const child of children) {
                element.append(child);
            }
        }
        else
        element.innerText = children;

        for(const key in styles) {
            element.style[key] = styles[key];
        }
        return element;
    }
}

const ReactDOM = {
    render : function (element, root){
        root.append(element);
    }
}

const header1 = React.createElement("h1", {fontSize:"30px", backgroundColor:"blue", color: "white"}, "Hello Coder Army");
const header2 = React.createElement("h2", {fontSize: "25px", backgroundColor: "black", color:"white"}, "Kaise ho aap sab log");

// const header1 = document.createElement("h1");
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";


// const header2 = document.createElement("h2");
// header2.innerText = "Kaise ho aap sab log";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "25px";
// header2.style.color = "white";

// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);

// React: Object
// ReactDOM: Object


const root = document.getElementById("root");
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);

const li1 = React.createElement("li", {fontSize: "20px", backgroundColor: "red", color: "white"}, "HTML");
const li2 = React.createElement("li", {fontSize: "20px", backgroundColor: "green", color: "white"}, "CSS");
const li3 = React.createElement("li", {fontSize: "20px", backgroundColor: "yellow", color: "white"}, "JavaScript");

const Ul = React.createElement("ul", {fontSize: "30px", backgroundColor : "blue", color : "white"}, [li1, li2, li3])
ReactDOM.render(Ul, root);