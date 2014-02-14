// ==UserScript==
// @name Code review diff highligher
// @namespace chromium-codereview-diff-highligher
// @description Highlights code review diffs?
// @match http://codereview.chromium.org/download/issue*
// @match https://codereview.chromium.org/download/issue*
// @match http://chromiumcodereview.appspot.com/download/issue*
// @match https://chromiumcodereview.appspot.com/download/issue*
// @version 0.2
// ==/UserScript==

(function() {

var STYLE_RULES = function() {/*
.added, .removed, .line-numbers, .filename {
  font-weight: bold;
}

.added {
  color: green;
}

.removed {
  color: red;
}

.line-numbers {
  color: blue;
}
*/}.toString().split('\n').slice(1, -1).join('\n');

var textElem = document.querySelector('pre');
var text = textElem.innerHTML;
textElem.innerHTML = text.replace(/^\+.*$/gm, '<span class=added>$&</span>')
                         .replace(/^-.*$/gm, '<span class=removed>$&</span>')
                         .replace(/^@.*$/gm, '<span class=line-numbers>$&</span>')
                         .replace(/^([iI]ndex:?|diff --git) .*$/gim,
                                  '<span class=filename>$&</span>');
var css = document.createElement('style');
css.innerText = STYLE_RULES;
document.body.appendChild(css);

}());
