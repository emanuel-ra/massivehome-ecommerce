import SpainFlag from '@/components/flags/Spain.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = { 
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStatesFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
  es: {
    'nav.home': 'Inicio!',
    'nav.new': 'Nuevo!',
    'nav.catagories': 'Categorías',
    'nav.branches': 'Sucursales',
    'nav.services': 'Servicios',
    'nav.hot-sale': 'Liquidaciones',
    'nav.cookies': 'Cookies',
  },
  en: {
    'nav.home': 'Home',
    'nav.new': 'New!',
    'nav.catagories': 'Categories',
    'nav.branches': 'Branches',
    'nav.services': 'Services',
    'nav.hot-sale': 'Hot Sale',
    'nav.cookies': 'Cookies',
  },
} as const;

export const routes = {
  es: {
    nuevo: 'nuevo',
    categories: 'categorias',
    branches: 'sucursales',
    services: 'servicios',
    'hot-sale': 'liquidaciones',
  },
  en: {
    nuevo: 'new',
    categories: 'categories',
    branches: 'branches',
    services: 'services',
    'hot-sale': 'hot sale',
  },
};
