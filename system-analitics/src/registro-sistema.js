function accesoUsuario (){
console.log("=== Inicio del sistema ===");

console.time("ProcesoPrincipal");

function accesoUsuario(usuario) {
  console.count(`Acceso de usuario ${usuario}`);
}

accesoUsuario('Carlos');
accesoUsuario('Ana');
accesoUsuario('Carlos');

console.warn("Capacidad de usuarios alcanzando el límite");

console.error("Error: No se pudo conectar a la base de datos");

const usuarios = [
  { nombre: "Carlos", rol: "Admin" },
  { nombre: "Ana", rol: "User" }
];

console.table(usuarios);

console.timeEnd("ProcesoPrincipal");

console.log("=== Fin del sistema ===");
}

module.exports = {accesoUsuario};