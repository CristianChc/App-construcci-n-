import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminObraDetallePage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Detalle de obra"
      descripcion="Tabs: Info general · Hitos · Pagos."
    />
  );
}
