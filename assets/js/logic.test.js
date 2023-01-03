var logic = require('./logic')

test("Returns all wrong", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'e', 'e'])).toBe(0);
});

test("Returns one black", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'c', 'e'])).toBe(1);
});

test("Returns only one black despite repetion in the secret", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'a', 'e', 'e'])).toBe(1);
});

test("Returns only one black despite repetion in the guess", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['b', 'b', 'b', 'b', 'b'])).toBe(1);
});

test("Returns only one black despite repetion in the guess and the secret", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['a', 'a', 'a', 'a', 'a'])).toBe(2);
});

test("Returs all correct (5 blacks), code guessed", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['a', 'b', 'a', 'c', 'd'])).toBe(5);
});