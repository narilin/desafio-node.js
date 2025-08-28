function iniciarCli(callbackMenu) {
  console.log('Bienvenido a la CLI de ejemplo');
  console.log('Comandos disponibles: hola, tiempo, salir');

  process.stdout.write('Ingresa un nuevo comando: ');

  const cliListener = (data) => {
    const input = data.trim().toLowerCase();

    switch (input) {
      case 'hola':
        console.log('¡Hola! ¿Cómo estás?');
        break;
      case 'tiempo':
        console.log(`Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
        break;
      case 'salir':
        console.log('Saliendo de la CLI interactiva...');
        process.stdin.removeListener('data', cliListener); 
        callbackMenu(); 
        return;
      default:
        console.log('Comando no reconocido');
    }

    process.stdout.write('Ingresa un nuevo comando: ');
  };

  process.stdin.on('data', cliListener);
}

module.exports = { iniciarCli };
