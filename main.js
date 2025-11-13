const fs = require('fs');

let tasks = [];
if (fs.existsSync('tasks.json')) {
    tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
}

function showTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}

function addTask(task) {
    tasks.push(task);
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
    console.log("Đã thêm task!");
}

// Ví dụ sử dụng
addTask("Học JS cơ bản");
showTasks();
