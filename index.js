class Formatter {
  // Method to capitalize the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Method to sanitize a string by removing non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Method to titleize a string
  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    return words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return this.capitalize(word);
      }
      return word;
    }).join(' ');
  }
}

