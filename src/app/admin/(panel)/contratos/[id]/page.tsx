import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminContratoDetallePage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Detalle de contrato"
      descripcion="Datos del contrato, PDF y obra vinculada."
    />
  );
}
