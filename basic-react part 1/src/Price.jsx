function Price({ oldPrice, newPrice }) {
  let textStyles = {
    textDecoration: "line-through",
  };

  let newStyle = {
    backgroundColor: "skyblue",
    height: "50px",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let bold = {
    fontWeight: "bold",
  };

  return (
    <div style={newStyle}>
      <span style={textStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={bold}>{newPrice}</span>
    </div>
  );
}

export default Price;
