import { useParams } from "react-router-dom"
import { productData } from "../data/productData";

export const Products = function() {
    const {productId} = useParams();

    const product = productData.find((element) => {
        return element.id === Number(productId);
    });

    console.log(product);
    return(
        <>
            <h1>My Products</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </>
    )
}