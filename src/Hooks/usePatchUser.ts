import { useState } from "react";
import { patchUser } from "@/lib/api";
import { useUserStore } from "@/store/userInfo";

type PatchPayload = {
  name: string;
  address: string;
  phone: number;
};

export default function usePatchUser() {
  const token = useUserStore((s) => s.token);
  const setName = useUserStore((s) => s.setName);
  const setMail = useUserStore((s) => s.setMail);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function updateUser({ name, address, phone }: PatchPayload) {
    setError(null);
    if (!token) {
      const err = new Error("No authentication token in store");
      setError(err);
      throw err;
    }

    setIsLoading(true);
    try {
      const res = await patchUser(name, address, phone, token);
      if (res) {
        if (name) setName(name);
        if (res.email) setMail(res.email);
      }
      return res;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

  return { updateUser, isLoading, error };
}
