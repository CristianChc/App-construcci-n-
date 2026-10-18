import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminClienteDetallePage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Ficha de cliente"
      descripcion="El flujo de negocio: cotizaciones → contratos → obras → acceso al portal cliente."
    />
  );
}
