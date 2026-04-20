import { useState, useEffect, createContext, useContext } from "react";

const USERS_INIT = {
  "vmbenoit636": { password:"636PBfer", grado:"Maestro", cargo:"Venerable Maestro", oficialidad:"Venerable Maestro", esVM:true, perfil:{ nombre:"Fernando", apellido:"Cruz", email:"cruzfernando0710@gmail.com", telefono:"11-3914-1232", celular:"15-3914-1232", direccion:"Alvarado 602", localidad:"Merlo", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"98.107" }},
  "jvillegas": { password:"vill186", grado:"Maestro", cargo:"Primer Vigilante", oficialidad:"Primer Vigilante", esVM:false, perfil:{ nombre:"Jorge Oscar", apellido:"Villegas", email:"jorgevillegas@net-c.com", telefono:"4483-1426", celular:"15-5347-7947", direccion:"B. Irigoyen 7", localidad:"Castelar", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"97.186" }},
  "caraujo": { password:"arau083", grado:"Maestro", cargo:"Segundo Vigilante", oficialidad:"Segundo Vigilante", esVM:false, perfil:{ nombre:"Celso Rubén", apellido:"Araujo", email:"celsofilo@gmail.com", telefono:"01167342223", celular:"1167342223", direccion:"Tonelero 726", localidad:"Mariano Acosta", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"105.083" }},
  "mguerrero": { password:"guer752", grado:"Maestro", cargo:"Orador", oficialidad:"Orador", esVM:false, perfil:{ nombre:"Maximiliano Daniel", apellido:"Guerrero", email:"maxi_dgar@yahoo.com.ar", telefono:"02323-497-486", celular:"011-6324-0566", direccion:"Mariano Moreno 693 Dpto 7", localidad:"Luján", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"91.752" }},
  "egonzalez": { password:"gonz935", grado:"Maestro", cargo:"Secretario", oficialidad:"Secretario", esVM:false, perfil:{ nombre:"Elbio Gustavo", apellido:"González", email:"ElbioGustavogonzalez@gmail.com", telefono:"", celular:"1169001577", direccion:"Juan Manuel de Rosas 1234", localidad:"Merlo", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"106.935" }},
  "marias": { password:"aria980", grado:"Maestro", cargo:"Tesorero", oficialidad:"Tesorero", esVM:false, perfil:{ nombre:"Martín Alejandro", apellido:"Arias", email:"arias.martin.ale@gmail.com", telefono:"", celular:"1162757625", direccion:"Padilla 1468", localidad:"Libertad", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"104.980" }},
  "mrobles": { password:"robl969", grado:"Maestro", cargo:"Hospitalario", oficialidad:"Hospitalario", esVM:false, perfil:{ nombre:"Martín", apellido:"Robles", email:"martin_robles@hotmail.com", telefono:"", celular:"1161058040", direccion:"Chacabuco 715", localidad:"Merlo", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"105.969" }},
  "fbonanati": { password:"bona506", grado:"Aprendiz", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Federico Roberto", apellido:"Bonanati Rodriguez Lima", email:"frrodriguezlima@gmail.com", telefono:"", celular:"1144949631", direccion:"Latzina 1391", localidad:"Ituzaingó", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"109.506" }},
  "aclavero": { password:"clav321", grado:"Maestro", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Ángel Jorge", apellido:"Clavero", email:"claverogm@gmail.com", telefono:"4863-0823", celular:"1562203358", direccion:"Gallo 492 6° A", localidad:"CABA", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"13.321" }},
  "mfernandez": { password:"fern983", grado:"Compañero", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Mariano Ariel", apellido:"Fernández", email:"mfernandez4@gmail.com", telefono:"", celular:"1128381887", direccion:"French 950", localidad:"Merlo", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"107.983" }},
  "wfernandez": { password:"fern566", grado:"Maestro", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Walter Ariel", apellido:"Fernandez", email:"warielf@hotmail.com", telefono:"", celular:"15-4176-3921", direccion:"Arzobispo Espinosa 1483 P3", localidad:"CABA", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"92.566" }},
  "cheffler": { password:"heff239", grado:"Aprendiz", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Cristian Jesús", apellido:"Heffler", email:"cristianheffler85@gmail.com", telefono:"1126532593", celular:"1126532593", direccion:"Haedo 56", localidad:"Moreno", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"109.239" }},
  "flarranaga": { password:"larr026", grado:"Maestro", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Fernando", apellido:"Larrañaga", email:"ingflarranaga@hotmail.com", telefono:"", celular:"1168724185", direccion:"Bruno Maffi 280", localidad:"General Las Heras", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"20.026" }},
  "gpaz": { password:"paz_829", grado:"Aprendiz", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Gastón Armando", apellido:"Paz", email:"PAZGASTON2011@GMAIL.COM", telefono:"", celular:"1158456922", direccion:"Catamarca 1018", localidad:"Marcos Paz", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"110.829" }},
  "jrico": { password:"rico544", grado:"Maestro", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Jorge Omar", apellido:"Rico", email:"ajorico@hotmail.com", telefono:"0237-4625-451", celular:"011-3325-4934", direccion:"Dr. Balbi 168", localidad:"Moreno", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"91.544" }},
  "vzucco": { password:"zucc153", grado:"Maestro", cargo:"Hermano", oficialidad:"", esVM:false, perfil:{ nombre:"Vicente", apellido:"Zucco", email:"vicentezucco@hotmail.com", telefono:"02323-15-554884", celular:"02323-15-554884", direccion:"Italia 2395", localidad:"Luján", provincia:"Buenos Aires", fechaNacimiento:"", dni:"", profesion:"", estadoCivil:"", sangre:"", enfermedades:"", medicamentos:"", alergias:"", contactoEmergencia:"", telefonoEmergencia:"", relacionEmergencia:"", fechaIniciacion:"", numeroDeMiembro:"99.153" }},
};

const PLANCHAS_INIT = [
  { id:1, autorKey:"vmbenoit636", titulo:"La Geometría Sagrada y el Compás", grado:"Maestro", fecha:"2024-05-10", contenido:"La geometría sagrada constituye el lenguaje universal con el que el Gran Arquitecto del Universo diseñó la creación. El compás, herramienta del Maestro, traza los límites del conocimiento y la virtud.\n\nEn nuestro trabajo como masones, la geometría no es un mero recurso técnico sino el vehículo por el cual el espíritu se eleva hacia la comprensión de los principios eternos." },
  { id:2, autorKey:"jvillegas", titulo:"El Simbolismo de la Escuadra", grado:"Maestro", fecha:"2024-09-15", contenido:"La escuadra es el emblema del Primer Vigilante y el símbolo rector de la justicia y la rectitud. Cada ángulo recto que trazamos en piedra bruta es un compromiso con la verdad.\n\nSu ángulo de noventa grados no admite aproximaciones: o se es recto, o no se es." },
  { id:3, autorKey:"mfernandez", titulo:"El Sendero del Compañero", grado:"Compañero", fecha:"2025-02-20", contenido:"El segundo grado nos introduce en el estudio de las ciencias liberales y la búsqueda activa del conocimiento. El Compañero ya ha desbastado la piedra bruta y comienza a pulirla." },
  { id:4, autorKey:"cheffler", titulo:"El Umbral: Reflexión sobre la Iniciación", grado:"Aprendiz", fecha:"2025-08-05", contenido:"Al cruzar el umbral del Templo por primera vez, el profano muere simbólicamente para renacer como Aprendiz. El silencio y la oscuridad del gabinete de reflexión nos preparan para recibir la luz." },
];

const TENIDAS_INIT = [
  { id:1,  fecha:"2026-04-17", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Abril. Trabajo en grado Aprendiz." },
  { id:2,  fecha:"2026-05-01", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Mayo. Trabajo en grado Aprendiz." },
  { id:3,  fecha:"2026-05-15", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Mayo. Trabajo en grado Aprendiz." },
  { id:4,  fecha:"2026-05-29", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Quinto viernes de Mayo. Trabajo en grado Aprendiz." },
  { id:5,  fecha:"2026-06-05", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Junio. Trabajo en grado Aprendiz." },
  { id:6,  fecha:"2026-06-19", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Junio. Trabajo en grado Aprendiz." },
  { id:7,  fecha:"2026-07-03", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Julio. Trabajo en grado Aprendiz." },
  { id:8,  fecha:"2026-07-17", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Julio. Trabajo en grado Aprendiz." },
  { id:9,  fecha:"2026-07-31", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Quinto viernes de Julio. Trabajo en grado Aprendiz." },
  { id:10, fecha:"2026-08-07", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Agosto. Trabajo en grado Aprendiz." },
  { id:11, fecha:"2026-08-21", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Agosto. Trabajo en grado Aprendiz." },
  { id:12, fecha:"2026-09-04", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Septiembre. Trabajo en grado Aprendiz." },
  { id:13, fecha:"2026-09-18", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Septiembre. Trabajo en grado Aprendiz." },
  { id:14, fecha:"2026-10-02", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Primer viernes de Octubre. Trabajo en grado Aprendiz." },
  { id:15, fecha:"2026-10-16", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Tercer viernes de Octubre. Trabajo en grado Aprendiz." },
  { id:16, fecha:"2026-10-30", hora:"19:00", tipo:"Tenida de Instrucción", grado:"Aprendiz", agape:true, descripcion:"Quinto viernes de Octubre. Trabajo en grado Aprendiz." },
];

const COMUNICADOS_INIT = [
  { id:1, fecha:"10 Abr 2026", autorKey:"vmbenoit636", titulo:"Convocatoria Tenida — Abril 2026", cuerpo:"Se convoca a todos los HH∴ en pleno ejercicio de sus derechos a la Tenida del corriente mes. La puntualidad es signo de virtud masónica." },
  { id:2, fecha:"5 Abr 2026", autorKey:"egonzalez", titulo:"Actualización de Plancha de Quites", cuerpo:"Se solicita a todos los HH∴ que completen sus datos de perfil en el sistema antes del 15 del corriente, incluyendo datos médicos y contactos de emergencia." },
  { id:3, fecha:"28 Mar 2026", autorKey:"mrobles", titulo:"Fondo de Beneficencia — 1er Trimestre", cuerpo:"Se recuerda a los HH∴ la importancia de contribuir al Fondo de Beneficencia. Las contribuciones pueden realizarse en la próxima Tenida." },
];

const OFICIALIDADES = ["","Venerable Maestro","Primer Vigilante","Segundo Vigilante","Orador","Secretario","Tesorero","Limosnero","Maestro de Ceremonias","Primer Experto","Segundo Experto","Primer Diácono","Segundo Diácono","Hospitalario","Porta Espada","Porta Estandarte","Guardián Exterior","Guardián Interior","Hermano"];

const TEMAS = {
  oscuro: {
    bg:"#0d1117", bgCard:"#101d2e", bgInput:"#0a1520",
    border:"#1e3a5f", borderStrong:"#2a5080",
    text:"#ddeeff", textSec:"#89afd4", textFaint:"#3a5f80",
    accent:"#4da6ff", accentDim:"#1e6abf", accentBg:"rgba(77,166,255,0.1)", accentBorder:"rgba(77,166,255,0.3)",
    cyan:"#56d4e0", cyanBg:"rgba(86,212,224,0.1)",
    danger:"#ff6b6b", dangerBg:"rgba(255,107,107,0.1)", dangerBorder:"rgba(255,107,107,0.3)",
    success:"#4ade80",
    headerBg:"rgba(10,16,26,0.97)", tabsBg:"rgba(10,16,26,0.95)",
    btnGrad:"linear-gradient(135deg,#0d2040,#153060)",
    GRADO:{ "Maestro":"#4da6ff", "Compañero":"#56d4e0", "Aprendiz":"#a78bfa" },
  },
  claro: {
    bg:"#eef2f8", bgCard:"#ffffff", bgInput:"#f4f8ff",
    border:"#c0cfe8", borderStrong:"#8aaad4",
    text:"#0a1a30", textSec:"#2a4a70", textFaint:"#7090b8",
    accent:"#1655a8", accentDim:"#0d3d7a", accentBg:"rgba(22,85,168,0.08)", accentBorder:"rgba(22,85,168,0.25)",
    cyan:"#0369a1", cyanBg:"rgba(3,105,161,0.08)",
    danger:"#b91c1c", dangerBg:"rgba(185,28,28,0.07)", dangerBorder:"rgba(185,28,28,0.25)",
    success:"#166534",
    headerBg:"rgba(238,242,248,0.98)", tabsBg:"rgba(238,242,248,0.97)",
    btnGrad:"linear-gradient(135deg,#1a3a70,#1a5098)",
    GRADO:{ "Maestro":"#1655a8", "Compañero":"#0369a1", "Aprendiz":"#6d28d9" },
  }
};

const Ctx = createContext(TEMAS.oscuro);
const useT = () => useContext(Ctx);

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DIAS = ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"];
const GICON = { "Maestro":"✦✦✦", "Compañero":"✦✦", "Aprendiz":"✦" };
const GORD = { "Aprendiz":1, "Compañero":2, "Maestro":3 };
const FF = "'Segoe UI','Helvetica Neue',Arial,sans-serif";

function canSee(ug,pg){ return GORD[ug]>=GORD[pg]; }
function canCom(u){ if(!u) return false; if(u.esVM) return true; const o=(u.oficialidad||u.cargo||"").toLowerCase(); return o.includes("secretario")||o.includes("tesorero")||o.includes("hospitalario"); }
function nFull(u){ const p=u?.perfil||{}; return [(p.nombre||"").trim(),(p.apellido||"").trim()].filter(Boolean).join(" ")||"Sin nombre"; }
function fLarg(f){ if(!f) return "—"; return new Date(f+"T12:00:00").toLocaleDateString("es-AR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}); }
function fCort(f){ if(!f) return ""; return new Date(f+"T12:00:00").toLocaleDateString("es-AR",{day:"numeric",month:"short"}); }
function calcAge(fn){ if(!fn) return null; const h=new Date(),n=new Date(fn+"T12:00:00"); let e=h.getFullYear()-n.getFullYear(); if(h.getMonth()-n.getMonth()<0||(h.getMonth()===n.getMonth()&&h.getDate()<n.getDate())) e--; return e; }

function EyeIco({ sz, col }) {
  const t=useT(); const c=col||t.accent; const w=(sz||38)*1.65; const h=sz||38;
  return (
    <svg viewBox="0 0 100 60" width={w} height={h} fill="none">
      <ellipse cx="50" cy="30" rx="48" ry="27" stroke={c} strokeWidth="2.5"/>
      <circle cx="50" cy="30" r="13" stroke={c} strokeWidth="2"/>
      <circle cx="50" cy="30" r="5" fill={c}/>
      <line x1="50" y1="3" x2="50" y2="13" stroke={c} strokeWidth="2" opacity="0.6"/>
      {[0,60,120,180,240,300].map((a,i)=><line key={i} x1={50+44*Math.cos(a*Math.PI/180)} y1={30+25*Math.sin(a*Math.PI/180)} x2={50+50*Math.cos(a*Math.PI/180)} y2={30+31*Math.sin(a*Math.PI/180)} stroke={c} strokeWidth="1.5" opacity="0.3"/>)}
    </svg>
  );
}

function SecTit({ ch }) {
  const t=useT();
  return (
    <div style={{marginBottom:20}}>
      <div style={{fontSize:13,fontWeight:700,letterSpacing:"0.18em",color:t.textSec,textTransform:"uppercase",marginBottom:6}}>{ch}</div>
      <div style={{width:36,height:3,background:t.accent,borderRadius:2}}/>
    </div>
  );
}

function Btn({ onClick, ch, vari, sm, full, sx }) {
  const t=useT(); const [h,setH]=useState(false); const v=vari||"primary";
  const base={padding:sm?"8px 18px":"11px 24px",borderRadius:8,cursor:"pointer",fontFamily:FF,fontSize:sm?14:15,fontWeight:700,border:"2px solid",transition:"all 0.18s",width:full?"100%":"auto",letterSpacing:"0.04em",...(sx||{})};
  if(v==="primary") return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{...base,background:h?t.accent+"40":t.accentBg,borderColor:t.accent,color:t.accent}}>{ch}</button>;
  if(v==="ghost") return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{...base,background:h?t.text+"10":"transparent",borderColor:h?t.borderStrong:t.border,color:h?t.text:t.textSec}}>{ch}</button>;
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{...base,background:h?t.dangerBg:"transparent",borderColor:h?t.danger:t.border,color:h?t.danger:t.textSec}}>{ch}</button>;
}

function Inp({ lbl, val, chg, typ, ph, ro }) {
  const t=useT(); const [f,setF]=useState(false); const r=ro||false;
  return (
    <label style={{display:"block",marginBottom:16}}>
      {lbl&&<div style={{fontSize:14,fontWeight:600,color:r?t.textFaint:t.textSec,marginBottom:6}}>{lbl}</div>}
      <input type={typ||"text"} value={val||""} placeholder={ph||""} readOnly={r} onChange={e=>{if(!r&&chg)chg(e.target.value);}}
        style={{width:"100%",padding:"12px 14px",background:r?t.bg:t.bgInput,border:`2px solid ${f&&!r?t.accent:r?t.textFaint:t.border}`,borderRadius:8,color:r?t.textSec:t.text,fontSize:16,fontFamily:FF,outline:"none",boxShadow:f&&!r?`0 0 0 3px ${t.accent}20`:"none",transition:"all 0.2s",boxSizing:"border-box"}}
        onFocus={()=>setF(true)} onBlur={()=>setF(false)}/>
    </label>
  );
}

function Sel({ lbl, val, chg, opts, ro }) {
  const t=useT(); const r=ro||false;
  return (
    <label style={{display:"block",marginBottom:16}}>
      {lbl&&<div style={{fontSize:14,fontWeight:600,color:r?t.textFaint:t.textSec,marginBottom:6}}>{lbl}</div>}
      <select value={val||""} disabled={r} onChange={e=>{if(!r&&chg)chg(e.target.value);}} style={{width:"100%",padding:"12px 14px",background:r?t.bg:t.bgInput,border:`2px solid ${r?t.textFaint:t.border}`,borderRadius:8,color:r?t.textSec:t.text,fontSize:16,fontFamily:FF,outline:"none",boxSizing:"border-box"}}>
        {(opts||[]).map(o=>typeof o==="string"?<option key={o} value={o}>{o}</option>:<option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </label>
  );
}

function Bdg({ ch, col }) { const t=useT(); const c=col||t.accent; return <span style={{fontSize:13,fontWeight:700,color:c,border:`1.5px solid ${c}55`,background:`${c}15`,padding:"3px 12px",borderRadius:20}}>{ch}</span>; }

function Fld({ lbl, val, dng }) { const t=useT(); return <div style={{display:"flex",padding:"12px 0",borderBottom:`1px solid ${t.border}`}}><div style={{width:200,fontSize:14,fontWeight:600,color:t.textSec,flexShrink:0}}>{lbl}</div><div style={{flex:1,fontSize:16,color:dng?t.danger:t.text}}>{val||"—"}</div></div>; }

function Crd({ ch, sx }) { const t=useT(); return <div style={{background:t.bgCard,border:`1.5px solid ${t.border}`,borderRadius:12,padding:"22px 26px",...(sx||{})}}>{ch}</div>; }

function Tst({ msg, done }) {
  const t=useT(); useEffect(()=>{const x=setTimeout(done,2800);return()=>clearTimeout(x);},[]);
  return <div style={{position:"fixed",top:20,right:20,zIndex:9999,background:t.bgCard,border:`2px solid ${t.accent}`,color:t.accent,padding:"14px 24px",borderRadius:10,fontSize:16,fontWeight:700,fontFamily:FF,boxShadow:"0 8px 32px rgba(0,0,0,0.4)",animation:"pbFI 0.3s ease"}}>{msg}</div>;
}

function CBtn({ active, onClick, lbl, aLbl, sec }) {
  const t=useT(); const [h,setH]=useState(false); const c=sec?t.cyan:t.accent;
  return <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{padding:"10px 20px",background:active?`${c}22`:h?`${c}0d`:"transparent",border:`2px solid ${active?c:h?`${c}88`:t.border}`,borderRadius:8,color:active?c:h?c:t.textSec,fontSize:15,fontWeight:700,fontFamily:FF,cursor:"pointer",transition:"all 0.18s"}}>{active?aLbl:lbl}</button>;
}

function G2({ ch }) { return <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0 16px"}}>{ch}</div>; }

export default function App() {
  const [dark,setDark]=useState(true);
  const T=dark?TEMAS.oscuro:TEMAS.claro;
  const [scr,setScr]=useState("login");
  const [cu,setCu]=useState(null);
  const [users,setUsers]=useState(USERS_INIT);
  const [planchas,setPlanchas]=useState(PLANCHAS_INIT);
  const [tenidas,setTenidas]=useState(TENIDAS_INIT);
  const [comuns,setComuns]=useState(COMUNICADOS_INIT);
  const [confs,setConfs]=useState({});
  const [tab,setTab]=useState("calendario");
  const [toast,setToast]=useState(null);
  const [lu,setLu]=useState(""); const [lp,setLp]=useState(""); const [lerr,setLerr]=useState("");

  useEffect(()=>{ if(cu) setCu(p=>({...p,...users[p.key]})); },[users]);

  function login(){ const k=lu.trim().toLowerCase(); const u=users[k]; if(u&&u.password===lp){setCu({...u,key:k});setScr("dash");setLerr("");setTab("calendario");}else setLerr("Usuario o contraseña incorrectos."); }
  function logout(){ setScr("login");setCu(null);setLu("");setLp(""); }
  function tConf(tid,tipo){ setConfs(prev=>{ const td=prev[tid]||{}; const uc=td[cu.key]||{}; const nv=!uc[tipo]; setToast(nv?"✓ "+(tipo==="asistencia"?"Asistencia":"Ágape")+" confirmado":"Cancelado"); return {...prev,[tid]:{...td,[cu.key]:{...uc,[tipo]:nv}}}; }); }
  function myC(tid){ return (confs[tid]||{})[cu?.key]||{}; }
  function updPerf(k,p){ setUsers(prev=>({...prev,[k]:{...prev[k],perfil:p}})); if(cu?.key===k)setCu(prev=>({...prev,perfil:p})); setToast("✓ Perfil actualizado"); }
  function updMas(k,c){ setUsers(prev=>({...prev,[k]:{...prev[k],...c}})); if(cu?.key===k)setCu(prev=>({...prev,...c})); setToast("✓ Datos actualizados"); }
  function addMem(k,d){ setUsers(p=>({...p,[k]:d})); setToast("✓ Hermano registrado"); }
  function delMem(k){ setUsers(p=>{const n={...p};delete n[k];return n;}); setToast("Miembro eliminado"); }
  function addPla(p){ const id=Math.max(...planchas.map(x=>x.id),0)+1; setPlanchas(prev=>[...prev,{...p,id,fecha:new Date().toISOString().slice(0,10)}]); setToast("✓ Plancha publicada"); }
  function delPla(id){ setPlanchas(p=>p.filter(x=>x.id!==id)); setToast("Plancha eliminada"); }
  function addCom(c){ const id=Math.max(...comuns.map(x=>x.id),0)+1; const fecha=new Date().toLocaleDateString("es-AR",{day:"numeric",month:"short",year:"numeric"}); setComuns(p=>[{...c,id,fecha},...p]); setToast("✓ Comunicado publicado"); }
  function delCom(id){ setComuns(p=>p.filter(x=>x.id!==id)); setToast("Comunicado eliminado"); }

  const isVM=cu?.esVM;
  const TABS=[{id:"calendario",l:"Calendario"},{id:"tenidas",l:"Tenidas"},{id:"planchas",l:"Planchas"},{id:"hermanos",l:"Hermanos"},{id:"perfil",l:"Mi Perfil"},{id:"comunicados",l:"Comunicados"},...(isVM?[{id:"vm",l:"Panel VM ✦"}]:[])];

  return (
    <Ctx.Provider value={T}>
      <div style={{minHeight:"100vh",background:T.bg,color:T.text,fontFamily:FF,fontSize:16,lineHeight:1.6}}>
        {toast&&<Tst msg={toast} done={()=>setToast(null)}/>}
        <style>{`@keyframes pbFI{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}*{box-sizing:border-box;margin:0;padding:0}input::placeholder,textarea::placeholder{opacity:0.4}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${T.border};border-radius:3px}`}</style>

        {scr==="login"&&(
          <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
            <div style={{textAlign:"center",marginBottom:36}}>
              <EyeIco sz={44}/>
              <div style={{fontSize:14,fontWeight:700,letterSpacing:"0.35em",color:T.accent,textTransform:"uppercase",marginTop:18,marginBottom:8}}>Resp∴ Log∴</div>
              <h1 style={{fontSize:32,fontWeight:800,color:T.text,margin:"0 0 4px"}}>R∴L∴ Pedro Benoit</h1>
              <div style={{fontSize:20,color:T.accent,fontWeight:700,letterSpacing:"0.2em"}}>N∴ 636</div>
              <div style={{fontSize:15,color:T.textSec,marginTop:6}}>Merlo · Buenos Aires</div>
              <div style={{width:80,height:3,background:T.accent,margin:"16px auto 0",borderRadius:2}}/>
            </div>
            <div style={{background:T.bgCard,border:`2px solid ${T.borderStrong}`,borderRadius:16,padding:"40px 44px",width:"100%",maxWidth:400,boxShadow:dark?"0 20px 60px rgba(0,0,0,0.5)":"0 8px 40px rgba(22,85,168,0.12)"}}>
              <div style={{textAlign:"center",marginBottom:28,fontSize:22,color:T.accent}}>✦ &nbsp; ✦ &nbsp; ✦</div>
              <label style={{display:"block",marginBottom:18}}>
                <div style={{fontSize:14,fontWeight:700,color:T.textSec,marginBottom:8,letterSpacing:"0.06em"}}>USUARIO</div>
                <input type="text" value={lu} onChange={e=>setLu(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} placeholder="nombre de usuario"
                  style={{width:"100%",padding:"13px 16px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:17,fontFamily:FF,outline:"none",boxSizing:"border-box"}}
                  onFocus={e=>{e.target.style.borderColor=T.accent;e.target.style.boxShadow=`0 0 0 3px ${T.accent}25`;}} onBlur={e=>{e.target.style.borderColor=T.border;e.target.style.boxShadow="none";}}/>
              </label>
              <label style={{display:"block",marginBottom:20}}>
                <div style={{fontSize:14,fontWeight:700,color:T.textSec,marginBottom:8,letterSpacing:"0.06em"}}>CONTRASEÑA</div>
                <input type="password" value={lp} onChange={e=>setLp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} placeholder="••••••••"
                  style={{width:"100%",padding:"13px 16px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:17,fontFamily:FF,outline:"none",boxSizing:"border-box"}}
                  onFocus={e=>{e.target.style.borderColor=T.accent;e.target.style.boxShadow=`0 0 0 3px ${T.accent}25`;}} onBlur={e=>{e.target.style.borderColor=T.border;e.target.style.boxShadow="none";}}/>
              </label>
              {lerr&&<div style={{color:T.danger,fontSize:15,textAlign:"center",marginBottom:16,padding:"10px",border:`1.5px solid ${T.danger}55`,background:T.dangerBg,borderRadius:8,fontWeight:600}}>{lerr}</div>}
              <button onClick={login} style={{width:"100%",padding:"15px",background:T.btnGrad,border:`2px solid ${T.accent}`,borderRadius:10,color:T.accent,fontSize:16,letterSpacing:"0.18em",textTransform:"uppercase",cursor:"pointer",fontFamily:FF,fontWeight:800}}
                onMouseEnter={e=>{e.target.style.opacity="0.88";}} onMouseLeave={e=>{e.target.style.opacity="1";}}>Entrar al Templo</button>
              <div style={{textAlign:"center",marginTop:18}}>
                <button onClick={()=>setDark(d=>!d)} style={{background:"none",border:`1.5px solid ${T.border}`,borderRadius:20,padding:"7px 18px",color:T.textSec,fontSize:14,fontWeight:600,fontFamily:FF,cursor:"pointer"}}>
                  {dark?"☀  Modo Claro":"☽  Modo Oscuro"}
                </button>
              </div>
            </div>
            <div style={{marginTop:28,fontSize:14,color:T.textFaint,letterSpacing:"0.2em"}}>A∴ L∴ G∴ D∴ G∴ A∴ D∴ U∴</div>
          </div>
        )}

        {scr==="dash"&&cu&&(
          <div>
            <header style={{background:T.headerBg,borderBottom:`1.5px solid ${T.border}`,padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:200,backdropFilter:"blur(12px)"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <EyeIco sz={30}/>
                <div>
                  <div style={{fontSize:17,fontWeight:800,color:T.text}}>R∴L∴ Pedro Benoit</div>
                  <div style={{fontSize:13,color:T.accent,fontWeight:600}}>N∴ 636 · Merlo, Buenos Aires</div>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <button onClick={()=>setDark(d=>!d)} style={{background:T.accentBg,border:`1.5px solid ${T.accentBorder}`,borderRadius:20,padding:"6px 14px",color:T.accent,fontSize:16,fontWeight:700,fontFamily:FF,cursor:"pointer"}} title="Cambiar tema">
                  {dark?"☀":"☽"}
                </button>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:15,color:T.text,fontWeight:700}}>{nFull(cu)}</div>
                  <div style={{fontSize:13,color:T.GRADO[cu.grado]||T.accent,fontWeight:700}}>{GICON[cu.grado]} {cu.oficialidad||cu.cargo}</div>
                </div>
                <Btn onClick={logout} vari="ghost" sm ch="Salir"/>
              </div>
            </header>
            <div style={{background:T.tabsBg,borderBottom:`1.5px solid ${T.border}`,padding:"0 24px",display:"flex",overflowX:"auto"}}>
              {TABS.map(x=><button key={x.id} onClick={()=>setTab(x.id)} style={{padding:"14px 18px",background:"none",border:"none",borderBottom:`3px solid ${tab===x.id?T.accent:"transparent"}`,color:tab===x.id?T.accent:T.textSec,cursor:"pointer",fontFamily:FF,fontSize:15,fontWeight:tab===x.id?700:500,whiteSpace:"nowrap",transition:"all 0.2s"}}>{x.l}</button>)}
            </div>
            <div style={{maxWidth:920,margin:"0 auto",padding:"32px 24px 64px"}}>
              {tab==="calendario"&&<TabCal tenidas={tenidas} confs={confs} tConf={tConf} myC={myC}/>}
              {tab==="tenidas"&&<TabTen tenidas={tenidas} confs={confs} tConf={tConf} myC={myC}/>}
              {tab==="planchas"&&<TabPla planchas={planchas} users={users} cu={cu} onAdd={addPla} onDel={delPla} isVM={isVM}/>}
              {tab==="hermanos"&&<TabHer users={users} cu={cu}/>}
              {tab==="perfil"&&<TabPerf ud={users[cu.key]} onSave={p=>updPerf(cu.key,p)}/>}
              {tab==="comunicados"&&<TabCom comuns={comuns} cu={cu} users={users} onAdd={addCom} onDel={delCom}/>}
              {tab==="vm"&&isVM&&<TabVM tenidas={tenidas} setTenidas={setTenidas} users={users} confs={confs} planchas={planchas} toast={setToast} updMas={updMas} addMem={addMem} delMem={delMem} delPla={delPla}/>}
            </div>
            <div style={{textAlign:"center",paddingBottom:32,fontSize:14,color:T.textFaint,letterSpacing:"0.2em"}}>A∴ L∴ G∴ D∴ G∴ A∴ D∴ U∴</div>
          </div>
        )}
      </div>
    </Ctx.Provider>
  );
}

function TabCal({ tenidas, confs, tConf, myC }) {
  const T=useT(); const today=new Date();
  const [vy,setVy]=useState(today.getFullYear()); const [vm,setVm]=useState(today.getMonth());
  const fd=new Date(vy,vm,1).getDay(); const dim=new Date(vy,vm+1,0).getDate();
  const tmap={}; tenidas.forEach(x=>{const d=new Date(x.fecha+"T12:00:00"); if(d.getFullYear()===vy&&d.getMonth()===vm) tmap[d.getDate()]=x;});
  const prox=tenidas.filter(x=>new Date(x.fecha+"T12:00:00")>=today).sort((a,b)=>a.fecha.localeCompare(b.fecha))[0];
  const pc=prox?myC(prox.id):{};
  const cells=[]; for(let i=0;i<fd;i++) cells.push(null); for(let d=1;d<=dim;d++) cells.push(d);
  function prev(){if(vm===0){setVm(11);setVy(y=>y-1);}else setVm(m=>m-1);}
  function next(){if(vm===11){setVm(0);setVy(y=>y+1);}else setVm(m=>m+1);}
  return (
    <div>
      <SecTit ch="Almanaque del Oriente"/>
      {prox&&(
        <div style={{background:T.accentBg,border:`2px solid ${T.accentBorder}`,borderRadius:14,padding:"22px 28px",marginBottom:28}}>
          <div style={{fontSize:13,fontWeight:700,letterSpacing:"0.25em",color:T.accent,textTransform:"uppercase",marginBottom:6}}>Próxima Tenida</div>
          <div style={{fontSize:24,fontWeight:800,color:T.text,marginBottom:4}}>{prox.tipo}</div>
          <div style={{fontSize:15,color:T.textSec,fontWeight:500,marginBottom:16}}>{fLarg(prox.fecha)} · {prox.hora} hs · Grado {prox.grado}</div>
          <div style={{display:"flex",gap:14,marginBottom:16,flexWrap:"wrap"}}>
            <span style={{fontSize:15,fontWeight:600,color:pc.asistencia?T.accent:T.textSec}}>{pc.asistencia?"✓ Vas a asistir":"Sin confirmar asistencia"}</span>
            {prox.agape&&<span style={{fontSize:15,fontWeight:600,color:pc.agape?T.cyan:T.textFaint}}>{pc.agape?"✓ Ágape confirmado":"Sin confirmar ágape"}</span>}
          </div>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <CBtn active={pc.asistencia} onClick={()=>tConf(prox.id,"asistencia")} lbl="Confirmar asistencia" aLbl="✓ Asistencia confirmada"/>
            {prox.agape&&<CBtn active={pc.agape} onClick={()=>tConf(prox.id,"agape")} lbl="+ Confirmar ágape" aLbl="✓ Ágape confirmado" sec/>}
          </div>
        </div>
      )}
      <div style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderRadius:12,overflow:"hidden"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 24px",borderBottom:`1.5px solid ${T.border}`}}>
          <button onClick={prev} style={{background:T.accentBg,border:`1.5px solid ${T.accentBorder}`,color:T.accent,padding:"8px 18px",borderRadius:8,cursor:"pointer",fontFamily:FF,fontSize:18,fontWeight:700}}>‹</button>
          <div style={{fontSize:20,fontWeight:700,color:T.text}}>{MESES[vm]} <span style={{color:T.accent}}>{vy}</span></div>
          <button onClick={next} style={{background:T.accentBg,border:`1.5px solid ${T.accentBorder}`,color:T.accent,padding:"8px 18px",borderRadius:8,cursor:"pointer",fontFamily:FF,fontSize:18,fontWeight:700}}>›</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",borderBottom:`1px solid ${T.border}`}}>
          {DIAS.map(d=><div key={d} style={{padding:"10px 0",textAlign:"center",fontSize:13,fontWeight:700,color:T.textSec,textTransform:"uppercase",letterSpacing:"0.1em"}}>{d}</div>)}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)"}}>
          {cells.map((day,i)=>{
            const isT=day&&day===today.getDate()&&vm===today.getMonth()&&vy===today.getFullYear();
            const ten=day?tmap[day]:null; const isPx=ten&&prox&&ten.id===prox.id;
            return (
              <div key={i} style={{minHeight:68,padding:"8px",borderRight:(i+1)%7===0?"none":`1px solid ${T.border}`,borderBottom:`1px solid ${T.border}`,background:isT?T.accentBg:ten?`${T.accent}08`:"none"}}>
                {day&&<>
                  <div style={{fontSize:15,fontWeight:isT?800:500,color:isT?T.accent:ten?T.text:T.textSec,width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",background:isT?`${T.accent}30`:"none",borderRadius:"50%"}}>{day}</div>
                  {ten&&<div style={{marginTop:3,fontSize:11,fontWeight:700,color:isPx?T.accent:T.textSec,background:isPx?`${T.accent}22`:T.accentBg,borderRadius:4,padding:"2px 5px",borderLeft:`3px solid ${isPx?T.accent:T.textSec}`}}>T.Inst.</div>}
                </>}
              </div>
            );
          })}
        </div>
      </div>
      {Object.keys(tmap).length>0&&(
        <div style={{marginTop:22}}>
          <div style={{fontSize:14,fontWeight:700,letterSpacing:"0.15em",color:T.textSec,textTransform:"uppercase",marginBottom:12}}>Tenidas de {MESES[vm]}</div>
          {Object.entries(tmap).sort(([a],[b])=>+a-+b).map(([day,ten])=>{
            const c=myC(ten.id);
            return (
              <div key={day} style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderLeft:`4px solid ${T.accent}`,borderRadius:10,padding:"16px 20px",marginBottom:10}}>
                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
                  <div style={{fontSize:26,fontWeight:800,color:T.accent,minWidth:36,textAlign:"center"}}>{day}</div>
                  <div style={{flex:1}}><div style={{fontSize:16,fontWeight:700,color:T.text}}>{ten.tipo}</div><div style={{fontSize:14,color:T.textSec,fontWeight:500}}>{ten.hora} hs · Grado {ten.grado}{ten.agape?" · Con Ágape":""}</div></div>
                  <div style={{display:"flex",gap:6}}>{c.asistencia&&<Bdg ch="Asisto" col={T.accent}/>}{c.agape&&<Bdg ch="Ágape" col={T.cyan}/>}</div>
                </div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  <CBtn active={c.asistencia} onClick={()=>tConf(ten.id,"asistencia")} lbl="Confirmar asistencia" aLbl="✓ Voy"/>
                  {ten.agape&&<CBtn active={c.agape} onClick={()=>tConf(ten.id,"agape")} lbl="+ Ágape" aLbl="✓ Me quedo al ágape" sec/>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function TenCard({ ten, past, myC, tConf }) {
  const T=useT(); const c=myC(ten.id);
  return (
    <div style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderLeft:`4px solid ${past?T.border:T.accent}`,borderRadius:12,padding:"22px 26px",marginBottom:14,opacity:past?0.6:1}}>
      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:12}}>
        <div><div style={{fontSize:18,fontWeight:700,color:T.text,marginBottom:4}}>{ten.tipo}</div><div style={{fontSize:14,fontWeight:600,color:T.accent}}>Grado {ten.grado} · {ten.hora} hs</div></div>
        <div style={{textAlign:"right"}}><div style={{fontSize:15,color:T.textSec,fontWeight:500}}>{fLarg(ten.fecha)}</div>{ten.agape&&<div style={{marginTop:6}}><Bdg ch="Con Ágape" col={T.cyan}/></div>}</div>
      </div>
      <p style={{fontSize:15,color:T.textSec,lineHeight:1.7,marginBottom:past?0:16}}>{ten.descripcion}</p>
      {!past&&<div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        <CBtn active={c.asistencia} onClick={()=>tConf(ten.id,"asistencia")} lbl="Confirmar asistencia" aLbl="✓ Asistencia confirmada"/>
        {ten.agape&&<CBtn active={c.agape} onClick={()=>tConf(ten.id,"agape")} lbl="Confirmar ágape" aLbl="✓ Ágape confirmado" sec/>}
      </div>}
    </div>
  );
}

function TabTen({ tenidas, confs, tConf, myC }) {
  const T=useT(); const today=new Date();
  const prox=tenidas.filter(x=>new Date(x.fecha+"T12:00:00")>=today).sort((a,b)=>a.fecha.localeCompare(b.fecha));
  const pas=tenidas.filter(x=>new Date(x.fecha+"T12:00:00")<today).sort((a,b)=>b.fecha.localeCompare(a.fecha));

  return (
    <div>
      <SecTit ch="Próximas Tenidas"/>
      {prox.length===0&&<p style={{color:T.textSec,fontSize:15}}>No hay tenidas programadas.</p>}
      {prox.map(x=><TenCard key={x.id} ten={x} myC={myC} tConf={tConf}/>)}
      {pas.length>0&&<div style={{marginTop:36}}><SecTit ch="Tenidas Anteriores"/>{pas.map(x=><TenCard key={x.id} ten={x} past myC={myC} tConf={tConf}/>)}</div>}
    </div>
  );
}

function TabPla({ planchas, users, cu, onAdd, onDel, isVM }) {
  const T=useT(); const [sel,setSel]=useState(null); const [show,setShow]=useState(false);
  const [tit,setTit]=useState(""); const [grd,setGrd]=useState(cu.grado); const [cont,setCont]=useState("");
  const GP=["Aprendiz","Compañero","Maestro"].filter(g=>GORD[g]<=GORD[cu.grado]);
  const GC={"Maestro":T.accent,"Compañero":T.cyan,"Aprendiz":"#a78bfa"};
  const vis=planchas.filter(p=>canSee(cu.grado,p.grado)).sort((a,b)=>b.fecha.localeCompare(a.fecha));
  function sub(){ if(!tit.trim()||!cont.trim()) return; onAdd({titulo:tit,grado:grd,contenido:cont,autorKey:cu.key}); setTit("");setCont("");setGrd(cu.grado);setShow(false); }
  if(sel){
    const a=users[sel.autorKey];
    return (
      <div>
        <button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:T.textSec,cursor:"pointer",fontFamily:FF,fontSize:15,fontWeight:600,marginBottom:20,padding:0}}>← Volver</button>
        <Crd sx={{}}>
          <div style={{fontSize:13,fontWeight:700,color:GC[sel.grado]||T.accent,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:8}}>Plancha de {sel.grado} · {sel.fecha}</div>
          <h2 style={{fontSize:24,fontWeight:800,color:T.text,marginBottom:8}}>{sel.titulo}</h2>
          <div style={{fontSize:15,color:T.textSec,fontWeight:500,marginBottom:22}}>{a?nFull(a):"Hermano"}</div>
          <div style={{height:3,background:`linear-gradient(90deg,${T.accent},transparent)`,borderRadius:2,marginBottom:24}}/>
          <p style={{fontSize:17,color:T.text,lineHeight:2,whiteSpace:"pre-wrap"}}>{sel.contenido}</p>
          {(cu.key===sel.autorKey||isVM)&&<div style={{marginTop:28,paddingTop:18,borderTop:`1.5px solid ${T.border}`}}><Btn onClick={()=>{onDel(sel.id);setSel(null);}} vari="danger" sm ch="Eliminar plancha"/></div>}
        </Crd>
      </div>
    );
  }
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <SecTit ch="Biblioteca de Planchas"/>
        <Btn onClick={()=>setShow(!show)} vari={show?"ghost":"primary"} sm ch={show?"Cancelar":"+ Nueva Plancha"}/>
      </div>
      <div style={{background:T.accentBg,border:`1.5px solid ${T.accentBorder}`,borderRadius:10,padding:"12px 16px",marginBottom:20,fontSize:15,color:T.textSec}}>
        Acceso a: <strong style={{color:T.text}}>{GP.join(", ")}</strong>
      </div>
      {show&&<Crd sx={{marginBottom:22,border:`2px solid ${T.accentBorder}`}}>
        <div style={{fontSize:15,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>Nueva Plancha</div>
        <Inp lbl="Título" val={tit} chg={setTit} ph="Título de la plancha"/>
        <Sel lbl="Grado" val={grd} chg={setGrd} opts={GP}/>
        <label style={{display:"block",marginBottom:16}}>
          <div style={{fontSize:14,fontWeight:600,color:T.textSec,marginBottom:6}}>Contenido</div>
          <textarea value={cont} onChange={e=>setCont(e.target.value)} rows={8} placeholder="Escribí el contenido..."
            style={{width:"100%",padding:"12px 14px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:16,fontFamily:FF,outline:"none",resize:"vertical",lineHeight:1.8,boxSizing:"border-box"}}
            onFocus={e=>e.target.style.borderColor=T.accent} onBlur={e=>e.target.style.borderColor=T.border}/>
        </label>
        <div style={{display:"flex",gap:10}}><Btn onClick={sub} ch="Publicar"/><Btn onClick={()=>setShow(false)} vari="ghost" ch="Cancelar"/></div>
      </Crd>}
      {["Maestro","Compañero","Aprendiz"].filter(g=>canSee(cu.grado,g)).map(g=>{
        const dg=vis.filter(p=>p.grado===g); if(!dg.length) return null;
        return (
          <div key={g} style={{marginBottom:28}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <span style={{fontSize:16,color:GC[g],fontWeight:800}}>{GICON[g]}</span>
              <span style={{fontSize:14,fontWeight:700,color:GC[g],letterSpacing:"0.2em",textTransform:"uppercase"}}>Planchas de {g}</span>
              <div style={{flex:1,height:2,background:`linear-gradient(90deg,${GC[g]}50,transparent)`,borderRadius:2}}/>
            </div>
            {dg.map(p=>{const a=users[p.autorKey]; return(
              <div key={p.id} onClick={()=>setSel(p)} style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderLeft:`4px solid ${GC[p.grado]}`,borderRadius:10,padding:"18px 22px",marginBottom:10,cursor:"pointer"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}>
                  <div><div style={{fontSize:17,fontWeight:700,color:T.text,marginBottom:5}}>{p.titulo}</div><div style={{fontSize:14,color:T.textSec,fontWeight:500}}>{a?nFull(a):"Hermano"} · {fCort(p.fecha)}</div></div>
                  <div style={{fontSize:15,color:T.textSec,fontWeight:600}}>Leer →</div>
                </div>
              </div>
            );})}
          </div>
        );
      })}
      {vis.length===0&&<div style={{textAlign:"center",padding:"56px 0",color:T.textSec,fontSize:16}}>No hay planchas disponibles para tu grado.</div>}
    </div>
  );
}

function TabHer({ users, cu }) {
  const T=useT(); const [sel,setSel]=useState(null);
  const lista=Object.entries(users).sort(([,a],[,b])=>{const o={"Maestro":1,"Compañero":2,"Aprendiz":3};return(o[a.grado]-o[b.grado])||nFull(a).localeCompare(nFull(b));});
  if(sel){
    const [k,u]=sel; const p=u.perfil||{}; const gc=T.GRADO[u.grado]||T.accent; const own=k===cu.key; const med=own||cu.esVM;
    return (
      <div>
        <button onClick={()=>setSel(null)} style={{background:"none",border:"none",color:T.textSec,cursor:"pointer",fontFamily:FF,fontSize:15,fontWeight:600,marginBottom:20,padding:0}}>← Volver al Cuadro Lógico</button>
        <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:28,flexWrap:"wrap"}}>
          <div style={{width:68,height:68,borderRadius:"50%",border:`3px solid ${gc}`,display:"flex",alignItems:"center",justifyContent:"center",background:T.accentBg,fontSize:24,color:gc,fontWeight:800}}>{GICON[u.grado]}</div>
          <div><div style={{fontSize:22,fontWeight:800,color:T.text,marginBottom:4}}>{nFull(u)}</div><div style={{fontSize:15,color:gc,fontWeight:700}}>{u.oficialidad||u.cargo} · {u.grado}</div>{p.numeroDeMiembro&&<div style={{fontSize:14,color:T.textSec,marginTop:2}}>Leg. N° {p.numeroDeMiembro}</div>}</div>
          {own&&<Bdg ch="Tu perfil"/>}
        </div>
        <Crd sx={{marginBottom:14}}>
          <Fld lbl="Profesión" val={p.profesion}/><Fld lbl="Localidad" val={p.localidad}/><Fld lbl="Provincia" val={p.provincia}/>
          <Fld lbl="Estado Civil" val={p.estadoCivil}/>{p.fechaNacimiento&&<Fld lbl="Edad" val={`${calcAge(p.fechaNacimiento)} años`}/>}
          {(own||cu.esVM)&&<Fld lbl="Email" val={p.email}/>}{(own||cu.esVM)&&<Fld lbl="Celular" val={p.celular}/>}
        </Crd>
        {med&&<div style={{background:T.dangerBg,border:`1.5px solid ${T.dangerBorder}`,borderRadius:12,padding:"22px 26px"}}>
          <div style={{fontSize:14,fontWeight:700,color:T.danger,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:14}}>🔒 Datos Médicos y de Emergencia</div>
          <Fld lbl="Tipo de Sangre" val={p.sangre} dng/><Fld lbl="Alergias" val={p.alergias}/><Fld lbl="Enfermedades" val={p.enfermedades}/><Fld lbl="Medicamentos" val={p.medicamentos}/><Fld lbl="Contacto Emerg." val={p.contactoEmergencia}/><Fld lbl="Relación" val={p.relacionEmergencia}/><Fld lbl="Tel. Emergencia" val={p.telefonoEmergencia}/>
        </div>}
      </div>
    );
  }
  return (
    <div>
      <SecTit ch={`Cuadro Lógico — ${lista.length} Hermanos`}/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(265px,1fr))",gap:14}}>
        {lista.map(([k,u])=>{const gc=T.GRADO[u.grado]||T.accent; const p=u.perfil||{};return(
          <div key={k} onClick={()=>setSel([k,u])} style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderRadius:12,padding:"20px 22px",cursor:"pointer",transition:"all 0.18s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=T.accent;e.currentTarget.style.boxShadow=`0 4px 20px ${T.accent}25`;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.boxShadow="none";}}>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:46,height:46,borderRadius:"50%",border:`2.5px solid ${gc}55`,display:"flex",alignItems:"center",justifyContent:"center",background:T.accentBg,fontSize:18,color:gc,fontWeight:800,flexShrink:0}}>{GICON[u.grado]}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:15,fontWeight:700,color:T.text,marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{nFull(u)}</div>
                <div style={{fontSize:13,color:gc,fontWeight:600}}>{u.oficialidad||u.cargo}</div>
                <div style={{fontSize:13,color:T.textSec}}>{u.grado}{p.localidad?` · ${p.localidad}`:""}</div>
              </div>
            </div>
          </div>
        );})}
      </div>
    </div>
  );
}

function TabPerf({ ud, onSave }) {
  const T=useT(); const [edit,setEdit]=useState(false); const [form,setForm]=useState({...ud.perfil});
  const gc=T.GRADO[ud.grado]||T.accent;
  function s(k,v){setForm(p=>({...p,[k]:v}));}
  function save(){onSave(form);setEdit(false);}
  function cancel(){setForm({...ud.perfil});setEdit(false);}
  return (
    <div>
      <SecTit ch="Mi Perfil Masónico"/>
      <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:28,flexWrap:"wrap"}}>
        <div style={{width:72,height:72,borderRadius:"50%",border:`3px solid ${gc}`,display:"flex",alignItems:"center",justifyContent:"center",background:T.accentBg,fontSize:26,color:gc,fontWeight:800}}>{GICON[ud.grado]}</div>
        <div><div style={{fontSize:22,fontWeight:800,color:T.text,marginBottom:4}}>{nFull(ud)}</div><div style={{fontSize:15,color:gc,fontWeight:700}}>{ud.oficialidad||ud.cargo} · {ud.grado}</div><div style={{fontSize:14,color:T.textSec,marginTop:2}}>Leg. N° {form.numeroDeMiembro} · R∴L∴ Pedro Benoit 636</div></div>
        {!edit&&<Btn onClick={()=>setEdit(true)} vari="ghost" sm ch="Editar mis datos" sx={{marginLeft:"auto"}}/>}
      </div>
      {!edit&&<div style={{background:T.accentBg,border:`1.5px solid ${T.accentBorder}`,borderRadius:10,padding:"12px 16px",marginBottom:20,fontSize:15,color:T.textSec}}>Los datos masónicos son gestionados por el Venerable Maestro.</div>}
      {edit?(
        <div>
          <Crd sx={{marginBottom:14}}>
            <div style={{fontSize:15,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>Identidad</div>
            <G2 ch={<><Inp lbl="Nombre" val={form.nombre} chg={v=>s("nombre",v)}/><Inp lbl="Apellido" val={form.apellido} chg={v=>s("apellido",v)}/><Inp lbl="DNI" val={form.dni} chg={v=>s("dni",v)}/><Inp lbl="Fecha de Nacimiento" typ="date" val={form.fechaNacimiento} chg={v=>s("fechaNacimiento",v)}/><Sel lbl="Estado Civil" val={form.estadoCivil} chg={v=>s("estadoCivil",v)} opts={["Soltero","Casado","Divorciado","Viudo","Unión convivencial"]}/><Inp lbl="Profesión" val={form.profesion} chg={v=>s("profesion",v)}/></>}/>
          </Crd>
          <Crd sx={{marginBottom:14}}>
            <div style={{fontSize:15,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>Contacto</div>
            <G2 ch={<><Inp lbl="Email" val={form.email} chg={v=>s("email",v)}/><Inp lbl="Teléfono" val={form.telefono} chg={v=>s("telefono",v)}/><Inp lbl="Celular" val={form.celular} chg={v=>s("celular",v)}/><div/></>}/>
            <Inp lbl="Dirección" val={form.direccion} chg={v=>s("direccion",v)}/>
            <G2 ch={<><Inp lbl="Localidad" val={form.localidad} chg={v=>s("localidad",v)}/><Inp lbl="Provincia" val={form.provincia} chg={v=>s("provincia",v)}/></>}/>
          </Crd>
          <div style={{background:T.dangerBg,border:`1.5px solid ${T.dangerBorder}`,borderRadius:12,padding:"22px 26px",marginBottom:14}}>
            <div style={{fontSize:15,fontWeight:700,color:T.danger,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>🔒 Datos Médicos y de Emergencia</div>
            <G2 ch={<><Sel lbl="Tipo de Sangre" val={form.sangre} chg={v=>s("sangre",v)} opts={[{v:"",l:"— seleccionar —"},"A+","A-","B+","B-","AB+","AB-","O+","O-"]}/><Inp lbl="Alergias" val={form.alergias} chg={v=>s("alergias",v)} ph="Ej: Penicilina"/></>}/>
            <Inp lbl="Enfermedades / Condiciones crónicas" val={form.enfermedades} chg={v=>s("enfermedades",v)}/>
            <Inp lbl="Medicamentos habituales" val={form.medicamentos} chg={v=>s("medicamentos",v)}/>
            <G2 ch={<><Inp lbl="Contacto de Emergencia" val={form.contactoEmergencia} chg={v=>s("contactoEmergencia",v)}/><Inp lbl="Relación" val={form.relacionEmergencia} chg={v=>s("relacionEmergencia",v)}/></>}/>
            <Inp lbl="Teléfono de Emergencia" val={form.telefonoEmergencia} chg={v=>s("telefonoEmergencia",v)}/>
          </div>
          <div style={{display:"flex",gap:12}}><Btn onClick={save} ch="Guardar cambios"/><Btn onClick={cancel} vari="ghost" ch="Cancelar"/></div>
        </div>
      ):(
        <div>
          <Crd sx={{marginBottom:14}}>
            <div style={{fontSize:14,fontWeight:700,color:T.textSec,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:14}}>Datos Personales</div>
            <Fld lbl="Nombre completo" val={nFull(ud)}/><Fld lbl="DNI" val={form.dni}/><Fld lbl="Edad" val={form.fechaNacimiento?`${fCort(form.fechaNacimiento)} (${calcAge(form.fechaNacimiento)} años)`:null}/><Fld lbl="Estado Civil" val={form.estadoCivil}/><Fld lbl="Profesión" val={form.profesion}/>
          </Crd>
          <Crd sx={{marginBottom:14}}>
            <div style={{fontSize:14,fontWeight:700,color:T.textSec,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:14}}>Contacto</div>
            <Fld lbl="Email" val={form.email}/><Fld lbl="Teléfono" val={form.telefono}/><Fld lbl="Celular" val={form.celular}/><Fld lbl="Dirección" val={form.direccion}/><Fld lbl="Localidad" val={form.localidad}/>
          </Crd>
          <Crd sx={{marginBottom:14}}>
            <div style={{fontSize:14,fontWeight:700,color:T.textSec,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:14}}>Masónico (solo lectura)</div>
            <Fld lbl="Grado · Cargo" val={`${ud.grado} · ${ud.cargo}`}/><Fld lbl="Leg. N°" val={form.numeroDeMiembro}/><Fld lbl="Logia" val="R∴L∴ Pedro Benoit N∴ 636 · Merlo"/>
          </Crd>
          <div style={{background:T.dangerBg,border:`1.5px solid ${T.dangerBorder}`,borderRadius:12,padding:"22px 26px"}}>
            <div style={{fontSize:14,fontWeight:700,color:T.danger,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:14}}>🔒 Datos Médicos</div>
            <Fld lbl="Tipo de Sangre" val={form.sangre} dng/><Fld lbl="Alergias" val={form.alergias}/><Fld lbl="Enfermedades" val={form.enfermedades}/><Fld lbl="Medicamentos" val={form.medicamentos}/><Fld lbl="Contacto Emerg." val={form.contactoEmergencia&&form.relacionEmergencia?`${form.contactoEmergencia} (${form.relacionEmergencia})`:form.contactoEmergencia}/><Fld lbl="Tel. Emergencia" val={form.telefonoEmergencia}/>
          </div>
        </div>
      )}
    </div>
  );
}

function TabCom({ comuns, cu, users, onAdd, onDel }) {
  const T=useT(); const canG=canCom(cu); const [show,setShow]=useState(false); const [tit,setTit]=useState(""); const [cpo,setCpo]=useState("");
  function sub(){ if(!tit.trim()||!cpo.trim()) return; onAdd({titulo:tit,cuerpo:cpo,autorKey:cu.key}); setTit("");setCpo("");setShow(false); }
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <SecTit ch="Comunicados del Oriente"/>
        {canG&&<Btn onClick={()=>setShow(!show)} vari={show?"ghost":"primary"} sm ch={show?"Cancelar":"+ Nuevo Comunicado"}/>}
      </div>
      {show&&canG&&<Crd sx={{marginBottom:22,border:`2px solid ${T.accentBorder}`}}>
        <div style={{fontSize:15,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>Nuevo Comunicado</div>
        <Inp lbl="Título" val={tit} chg={setTit} ph="Asunto del comunicado"/>
        <label style={{display:"block",marginBottom:16}}>
          <div style={{fontSize:14,fontWeight:600,color:T.textSec,marginBottom:6}}>Contenido</div>
          <textarea value={cpo} onChange={e=>setCpo(e.target.value)} rows={5} placeholder="Texto del comunicado..."
            style={{width:"100%",padding:"12px 14px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:16,fontFamily:FF,outline:"none",resize:"vertical",lineHeight:1.8,boxSizing:"border-box"}}
            onFocus={e=>e.target.style.borderColor=T.accent} onBlur={e=>e.target.style.borderColor=T.border}/>
        </label>
        <div style={{display:"flex",gap:10}}><Btn onClick={sub} ch="Publicar"/><Btn onClick={()=>setShow(false)} vari="ghost" ch="Cancelar"/></div>
      </Crd>}
      {comuns.map(c=>{const a=users[c.autorKey]; return(
        <Crd key={c.id} sx={{marginBottom:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:8}}>
            <div><div style={{fontSize:15,fontWeight:700,color:T.accent,marginBottom:2}}>{a?nFull(a):"Oriente"}{a?.oficialidad&&<span style={{color:T.textSec,fontWeight:500,marginLeft:8}}>· {a.oficialidad}</span>}</div><div style={{fontSize:13,color:T.textSec,fontWeight:500}}>{c.fecha}</div></div>
            {canG&&<button onClick={()=>onDel(c.id)} style={{background:"none",border:`1.5px solid ${T.border}`,color:T.textSec,padding:"5px 14px",borderRadius:8,cursor:"pointer",fontFamily:FF,fontSize:14,fontWeight:600,transition:"all 0.2s"}} onMouseEnter={e=>{e.target.style.borderColor=T.danger;e.target.style.color=T.danger;}} onMouseLeave={e=>{e.target.style.borderColor=T.border;e.target.style.color=T.textSec;}}>Eliminar</button>}
          </div>
          <div style={{fontSize:17,fontWeight:700,color:T.text,marginBottom:8}}>{c.titulo}</div>
          <p style={{fontSize:15,color:T.textSec,lineHeight:1.8}}>{c.cuerpo}</p>
        </Crd>
      );})}
      {comuns.length===0&&<div style={{textAlign:"center",padding:"56px 0",color:T.textSec,fontSize:16}}>No hay comunicados publicados.</div>}
    </div>
  );
}

function TabVM({ tenidas, setTenidas, users, confs, planchas, toast, updMas, addMem, delMem, delPla }) {
  const T=useT(); const [vt,setVt]=useState("asistentes");
  const VT=[{id:"asistentes",l:"Asistentes"},{id:"miembros",l:"Miembros"},{id:"tenidas",l:"Tenidas"},{id:"planchas",l:"Planchas"}];
  return (
    <div>
      <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:28}}>
        <div style={{fontSize:22,color:T.accent,fontWeight:800}}>✦</div>
        <div><div style={{fontSize:20,fontWeight:800,color:T.text}}>Panel Administrativo — Venerable Maestro</div><div style={{fontSize:14,color:T.textSec,fontWeight:500}}>R∴L∴ Pedro Benoit N∴ 636 · Merlo</div></div>
      </div>
      <div style={{display:"flex",borderBottom:`2px solid ${T.border}`,marginBottom:26,overflowX:"auto"}}>
        {VT.map(x=><button key={x.id} onClick={()=>setVt(x.id)} style={{padding:"12px 18px",background:"none",border:"none",borderBottom:`3px solid ${vt===x.id?T.accent:"transparent"}`,color:vt===x.id?T.accent:T.textSec,cursor:"pointer",fontFamily:FF,fontSize:15,fontWeight:vt===x.id?700:500,whiteSpace:"nowrap",transition:"all 0.2s"}}>{x.l}</button>)}
      </div>
      {vt==="asistentes"&&<VMAs tenidas={tenidas} users={users} confs={confs}/>}
      {vt==="miembros"&&<VMMem users={users} updMas={updMas} addMem={addMem} delMem={delMem} toast={toast}/>}
      {vt==="tenidas"&&<VMTen tenidas={tenidas} setTenidas={setTenidas} toast={toast}/>}
      {vt==="planchas"&&<VMPla planchas={planchas} users={users} delPla={delPla}/>}
    </div>
  );
}

function VMAs({ tenidas, users, confs }) {
  const T=useT(); const today=new Date();
  const prox=tenidas.filter(x=>new Date(x.fecha+"T12:00:00")>=today).sort((a,b)=>a.fecha.localeCompare(b.fecha));
  const uks=Object.keys(users);
  return (
    <div>
      <SecTit ch="Confirmaciones por Tenida"/>
      {prox.map(ten=>{
        const tc=confs[ten.id]||{};
        const asist=uks.filter(k=>tc[k]?.asistencia===true);
        const noAs=uks.filter(k=>tc[k]?.asistencia===false);
        const sinC=uks.filter(k=>tc[k]?.asistencia===undefined);
        const agap=uks.filter(k=>tc[k]?.agape===true);
        return (
          <Crd key={ten.id} sx={{marginBottom:18}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:12,marginBottom:16}}>
              <div><div style={{fontSize:17,fontWeight:700,color:T.text}}>{ten.tipo}</div><div style={{fontSize:14,color:T.accent,fontWeight:600,marginTop:2}}>{fLarg(ten.fecha)} · {ten.hora} hs</div></div>
              <div style={{display:"flex",gap:18,flexWrap:"wrap"}}>
                {[{n:asist.length,l:"ASISTEN",c:T.accent},{n:noAs.length,l:"NO ASISTEN",c:T.danger},{n:sinC.length,l:"SIN CONF.",c:T.textSec},{n:agap.length,l:"ÁGAPE",c:T.cyan},{n:uks.length,l:"TOTAL",c:T.textFaint}].map(({n,l,c})=>(
                  <div key={l} style={{textAlign:"center"}}><div style={{fontSize:26,fontWeight:800,color:c}}>{n}</div><div style={{fontSize:12,fontWeight:700,color:c,letterSpacing:"0.1em"}}>{l}</div></div>
                ))}
              </div>
            </div>
            <div style={{height:8,background:T.border,borderRadius:4,marginBottom:16,overflow:"hidden",display:"flex"}}>
              <div style={{height:"100%",width:`${uks.length>0?(asist.length/uks.length*100):0}%`,background:T.accent,transition:"width 0.4s"}}/>
              <div style={{height:"100%",width:`${uks.length>0?(noAs.length/uks.length*100):0}%`,background:T.danger,transition:"width 0.4s"}}/>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
              {[{lbl:`✓ Asisten (${asist.length})`,keys:asist,col:T.accent,showAgape:true,tc},{lbl:`✗ No asisten (${noAs.length})`,keys:noAs,col:T.danger},{lbl:`? Sin confirmar (${sinC.length})`,keys:sinC,col:T.textSec}].map(({lbl,keys,col,showAgape,tc:tcc})=>(
                <div key={lbl}>
                  <div style={{fontSize:13,fontWeight:700,color:col,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8,borderBottom:`2px solid ${col}40`,paddingBottom:4}}>{lbl}</div>
                  {keys.length===0?<div style={{fontSize:14,color:T.textFaint,fontStyle:"italic"}}>—</div>
                    :keys.map(k=>{const u=users[k];return u?<div key={k} style={{fontSize:14,color:T.text,padding:"3px 0",borderBottom:`1px solid ${T.border}`,fontWeight:500}}>{nFull(u)}{showAgape&&tcc&&tcc[k]?.agape&&<span style={{fontSize:12,color:T.cyan,marginLeft:6,fontWeight:700}}>+ágape</span>}</div>:null;})}
                </div>
              ))}
            </div>
          </Crd>
        );
      })}
      {prox.length===0&&<div style={{textAlign:"center",padding:"48px 0",color:T.textSec,fontSize:16}}>No hay tenidas próximas programadas.</div>}
    </div>
  );
}

function VMMem({ users, updMas, addMem, delMem, toast }) {
  const T=useT(); const [ek,setEk]=useState(null); const [ef,setEf]=useState({});
  const [showN,setShowN]=useState(false); const [nf,setNf]=useState({username:"",password:"1234",nombre:"",apellido:"",grado:"Aprendiz",oficialidad:"",fechaIniciacion:"",numeroDeMiembro:""});
  const lista=Object.entries(users).sort(([,a],[,b])=>{const o={"Maestro":1,"Compañero":2,"Aprendiz":3};return o[a.grado]-o[b.grado]||nFull(a).localeCompare(nFull(b));});
  function startE(k,u){setEk(k);setEf({grado:u.grado,oficialidad:u.oficialidad||"",esVM:u.esVM||false,password:u.password,nombre:u.perfil?.nombre||"",apellido:u.perfil?.apellido||"",numeroDeMiembro:u.perfil?.numeroDeMiembro||"",fechaIniciacion:u.perfil?.fechaIniciacion||""});}
  function saveE(k){const u=users[k];updMas(k,{grado:ef.grado,cargo:ef.oficialidad||"Hermano",oficialidad:ef.oficialidad,esVM:ef.esVM,password:ef.password||u.password,perfil:{...u.perfil,nombre:ef.nombre,apellido:ef.apellido,numeroDeMiembro:ef.numeroDeMiembro,fechaIniciacion:ef.fechaIniciacion}});setEk(null);}
  function addH(){const k=nf.username.trim().toLowerCase();if(!k||!nf.nombre||!nf.apellido){toast("Completá usuario, nombre y apellido");return;}if(users[k]){toast("Ese usuario ya existe");return;}addMem(k,{password:nf.password||"1234",grado:nf.grado,cargo:nf.oficialidad||"Hermano",oficialidad:nf.oficialidad,esVM:false,perfil:{nombre:nf.nombre,apellido:nf.apellido,email:"",telefono:"",celular:"",direccion:"",localidad:"Merlo",provincia:"Buenos Aires",fechaNacimiento:"",dni:"",profesion:"",estadoCivil:"",sangre:"",enfermedades:"",medicamentos:"",alergias:"",contactoEmergencia:"",telefonoEmergencia:"",relacionEmergencia:"",fechaIniciacion:nf.fechaIniciacion||"",numeroDeMiembro:nf.numeroDeMiembro||""}});setNf({username:"",password:"1234",nombre:"",apellido:"",grado:"Aprendiz",oficialidad:"",fechaIniciacion:"",numeroDeMiembro:""});setShowN(false);}
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
        <SecTit ch="Gestión de Miembros"/>
        <Btn onClick={()=>setShowN(!showN)} vari={showN?"ghost":"primary"} sm ch={showN?"Cancelar":"+ Nuevo Hermano"}/>
      </div>
      {showN&&<Crd sx={{marginBottom:22,border:`2px solid ${T.accentBorder}`}}>
        <div style={{fontSize:15,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:16}}>Registrar Nuevo Hermano</div>
        <G2 ch={<><Inp lbl="Nombre" val={nf.nombre} chg={v=>setNf(p=>({...p,nombre:v}))}/><Inp lbl="Apellido" val={nf.apellido} chg={v=>setNf(p=>({...p,apellido:v}))}/><Inp lbl="Usuario (login)" val={nf.username} chg={v=>setNf(p=>({...p,username:v}))} ph="ej: jgonzalez"/><Inp lbl="Contraseña" typ="password" val={nf.password} chg={v=>setNf(p=>({...p,password:v}))}/></>}/>
        <G2 ch={<><Sel lbl="Grado" val={nf.grado} chg={v=>setNf(p=>({...p,grado:v}))} opts={["Aprendiz","Compañero","Maestro"]}/><Sel lbl="Oficialidad" val={nf.oficialidad} chg={v=>setNf(p=>({...p,oficialidad:v}))} opts={OFICIALIDADES}/></>}/>
        <G2 ch={<><Inp lbl="Fecha Iniciación" typ="date" val={nf.fechaIniciacion} chg={v=>setNf(p=>({...p,fechaIniciacion:v}))}/><Inp lbl="Leg. N°" val={nf.numeroDeMiembro} chg={v=>setNf(p=>({...p,numeroDeMiembro:v}))} ph="00.000"/></>}/>
        <div style={{display:"flex",gap:10}}><Btn onClick={addH} sm ch="Registrar"/><Btn onClick={()=>setShowN(false)} vari="ghost" sm ch="Cancelar"/></div>
      </Crd>}
      {lista.map(([k,u])=>{const gc=T.GRADO[u.grado]||T.accent; const isE=ek===k; return(
        <Crd key={k} sx={{marginBottom:12,border:isE?`2px solid ${T.accentBorder}`:undefined}}>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:isE?18:0}}>
            <div style={{width:44,height:44,borderRadius:"50%",border:`2px solid ${gc}55`,display:"flex",alignItems:"center",justifyContent:"center",background:T.accentBg,fontSize:16,color:gc,fontWeight:800,flexShrink:0}}>{GICON[u.grado]}</div>
            <div style={{flex:1,minWidth:0}}><div style={{fontSize:16,fontWeight:700,color:T.text}}>{nFull(u)}</div><div style={{fontSize:13,color:gc,fontWeight:600}}>{u.oficialidad||u.cargo} · {u.grado}{u.esVM&&<span style={{color:T.accent,marginLeft:8}}>✦ VM</span>}</div><div style={{fontSize:12,color:T.textFaint}}>@{k} · Leg. {u.perfil?.numeroDeMiembro||"—"}</div></div>
            {!isE&&<div style={{display:"flex",gap:8}}><Btn onClick={()=>startE(k,u)} vari="ghost" sm ch="Editar"/>{!u.esVM&&<Btn onClick={()=>{if(window.confirm("¿Eliminar a "+nFull(u)+"?"))delMem(k);}} vari="danger" sm ch="✕"/>}</div>}
          </div>
          {isE&&<div style={{paddingTop:14,borderTop:`1.5px solid ${T.border}`}}>
            <div style={{fontSize:14,fontWeight:700,color:T.accent,textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:14}}>Editar: {nFull(u)}</div>
            <G2 ch={<><Inp lbl="Nombre" val={ef.nombre} chg={v=>setEf(p=>({...p,nombre:v}))}/><Inp lbl="Apellido" val={ef.apellido} chg={v=>setEf(p=>({...p,apellido:v}))}/></>}/>
            <G2 ch={<><Sel lbl="Grado" val={ef.grado} chg={v=>setEf(p=>({...p,grado:v}))} opts={["Aprendiz","Compañero","Maestro"]}/><Sel lbl="Oficialidad" val={ef.oficialidad} chg={v=>setEf(p=>({...p,oficialidad:v}))} opts={OFICIALIDADES}/></>}/>
            <G2 ch={<><Inp lbl="Leg. N°" val={ef.numeroDeMiembro} chg={v=>setEf(p=>({...p,numeroDeMiembro:v}))}/><Inp lbl="Nueva contraseña" typ="password" val={ef.password} chg={v=>setEf(p=>({...p,password:v}))}/></>}/>
            <label style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginBottom:14}}><input type="checkbox" checked={ef.esVM||false} onChange={e=>setEf(p=>({...p,esVM:e.target.checked}))} style={{accentColor:T.accent,width:16,height:16}}/><span style={{fontSize:15,color:T.textSec,fontWeight:600}}>Es Venerable Maestro</span></label>
            <div style={{display:"flex",gap:10}}><Btn onClick={()=>saveE(k)} sm ch="Guardar"/><Btn onClick={()=>setEk(null)} vari="ghost" sm ch="Cancelar"/></div>
          </div>}
        </Crd>
      );})}
    </div>
  );
}

function VMTen({ tenidas, setTenidas, toast }) {
  const T=useT(); const [eid,setEid]=useState(null); const [showN,setShowN]=useState(false);
  const [nf,setNf]=useState({fecha:"",hora:"19:00",tipo:"Tenida de Instrucción",grado:"Aprendiz",agape:true,descripcion:""});
  function addT(){if(!nf.fecha) return;const id=Math.max(...tenidas.map(x=>x.id),0)+1;setTenidas(p=>[...p,{...nf,id}].sort((a,b)=>a.fecha.localeCompare(b.fecha)));setNf({fecha:"",hora:"19:00",tipo:"Tenida de Instrucción",grado:"Aprendiz",agape:true,descripcion:""});setShowN(false);toast("✓ Tenida agregada");}
  function delT(id){setTenidas(p=>p.filter(x=>x.id!==id));toast("Tenida eliminada");}
  function saveE(id,u){setTenidas(p=>p.map(x=>x.id===id?{...x,...u}:x));setEid(null);toast("✓ Tenida actualizada");}
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
        <SecTit ch="Tenidas del Almanaque"/>
        <Btn onClick={()=>setShowN(!showN)} vari={showN?"ghost":"primary"} sm ch={showN?"Cancelar":"+ Nueva Tenida"}/>
      </div>
      {showN&&<Crd sx={{marginBottom:20,border:`2px solid ${T.accentBorder}`}}>
        <G2 ch={<><Inp lbl="Fecha" typ="date" val={nf.fecha} chg={v=>setNf(p=>({...p,fecha:v}))}/><Inp lbl="Hora" typ="time" val={nf.hora} chg={v=>setNf(p=>({...p,hora:v}))}/></>}/>
        <Sel lbl="Tipo de Tenida" val={nf.tipo} chg={v=>setNf(p=>({...p,tipo:v}))} opts={["Tenida de Instrucción","Tenida Ordinaria","Tenida de Iniciación","Tenida de Perfección","Tenida Solsticial","Tenida Blanca","Tenida Especial"]}/>
        <Sel lbl="Grado" val={nf.grado} chg={v=>setNf(p=>({...p,grado:v}))} opts={["Aprendiz","Compañero","Maestro","Todos"]}/>
        <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:16,cursor:"pointer"}}><input type="checkbox" checked={nf.agape} onChange={e=>setNf(p=>({...p,agape:e.target.checked}))} style={{accentColor:T.accent,width:16,height:16}}/><span style={{fontSize:15,color:T.textSec,fontWeight:600}}>Incluye Ágape</span></label>
        <label style={{display:"block",marginBottom:16}}><div style={{fontSize:14,fontWeight:600,color:T.textSec,marginBottom:6}}>Descripción</div><textarea value={nf.descripcion} onChange={e=>setNf(p=>({...p,descripcion:e.target.value}))} rows={2} style={{width:"100%",padding:"10px 14px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:15,fontFamily:FF,outline:"none",resize:"vertical",boxSizing:"border-box"}} onFocus={e=>e.target.style.borderColor=T.accent} onBlur={e=>e.target.style.borderColor=T.border}/></label>
        <Btn onClick={addT} ch="Agregar al Almanaque"/>
      </Crd>}
      {tenidas.sort((a,b)=>a.fecha.localeCompare(b.fecha)).map(ten=>(
        eid===ten.id
          ?<TenEd key={ten.id} ten={ten} onSave={u=>saveE(ten.id,u)} onCancel={()=>setEid(null)}/>
          :<div key={ten.id} style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderRadius:10,padding:"14px 18px",marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
            <div style={{flex:1}}><div style={{fontSize:15,fontWeight:700,color:T.text}}>{ten.tipo}</div><div style={{fontSize:13,color:T.accent,fontWeight:500}}>{fCort(ten.fecha)} · {ten.hora} · {ten.grado}{ten.agape?" · Ágape":""}</div></div>
            <div style={{display:"flex",gap:8}}><Btn onClick={()=>setEid(ten.id)} vari="ghost" sm ch="Editar"/><Btn onClick={()=>delT(ten.id)} vari="danger" sm ch="Eliminar"/></div>
          </div>
      ))}
    </div>
  );
}

function TenEd({ ten, onSave, onCancel }) {
  const T=useT(); const [f,setF]=useState({...ten}); function s(k,v){setF(p=>({...p,[k]:v}));}
  return (
    <div style={{background:T.accentBg,border:`2px solid ${T.accentBorder}`,borderRadius:10,padding:"18px 22px",marginBottom:10}}>
      <G2 ch={<><Inp lbl="Fecha" typ="date" val={f.fecha} chg={v=>s("fecha",v)}/><Inp lbl="Hora" typ="time" val={f.hora} chg={v=>s("hora",v)}/><Inp lbl="Tipo" val={f.tipo} chg={v=>s("tipo",v)}/><Sel lbl="Grado" val={f.grado} chg={v=>s("grado",v)} opts={["Aprendiz","Compañero","Maestro","Todos"]}/></>}/>
      <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,cursor:"pointer"}}><input type="checkbox" checked={f.agape} onChange={e=>s("agape",e.target.checked)} style={{accentColor:T.accent}}/><span style={{fontSize:15,color:T.textSec,fontWeight:600}}>Incluye Ágape</span></label>
      <label style={{display:"block",marginBottom:12}}><div style={{fontSize:14,fontWeight:600,color:T.textSec,marginBottom:6}}>Descripción</div><textarea value={f.descripcion} onChange={e=>s("descripcion",e.target.value)} rows={2} style={{width:"100%",padding:"10px 14px",background:T.bgInput,border:`2px solid ${T.border}`,borderRadius:8,color:T.text,fontSize:15,fontFamily:FF,outline:"none",resize:"vertical",boxSizing:"border-box"}}/></label>
      <div style={{display:"flex",gap:10}}><Btn onClick={()=>onSave(f)} sm ch="Guardar"/><Btn onClick={onCancel} vari="ghost" sm ch="Cancelar"/></div>
    </div>
  );
}

function VMPla({ planchas, users, delPla }) {
  const T=useT(); const GC={"Maestro":T.accent,"Compañero":T.cyan,"Aprendiz":"#a78bfa"};
  return (
    <div>
      <SecTit ch="Todas las Planchas"/>
      {["Maestro","Compañero","Aprendiz"].map(g=>{
        const dg=planchas.filter(p=>p.grado===g).sort((a,b)=>b.fecha.localeCompare(a.fecha)); if(!dg.length) return null;
        return (
          <div key={g} style={{marginBottom:28}}>
            <div style={{fontSize:13,fontWeight:700,letterSpacing:"0.2em",color:GC[g],textTransform:"uppercase",marginBottom:12}}>{GICON[g]} Planchas de {g}</div>
            {dg.map(p=>{const a=users[p.autorKey]; return(
              <div key={p.id} style={{background:T.bgCard,border:`1.5px solid ${T.border}`,borderLeft:`4px solid ${GC[g]}`,borderRadius:10,padding:"14px 18px",marginBottom:8,display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
                <div style={{flex:1}}><div style={{fontSize:15,fontWeight:700,color:T.text}}>{p.titulo}</div><div style={{fontSize:13,color:T.textSec,marginTop:2,fontWeight:500}}>{a?nFull(a):"—"} · {fCort(p.fecha)}</div></div>
                <Btn onClick={()=>delPla(p.id)} vari="danger" sm ch="Eliminar"/>
              </div>
            );})}
          </div>
        );
      })}
      {planchas.length===0&&<p style={{color:T.textSec,fontSize:15}}>No hay planchas.</p>}
    </div>
  );
}
