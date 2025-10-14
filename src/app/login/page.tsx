"use client";
import { useState } from "react";
import { Button } from "@/ui/button/button";
import { Input } from "@/ui/input/input";

export default function Login() {
  const [mail, setMail] = useState("");

  const handleMail = () => {
    console.log(mail);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-start xl:items-center xl:justify-center p-4 gap-4">
      <h1 className="text-black font-bold">Ingresar</h1>
      <span className="text-black">Email</span>
      <Input
        placeholder="Email"
        type="text"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <Button variant="yellow" onClick={handleMail}>
        Continuar
      </Button>
    </div>
  );
}
