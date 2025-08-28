
const os = require('os');



function mostrarInformacion() {
  console.clear();

  console.log('🖥️  Monitor de Sistema');
  console.log('========================');
  console.log(`Sistema: ${os.platform()} (${os.arch()})`);
  console.log(`CPU: ${os.cpus()[0].model}`);
  console.log(`Cores: ${os.cpus().length}`);
  console.log(`Memoria Libre: ${(os.freemem() / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Memoria Total: ${(os.totalmem() / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Uptime: ${(os.uptime() / 60).toFixed(2)} minutos`);
  console.log(`Usuario: ${os.userInfo().username}`);
  console.log('========================\n');
}



module.exports = {mostrarInformacion};