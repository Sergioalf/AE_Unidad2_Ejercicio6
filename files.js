var fs = require('fs')

function read(file) {
    fs.readFile(file, 'utf8',(err, data) => {
        if (err) throw err;
        formatWrite(data);
    });
}

function formatWrite (data) {
    data = data.split("\n");
    newData = "";
    for (i = 0; i < data.length; i++) {
        a = data[i].split(",");
        newData += "#Control: " + a[0];
        newData += "\nNombre: " + a[1];
        newData += "\nCalificación: " + a[2];
        newData += "\n------------------------\n";
    }
    fs.writeFile("./newStrudents.txt", newData, (err) => {
        if (err) throw err;
        console.log("El archivo fue guardado");
    })
}

module.exports.read = read;