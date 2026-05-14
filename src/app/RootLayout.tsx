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
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#08143a] to-[#1e1b4b] text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          
          {/* LOGO */}
          <NavLink
            to="/"
            className="text-2xl font-black tracking-tight"
          >
            <span className="text-white">Hiba</span>
            <span className="text-blue-400">Portfolio</span>
          </NavLink>

          {/* MENU */}
          <div className="flex flex-wrap items-center justify-end gap-2 md:gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-all ${
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

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}