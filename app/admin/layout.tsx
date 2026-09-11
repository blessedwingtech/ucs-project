"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, FileText, LogOut, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminContent>{children}</AdminContent>
    </SessionProvider>
  );
}

function AdminContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // Don't show admin nav on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
      </div>
    );
  }

  if (!session) {
    return null; // Middleware will redirect
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-brand-navy text-white shadow-xl md:min-h-screen">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-brand-teal tracking-tight mb-2">UCS Admin</h2>
          <p className="text-slate-400 text-sm truncate">{session.user?.email}</p>
        </div>
        
        <nav className="px-4 py-4 space-y-2">
          <Link 
            href="/admin" 
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${pathname === '/admin' ? 'bg-brand-teal text-brand-navy font-bold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link 
            href="/admin/announcements" 
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${pathname?.startsWith('/admin/announcements') ? 'bg-brand-teal text-brand-navy font-bold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
          >
            <FileText className="w-5 h-5 mr-3" />
            Announcements
          </Link>
        </nav>
        
        <div className="p-4 mt-auto md:absolute md:bottom-0 md:w-64">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex w-full items-center px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
