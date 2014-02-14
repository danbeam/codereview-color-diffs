var textElem = document.querySelector('pre');
var text = textElem.innerHTML;
textElem.innerHTML = text.replace(/^\+.*$/gm, '<span class=added>$&</span>')
                         .replace(/^-.*$/gm, '<span class=removed>$&</span>')
                         .replace(/^@.*$/gm, '<span class=line-numbers>$&</span>')
                         .replace(/^([iI]ndex:?|diff --git) .*$/gim,
                                  '<span class=filename>$&</span>');
if (typeof STYLE_RULES == 'string') {
  var css = document.createElement('style');
  css.innerText = STYLE_RULES;
  document.body.appendChild(css);
}
