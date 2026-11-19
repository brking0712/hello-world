function createGreeting(name = "World") {
    return `Hello, ${name}!`;
}

const name = process.argv[2] || "World";

console.log(createGreeting(name));

module.exports = createGreeting;