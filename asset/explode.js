function getRandom(e,t){return Math.random()*(t-e)+e}!function(e,t,a,n){var r=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>0;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e;t=null}return n}(),i=t.console||{log:function(){},time:function(){}},s="blast",l={latinPunctuation:"–—′’'“″„\"(\xab.…\xa1\xbf′’'”″“\")\xbb.…!?",latinLetters:"\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F"},d={abbreviations:RegExp("[^"+l.latinLetters+"](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^"+l.latinLetters+"]","ig"),innerWordPeriod:RegExp("["+l.latinLetters+"].["+l.latinLetters+"]","ig"),onlyContainsPunctuation:RegExp("[^"+l.latinPunctuation+"]"),adjoinedPunctuation:RegExp("^["+l.latinPunctuation+"]+|["+l.latinPunctuation+"]+$","g"),skippedElements:/(script|style|select|textarea)/i,hasPluginClass:RegExp("(^| )"+s+"( |$)","gi")};e.fn[s]=function(o){function c(e){return e.replace(/{{(\d{1,3})}}/g,function(e,t){return String.fromCharCode(t)})}function u(a,l){l.debug&&i.time("blast reversal");var d=!1;a.removeClass(s+"-root").removeAttr("aria-label").find("."+s).each(function(){if(e(this).closest("."+s+"-root").length)d=!0;else{var t=this.parentNode;7>=r&&t.firstChild.nodeName,t.replaceChild(this.firstChild,this),t.normalize()}}),t.Zepto?a.data(s,n):a.removeData(s),l.debug&&(i.log(s+": Reversed Blast"+(a.attr("id")?" on #"+a.attr("id")+".":".")+(d?" Skipped reversal on the children of one or more descendant root elements.":"")),i.timeEnd("blast reversal"))}var h,g=e.extend({},e.fn[s].defaults,o),m={};if(g.search.length&&("string"==typeof g.search||/^\d/.test(parseFloat(g.search))))g.delimiter=g.search.toString().replace(/[-[\]{,}(.)*+?|^$\\\/]/g,"\\$&"),h=RegExp("(?:^|[^-"+l.latinLetters+"])("+g.delimiter+"('s)?)(?![-"+l.latinLetters+"])","i");else switch("string"==typeof g.delimiter&&(g.delimiter=g.delimiter.toLowerCase()),g.delimiter){case"letter":case"char":case"character":h=/(\S)/;break;case"word":h=/\s*(\S+)\s*/;break;case"sentence":h=/(?=\S)(([.]{2,})?[^!?]+?([.…!?]+|(?=\s+$)|$)(\s*[′’'”″“")»]+)*)/;break;case"element":h=/(?=\S)([\S\s]*\S)/;break;default:if(!(g.delimiter instanceof RegExp))return i.log(s+": Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting."),!0;h=g.delimiter}if(this.each(function(){var t=e(this),r=t.text();if(!1!==o){m={blastedIndex:0,nodeBeginning:!1,wrappers:[]},t.data(s)===n||"search"===t.data(s)&&!1!==g.search||(u(t,g),g.debug&&i.log(s+": Removed element's existing Blast call.")),t.data(s,!1!==g.search?"search":g.delimiter),g.aria&&t.attr("aria-label",r),g.stripHTMLTags&&t.html(r);try{a.createElement(g.tag)}catch(l){g.tag="span",g.debug&&i.log(s+": Invalid tag supplied. Defaulting to span.")}t.addClass(s+"-root"),g.debug&&i.time(s),function e(t,n){var r,i=-1,l=0;if(3===t.nodeType&&t.data.length){if(m.nodeBeginning&&(t.data=n.search||"sentence"!==n.delimiter?c(t.data):(r=t.data).replace(d.abbreviations,function(e){return e.replace(/\./g,"{{46}}")}).replace(d.innerWordPeriod,function(e){return e.replace(/\./g,"{{46}}")}),m.nodeBeginning=!1),-1!==(i=t.data.search(h))){var o=t.data.match(h),u=o[0],g=o[1]||!1;m.blastedIndex++,""===u?i++:g&&g!==u&&(i+=u.indexOf(g),u=g);var f=t.splitText(i);f.splitText(u.length),l=1,n.search||"sentence"!==n.delimiter||(f.data=c(f.data));var p=function e(t,n){var r=a.createElement(n.tag);if(r.className=s,n.customClass&&(r.className+=" "+n.customClass,n.generateIndexID&&(r.id=n.customClass+"-"+m.blastedIndex)),!0===n.generateValueClass&&!n.search&&("character"===n.delimiter||"word"===n.delimiter)){var i,l=t.data;"word"===n.delimiter&&d.onlyContainsPunctuation.test(l)&&(l=l.replace(d.adjoinedPunctuation,"")),i=s+"-"+n.delimiter.toLowerCase()+"-"+l.toLowerCase(),r.className+=" "+i}return n.aria&&r.setAttribute("aria-hidden","true"),r.appendChild(t.cloneNode(!1)),r}(f,n,m.blastedIndex);f.parentNode.replaceChild(p,f),m.wrappers.push(p)}}else if(1===t.nodeType&&t.hasChildNodes()&&!d.skippedElements.test(t.tagName)&&!d.hasPluginClass.test(t.className))for(var v=0;v<t.childNodes.length;v++)m.nodeBeginning=!0,v+=e(t.childNodes[v],n);return l}(this,g),g.debug&&i.timeEnd(s)}else!1===o&&t.data(s)!==n&&u(t,g);g.debug&&e.each(m.wrappers,function(e,t){i.log(s+" ["+g.delimiter+"] "+this.outerHTML),this.style.backgroundColor=e%2?"#f12185":"#075d9a"})}),!1!==o&&!0===g.returnGenerated){var f=e().add(m.wrappers);return f.prevObject=this,f.context=this.context,f}return this},e.fn.blast.defaults={returnGenerated:!0,delimiter:"word",tag:"span",search:!1,customClass:"",generateIndexID:!1,generateValueClass:!1,stripHTMLTags:!1,aria:!0,debug:!1}}(window.jQuery||window.Zepto,window,document),$("h1").blast({delimiter:"character"}),$("h1").hover(function(){$(this).find("span").each(function(){var e=getRandom(-300,300),t=getRandom(-20,20),a=getRandom(.5,3);$(this).velocity({translateX:e,translateY:t,scale:a,color:"#fff"},300,[50,5])})},function(){$(this).find("span").each(function(){$(this).velocity({translateX:0,translateY:0,scale:1,color:"#fff"},100)})});