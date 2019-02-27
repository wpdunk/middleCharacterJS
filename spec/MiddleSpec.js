describe("Middle Program", function() {
  beforeEach(function() {
    middleApp = new Middle();
  });

  it("can check a string is even", function() {
    var string = "test";
    expect(middleApp.isEven(string)).toEqual(true);
  });

  it("returns middle character of odd string ", function() {
    var string = "tests";
    expect(middleApp.midChar(string)).toEqual("s");
  });

  it("returns middle 2 characters of even string ", function() {
    var string = "test";
    expect(middleApp.midChar(string)).toEqual("es");
  });
});
