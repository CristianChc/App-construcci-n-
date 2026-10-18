import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminNuevoContratoPage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Nuevo contrato"
      descripcion="Crear un contrato desde una cotización ganada o de forma manual (migración)."
    />
  );
}
