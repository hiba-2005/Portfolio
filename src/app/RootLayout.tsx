import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { to: "/projects", label: "Projets" },
  { to: "/experience", label: "Parcours" },
  { to: "/education", label: "Formations" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="text-lg font-bold tracking-tight">
            MonPortfolio
          </NavLink>

          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} • Hiba Ouirouane
      </footer>
    </div>
  );
}