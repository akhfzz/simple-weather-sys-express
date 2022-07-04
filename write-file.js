const fs = require('fs');

const stud = {
    name: "Akhmad Faizal",
    nim: 192102002
};

const studstr = JSON.stringify(stud);
fs.writeFileSync('file/data.json', studstr);
const rfile = fs.readFileSync('file/data.json');
const tostring = rfile.toString();
const student = JSON.parse(tostring);
student.name = 'tama';
student.nim = 182920199;
const parsetostring = JSON.stringify(student);
fs.writeFileSync('file/data.json', parsetostring)