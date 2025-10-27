"use client";
import Link from "next/link";
import { useUserStore } from "@/store/userInfo";

export default function Footer() {
  const clearState = useUserStore((state) => state.logOut);
  const handleLogOut = () => clearState();

  return (
    <footer className="bg-black w-full flex-none">
      <div className="flex flex-col justify-between items-start py-4 xl:flex-row xl:items-center xl:p-8">
        <div className="flex flex-col items-start space-y-2 p-5">
          <Link href="/login" className="text-white">
            Ingresar
          </Link>
          <Link href="/myprofile" className="text-white">
            Mi perfil
          </Link>
          <Link href="/search" className="text-white">
            Buscar
          </Link>
          <Link href="/" onClick={handleLogOut} className="text-white">
            Logout
          </Link>
        </div>

        <div className="flex flex-col items-end space-y-2 p-5">
          <span className="w-full text-white">Redes</span>
          <img src="twitter.svg" alt="Twitter" />
          <img src="instagram.svg" alt="Instagram" />
          <div className="flex flex-col gap-[5px]" />
        </div>
      </div>
      <div>
        <span className="p-6 xl:p-8 text-white">©2022 apx</span>
      </div>
    </footer>
  );
}
