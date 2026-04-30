import { NavLink, Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Search, User, Home } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E6CBB8] bg-[#FDF9F3]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#1C365C]">
          <span className="text-[#5A9BD4]">Medi</span>Find
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#5A9BD4] ${
                isActive ? 'text-[#5A9BD4]' : 'text-[#1C365C]'
              }`
            }
          >
            <Home className="size-4" />
            Inicio
          </NavLink>
          <NavLink
            to="/buscar"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#5A9BD4] ${
                isActive ? 'text-[#5A9BD4]' : 'text-[#1C365C]'
              }`
            }
          >
            <Search className="size-4" />
            Buscar
          </NavLink>
          <NavLink
            to="/perfil"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#5A9BD4] ${
                isActive ? 'text-[#5A9BD4]' : 'text-[#1C365C]'
              }`
            }
          >
            <User className="size-4" />
            Perfil
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/registro">
            <Button variant="primary" size="sm">
              Registrarse
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
