// ============================================================
// CONFIGURACIÓN DE LA LOGIA
// Solo editá este archivo para adaptar la app a tu logia
// ============================================================

export const LOGIA = {
  nombre: "Pedro Benoit",
  numero: "636",
  direccion: "Suipacha 780",
  localidad: "Merlo",
  provincia: "Buenos Aires",
  pais: "Argentina",
  diasReunion: "Viernes 2do y 4to",
};

// URL y clave de tu proyecto Supabase
// Obtenerlas en: supabase.com → tu proyecto → Settings → API
export const SUPABASE_URL = "https://alblbdtbyzcxjhiwisot.supabase.co";
export const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsYmxiZHRieXpjeGpoaXdpc290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5OTExNzQsImV4cCI6MjA5MjU2NzE3NH0.TYSe5DZyBK2BmkmqxQUVeaCw6-aKyDjdGO8B2Wgw1Mg";

// Padrón inicial de miembros
// Cada línea: "usuario": { password, grado, cargo, oficialidad, esVM, nombre, apellido, email, celular, direccion, localidad, numeroDeMiembro }
// Grados: "Maestro" | "Compañero" | "Aprendiz"
// esVM: true solo para el Venerable Maestro
export const PADRON_INIT = {
  "vmbenoit636": { password:"636PBfer", grado:"Maestro", cargo:"Venerable Maestro", oficialidad:"Venerable Maestro", esVM:true, nombre:"Fernando", apellido:"Cruz", email:"cruzfernando0710@gmail.com", celular:"15-3914-1232", direccion:"Alvarado 602", localidad:"Merlo", numeroDeMiembro:"98.107" },
  "prueba":      { password:"prueba",   grado:"Aprendiz", cargo:"Hermano", oficialidad:"", esVM:false, nombre:"Usuario", apellido:"Prueba", email:"", celular:"", direccion:"", localidad:"Merlo", numeroDeMiembro:"000.000" },
  "jvillegas":   { password:"vill186",  grado:"Maestro", cargo:"Primer Vigilante",  oficialidad:"Primer Vigilante",  esVM:false, nombre:"Jorge Oscar",      apellido:"Villegas",           email:"jorgevillegas@net-c.com",         celular:"15-5347-7947",  direccion:"B. Irigoyen 7",                localidad:"Castelar",             numeroDeMiembro:"97.186"  },
  "caraujo":     { password:"arau083",  grado:"Maestro", cargo:"Segundo Vigilante", oficialidad:"Segundo Vigilante", esVM:false, nombre:"Celso Rubén",       apellido:"Araujo",             email:"celsofilo@gmail.com",             celular:"1167342223",    direccion:"Tonelero 726",                 localidad:"Mariano Acosta",       numeroDeMiembro:"105.083" },
  "mguerrero":   { password:"guer752",  grado:"Maestro", cargo:"Orador",            oficialidad:"Orador",            esVM:false, nombre:"Maximiliano Daniel", apellido:"Guerrero",           email:"maxi_dgar@yahoo.com.ar",          celular:"011-6324-0566", direccion:"Mariano Moreno 693 Dpto 7",    localidad:"Luján",                numeroDeMiembro:"91.752"  },
  "egonzalez":   { password:"gonz935",  grado:"Maestro", cargo:"Secretario",        oficialidad:"Secretario",        esVM:false, nombre:"Elbio Gustavo",      apellido:"González",           email:"ElbioGustavogonzalez@gmail.com",  celular:"1169001577",    direccion:"Juan Manuel de Rosas 1234",    localidad:"Merlo",                numeroDeMiembro:"106.935" },
  "marias":      { password:"aria980",  grado:"Maestro", cargo:"Tesorero",          oficialidad:"Tesorero",          esVM:false, nombre:"Martín Alejandro",   apellido:"Arias",              email:"arias.martin.ale@gmail.com",      celular:"1162757625",    direccion:"Padilla 1468",                 localidad:"Libertad",             numeroDeMiembro:"104.980" },
  "mrobles":     { password:"robl969",  grado:"Maestro", cargo:"Hospitalario",      oficialidad:"Hospitalario",      esVM:false, nombre:"Martín",             apellido:"Robles",             email:"martin_robles@hotmail.com",       celular:"1161058040",    direccion:"Chacabuco 715",                localidad:"Merlo",                numeroDeMiembro:"105.969" },
  "jaguado":     { password:"agua419",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Jeremías Ezequiel",  apellido:"Aguado",             email:"jeremiaseam@gmail.com",           celular:"1122940366",    direccion:"Av. Argentina 790 P1 Dpto1",   localidad:"Merlo",                numeroDeMiembro:"107.419" },
  "fbonanati":   { password:"bona506",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Federico Roberto",    apellido:"Bonanati Rodriguez", email:"frrodriguezlima@gmail.com",       celular:"1144949631",    direccion:"Latzina 1391",                 localidad:"Ituzaingó",            numeroDeMiembro:"109.506" },
  "mchavez":     { password:"chav390",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Martín Antonio",     apellido:"Chávez Duran",       email:"marmcd12@gmail.com",              celular:"1138765082",    direccion:"Pedro Obligado 3851",          localidad:"G. de Laferrere",      numeroDeMiembro:"104.390" },
  "aclavero":    { password:"clav321",  grado:"Maestro", cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Ángel Jorge",        apellido:"Clavero",            email:"claverogm@gmail.com",             celular:"1562203358",    direccion:"Gallo 492 6° A",               localidad:"CABA",                 numeroDeMiembro:"13.321"  },
  "wfernandez":  { password:"fern566",  grado:"Maestro", cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Walter Ariel",       apellido:"Fernandez",          email:"warielf@hotmail.com",             celular:"15-4176-3921",  direccion:"Arzobispo Espinosa 1483 P3",   localidad:"CABA",                 numeroDeMiembro:"92.566"  },
  "agorza":      { password:"gorz590",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Andrés Sebastián",   apellido:"Gorza",              email:"lic.andresgorza@gmail.com",       celular:"1160127390",    direccion:"Rodriguez Peña 1975",          localidad:"Castelar",             numeroDeMiembro:"111.590" },
  "cheffler":    { password:"heff239",  grado:"Compañero",cargo:"Hermano",          oficialidad:"",                  esVM:false, nombre:"Cristian Jesús",     apellido:"Heffler",            email:"cristianheffler85@gmail.com",     celular:"1126532593",    direccion:"Haedo 56",                     localidad:"Moreno",               numeroDeMiembro:"109.239" },
  "flarranaga":  { password:"larr026",  grado:"Maestro", cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Fernando",           apellido:"Larrañaga",          email:"ingflarranaga@hotmail.com",       celular:"1168724185",    direccion:"Bruno Maffi 280",              localidad:"General Las Heras",    numeroDeMiembro:"20.026"  },
  "gpaz":        { password:"paz_829",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Gastón Armando",     apellido:"Paz",                email:"PAZGASTON2011@GMAIL.COM",         celular:"1158456922",    direccion:"Catamarca 1018",               localidad:"Marcos Paz",           numeroDeMiembro:"110.829" },
  "fpereiro":    { password:"pere197",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Francisco Nicolás",  apellido:"Pereiro",            email:"nicolaspereiro1@gmail.com",       celular:"1130005329",    direccion:"Iwanoski 1143",                localidad:"Merlo",                numeroDeMiembro:"112.197" },
  "jrestrepo":   { password:"rest403",  grado:"Aprendiz",cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Jhony Alejandro",    apellido:"Restrepo Muriel",    email:"jhonyrmja@gmail.com",             celular:"1151408540",    direccion:"Marcos Paz Garcia 172",        localidad:"Marcos Paz",           numeroDeMiembro:"112.403" },
  "jrico":       { password:"rico544",  grado:"Maestro", cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Jorge Omar",         apellido:"Rico",               email:"ajorico@hotmail.com",             celular:"011-3325-4934", direccion:"Dr. Balbi 168",                localidad:"Moreno",               numeroDeMiembro:"91.544"  },
  "vzucco":      { password:"zucc153",  grado:"Maestro", cargo:"Hermano",           oficialidad:"",                  esVM:false, nombre:"Vicente",            apellido:"Zucco",              email:"vicentezucco@hotmail.com",        celular:"02323-15-554884",direccion:"Italia 2395",                 localidad:"Luján",                numeroDeMiembro:"99.153"  },
};

// Tenidas iniciales (las próximas según el régimen de la logia)
export const TENIDAS_INIT = [
  { fecha:"2026-07-10", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Julio."      },
  { fecha:"2026-07-24", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Cuarto viernes de Julio."       },
  { fecha:"2026-08-14", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Agosto."     },
  { fecha:"2026-08-28", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Cuarto viernes de Agosto."      },
  { fecha:"2026-09-11", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Septiembre." },
  { fecha:"2026-09-25", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Cuarto viernes de Septiembre."  },
  { fecha:"2026-10-09", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Octubre."    },
  { fecha:"2026-10-23", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Cuarto viernes de Octubre."     },
  { fecha:"2026-11-13", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Noviembre."  },
  { fecha:"2026-11-27", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Cuarto viernes de Noviembre."   },
  { fecha:"2026-12-11", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Segundo viernes de Diciembre."  },
];
