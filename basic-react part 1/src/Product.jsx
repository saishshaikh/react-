import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let decr = {
       color : "purple",
       fontWeight: "bold"
  }
  
  let oldPrice = ["12,499", "11,999", "13,000", "5,000"];
  let newPrice = ["10,499", "9,999", "11,000", "4,500"];
  let Description = [
    "Valuble",
    "Mosnster Battery",
    "Slime",
    "Long Life"];
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p style={decr}>{Description[idx]}</p>
      <Price 
        oldPrice={oldPrice[idx]} 
        newPrice={newPrice[idx]} 
      />
    </div>
  );
}

export default Product;
