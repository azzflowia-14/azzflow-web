export type Rubro =
  | "Distribución y logística"
  | "Comercio e industria"
  | "Turismo y gastronomía"
  | "Personal y salud"
  | "Automotor e inmobiliario"
  | "Gobierno y comunidad";

export const RUBROS: Rubro[] = [
  "Distribución y logística",
  "Comercio e industria",
  "Turismo y gastronomía",
  "Personal y salud",
  "Automotor e inmobiliario",
  "Gobierno y comunidad",
];

export type Captura = {
  src: string;
  alt: string;
  ancho: number;
  alto: number;
};

export type Destacado = {
  slug: string;
  nombre: string;
  rubro: Rubro;
  donde: string;
  url: string;
  urlVisible: string;
  problema: string;
  sistema: string;
  incluye: string[];
  demo: boolean;
  pantalla: Captura;
  celular: Captura;
  linkPublico: boolean;
};

export type Sistema = {
  nombre: string;
  que: string;
  rubro: Rubro;
  donde: string;
  enProduccion: boolean;
  url?: string;
};

export const DESTACADOS: Destacado[] = [
  {
    slug: "hr",
    nombre: "AzzFlow HR",
    rubro: "Personal y salud",
    donde: "Empresas con personal en planta",
    url: "https://azzflow-hr.vercel.app",
    urlVisible: "azzflow-hr.vercel.app",
    problema:
      "Legajos en carpetas, fichadas en planillas y recibos de sueldo que había que imprimir y hacer firmar uno por uno.",
    sistema:
      "Recursos humanos completo: el empleado ficha desde el celular con GPS, firma sus recibos y pide vacaciones; la oficina ve el presentismo del día y todo el legajo en un solo lugar.",
    incluye: [
      "Fichaje con GPS y geocerca por planta",
      "Recibos de sueldo con firma digital",
      "Vacaciones, licencias y EPP",
      "Reportes de horas y presentismo",
    ],
    demo: true,
    pantalla: {
      src: "/capturas/hr-panel-personal.webp",
      alt: "Personal en AzzFlow HR: legajos con foto, DNI, puesto, ingreso y supervisor",
      ancho: 1600,
      alto: 1000,
    },
    celular: {
      src: "/capturas/hr-app-inicio.webp",
      alt: "App del empleado de AzzFlow HR con el botón para registrar la fichada",
      ancho: 780,
      alto: 1688,
    },
    linkPublico: false,
  },
  {
    slug: "portofino",
    nombre: "Portofino",
    rubro: "Turismo y gastronomía",
    donde: "Ramallo",
    url: "https://portofinoramallo.com",
    urlVisible: "portofinoramallo.com",
    problema:
      "Las reservas llegaban por mensaje, las señas se anotaban en un cuaderno y la disponibilidad estaba en la cabeza de la administradora.",
    sistema:
      "Web propia con reservas online y seña, panel para la administración con la ocupación de las 24 cabañas, comprobantes de pago y mantenimiento por QR.",
    incluye: [
      "Reservas online con seña y cuotas",
      "Ocupación por cabaña y por fecha",
      "Bandeja de comprobantes de pago",
      "Reclamos y tareas por código QR",
    ],
    demo: false,
    pantalla: {
      src: "/capturas/porto-home.webp",
      alt: "Web de Portofino con el complejo de cabañas y el botón para reservar online",
      ancho: 1600,
      alto: 1000,
    },
    celular: {
      src: "/capturas/porto-mob.webp",
      alt: "Web de Portofino en el celular",
      ancho: 780,
      alto: 1688,
    },
    linkPublico: true,
  },
  {
    slug: "guardiario",
    nombre: "Guardiario",
    rubro: "Personal y salud",
    donde: "Médicos de guardia",
    url: "https://guardiario.com",
    urlVisible: "guardiario.com",
    problema:
      "Guardias en distintas clínicas, cada una paga cuando quiere, y nadie sabe cuánto le deben ni cuándo se pasa de categoría del monotributo.",
    sistema:
      "Un tablero que dice cuánto te deben y quién, con el calendario de guardias, los cobros y un semáforo del monotributo.",
    incluye: [
      "Cuánto te deben, por lugar",
      "Calendario de guardias",
      "Cobros y comprobantes",
      "Semáforo de monotributo",
    ],
    demo: true,
    pantalla: {
      src: "/capturas/guard-panel.webp",
      alt: "Tablero de Guardiario con el total adeudado y las guardias sin cobrar por lugar",
      ancho: 1600,
      alto: 1000,
    },
    celular: {
      src: "/capturas/guard-mob.webp",
      alt: "Guardiario en el celular",
      ancho: 780,
      alto: 1688,
    },
    linkPublico: true,
  },
];

