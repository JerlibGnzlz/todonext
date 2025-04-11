import { ProductCard } from "@/products/components/ProductCard";
import { products } from "@/products/data/products";

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
            <ProductCard
                id="UUID-ABC-1"
                name="Teslo Hoodie"
                price={15}
                rating={5}
                image="/images/products/buzo.jpg"
            />
        </div>
    );
}