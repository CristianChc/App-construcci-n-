import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminNuevaObraPage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Nueva obra"
      descripcion="Crear una obra desde un contrato o de forma directa."
    />
  );
}
