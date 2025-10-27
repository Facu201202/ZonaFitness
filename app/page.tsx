import { redirect } from "next/navigation";
import { headers } from "next/headers"

export default async function Home() {
  const headerList = await headers()
  const userRol = headerList.get("x-user-rol")
  userRol === "admin" &&  redirect("/admin")
  redirect("/tienda/inicio")
}