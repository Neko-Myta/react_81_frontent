import "./styles.css";
import type { ProductData } from "./type";

import { products } from "./data";
import ProductCard from "../../components/ProductCard/ProductCard";

function Consultation04() {
    const productCards = products.map((product: ProductData) => {
        return (
            <ProductCard                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                inStock={product.inStock}
            />
        );
    });

    return (
        <div className="Consultation04-wrapper">
            {productCards}
        </div>

    );
}

export default Consultation04;