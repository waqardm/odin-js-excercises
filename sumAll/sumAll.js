const sumAll = function (num1, num2) {
    if (typeof num1 == 'string' || typeof num2 == 'string') {
        return 'ERROR';
    }

    const smallest = Math.min(num1, num2);
    const largest = Math.max(num1, num2);

    var number = (largest - smallest) + 1;
    // to work out sum of numbers between two ints formula == n * (max + min) / 2, where n is the length of the series.
    number = number * (largest + smallest) / 2;

    if (number < 0 || !Number.isInteger(number)){
        return 'ERROR';
    } else {
        return number;
    }
}

module.exports = sumAll