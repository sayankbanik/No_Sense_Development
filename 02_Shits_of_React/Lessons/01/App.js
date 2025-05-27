// create the element
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    style: { color: "red", border: "3px solid magenta", textAlign: "center" },
  },
  "Hello World from React"
);
// create the root to add the element in DOM
// const root = ReactDOM.createRoot(document.getElementById("root"));
// render
// root.render(heading);
// console.log(heading);

// nested element with React
/**
 *<div class="main-list">
      <h1 id="heading">Shopping List</h1>
      <div id="grocery-list">
        <ol>
          <li>Flour</li>
          <li>Biscuits</li>
          <li>Olive Oil</li>
        </ol>
      </div>
      <div id="stationery-list">
        <ol>
          <li>Shampoo</li>
          <li>Detergent</li>
        </ol>
      </div>
    </div>
 */

const list = React.createElement("div", { className: "main-list" }, [
  React.createElement("h2", { id: "heading" }, "Shopping List"),
  React.createElement(
    "div",
    { id: "grocery-list" },
    React.createElement("ol", {}, [
      React.createElement("h3", { id: "" }, "grocery List"),
      React.createElement("li", {}, "Flour"),
      React.createElement("li", {}, "Biscuits"),
      React.createElement("li", {}, "Olive Oil"),
    ])
  ),
  React.createElement(
    "div",
    { id: "Staionary-list" },
    React.createElement("ol", {}, [
      React.createElement("h3", { id: "" }, "Staionary List"),
      React.createElement("li", {}, "Shampoo"),
      React.createElement("li", {}, "Detergent"),
      React.createElement("li", {}, "pencils"),
    ])
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(list);
console.log(list);
