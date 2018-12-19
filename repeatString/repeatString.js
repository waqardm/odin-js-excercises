const repeatString = function (str, num) {
    str = str;
    var result = '';

    if(num > 0){
        for (i = 1; i < num + 1; i++) {
            result += str;
        }
    } else if (num === 0){
        return '';
    } else if (num < 0) {
        return 'ERROR';
    }
    return result;
}
module.exports = repeatString
