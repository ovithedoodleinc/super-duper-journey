import { PRODUCTS } from "@/data/products";
import Product from "./Product";

type ProductsProps = {
  categoryId: number;
};

export default function Products({ categoryId }: ProductsProps) {
  return (
    <ul>
      {PRODUCTS.filter((product) => product.categoryId === categoryId).map(
        (product) => (
          <li key={product.material}>
            <Product id={product.material} barcode={product.barcode} />
          </li>
        )
      )}
    </ul>
  );
}
