"use client";
import { Item } from "@/ui/item/item";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import useItemSearch from "@/Hooks/useItemSearch"; // ajustá si tu hook es default export
import { useRouter } from "next/navigation";

export default function ItemPage() {
  const params = useParams();
  const id = params?.id ?? "";
  const { product, isLoading, isError } = useItemSearch(id as string);
  const router = useRouter();
  function handleClick() {
    router.push(`/checkout/${id}`);
  }

  useEffect(() => {
    if (!id) return;
  }, [id]);

  if (isLoading) return <div className="p-8">Cargando...</div>;
  if (isError) return <div className="p-8 text-red-600">Error al cargar</div>;

  const item = product?.res ?? null;
  if (!item) return <div className="p-8">No encontrado</div>;

  const img = (() => {
    // soporta varias formas que puede devolver la API:
    // - Images: string (url)
    // - Images: [{ url }] o [{ thumbnails: { large: { url }}}]
    // - images (minúscula) con las mismas formas
    const imgs = item?.Images ?? item?.images ?? null;
    if (!imgs) return "/placeholder.png";
    if (typeof imgs === "string") return imgs;
    if (Array.isArray(imgs) && imgs.length > 0) {
      const first = imgs[0];
      return (
        first?.thumbnails?.large?.url ||
        first?.url ||
        first?.src ||
        (typeof first === "string" ? first : null) ||
        "/placeholder.png"
      );
    }
    if (typeof imgs === "object" && imgs?.url) return imgs.url;
    return "/placeholder.png";
  })();
  const title = item?.title ?? item?.Name ?? item?.name ?? `Producto ${id}`;
  const price = item?.price ?? item?.["Unit cost"] ?? 0;

  return (
    <div className="bg-white">
      <Item img={img} title={title} price={price} onClick={handleClick} />
    </div>
  );
}
