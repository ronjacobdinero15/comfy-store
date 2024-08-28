const API_URL = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) throw new Error("Cannot retrieve products data");

  const data = res.json();
  return data;
}
