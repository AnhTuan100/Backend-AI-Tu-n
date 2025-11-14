let students = [
    { name: "Tuấn", age: 20, school: "QNU" },
    { name: "An", age: 21, school: "UTE" },
    { name: "Bình", age: 22, school: "QNU" }
];

function addStudent(s) {
    students.push(s);
    console.log(`Đã thêm sinh viên: ${s.name}`);
}

function findStudent(name) {
    return students.find(s => s.name === name);
}
findStudent("An");

function filterbyAge(age) {
    return students.filter(s => s.age === age);
}

function deleteStudent(name) {
    const index = students.findIndex(s => s.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Đã xoá sinh viên: ${name}`);
    } else {
        console.log(`Không tìm thấy sinh viên: ${name}`);
    }
}

function showStudent(s) {
    console.log(`${s.name} (${s.age}) - ${s.school}`);
}

addStudent({ name: "Minh", age: 23, school: "QNU" });
students.forEach(s => showStudent(s));
deleteStudent("Bình");
students.forEach(s => showStudent(s));
console.log(filterbyAge(20));
const student1 = { name: "An", age: 21, school: "UTE" };
const student2 = { ...student1 };
student2.name = "Hà";
console.log(student1);
console.log(student2);


