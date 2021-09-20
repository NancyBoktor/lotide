// import chai & mocha
const assert = require("chai").assert;
// import tail function.
const tail = require("../tail");
// test

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
  it("return 2 for ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("return 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs'][0]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
  it("return 'Labs' for ['Hello', 'Lighthouse', 'Labs'][0]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
  it("return false for ['Hello', 'Lighthouse', 'Labs'][0]", () => {
    assert.notStrictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Hello");
  });
});
