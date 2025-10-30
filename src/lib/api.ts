const API_URL = "https://ecommerce-back-vert.vercel.app/api";

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

export async function fetchApi(endpoint: string, options?: FetchOptions) {
  try {
    // const isClient = typeof window !== "undefined";
    // const url = isClient
    //   ? `/api/${endpoint}`
    //   : `${API_URL}/${normalized}`;
    const url = `${API_URL}${endpoint}`;
    console.log("Fetching API URL:", url);

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error(
        (data && data.message) ||
          `Error ${response.status}: ${response.statusText}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error en la API:", error);
    throw error;
  }
}

/**
 * Función específica para autenticación (POST)
 * @param email - Email del usuario
 * @returns Promise con los datos de la respuesta
 */
export async function sendAuthEmail(email: string) {
  return fetchApi("/auth", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function sendCodeGetToken(email: string, code: number) {
  return fetchApi("/auth/token", {
    method: "POST",
    body: JSON.stringify({ email, code }),
  });
}

export async function patchUser(
  name: string,
  address: string,
  phone: number,
  token: string
) {
  return fetchApi("/me", {
    method: "PATCH",
    body: JSON.stringify({ name, address, phone }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

export async function sendOrder(itemId: string, token: string) {
  return fetchApi(`/order?id=${itemId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
