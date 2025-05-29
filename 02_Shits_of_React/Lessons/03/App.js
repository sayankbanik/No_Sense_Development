import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "First React Application"
// );

// jsx
// const heading = (
//   <h1 className="heading" tabIndex="5">
//     First Application using JSX
//   </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const element = <span>This spanned</span>;

const TitleComponent = () => {
  return <h1>This the title</h1>;
};

const Heading = () => {
  return (
    <>
      <div id="header">
        {/* using componet in another component - component composition  */}
        <TitleComponent />
        <TitleComponent></TitleComponent>
        {TitleComponent()}
        {title}
        <h1 className="heading">HELLO REACT using JSX</h1>
        {1234 + 654}
      </div>
      <h2>This Second Heading</h2>
    </>
    // <h2>Jelskdfm</h2>
  );
};

const title = (
  <div>
    <h2>The Title</h2>
    {element}
    <TitleComponent />
    {/* <Heading /> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
