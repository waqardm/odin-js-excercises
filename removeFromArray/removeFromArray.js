const removeFromArray = function (array, ...args) {
    return array.filter(el => !args.includes(el));
}


module.exports = removeFromArray

