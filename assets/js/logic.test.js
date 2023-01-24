import logic from './logic';
/**These tests check if the returned number of black clues is correct
 * toBe(x) tells us what the expected returned number should be
 * letter/string comparison was used for simplification
 */

// 0 blacks are expected, as all choices are wrong
test("Returns no blacks", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'e', 'e'])).toBe(0);
});

// 1 black is expected, as 'c' is guessed and it's at the same position in both arrays
test("Returns one black", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'c', 'e'])).toBe(1);
});

/** 'a' is found twice in the secret code, but only once in the guess
 * thus it can be taken into consideration only once
 * one black clue is returned for 'a' at index 2 
 */
test("Returns only one black despite repetition in the secret code", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'a', 'e', 'e'])).toBe(1);
});

// 'b' is repeated in the guess, but has only one corresponding occurence in the secret code
test("Returns only one black despite repetition in the user's guess", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['b', 'b', 'b', 'b', 'b'])).toBe(1);
});

// 'a' is repeated in both the secret and the guess; but only two of the 'a' have a corresponding position
test("Returns only one black despite repetition in the user's guess and the secret", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['a', 'a', 'a', 'a', 'a'])).toBe(2);
});

// all elements are identical and at the correct position; five blacks are returned
test("Returns all blacks (5), code guessed", () => {
    expect(logic.countBlacks(['a', 'b', 'a', 'c', 'd'], ['a', 'b', 'a', 'c', 'd'])).toBe(5);
});

// These tests check, if the returned number of white clues is correct

// None of the colors correspond = 0 whites
test("Returns no whites", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'e', 'e', 'e', 'e'])).toBe(0);
});

/** Only one white can be returned here for 'a' at index 1
 * 'a' at index 2 receives a black clues
 * 'a' at index 4 has no longer another 'a' in the secret to be compared with
 */
test("More duplicates in user's guess than in secret code", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'a', 'a', 'a', 'e'])).toBe(1);
});

// Two 'a' were guessed, but are not at corresponding positions = 2 white clues
test("Same number of duplicates but not at the same position", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['e', 'a', 'e', 'a', 'e'])).toBe(2);
});

// All colors guessed, but only one in the correct position: 4 whites, as 'a' at index 2 receives 1 black
test("Returns 4 whites despite 5 correct guesses", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['b', 'a', 'a', 'd', 'c'])).toBe(4);
});

// All guesses correct, but none in the right position
test("Returns 5 whites", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['d', 'a', 'b', 'a', 'c'])).toBe(5);
});

// All guesses are correct = 0 whites (5 blacks)
test("Returns 0 whites, 5 blacks", () => {
    expect(logic.countWhites(['a', 'b', 'a', 'c', 'd'], ['a', 'b', 'a', 'c', 'd'])).toBe(0);
});