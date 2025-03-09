import { useDroppable } from "@dnd-kit/core";
import Products from "./Products";

type CategoryProps = {
  id: number;
  categoryName: string;
};

export default function Category({ id, categoryName }: CategoryProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>{categoryName}</h2>
      <Products categoryId={id} />
    </div>
  );
}
