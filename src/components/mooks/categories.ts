
export interface Categories {
  name: string;
  children?: Categories[];
}

export const categories = [
  {
    name: 'Accesorios para celular',
    children: [
      {
        name: 'Cables',
      },
      {
        name: 'Cargadores',
      },
      {
        name: 'Power Bank',
      },
      {
        name: 'Selfie',
      },
      {
        name: 'Transmisores',
      },
    ],
  },
  {
    name: 'Artículos para el hogar',
    children: [
      {
        name: 'Timbres',
      },
      {
        name: 'Tomacorrientes',
      },
    ],
  },
  {
    name: 'Artículos para pantallas',
    children: [
      {
        name: 'Antenas',
      },
      {
        name: 'Soportes',
      },
    ],
  },
  {
    name: 'Audio',
    children: [
      {
        name: 'Audífonos & Diademas',
      },
      {
        name: 'Bocinas',
      },
    ],
  },
  {
    name: 'Cámaras de vigilancia',
    children: [],
  },
  {
    name: 'Iluminación led',
    children: [
      {
        name: 'Portátil',
      },
      {
        name: 'Empotrar',
      },
      {
        name: 'Focos',
      },
      {
        name: 'Arbotantes',
      },
      {
        name: 'Reglas',
      },
      {
        name: 'Reflectores',
      },
      {
        name: 'Suburbanas',
      },
      {
        name: 'Solar',
      },
    ],
  },
  {
    name: 'Oficina',
    children: [],
  },
  {
    name: 'Ventiladores',
    children: [],
  },
  {
    name: 'Otros',
    children: [
      {
        name: 'Tabletas LCD',
      },
      {
        name: 'Termos',
      },
    ],
  },
];