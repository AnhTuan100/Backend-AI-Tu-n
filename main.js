// Nhập từ terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Nhập tên: ", name => {
    readline.question("Nhập tuổi: ", age => {
        age = Number(age);
        if (age >= 18) {
            console.log(`Xin chào ${name}, bạn đã đủ tuổi học Back-end!`);
        } else {
            console.log(`Xin chào ${name}, bạn còn trẻ, học từ từ nhé.`);
        }
        readline.close();
    });
});
