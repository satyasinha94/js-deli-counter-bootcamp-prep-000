function takeANumber (line, name) {
    line.push(`${name}`);
    return "Welcome," + ` ${name}. ` + "You are number " + line.length + " in line."
}
function nowServing (katzDeliLine) {
  var firstinline = katzDeliLine[0]
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
else {
  katzDeliLine.shift()
  return "Currently serving " + `${firstinline}` + "."
}
}
function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  else {
      for (var i = 0; i < line.length; i++) {
      return "The line is currently: " + line
    }
    }
  }
