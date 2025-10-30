"use client";
import { sendOrder } from "@/lib/api";
import { useUserStore } from "@/store/userInfo";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
export default function checkOut() {
  const router = useRouter();
  const token = useUserStore((s) => s.token);
  const searchParams = useParams();
  const query = searchParams.itemId as string;
  useEffect(() => {
    const res = async () => {
      if (!token) {
        return;
      }
      try {
        const send = await sendOrder(query, token);
        console.log("sendOrder response:", send);
        const res = await send.res.mercadoPagoURL;
        router.push(res);
      } catch (e) {
        return console.error(e, "error");
      }
    };
    res();
  }, [token, query]);
}
