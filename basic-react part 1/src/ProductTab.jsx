import Product from "./Product";

function ProductTab() {
   let styles = {
    display : "flex",
    flexWrap : "wrap"
    
   };


  return (
    <div style={styles}>
      <Product title="MOTOROLA" idx={0}/>
      <Product  title="APPLE" idx ={1} />
      <Product title="OPPO" idx ={2} />
       <Product title= "VIVO"idx={3} />
  </div>
    );
}

export default ProductTab;
