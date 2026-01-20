/*  console.log("hello worlds")

let students = [];
let pass = []
let failed = []


console.log(students);

let nomes = ['John','tom','jeff','law','billy','gian'];



function ReturnStudents(){
    students.push({
        nome: nomes[Math.floor(Math.random() * nomes.length)],
        notas: Math.floor(Math.random()* 10)
    });
}



function loop() {
    for (let i =0; i <= 9; i++) {
        ReturnStudents();
        passed();
    }
}

function passed() {
    for (let student of students) {
        if (student.notas >= 6) {
            pass.push(student);
        } else {
            failed.push(student)
        }
    }
}



loop()
console.log("passed", pass )
console.log(failed); */

let students = []
let passed = []


let nome = ['gian','arthur','jeff','anderson','luana','robin','allison','robert','clark'];




function PushS() {
    for (let i = 0; i < 9; i++) {
        students.push({
            nome: nome[i],
            nota: Math.floor(Math.random() * 10),
        })
    }
}


function Passed() {
        students.forEach(student => {
    if (student.nota >= 6) {
        passed.push(student)
    }
})
}


PushS()
Passed()
console.log(passed)

