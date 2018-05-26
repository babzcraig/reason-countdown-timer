// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';


function padWithZeros(str) {
  var match = str.length === 1;
  if (match) {
    return "0" + str;
  } else {
    return str;
  }
}

function toReadableString(value) {
  return padWithZeros(String(value | 0));
}

function getTimerData(timeStart, timeEnd) {
  var timeDiff = new Date(timeEnd - timeStart);
  var value = timeDiff.getSeconds();
  var seconds = padWithZeros(String(value | 0));
  var value$1 = timeDiff.getMinutes();
  var minutes = padWithZeros(String(value$1 | 0));
  return minutes + (":" + seconds);
}

exports.padWithZeros = padWithZeros;
exports.toReadableString = toReadableString;
exports.getTimerData = getTimerData;
/* No side effect */