const htmlDecode = (string) => {
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes[0].nodeValue;
}
