function Message({ children, myClass }) {
  console.log(children);
  return (
    // React Fragment
    <>
      <div className={myClass || "Your Class"}>Rendering</div>
      <header>{children}</header>
      <br />
    </>
  );
}

// Function -> Component
// Call Function -> Render Component

const element = (
  <div className="container">
    <Message myClass="mycontainer">
      <div>Hello World</div>
    </Message>
    <Message children="Goodbye World" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
