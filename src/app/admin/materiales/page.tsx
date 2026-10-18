import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminMaterialesPage() {
  await requireAdmin();
  redirect("/admin?aviso=modulo");
}
