const { exec } = require('child_process');
const os = require('os');

// Starte den Entwicklungsserver
exec('npm run dev', (error, stdout, stderr) => {
  if (error) {
    console.error(`Fehler beim Starten des Servers: ${error}`);
    return;
  }
});

// Warte kurz und öffne dann den Browser
setTimeout(() => {
  const platform = os.platform();
  const url = 'http://localhost:3000';
  
  switch (platform) {
    case 'win32':
      exec(`start ${url}`);
      break;
    case 'darwin':
      exec(`open ${url}`);
      break;
    default:
      exec(`xdg-open ${url}`);
      break;
  }
}, 3000); // Warte 3 Sekunden, bis der Server gestartet ist 