import { SUPABASE_URL, SUPABASE_KEY } from "./logia.config.js";

const H = { "apikey": SUPABASE_KEY, "Authorization": `Bearer ${SUPABASE_KEY}`, "Content-Type": "application/json", "Prefer": "return=representation" };

async function q(path, opts = {}) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers: H, ...opts });
  const txt = await r.text();
  if (!r.ok) throw new Error(txt);
  return txt ? JSON.parse(txt) : null;
}

export async function getUsuarios() {
  const rows = await q("usuarios?select=*&order=apellido");
  const map = {};
  rows.forEach(r => {
    map[r.key] = {
      password: r.password, grado: r.grado, cargo: r.cargo,
      oficialidad: r.oficialidad || "", esVM: r.es_vm || false,
      perfil: {
        nombre: r.nombre || "", apellido: r.apellido || "",
        email: r.email || "", telefono: r.telefono || "",
        celular: r.celular || "", direccion: r.direccion || "",
        localidad: r.localidad || "", provincia: r.provincia || "",
        fechaNacimiento: r.fecha_nacimiento || "", dni: r.dni || "",
        profesion: r.profesion || "", estadoCivil: r.estado_civil || "",
        sangre: r.sangre || "", enfermedades: r.enfermedades || "",
        medicamentos: r.medicamentos || "", alergias: r.alergias || "",
        contactoEmergencia: r.contacto_emergencia || "",
        telefonoEmergencia: r.telefono_emergencia || "",
        relacionEmergencia: r.relacion_emergencia || "",
        fechaIniciacion: r.fecha_iniciacion || "",
        numeroDeMiembro: r.numero_miembro || ""
      }
    };
  });
  return map;
}

export async function upsertUsuario(key, data) {
  const p = data.perfil || {};
  await q("usuarios?on_conflict=key", {
    method: "POST",
    headers: { ...H, "Prefer": "resolution=merge-duplicates" },
    body: JSON.stringify({
      key, password: data.password, grado: data.grado, cargo: data.cargo,
      oficialidad: data.oficialidad || "", es_vm: data.esVM || false,
      nombre: p.nombre || "", apellido: p.apellido || "",
      email: p.email || "", telefono: p.telefono || "",
      celular: p.celular || "", direccion: p.direccion || "",
      localidad: p.localidad || "", provincia: p.provincia || "",
      fecha_nacimiento: p.fechaNacimiento || "", dni: p.dni || "",
      profesion: p.profesion || "", estado_civil: p.estadoCivil || "",
      sangre: p.sangre || "", enfermedades: p.enfermedades || "",
      medicamentos: p.medicamentos || "", alergias: p.alergias || "",
      contacto_emergencia: p.contactoEmergencia || "",
      telefono_emergencia: p.telefonoEmergencia || "",
      relacion_emergencia: p.relacionEmergencia || "",
      fecha_iniciacion: p.fechaIniciacion || "",
      numero_miembro: p.numeroDeMiembro || ""
    })
  });
}

export async function deleteUsuario(key) {
  await q(`usuarios?key=eq.${key}`, { method: "DELETE" });
}

export async function getTenidas() {
  const rows = await q("tenidas?select=*&order=fecha");
  return rows.map(r => ({ id: r.id, fecha: r.fecha, hora: r.hora, tipo: r.tipo, grado: r.grado, agape: r.agape, descripcion: r.descripcion || "" }));
}

export async function insertTenida(t) {
  const rows = await q("tenidas", { method: "POST", body: JSON.stringify({ fecha: t.fecha, hora: t.hora, tipo: t.tipo, grado: t.grado, agape: t.agape, descripcion: t.descripcion || "" }) });
  return rows[0];
}

export async function insertTenidasBatch(lista) {
  const rows = await q("tenidas", { method: "POST", body: JSON.stringify(lista.map(t => ({ fecha: t.fecha, hora: t.hora, tipo: t.tipo, grado: t.grado, agape: t.agape, descripcion: t.descripcion || "" }))) });
  return rows;
}

export async function updateTenida(id, t) {
  await q(`tenidas?id=eq.${id}`, { method: "PATCH", body: JSON.stringify({ fecha: t.fecha, hora: t.hora, tipo: t.tipo, grado: t.grado, agape: t.agape, descripcion: t.descripcion || "" }) });
}

export async function deleteTenida(id) {
  await q(`tenidas?id=eq.${id}`, { method: "DELETE" });
}

export async function getConfirmaciones() {
  const rows = await q("confirmaciones?select=*");
  const map = {};
  rows.forEach(r => {
    if (!map[r.tenida_id]) map[r.tenida_id] = {};
    map[r.tenida_id][r.usuario_key] = { asistencia: r.asistencia === null ? undefined : r.asistencia, agape: r.agape || false };
  });
  return map;
}

export async function upsertConfirmacion(tenidaId, usuarioKey, data) {
  await q("confirmaciones?on_conflict=tenida_id,usuario_key", {
    method: "POST",
    headers: { ...H, "Prefer": "resolution=merge-duplicates" },
    body: JSON.stringify({ tenida_id: tenidaId, usuario_key: usuarioKey, asistencia: data.asistencia === undefined ? null : data.asistencia, agape: data.agape || false, updated_at: new Date().toISOString() })
  });
}

export async function getComunicados() {
  const rows = await q("comunicados?select=*&order=created_at.desc");
  return rows.map(r => ({ id: r.id, autorKey: r.autor_key, titulo: r.titulo, cuerpo: r.cuerpo, fecha: r.fecha }));
}

export async function insertComunicado(c) {
  const rows = await q("comunicados", { method: "POST", body: JSON.stringify({ autor_key: c.autorKey, titulo: c.titulo, cuerpo: c.cuerpo, fecha: c.fecha }) });
  return rows[0];
}

export async function deleteComunicado(id) {
  await q(`comunicados?id=eq.${id}`, { method: "DELETE" });
}

export async function getActas() {
  const rows = await q("actas?select=*&order=created_at.desc");
  return rows.map(r => ({ id: r.id, autorKey: r.autor_key, tenidaId: r.tenida_id || null, tenidaDesc: r.tenida_desc, texto: r.texto, fecha: r.fecha, visibilidad: r.visibilidad || "todos" }));
}

export async function insertActa(a) {
  const rows = await q("actas", { method: "POST", body: JSON.stringify({ autor_key: a.autorKey, tenida_id: a.tenidaId || null, tenida_desc: a.tenidaDesc, texto: a.texto, fecha: a.fecha, visibilidad: a.visibilidad || "todos" }) });
  return rows[0];
}

export async function deleteActa(id) {
  await q(`actas?id=eq.${id}`, { method: "DELETE" });
}

export async function getPlanchas() {
  const rows = await q("planchas?select=*&order=created_at.desc");
  return rows.map(r => ({ id: r.id, autorKey: r.autor_key, titulo: r.titulo, grado: r.grado, contenido: r.contenido, fecha: r.fecha }));
}

export async function insertPlancha(p) {
  const rows = await q("planchas", { method: "POST", body: JSON.stringify({ autor_key: p.autorKey, titulo: p.titulo, grado: p.grado, contenido: p.contenido, fecha: p.fecha }) });
  return rows[0];
}

export async function deletePlancha(id) {
  await q(`planchas?id=eq.${id}`, { method: "DELETE" });
}