export const SISTEMAS: Sistema[] = [
  {
    nombre: "AzzFlow Stock",
    que: "Stock de depósito con importación diaria desde SAP, vencimientos, bloqueos y trazabilidad por lote.",
    rubro: "Comercio e industria",
    donde: "ATANOR · industria química",
    enProduccion: true,
  },
  {
    nombre: "Mercoentrega",
    que: "Entregas, cobros y conciliación bancaria, con bot de WhatsApp que lee los comprobantes de los choferes.",
    rubro: "Distribución y logística",
    donde: "Distribuidora regional",
    enProduccion: true,
  },
  {
    nombre: "AzzFlow Flota",
    que: "Mantenimiento de camiones: checklists por QR, fallas, service preventivo, combustible y documentación.",
    rubro: "Distribución y logística",
    donde: "Producto propio",
    enProduccion: true,
  },
  {
    nombre: "Portal de atención a clientes",
    que: "Reclamos, seguimiento de la entrega del día y mensajes al chofer de la ruta.",
    rubro: "Distribución y logística",
    donde: "Distribuidora regional",
    enProduccion: true,
  },
  {
    nombre: "Ruteador de repartos",
    que: "Arma los camiones del día a partir de los pedidos y los muestra en el mapa.",
    rubro: "Distribución y logística",
    donde: "Distribución",
    enProduccion: false,
  },
  {
    nombre: "Bicimax",
    que: "Stock de dos sucursales y depósito central, con ventas y ajustes desde el mostrador.",
    rubro: "Comercio e industria",
    donde: "San Nicolás · bicicletería",
    enProduccion: true,
  },
  {
    nombre: "Frescura",
    que: "Control de vencimientos en el depósito para despachar primero lo que vence primero.",
    rubro: "Comercio e industria",
    donde: "Depósito de alimentos",
    enProduccion: false,
  },
  {
    nombre: "Playa Blanca",
    que: "Menú por QR que el restaurante edita solo, sin depender de nadie.",
    rubro: "Turismo y gastronomía",
    donde: "Ramallo · restaurante",
    enProduccion: true,
    url: "https://playa-blanca-portofino.vercel.app",
  },
  {
    nombre: "Embalse del Litoral",
    que: "Web institucional de la empresa, con sus servicios y su gente.",
    rubro: "Comercio e industria",
    donde: "Empresa de servicios",
    enProduccion: true,
    url: "https://embalse-del-litoral-web.vercel.app",
  },
  {
    nombre: "AzzFlow Asistencia",
    que: "Fichaje con PIN y GPS para registrar quién abre y cierra el local, con historial.",
    rubro: "Personal y salud",
    donde: "Producto propio",
    enProduccion: true,
  },
  {
    nombre: "Gerjsons",
    que: "Web comercial de una empresa de personal para frigoríficos.",
    rubro: "Personal y salud",
    donde: "Personal para frigoríficos",
    enProduccion: true,
    url: "https://gerjsons.vercel.app",
  },
  {
    nombre: "Sprint Automotores",
    que: "Catálogo de usados administrable, tasaciones online y panel de ventas.",
    rubro: "Automotor e inmobiliario",
    donde: "Villa Ramallo · concesionaria",
    enProduccion: true,
    url: "https://sprint-automotores.vercel.app",
  },
  {
    nombre: "Autosport",
    que: "Web de la concesionaria con bot de WhatsApp que responde por el stock real.",
    rubro: "Automotor e inmobiliario",
    donde: "Villa Ramallo · concesionaria",
    enProduccion: false,
  },
  {
    nombre: "Matías Automotores",
    que: "Catálogo de vehículos conectado a un bot de WhatsApp en tres sucursales.",
    rubro: "Automotor e inmobiliario",
    donde: "Pérez Millán · San Nicolás · Villa Ramallo",
    enProduccion: false,
  },
  {
    nombre: "Puyella Inmobiliaria",
    que: "Bot de WhatsApp que atiende consultas de propiedades las 24 horas.",
    rubro: "Automotor e inmobiliario",
    donde: "Inmobiliaria",
    enProduccion: true,
  },
  {
    nombre: "Zallocco Inmobiliaria",
    que: "Web con portal de inquilinos para pagar el alquiler y subir el comprobante.",
    rubro: "Automotor e inmobiliario",
    donde: "Inmobiliaria",
    enProduccion: false,
  },
  {
    nombre: "Ramallo Portal",
    que: "Portal del vecino: turnero, reclamos y chatbot municipal.",
    rubro: "Gobierno y comunidad",
    donde: "Ramallo · municipio",
    enProduccion: true,
    url: "https://ramallo-portal.vercel.app",
  },
  {
    nombre: "ProdeArg",
    que: "Prode online de fútbol para jugar con amigos, con pronósticos y tabla de posiciones.",
    rubro: "Gobierno y comunidad",
    donde: "Producto propio",
    enProduccion: true,
    url: "https://prodearg-alpha.vercel.app",
  },
  {
    nombre: "AzzFlow Legal",
    que: "Asistente con IA para estudios jurídicos: consultas de derecho argentino y redacción de escritos.",
    rubro: "Personal y salud",
    donde: "Estudios jurídicos",
    enProduccion: true,
    url: "https://azzflow-legal.vercel.app",
  },
];

export const TOTAL_SISTEMAS = DESTACADOS.length + SISTEMAS.length;
export const EN_PRODUCCION =
  DESTACADOS.length + SISTEMAS.filter((s) => s.enProduccion).length;
