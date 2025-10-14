"use client";
import { use, useState } from "react";
import { Button } from "@/ui/button/button";
import { Input } from "@/ui/input/input";
import { fetchApi, sendAuthEmail, sendCodeGetToken } from "lib/api";

export default function Login() {
  const [mail, setMail] = useState("");
  const [send, setSend] = useState(false);
  const [code, setCode] = useState("");
  const handleCode = () => {
    console.log(mail, code);
    sendCodeGetToken(mail, Number(code)).then((res) => console.log(res));
  };

  const handleMail = () => {
    setSend(true);
    sendAuthEmail(mail);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-start xl:items-center xl:justify-center p-4 gap-4">
      <div
        className={`${
          send ? "hidden" : "block"
        } flex flex-col gap-4 items-center justify-center`}
      >
        {" "}
        <h1 className="text-black font-bold">Ingresar</h1>
        <span className="text-black">Email</span>
        <Input
          placeholder="Email"
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Button
          variant="yellow"
          size="md"
          onClick={handleMail}
          className="!text-black"
        >
          Continuar
        </Button>
      </div>
      <div
        className={` ${
          send ? "block" : "hidden"
        } flex flex-col gap-4 items-center justify-center`}
      >
        <h1 className="text-black font-bold">Código</h1>
        <Input
          placeholder="Código"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <span className="text-black">Te envíamos un código a tu mail</span>
        <Button
          variant="yellow"
          size="md"
          onClick={handleCode}
          className="!text-black"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
