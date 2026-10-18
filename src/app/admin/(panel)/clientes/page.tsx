import Link from "next/link";
import { requireAdmin } from "@/lib/auth-utils";

export default async function AdminClientesPage() {
  await requireAdmin();

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold">Clientes</h1>
      <p className="mt-2 text-ink-muted">
        Listado de clientes con su realidad (prospecto, en negociación, cliente-usuario,
        histórico) y búsqueda.
      </p>

      <div className="mt-8 rounded border border-border bg-surface p-8">
        <p className="section-label text-ink-faint">ESTRUCTURA</p>
        <p className="mx-auto mt-3 max-w-md text-center text-ink-muted">
          Este módulo se implementa en el siguiente paso.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/admin/clientes/demo/autorizar"
            className="rounded border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            Ver vista previa: crear cuenta de cliente →
          </Link>
        </div>
      </div>
    </div>
  );
}
