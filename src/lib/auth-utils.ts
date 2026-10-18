import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Guard de autorización - solo admin
 * - Redirige al login si no hay sesión
 * - Redirige a la home si hay sesión pero el rol no es admin
 * - Retorna la sesión si es admin
 * - Sirve tanto para Server Components como para server actions
 */
export async function requireAdmin() {
  const session = await auth();
  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }
  if (session.user.role !== "admin") {
    redirect("/");
  }
  return session;
}

/**
 * Alias histórico de requireAdmin. Se mantiene para no romper imports.
 */
export async function requireAdminPage() {
  return requireAdmin();
}

/**
 * Guard de autorización para el portal cliente
 * - Redirige al login si no hay sesión
 * - Redirige al panel admin si hay sesión pero no es cliente
 * - Retorna la sesión si es cliente
 */
export async function requireCliente() {
  const session = await auth();
  if (!session) {
    redirect("/login?callbackUrl=/cliente");
  }
  if (session.user.role !== "cliente") {
    redirect("/admin");
  }
  return session;
}

/**
 * Helper de autenticación genérico. Se mantiene para retrocompatibilidad.
 */
export async function requireAuth() {
  const session = await auth();
  if (!session) {
    redirect("/login?callbackUrl=/admin");
  }
  return session;
}

/**
 * Variante que lanza error en vez de redirigir. Se mantiene para
 * retrocompatibilidad con código que la importe.
 */
export async function requireClienteOrThrow() {
  const session = await auth();
  if (!session || session.user.role !== "cliente") {
    throw new Error("No autorizado");
  }
  return session;
}
