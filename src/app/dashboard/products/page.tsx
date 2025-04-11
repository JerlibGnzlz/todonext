import { ProductCard } from "@/products/components/ProductCard";
import { products } from "@/products/data/products";

interface IProduct {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: string;
}
export default function ProductsPage({
    id,
    name,
    price,
    rating,
    image
}: IProduct) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
            <ProductCard
                id={id}
                name={name}
                price={price}
                rating={rating}
                image={image}
            />
        </div>
    );
}