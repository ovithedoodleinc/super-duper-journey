import { useDraggable } from "@dnd-kit/core";
import { ReactBarcode } from "react-jsbarcode";

type ProductProps = {
  id: number;
  barcode: string;
};

export default function Product({ id, barcode }: ProductProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ReactBarcode value={barcode} />
    </div>
  );
}
