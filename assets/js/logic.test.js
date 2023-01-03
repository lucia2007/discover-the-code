var logic = require('./logic')

test("Returns no blacks", () => {
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

test("Returns all blacks (5), code guessed", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['a', 'b', 'a', 'c', 'd'])).toBe(5);
});

test("Returns no whites", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'e', 'e'])).toBe(0);
});

test("More duplicates in guess than in Secret", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'a', 'a', 'a', 'e'])).toBe(1);
});

test("Same number of duplicates but not at the same position", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'a', 'e', 'a', 'e'])).toBe(2);
});

test("All guesses correct but none in the right position", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['b', 'a', 'a', 'd', 'c'])).toBe(4);
});

test("Returns 5 whites", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['d', 'a', 'b', 'a', 'c'])).toBe(5);
});

test("Returns 0 whites, 5 blacks", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['a', 'b', 'a', 'c', 'd'])).toBe(0);
});