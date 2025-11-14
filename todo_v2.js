const fs = require('fs');
let tasks = [];

// Load task từ file khi bắt đầu
function loadTasks() {
    if (fs.existsSync('tasks.json')) {
        const data = fs.readFileSync('tasks.json', 'utf-8');
        tasks = JSON.parse(data);
    }
}

// Lưu task vào file
function saveTasks() {
    fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

function addTask(title) {
    const task = { id: tasks.length + 1, title, completed: false };
    tasks.push(task);
    saveTasks();
    console.log(`✅ Đã thêm: "${title}"`);
}

function listTasks() {
    console.log("\n📋 Danh sách công việc:");
    tasks.forEach(t => console.log(`${t.id}. ${t.title} [${t.completed ? "✅" : "❌"}]`));
}

function completeTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveTasks();
        console.log(`🎯 Đã hoàn thành: "${task.title}"`);
    } else console.log("❗Không tìm thấy task.");
}

function deleteTask(id) {
    task = tasks.filter(t => t.id !== id);
    saveTasks();
    console.log(`🗑️ Đã xóa task có ID ${id}`);
}

// Chạy thử
loadTasks();
addTask("Học Array và Object");
listTasks();
completeTask(1);
listTasks();
deleteTask(1);
listTasks();
