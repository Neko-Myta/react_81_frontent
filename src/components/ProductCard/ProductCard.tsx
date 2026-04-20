import "./styles.css";
import type { Product } from "./type";

function ProductCard({ title, price, category, inStock }: Product) {
    return ( 
        <div className="ProductCard-wrapper">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <p>{inStock ? "In Stock" : "Out of Stock"}</p>
        </div>
     );
}

export default ProductCard;