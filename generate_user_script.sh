#!/bin/bash

(echo '// ==UserScript==' && \
echo '// @name Chromium code review diff highligher' && \
echo '// @namespace chromium-codereview-diff-highligher' && \
echo '// @description Highlights Chromium code review diffs' && \
echo '// @match http://codereview.chromium.org/download/issue*' && \
echo '// @match https://codereview.chromium.org/download/issue*' && \
echo '// @match http://chromiumcodereview.appspot.com/download/issue*' && \
echo '// @match https://chromiumcodereview.appspot.com/download/issue*' && \
echo '// @version 0.2' && \
echo '// ==/UserScript==' && \
echo && \
echo '(function() {' && \
echo && \
echo 'var STYLE_RULES = function() {/*' && \
cat diff.css && \
echo "*/}.toString().split('\n').slice(1, -1).join('\n');" && \
echo && \
cat diff.js && \
echo && \
echo '}());') > diff.user.js
