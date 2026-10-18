import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminContratosPage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Contratos"
      descripcion="Listado de contratos con su cliente, cotización de origen, monto y obra vinculada."
    />
  );
}
