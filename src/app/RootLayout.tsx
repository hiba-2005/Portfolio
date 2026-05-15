import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Expérience" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#08143a] to-[#1e1b4b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <NavLink to="/" className="text-2xl font-black tracking-tight">
            <span className="text-white">Hiba</span>
            <span className="text-blue-400">Portfolio</span>
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-slate-300 bg-white p-2 text-slate-900 md:hidden"
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {open && (
          <div className="border-t border-white/10 bg-[#020617] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-slate-300 hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}