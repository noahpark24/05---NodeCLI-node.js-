const fs = require("fs");

//Para Exportar estas funciones se debe crear un module.exports
module.exports = {
  pwd: function () {
    console.log(process.argv[1]);
  },
  date: function () {
    console.log(new Date());
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (str) {
    process.stdout.write(str);
    process.stdout.write("\n");
    process.exit();
  },
  cat: function (file) {
    let readingFile = fs.readFileSync(file, (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    process.stdout.write(readingFile);
  },
  head: function (file) {
    let readingFile = fs.readFileSync(file, (err, data) => {
      if (err) throw err;
      console.log(data);
    });

    process.stdout.write(readingFile.length);
  },
};
