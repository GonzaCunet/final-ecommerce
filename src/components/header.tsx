"use client";
import { Button } from "@/ui/button/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "store/userInfo"; // <-- nueva importación

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const userMail = useUserStore((state) => state.mail);
  const clearState = useUserStore((state) => state.logOut);

  function handleBurguerMenu() {
    setOpen(!open);
  }
  function handleSignIn() {
    router.push("/login");
  }
  function handleLogOut() {
    clearState();
    router.push("/");
  }

  return (
    <header className="bg-black w-full h-full flex justify-between items-center p-8 text-white relative">
      <a href="/">
        <img src="/logo.svg" className="invert" />
      </a>

      {userMail ? (
        <button
          className="hidden xl:inline-block text-white font-semibold truncate max-w-[200px] text-left"
          onClick={() => handleLogOut()}
          title={userMail}
        >
          {userMail}
          <p className="text-[#E75A7C]">Cerrar sesión</p>
        </button>
      ) : (
        <Button
          variant="pink"
          size="sm"
          className="hidden xl:block"
          onClick={handleSignIn}
        >
          INGRESAR
        </Button>
      )}

      <img
        src="/burguer.svg"
        className="h-[52px] w-[40px] xl:hidden"
        onClick={handleBurguerMenu}
      />
      {open && (
        <div className="absolute top-full right-0 bg-black w-full p-4 z-50 text-center font-bold flex flex-col gap-5 xl:hidden">
          {userMail ? (
            <>
              <button onClick={() => router.push("/myprofile")}>
                {userMail}
              </button>
              <button onClick={() => router.push("/myprofile")}>
                Mi perfil
              </button>
              <button onClick={() => router.push("/search")}>Buscar</button>
              <button onClick={handleLogOut}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={handleSignIn}>Ingresar</button>
              <button onClick={() => router.push("/myprofile")}>
                Mi perfil
              </button>
              <button onClick={() => router.push("/search")}>Buscar</button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
