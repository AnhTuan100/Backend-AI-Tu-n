let students = [
    { name: "Tuấn", age: 20, school: "QNU" },
    { name: "An", age: 21, school: "UTE" }
];

function addStudent(name, age, school) {
    students.push({ name, age, school });
    console.log(`Đã thêm sinh viên: ${name}`);
}

function findStudent(name) {
    return students.find(s => s.name === name);
}

function getAdults() {
    return students.filter(s => s.age > 20);
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

function Show(s) {
    console.log(`${s.name} (${s.age}) - ${s.school}`);
}

console.log("Danh sách ban đầu:");
students.forEach(s => Show(s));
