const { test } = require("node:test");
const assert = require("node:assert");
const createGreeting = require("../index");

test("default greeting", () => {
    assert.strictEqual(
        createGreeting(),
        "Hello, World!"
    );
});

test("personalized greeting", () => {
    assert.strictEqual(
        createGreeting("Bal"),
        "Hello, Bal!"
    );
});
