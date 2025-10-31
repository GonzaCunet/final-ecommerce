"use client";
import { useUserStore } from "@/store/userInfo";
import { useEffect, useState } from "react";
import { Input } from "@/ui/input/input";
import { Button } from "@/ui/button/button";
import usePatchUser from "@/Hooks/usePatchUser";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/middleware";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const storeName = useUserStore((s) => s.name);
  const storeMail = useUserStore((s) => s.mail);
  const token = useUserStore((s) => s.token);
  const router = useRouter();
  const { updateUser, isLoading, error } = usePatchUser();

  const [name, setName] = useState(storeName ?? "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(storeName ?? "");
  }, [storeName]);

  const handleSave = async () => {
    try {
      await updateUser({
        name: name.trim(),
        address: address.trim(),
        phone: Number(phone) || 0,
      });
      Swal.fire({
        text: "Datos guardados",
        icon: "success",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      }).then(() => {
        router.push("/");
      });
    } catch (e: any) {
      Swal.fire({
        title: "Error",
        text: `${e.message ? e.message : "Error al acceder"}`,
        icon: "error",
        confirmButtonColor: "#4f7cac",
        iconColor: "#4f7cac",
      });
    }
  };

  return (
    <ProtectedRoute>
      <div className="w-full h-full bg-white flex flex-col items-start xl:items-center xl:justify-center p-10 gap-4">
        <div className="flex flex-col xl:items-start items-center gap-5">
          <h1 className="text-black !font-extrabold text-2xl">Perfil</h1>
          <div className="flex flex-col gap-1 w-full max-w-[720px]">
            <span className="text-black">Email</span>
            <Input
              placeholder=" "
              type="text"
              value={storeMail ?? ""}
              onChange={() => {}}
            />

            <span className="text-black">Nombre completo</span>
            <Input
              placeholder=" "
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <span className="text-black">Dirección</span>
            <Input
              placeholder=" "
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <span className="text-black">Teléfono</span>
            <Input
              placeholder=" "
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Button
            variant="yellow"
            size="md"
            onClick={handleSave}
            className="!text-black !font-bold"
          >
            {isLoading ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
