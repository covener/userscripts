// ==UserScript==
// @name         reddit-sub-compress
// @namespace    http://misers.org
// @version      0.0.10
// @description  Improve old reddit top subreddit list
// @author       Eric Covener
// @match        https://old.reddit.com/*
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @require https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant              GM_getValue
// @grant              GM_setValue
// @downloadURL https://raw.githubusercontent.com/covener/userscripts/master/reddit.user.js
// @updateURL https://raw.githubusercontent.com/covener/userscripts/master/reddit.user.js
// ==/UserScript==

var aliases = {
  "financialindependence" : "fire",
  "personalfinance" : "pf",
  "programming" : "prog",
  "cscareerquestions" : "cscq",
  "bodegaboys" : "bodega",
  "thinkpad" : "tp",
  "friends" : "f",
  "users" : "u",
  "popular" : "pop",
}


function compact() {
  'use strict';
  console.log("Compacting...");
  $("div.sr-list a").each(function() {
      var sr = $(this).text();
//    console.log("  Found sr list : " + sr);
      if (aliases[sr] !== undefined) { 
//        console.log("    Matched sr list : " + sr);
          $(this).text(aliases[sr]);
      }
  });
}

$(document).ready(function(){
  compact();
});

