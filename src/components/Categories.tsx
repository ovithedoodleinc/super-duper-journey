import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Category from "./Category";

export default function Categories() {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const activeProduct = PRODUCTS.find(
      (product) => product.material === active.id
    );

    if (activeProduct?.categoryId === over?.id) {
      return;
    }

    if (activeProduct) {
      activeProduct.categoryId = parseInt(over?.id.toString() || "0");

      const activeProductIndex = PRODUCTS.findIndex(
        (product) => product.material === active.id
      );

      PRODUCTS.splice(activeProductIndex, 1);

      PRODUCTS.unshift(activeProduct);
    }
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <DndContext onDragEnd={handleDragEnd}>
        {CATEGORIES.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            categoryName={category.categoryName}
          />
        ))}
      </DndContext>
    </div>
  );
}
