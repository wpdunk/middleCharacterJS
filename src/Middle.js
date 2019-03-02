class Middle {
  isEven(string) {
    if (string.length % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  midChar(string) {
    if (this.isEven(string) === false) {
      return string.charAt(string.length / 2);
    } else {
      return (
        string.charAt(string.length / 2 - 1) + string.charAt(string.length / 2)
      );
    }
  }
}
