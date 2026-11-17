const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (const user of users) {
    const { name, age } = user;
    console.log(name, age);
}