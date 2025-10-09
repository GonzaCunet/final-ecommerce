import { Button } from "@/ui/button/button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-black w-full h-full">
      <div
        className=" flex flex-col justify-between items-start py-4
    xl:flex-row xl:items-center xl:p-8
    "
      >
        <div className="flex flex-col items-start space-y-2 p-5">
          <Link href="/">Ingresar</Link>
          <Link href="/">Mi perfil</Link>
          <Link href="/">Buscar</Link>
          <Link href="/">Logout</Link>
        </div>

        <div className="flex flex-col items-end space-y-2 p-5">
          <span className="w-full">Redes</span>
          <div className="flex flex-col gap-[5px]">
            <Link className="flex flex-row gap-1" href="/">
              <img className="w-[19px] h-[23px]" src="./twitter.svg" />
              My-Ecommerce
            </Link>
            <Link className="flex flex-row gap-1" href="/">
              <img className="w-[19px] h-[23px]" src="./instagram.svg" />
              My-Ecommerce
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-full">
        <span className="p-6 xl:p-8">©2022 apx</span>
      </div>
    </div>
  );
}
