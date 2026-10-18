import { requireAdmin } from "@/lib/auth-utils";
import { ModuloPlaceholder } from "@/components/admin/ModuloPlaceholder";

export default async function AdminUsuariosPage() {
  await requireAdmin();
  return (
    <ModuloPlaceholder
      titulo="Usuarios"
      descripcion="Usuarios del sistema (admins y clientes), con activar/desactivar y reseteo de contraseña."
    />
  );
}
