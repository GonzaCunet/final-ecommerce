import { Button } from "@/ui/button/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-black w-full h-full">
      <div
        className=" flex flex-col justify-between items-start py-4
    xl:flex-row xl:items-center
    "
      >
        <div className="flex flex-col items-start space-y-2 p-2">
          <Link href="/">ingresar</Link>
          <Link href="/">mi perfil</Link>
          <Link href="/">buscar</Link>
          <Link href="/">Logout</Link>
        </div>

        <div className="flex flex-col items-end space-y-2 p-2">
          <span>Redes</span>
          <Link href="/">My-Ecommerce</Link>
          <Link href="/">My-Ecommerce</Link>
        </div>
      </div>
      <div className=" h-full">
        <span className="p-4">©2022 apx</span>
      </div>
    </div>
  );
}
