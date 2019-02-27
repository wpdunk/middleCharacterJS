function Middle() {
  Middle.prototype.isEven = function(string) {
    if (string.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  Middle.prototype.midChar = function(string) {
    if (this.isEven(string) === false) {
      return string.charAt(string.length / 2);
    } else {
      return (
        string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
      );
    }
  };
}
