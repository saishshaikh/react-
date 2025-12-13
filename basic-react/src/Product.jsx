import "./Product.css";
function Product ({title ,price,}) {
    let isdDiscount = price>30000;
     let styles= {backgroundColor : isdDiscount ?"pink":""};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h2>{price} </h2>
           {isdDiscount ? <p>Discount : 5%</p>:null}
            
        
        
        </div>
    )
}
export default Product ;