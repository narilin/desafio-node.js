const { iniciarCli } = require('./clic-tool.js'); 
const { accesoUsuario } = require('./registro-sistema.js');
const { mostrarInformacion } = require('./system-monitor');


process.stdin.setEncoding('utf-8');

function mostrarMenu() {
  console.log("\n1. Ejecutar registro del sistema");
  console.log("2. Mostrar monitor del sistema");
  console.log("3. Iniciar CLI interactiva");
  console.log("4. Salir\n");

  process.stdout.write('Ingresa tu opcion: ');

  
  const menuListener = (data) => {
    const opcion = data.trim();

    switch (opcion) {
      case '1':
        accesoUsuario(); 
        break;
      case '2':
        mostrarInformacion(); 
        break;
      case '3':
        process.stdin.removeListener('data', menuListener); 
        iniciarCli(mostrarMenu); 
        return; 
      case '4':
        console.log("Saliendo...");
        process.exit(0);
      default:
        console.log("Opción no válida");
    }

    process.stdout.write('\nIngresa otra opción: ');
  };

  process.stdin.on('data', menuListener);
}


mostrarMenu();
