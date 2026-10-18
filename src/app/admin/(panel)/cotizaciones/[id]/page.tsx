import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminCotizacionDetallePage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Detalle de cotización"
      descripcion="Datos de la cotización, montos editables, notas internas y acciones relacionadas (contrato/obra)."
    />
  );
}
