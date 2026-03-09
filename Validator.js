class Validator {
  static isNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`"${value}" is not a valid number.`);
    }
  }

  static isNotZero(value) {
    if (value === 0) {
      throw new Error('Cannot divide by zero.');
    }
  }

  static isNonEmptyArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('An array with at least one number is required.');
    }
  }
}

export default Validator;
