const ftoc = function(far) {
  // (32°F − 32) × 5/9 = 0°C
  var convertedTemp = (far - 32) * 5 / 9;
  return Math.round(convertedTemp * 10) / 10;
}

const ctof = function(cel) {
  // 0°C × 9/5) + 32 = 32°F
  var convertedTemp = cel * (9/5) + 32;
  return Math.round(convertedTemp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}