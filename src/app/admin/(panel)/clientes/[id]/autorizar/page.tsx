import Link from "next/link";
import { requireAdmin } from "@/lib/auth-utils";
import { prisma } from "@/lib/db";

type ClienteVista = {
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string | null;
  ciudad: string | null;
};

const CLIENTE_DEMO: ClienteVista = {
  nombre: "Juan",
  apellidos: "Pérez",
  telefono: "+54 11 5555-1234",
  email: "juan@email.com",
  ciudad: "Pilar",
};

async function getCliente(id: string): Promise<ClienteVista> {
  const cliente = await prisma.cliente.findUnique({
    where: { id },
    select: {
      nombre: true,
      apellidos: true,
      telefono: true,
      email: true,
      ciudad: true,
    },
  });

  return cliente ?? CLIENTE_DEMO;
}

const CONDICIONES = [
  "Cotización ganada",
  "Contrato firmado",
  "Obra activa",
  "Sin usuario vinculado",
];

export default async function AdminClienteAutorizarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const cliente = await getCliente(id);

  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <Link
          href={`/admin/clientes/${id}`}
          className="mb-4 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
        >
          ← Volver a la ficha del cliente
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold">Crear cuenta de acceso</h1>
            <p className="mt-2 text-ink-muted">
              Cliente:{" "}
              <span className="font-medium">
                {cliente.nombre} {cliente.apellidos}
              </span>
            </p>
          </div>
          <span className="rounded border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-amber-800">
            Vista previa
          </span>
        </div>
      </div>

      {/* Condiciones cumplidas */}
      <div className="rounded border border-border bg-surface p-5">
        <p className="section-label text-ink-faint">CONDICIONES VERIFICADAS</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {CONDICIONES.map((c) => (
            <li key={c} className="flex items-center gap-2 text-sm text-ink">
              <span className="text-green-600">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 rounded border border-border bg-surface p-6">
        <div className="rounded border border-border bg-background p-4">
          <p className="section-label text-ink-faint">DATOS DEL CLIENTE</p>
          <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
            <div>
              <span className="text-ink-faint">Teléfono:</span>{" "}
              <span className="ml-2">{cliente.telefono}</span>
            </div>
            <div>
              <span className="text-ink-faint">Email:</span>{" "}
              <span className="ml-2">{cliente.email || "—"}</span>
            </div>
            <div>
              <span className="text-ink-faint">Ciudad:</span>{" "}
              <span className="ml-2">{cliente.ciudad || "—"}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="section-label block text-ink-faint">
            Email para la cuenta <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            defaultValue={cliente.email || ""}
            placeholder="cliente@email.com"
            className="mt-1 block w-full rounded border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="section-label block text-ink-faint">
              Nombre(s) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue={cliente.nombre}
              className="mt-1 block w-full rounded border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="section-label block text-ink-faint">
              Apellidos <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue={cliente.apellidos}
              className="mt-1 block w-full rounded border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
        </div>

        <div>
          <label className="section-label block text-ink-faint">
            Contraseña temporal <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Mínimo 8 caracteres"
            className="mt-1 block w-full rounded border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <p className="mt-1 text-xs text-ink-faint">
            El cliente deberá cambiarla en su primer acceso.
          </p>
        </div>

        <div className="rounded border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Nota:</strong> Se creará un usuario con rol{" "}
            <code className="rounded bg-amber-100 px-1">cliente</code> vinculado a este
            cliente. El cliente recibirá las credenciales fuera del sistema.
          </p>
        </div>

        <div className="flex gap-3 border-t border-border pt-4">
          <button
            type="button"
            className="accent-btn flex-1 rounded py-2 text-sm font-medium"
          >
            Crear cuenta y vincular
          </button>
          <Link
            href={`/admin/clientes/${id}`}
            className="flex-1 rounded bg-ink/5 py-2 text-center text-sm font-medium text-ink hover:bg-ink/10"
          >
            Cancelar
          </Link>
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-widest text-ink-faint">
          Vista previa gráfica — la creación real se implementa en el siguiente paso
        </p>
      </div>
    </div>
  );
}
