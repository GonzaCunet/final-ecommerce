"use client";
import { Button } from "@/ui/button/button";
import { useState } from "react";
import { useUserStore } from "@/store/userInfo";
import Link from "next/link"; // <-- nueva importación
import { useRouter, useSearchParams } from "next/navigation";
import SearchComponent from "@/ui/search/search";
import { usePathname } from "next/navigation";
export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const email = useUserStore((state) => state.mail);
  const authenticated = useUserStore((state) => state.isAuthenticated);
  const clearState = useUserStore((state) => state.logOut);
  const pathName = usePathname();
  const searchPath = pathName === "/search";
  const [inputValue, setInputValue] = useState("");
  const handleButtonInput = () => {
    router.push(`/search?search=${encodeURIComponent(inputValue.trim())}`);
  };
  function handleBurguerMenu() {
    setOpen(!open);
  }

  return (
    <header className="bg-black w-full h-full flex justify-between items-center p-8 text-white relative">
      <Link href="/">
        <img src="logo.svg" className="invert" />
      </Link>
      {searchPath ? (
        <SearchComponent
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleButtonInput={handleButtonInput}
        ></SearchComponent>
      ) : null}
      {authenticated ? (
        <>
          <Link
            className="hidden xl:inline-block text-white font-semibold truncate max-w-[200px] text-left cursor-pointer "
            href="/"
            onClick={() => clearState()}
          >
            {email}
            <p className="text-[#E75A7C]">Cerrar sesión</p>
          </Link>
        </>
      ) : (
        <Button
          variant="pink"
          className="hidden xl:block"
          onClick={() => {
            router.push("/login");
          }}
        >
          INGRESAR
        </Button>
      )}
      <img
        src="burguer.svg"
        className="h-[52px] w-[40px] xl:hidden"
        onClick={handleBurguerMenu}
      />
      {open && (
        <div className="absolute top-full right-0 bg-black w-full p-4 z-50 text-center font-bold flex flex-col gap-5 xl:hidden">
          {authenticated ? (
            <>
              <Link
                className="cursor-pointer"
                href="/myprofile"
                onClick={() => setOpen(false)}
              >
                Mi perfil
              </Link>
              <Link
                className="cursor-pointer"
                href="/search"
                onClick={() => setOpen(false)}
              >
                Buscar
              </Link>

              {email && (
                <>
                  <p>{email}</p>
                  <p
                    className="text-[#E75A7C] cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      clearState();
                    }}
                  >
                    Cerrar sesión
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                Ingresar
              </Link>
              <Link href="/myprofile" onClick={() => setOpen(false)}>
                Mi perfil
              </Link>
              <Link href="/search" onClick={() => setOpen(false)}>
                Buscar
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
