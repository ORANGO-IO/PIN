const fs = require("fs");
const path = require("path");
const pluginName = process.argv[2];
const pluginDir = `apps/${pluginName}`;
const appDir = path.resolve(__dirname, "..", "..");
const installedAppsFile = `${appDir}/core/config/installed_apps.txt`;

(function () {
  // Verificando se os apps base estão instalados ou foram removidos acidentalmente da lista de aplicações instaladas
  console.log(`Verificando aplicações instaladas`);
  const installedApps = fs.readFileSync(installedAppsFile, "utf8");
  console.log(installedApps);
  console.log(`Instalando plugin ${process.argv[2]} na pasta apps...`);
  // Encontrando os metadados
  const metadata = require(`${appDir}/${pluginDir}/config/metadata.json`);
  console.log(metadata);
  // Verificando as implementações que precisam serem feitas em banco
  // Dando build nas atualizações que precisam ser feitas no frontend
  // Adicionando à lista de aplicações instaladas
  fs.appendFile(installedAppsFile, `\n${pluginName}`, function (err) {
    if (err) throw err;
    console.log("Plugin instalado com sucesso!");
  });

  fs.readdir(pluginDir, (err, files) => {
    files.forEach((file) => {});
    console.log(err);
  });
})();
