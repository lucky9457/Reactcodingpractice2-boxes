const Box = (props) => {
  //  Write your code here.
  const { name, cls } = props;
  return <p className={cls}>{name}</p>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1 className="head">Boxes</h1>
    <div className="con">
      <Box name="Small" cls="b1" />
      <Box name="Medium" cls="b2" />
      <Box name="Large" cls="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
