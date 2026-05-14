import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Expérience" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="text-xl font-black tracking-tight">
            Hiba<span className="text-blue-400">Portfolio</span>
          </NavLink>

          <div className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
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
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} • Hiba Ouirouane
      </footer>
    </div>
  );
}