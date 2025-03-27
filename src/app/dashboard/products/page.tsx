import { ProductCard } from "@/products/components/ProductCard";

export default function ProductsPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <ProductCard />
        </div>
    );
}