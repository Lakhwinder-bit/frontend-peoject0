import { AdminAuthProvider } from "@/contrext/AdminAuthContext";

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>{children}</AdminAuthProvider>
  );
}