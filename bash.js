// Un prompt como output

//Aca estoy llamando a las funciones creadas en commands
const commands = require("./commands");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea

  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === "ls") {
    commands.ls();
  } else if (cmd.split(" ")[0] === "echo") {
    let str = cmd.slice(5); //corto echo y el espacio vacio
    commands.echo(str);
  } else if (cmd.split(" ")[0] === "cat") commands.cat(cmd.slice(4));
  else if (cmd.split(" ")[0] === "head") commands.head(cmd.slice(5));
  // process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt > ");
});
