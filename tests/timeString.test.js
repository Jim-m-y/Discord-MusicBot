const parseTimestring = require("../util/TimeString");

describe("parseTimestring", () => {
  test("parses hours", () => {
    expect(parseTimestring("1h")).toBe(3600);
  });

  test("parses minutes and seconds", () => {
    expect(parseTimestring("2m 30s")).toBe(150);
  });
});
