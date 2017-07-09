/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


//在app中使用header和footer模块。
var header=__webpack_require__(1);
var footer=__webpack_require__(2);

var img1=new Image();
var img2=document.createElement('img');

var src1=__webpack_require__(8);

img1.src=src1;

document.body.appendChild(img1);


//执行
header();

footer.say();

footer.talks();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

//暴露接口
module.exports=function () {
    console.log('header module');
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(3);
module.exports.say=function () {
    console.log('footer');
};

module.exports.talks=function () {
    document.write('<h1>webpack样式测试</h1>');

};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "h1{\r\n    color: red;\r\n    background-color: blue;\r\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQAACAAAAAlgAAAP8AAAD/4QC6RXhpZgAATU0AKgAAAAgABgEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAKtAQExAAIAAAAOAAAAZgEyAAIAAAAUAAAAdIdpAAQAAAABAAAAiAAAAAAADqYAAAAnEAAOpgAAACcQd3d3Lm1laXR1LmNvbQAyMDEwOjA3OjA4IDE4OjM0OjM0AAADoAEAAwAAAAH//60BoAIABAAAAAEAAAC+oAMABAAAAAEAAAC+AAAAAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAwAFVgMBEQACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APyqoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA0fD3hvV/FurwaVoel3utapPu8my0+3eeeTALHaiAscAEnA6A0AR61omo+G9UudM1awutL1K2fy57O9haGaJv7rIwBU+xFAFKgAoAKACgAoAtaVpV7rup2mm6baT3+oXcqwW9rbRmSWaRiAqIo5ZiSAAOSTQBq+O/APiL4Y+Kb3w34r0e60HXbPb59jepskj3KGUkehVgQR1BoAreGPCOu+NtVTTPDui6jr+pOCUs9LtJLmZgOpCICT+VAHv/gn/gnD+0R46sPttr8N77TbXs2szw2MhPp5UrrJ+JXHHWgDzD42fs8/EH9nfxBBo/j7w3c6HcXCGS2mYrJb3KjGfLlQlGI3LkA5XIyBkUAec0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHWeAfhL4z+Kn9rf8Ih4Y1TxJ/ZNsbu+/s22abyIueWwOpwcL1ODgHBoA5OgAoA9N/Z1/Z88SftN/E228DeFbrTbLVZ7ea6E+rTSRW6pGu5slEdsngDCnk9hzQBynxG8A6v8K/HmveENfhWDWdFvJLK6WMkoXRsblJAyp4IOBkEUAc7QAUAFABQB6F8EPgF44/aK8Wy+G/AejHWNThtmu5g0yQxxRKQCzO5AHLKAOpJ6cHAByXizwtqngfxRq/h3W7VrHWNJu5bG8tmYMYpo3KOuQSDgg8gkHqCRQBlUAFAEk9vLbMqzRPEzKrgOpBKsMqRnsQQQfegCOgAoAKACgCe3sLm8juJILeWeO3TzZnjQsIkyF3MR0GSBk9yPWgCCgAoAKACgAoAKACgAoAKAHwQSXU0cMMbSzSMESNFLMzE4AAHUk0AMIKkgggjgg0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB638Pf2VfiX8VfhJ4h+I/hTw7Lrfh3Q71bC5SzPmXTybFdzHCuWdUV4ixA4EgIyA5UA8ldGjdlZSrKcFSMEGgD0/8AZk+N17+zt8cfCvjyzhjuV02523VvICRLbSKY5lGOQ2xmKnswBwehAPqj/gsX8M5/D37QGg+O4hbtpHjHSU8mWHbuae2CJJux9793JbkN3Bx/DQB81/Aj9kP4qftJaZrOo+AvDTapYaV8ktzPPHbxyS4yIY3kIDSYwSM4UFdxG5cgHmPivwlrXgXxDfaF4h0u70XWbKTyrmxvYjFLE3XlT6jBB6EEEcGgDJoAKACgDb8DeMNR+HvjPQvFGkSCLVNGvodQtXIyBJE4dcjuMrgjuMigD9d/j/4g8KXvjn4Z/tE6F8JP+F4L418Of2HZ6JAI5EhvQyzq0mI5cSCH7YjHYSvkbTtGcAHIL8f/ANqi41JdE+Dv7L2n/C61vJPMdZdNXLuBjLzyCCEccZZc9MEdwDzrUtC/by+K3xo0HwH4u8ReKfAovpJL1tT0mZLWws7brITcWB2ybRhVjaQncVBxndQBb/4K3fGfSbfw78PPgdo2uP4mm8OLHfaxqV3crdXXnxxNbwrNNnJmZWmeQNgktGx60AfmtQAUAFABQAUAFAH0V+x3+xdrv7Ymo+KbbR/EWneHU8Pw28s8l/HJJ5nmmQKFC+nltkk+nXsAeeftBfAvWv2c/ifqHgnXr7TtSvrRI5lutLmMsMkbjchyQCDjqpHB9RgkA84oAKACgAoAKACgD7c8U/sreAfBH/BNbR/itrml6hpXxN1u+iOnzX126rcRSXB2LFCMLsa1RpQSNx5IbbgUAfEdABQBd0nQ9R16eSHTNPutRmjjMzx2kLSsqDGWIUHAGRz05oApUAFABQAUAbHhDwbrvxA8Q2ug+GtIvdd1q63eRYafA000m1SzYVQTwqkn0AJoA/Rn/gl14R+NX7P/AMcbrRde+Gmvab4N8XQrBqV/fWDxLaSwJK9vLvI6Zd48cZMoP8IBAF+OX/BNnWPjH+0NLbfDr4c3Pwv8LLeXUGsaxd3sE+lE5aSC4s4PMWYiRCoaNV2RudowFJIB5X+2X/wTftv2WfA/hvWNO8dv4q1bWdYi0eHSn04W7yu8bsGRhI2MFQMH++OfUA+kP+CfP/BPL4rfs8fHHS/H3jI6Fbab/ZdxBJY2t8013DJKgwrAJsOCOSrkehNAFn47f8Eqrv4w/tH+I/HGsfEnS9E8P67qX22WyjtybxIcAFFLME3HbjccgZzhsYIB+Zv7RHg/wd8P/jV4s8OeANdm8S+EdNuxb2OqTyJI84CLvy6KqviTeoZVAIUEZBzQB51QB6P+zz8D9W/aM+LmheAdFvrPTb7VGkP2u+YiKJI42kdsKCWO1TgDqccgZIAPsPxN/wAEV/ixp7QDQ/GHhPWAwPmi5kuLUp6YHlvuHXuMcdewB7R+wn/wT5+JP7Mfx5s/GfibxV4RW1S2msJ9NsLyaae4jlXjGUQAhxGRndnB4BwaAOU/4KEfsffCDQ/EHjf4ka78YV0DxfqKXOpp4YdYLie8nIPkRQQhkkVSQqsx3DJLZUcUAfCP7J/wth+NH7RfgLwheafJqmmahqcf2+2jcx7rVMyTZYEFRsVskEH0OcUAfqV+1/8AtDaP/wAE27Dwn4a+EHgfw3YnxE1zfX1i9vIqgJ5aLIWRgWYkleSeE7UAeHftbfHt/wBrL/gnN4d+IOr6NZWniSx8XGxufskJKWxxKP3bNlgrRmHdzy30GAD8zaACgAoA9H+Gf7OfxJ+MnhrX9f8ABPhG/wDEumaE0aX7WGx5UaTO1Ui3eZKeMkRqxUYJwCKAOt/Zv/aD8ZfsX/FOfWY/DqSvd2v2LVNE1y3eE3FqzqxUFhujJKjDYI9QRxQB7B+0JF8Av2mfhrf/ABQ+HVxpPwn+ImmxefrfgTULhLeLUBjlrI4VJZODxGoL8lkVjkgHx5ZeG9W1LTbrUbTS7260+1/4+LuG3d4oeM/O4GF49TQBnUAFAEptJxai68mT7MXMYm2HYXAyVz0zgg496AIqACgAoAKAPaP2OPjfYfs7/tGeEPHGq2ZvNJsppIL1Uz5kcM0bRPImM5ZA5bH8QBXjOQAffHxj8XfBb9j34/eNvGvij4e2/wARtM+J9lba94buLSxgntYDtb7SnmSsV/eSGOYvGCcSjI4XcAcpZf8ABSbxLoFjHe/Cv9ljT/CMl2A019Dby3KXMX8IHk20PGTnO4j2oA7z9pr9q/U/EX/BPRdT+KfhrQ7Lxt4/d4PD2g/Z2Yw2wYA3pSQ7kZY9zo6k4aSD+8RQB+R1ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAe8/sz/tr/E39lJL608G31nPot/OtzdaRqlv51vJKF27xgqyMVABKsM7VznAoA97/a7+MfwG/av+Aq/EywtrfwP8brK5igu9BhT59RRnVXZnCASqqEsshww2lSOlAHwXQB+l/wC02T8eP+CVvwd8ejTPtOseFriGwuL0IXligjEtlMS38KySRW7semVSgD4W+GX7RvxO+Ddqlr4K8caz4esluRefYrS5P2dpePmaI5Rs7VBBBBAAOaAP1t+I/wAQ/D2g/BrwLpf7YWleHNWl8YQGC21bTNOP2jTibaN3eYZLxOrOVMsHG7adqA8AH5F/HvwDoPww+L/ibwz4X8S23jDw7Y3C/YNatZEkS5heNZF+ZCVZlD7WK8FlPA6AA4CgAoAKAP2B/wCCRPizxZr/AOy38QvDmiW0FpqOi6lK2h6rqMe+ya5ngDCKRVIZgjqHfkHbMoHIoA774p/FDwP8H9TXTPjh+1H4g1XX4pDIdF8J2yaYltvO5FaKxiecLswB58zHHOcsCQDzH9sf/gpJ8NvGX7Pep+CvhB4l1/UPFmq+TZQ3Fpa3NvJBAGUyl5ZlDNuRWT5csS+cjk0Afmpof7N/xc8VafFqWkfC/wAaatYT8peWfh+7mif3DrGQfzoAq/Ef4DfET4QW1vc+NfBms+GLa5kEUE+pWjRRzOUD7UYjDEKRnBOOhweKAODoAKACgAoAKAP0i/4I+6lcaN4e/aG1Czk8q7tNCtZ4X2g7XVLxlODweQOtAH54aXoes+LdQePTdPvtZvpGLMlpA88jMckkhQSSeT+dAH2n8NP+CTfxD+K3wh0PxdpmtxaDrl59oW98OeK9KudNltGRysYVyGMiuvzbtigZAG7nAB8ifFH4W+J/gx441Hwh4w0xtI1/Tynn2rSJJgModCGQlSCrA8Hv60AcpQAUAFAH0Z+xf+yddftI+PXuddmbQfhroMX9oeIdduD5USW65JiSQ4AZtjAtnCKrMeQFYA6v9uf9pG7/AGrvi9p/hX4e2t3qHgDw6F07w5penWTB7pyFRphEoLEs2EQY+4F+VSzCgDw7xd+zj8U/AHhKTxP4n+H3iPw5oUcyW8l5q2my2oR2ztDLIAwBxgEjGcDPIoA85oA/Y79ijRfD37BP7F2o/Ff4iC2tdX8S7dTht1RVvJomjH2SyQ9WdsNJt4Cea24AKxoA/KDwT8HfHvxKgnn8IeCPEfiqCAhZZNE0m4vFjJ6BjGjAfjQBheI/DWr+DtbutG1/Sr3RNXtGCXGn6lbvb3ELEAgPG4DKcEHkdCKAM2gAoA7v4LfHDxl+z742TxZ4G1SPSdbWFrYzSWkNwrRMVLoVlVgM7RyMN6EZoA+0P2ff+Chv7SPx7/af8B+HIvENtFoura3aLf6FpekWqwixRla72ySI8yjyUlYnzMg52kcAAH1r+2z+zP8AtBfFDxdc698KPjLf6ZbeRFEfB1tfS6SIo8EbhNE+Ji7eax8xV4XaCdoAAPzs0j9hD9pj4rfF1tE8QeG9ettWjcNdeJfElw72kKhh84u8sJSCQdsRdu+MAkAH19+wD+zp8atc+J9v8XPiv458Stpmg3U1lYaZqdzd3DaqPLaITAOeLYGXcjYO4gthV5YA4T9rz9gv9oH9pT9pzx74ssNDsYtAFxFbaTcX+pRRLNbJGFXy0DMwGQzHcF+ZyQOeAD4i/aF/Zr8bfsw+K7Dw945trO31C+sxfQfYrpZ0aMuyckdDlDwR6UAeWUAS2l3PYXUVzbTSW9xEweOaJyrow5BBHII9RQB0n/C1/G2Sf+Ex1/J4z/ak/wD8VQBtfAzxovhn9oL4eeLNZkur6PTfE+nalduD5k8qxXUcj4LEbmIU4yRz3oA/QD/gqp+zhYeNvjr4Am8CQ6jrHxQ8cF4rjRkYPEYIUjVJ+g8oKMhix24UnjaSQDhPiZ4l8Nf8E3vhxdfDfwFqFtrfx78QWgTxN4rt+f7FgcA/Z7c9UY5BH8XSRgP3agA+q/2yPBP7N3xp+HHwy8e/Fvxxq3hO3v8ARon0O/08sJbmGZI5QTCYZSfvoT8oIDckdQAeTfEj4e+CPhx/wSt+KOlfDTx6vj7w2ddtbibUxbBCC1/ZYh6jlR5ZLAcnIwOwB+UtABQAUAes/Aj9qr4ofs23Fy3gHxRPpNndyCS606WNLi1nYYG5opAQGIABZcNgAZ4oA/TH49/tm/H79mbwr4P1f4lfDX4ea5J4ijHkzaVeTb4pdisYHics25QeWQumf4hlQQDF0v8Abm/aQ1l7ZbX9ka7ZLgAxTSaLfxxMCMg+Y0QUA+pOKAOF+OP/AAUs+L3gbQta8F+NfgHpXhE63Yz2hh1aG4WC4R0MbkKQFmTDYIBIPIJoA/MmgAoA+5P2Xf26fhp4P+C9n8Gfi38KbPxB4KWSaRtTsUWacyyOx82SKQg7134EkbqyhRtXgUAedftdfCn9n3wtoOi+Jvgb8R5PEceo3siXfh6/ZzcWcTKWjZA0SMEUqynzCX+aPr8xoA+YKACgAoAKAP2K/ZC/aDn8N/8ABNG68bQeH/8AhOde+HZvdMNrqBA2RCSOUBXwx8qKCaBiAB8sJUEYBAB3P7EP7Wvxr/av8e3Wq6t4L0zwh8LbKxZxdpZXDPf3RYqqQTu4VgPmZtqtt2qDjeDQB+Yf7df7S8v7T/x81XXbZgvhjS86Xoca5wbVHb96eB80jFn6ZAKrztzQB88UAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHtngD9i34z/FP4cWfjrwn4Fvtc8OXlw9tbz20ke+UoWV2WMsGKBlZS2MblIoA9W/Z+/wCCbHxV8a/Fzw/pXxA8CeI/DfguSVm1TUovISSKIKSAu98ZZ9inAYgMWCttxQB7Z8Uf+CS3gj4deJ9Rv9d+POk+B/Bjyq9guu28ZuzGxwUdmmjUkN8ocKQeDgHigD1/4Pfsj/s2/sy/Du++P41fU/iRZeHrZr6zv9U8tLR5kOEe0iKIruzkKhZnG7aVwRmgDY8A/tl6H+2P8EPjv4H8DfDu88PSWHgfUJLOzi8uRrqeeCePy0iiUYYsUxjJYuemOQD8uP2Tvg/J8bP2kvAfgu4sDeWN1qsT6pbSM0YNlCfMuVZhgqTEjqOh3EAckUAe2/8ABVr42W/xY/aiu9G0y4abRvBtouiKFmLxNdBme5dVIG1gzLE3qbcc0AfGlABQB7Z+zd+x78Rv2qpdVHgW106S30qSGO9udQvkgWAy7ihK8uRhG5Cnp68UAfSOm/8ABHL4iLrNppWt/EbwHpt/dBmitbe8nnndQCSVjaKMtgg5xkAAnPFAHsvw7/Ye+GPwJ1uLwX4q/au1Lw94iuHQ33hrw/r0WjedNIB5QMZdmO5Sg+YbmBBGAQKAMH9oDwP+yV+wx4zs9C8R/DbxL8TPGN9YprVvcajqHm2zRvLLGBLmRFJLQuf9U+RjnmgDy++/4KryeFPLj+FPwN8BfD+GNWVWe1Fw654JXyVgC5HbB980AXPhN/wWR+KPg+TWW8a6Hp/jxLt43skSRdNFgAG3IvlxNvU5UjdyMHkggAA+cf2pP2w/H37Wmu2N54uks7TTdNaQ6fpOmxGOC3D7QxJJLOxCLlmPrgKDigDw2gAoAKAPrn9l39l74F/Fv4bNr3xC+PWneBNeN3JB/YczwwSRIuNrMZmG/cDkFMqOmcggAHoOr/s5/sS/DS/m/wCEi+P2ueLJI4fPisPDduJlnIyfLM0UMiAtgDBdMZ6jsAfecV58Gf2L/wBkDX/ip8KvB9pf+G7uwtLwCKZ2l1TzpEhhE00u59oaflSDty+FzxQB8H6j/wAFjPiJp8TWvg34eeCPCun7mZIPss0xjyeo2SRrk9yV59qAPKPFf/BTr9o7xV5if8LAbR7dyD5OladbQYOc8P5ZkHbjdj8zQB81eI/Emq+MNevta1vULjVdXvpWnur27kMksznqzMeSaAM6gAoA9o/Y61f4Z+H/ANoXwvqnxdMI8D2TS3Fz9ptprmIyrGxhDxRKzOvmBPl2kH+L5c0AfshezeA/+CjX7O3iTSvD2p614W8EQa4NPOqW9sLZr+G1EchaNHH+pbeAN65BQ5UEYoA+FPEf/BSjwz+z2J/BX7N/w18PaZ4e0+VoP+Ej1iJ559T28edtVkfJIJDSO5KkZVelAHvXwV+KXxE/bM/4J+fHO98c2lv4n1SZr2z0W2s7IK8kiW0UsSJEo5KzMpQ8tuzz8ooA+A/GHwh8Efsv/EX4faf481V/GHiO0v7e+8Y+FtNt0a20623I/wBjM5kxNOVzuUBVGdu7+IgH2t8cv26v2dPiWnhrx1rvwX8X+PrHTJX0+zudXjeLSIH2hmjETStbSSkYJBQthRk4AFAHlPiP/gsd4x0mFNK+GXw28JeCvDkEZit7S5ikuXjGeGQRNDGnrt2MOep6kAb/AMFZ9N03xHp/wI+KMenxafr/AI00CZ9SWD7jeUlrJH9SPtTruPOFUdhQB+e1ABQAUAfp3/wTb8C6B+zd8DfEv7THjgF/t/8AxJ9BtYgDK0ZnETlMnG+SYBBx8qxMckMcAFr/AILDanqPw3+L3wh8f+FtV1Dw/wCLptJvLJtU066eGQQxSIyKNpGBm6nB/vB8HIGKAPA/2bv+CgvxxtPjj4R/trX/ABF8StNnujayeFkuFRr8yxtGgU7fvKzq4BwCUAJAyQAfen7Q/wC0b8a/hT8e/gd4U+zeEfDfg3xj4ksNONnp08l7qfkGe3jnjmMkaJGCJ8Axhjlc7h0IB8df8FMf2gfiZ4M/a/1zStA8feItE0vTLeze0sdO1OWCCNmhR2OxGCtliScg56dOKAPjP4l/Fnxj8ZPECa5428RX/iXVUhW3S5v5d7JEpJCKOijJJwB1JPegDk6ACgAoA+hP2FP2eNQ/aN/aI8OaQlq8nh/S7iPVNbuOQkdrE4bYTkfNIwCADn5ieikgA/Tn/goV+1P4e/ZMv01Pwvp2nX3xr8Q6TDptvc3sbO2naSks7ebxjgytIFXI3MMtuEQWgD8WrePVfH3i+JJruS/1vWr4K91eSlnmnmkwXkc5JJZsljk8k0Aftb+1J4U/Z4+D/wAIvhDpXx1mutdt/CGlJpuiaRbtL5moPFBBEzlYiu4ARoTuZU+bBzkCgDwrxVoOmaT/AMErPjXfeHfDGpeEvButeI7bVPDun6qzNN/Z0moaf5L7mZiQwUkEs3Hc9SAflfQAUAFABQB+yP7V/wC0X4d+FFr+z9+0NZeBI/G/27QZ7Kw+2Xhgjs2njglRyQjgSqonTGAfmfuowAfPfgH9tr9pX9tf46aJ4J8Ka+ngPSry4827Hh2yU/YbJGzJPJNJuclUOPvIruVGBkAAGD/wU8/bEsfjTrln8LPD1rPJongzUpUu9YvWDTX95GrQkqAOEXMvOfnLZwAoyAfDmj6JqPiLUYdP0qwutTv5jtitbOFpZXPoqqCT+FAH61/s/f8ABK/wJ4p/ZQ0z/hZekal4V+JWp+de3OqNd4n01fNbyUEefL2mBUZkcFgZHyVIG0A+D/23vhT8J/g38VbLw78JfFEvirTItOR9RuJL2O7EV2XfKCSNFXOwJlRnBJzg8AA+eKACgAoAKACgD9Pf2f8A9oDwZ+wX+zDpUmv/AAg8ZnxN4zg866l1REXTtXHzFNsjMVRPJkHyeXuIPzBvvUAdp8QfjJ+3H48h0SD4ffCKP4a+HL+2K2VtaC2mmgjb5V86SUqsO0AFR5ceAe/AAB81fHv/AIJvJ+zP+zLfeO/HPj2yXx0LuC3s/D+nL5ltOXlRTEJX2u0ixmSQkLgbCBkfMQD4joAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPcvhp+298bvg94K0/wAJeD/Ht1ovh3TzIbWxSztZFi8yRpHwzxM3LuzcnvQBW8Vftq/HjxjqD3mofFvxbFK6CNk03VJLCIgDHMVuUT8cc0AfpR4o/Z9t/wBub4I/s0+PfFfiG10/w14c0SSfxbqd5cGOadBFCJgGxgZktn3OzLtDsRk8UAfF/wDwUD/bQT9oPxTb+DvA08lh8JvDwSCws4oxBHfSoCvnlABhAMCND0AzgFsAAxv+CY3xBbwB+2b4G83UHsNM1n7TpF4qruE4lgfyYzwSAbhbc5GOnJxmgD7g+KOmeFf+CbvhT4r/ABK8+0v/AIufEfWNR/4R2AKGNlbSztIiqCCSkYdZJDgBmEaf3SQD8fLu7nv7qa5uZnuLmZ2klllYs7sTksSeSSTnNAEVABQB6/8As9/tWfEH9mBvEbeAr60sZNehihu3urRLggR79jJu4BHmN6jnkGgDf/ZD8Z67q37Z3wz12/1e8v8AWbzxHB9ov7qZpZpvNcrIWdiSdwdgc+poA/ST9sr4IfsteKPj5b3Pj7xtfeBfipqotblJLe4bybs4WC2aYSRvGsY8kKdrR8KSWHWgD5p/4LDeGNX8SftS+FYNH0u91eWLwRZs6WFu8xVft18MkKCQPegDwzw1+xLfaD4N0nxx8ZfGGl/B/wAIajlrSDUYpLrWb5AAcwWMY3EHIGXZduQSMEZAPt7wT+zP+zP8XP2H/E/i3wd4GvgNH07UVtde1qQxapNc20bN9ocxSFcFsME+7jAKgcUAfkRQAUAFABQAUAX9A0K/8Ua7pujaXbPeanqNzHZ2ttGMtLNIwREHuWIH40AfssnxD+C/7NXg74ffshfFHbrVpqeibNb1GRgbC0uZ5jKm9jh4w0xkZH4MWImOAdygH5s/tn/sm6x+yd8VJtGk8+/8KajuudC1iReLiDPMbsBt81MgNjGcq2AGAAB4BQAUAFABQAUAft7/AMEpfjjpvjf9lO48NW9hZ6frHgaSW2uLa3DYnikDTRXLjAAMjGZSASSYWbjcBQB8+6H/AMFLdN/aP8Q6F4T1H9lTQ/iJ4q1IparHJqEU3nSYyzKktm+xB8z/ADOQgBJbgtQB9mfEGLRf2af2Wfi1qPwU0rStM1PSIbi+n02yuVaDTL0RR+c2DuUNHGBIIsAMVUYG/NAH4Ca1rV/4k1i+1bVbyfUdTvp3ubq7uXLyzSuxZnZjySSSST60AfZP7KX/AAUNg+Fnw5t/hH8UPBtl46+FZMkflCBDc20cknmEbG+SZQ5ZgG2sC2d3ygUAdR+0B+xn8GPEGmfDvx38DPGTXfhfxb4ptPD1xpM05ma0e5cbfLDASxlBndHLlsMDkYwQCL/gsXqttZ/HbwX4O0x/J0fw94XgWGwhYiC1eSWQFUjzhSY4oMkckBQfuigD4HoAKACgD6r/AGi/2zbL4s/BL4G+APD+malpsfgPTbSPUvtkqi3vbuC3iiV1jRjlRskIZsN+8IwOSQDqf+Cif7Uugftg+Ofhtpnw+02/v102wEK/umM1xeXfkk2yRbclo2RUyM7mLBeACwB698DPhLH+wR8K7bxzrvhy48SftGeMrWaDwf4Tis3uZtPXaAzmOME7gHDSHggERjblyQCT9nT9gr4veJPivYfHX49eJG8Lf2DqFp4jaTWrlLi5uvs8qT7ZSH220QRMc8oONgAoA+af+Ci3x/8ABf7R37Q7eJvA1pLFpVppkelzXs0CxHUZoppj9pAHzFTG8SgvhsIAQMAUAfL9ABQAUAdL8N/hx4i+LXjbSfCfhXTZdW13U5hDb20Qz9WY/wAKKMszHgAEnpQB+v0fjX4df8E0NK+GHwe0GSz1Pxp4p1nTz4i1u8RYmis5LlFuLqbbyFCmRIULEKASS207wD5O/wCCzesWOqftWaHDZ3kF1LY+E7S2uo4ZAzQS/aruTY4H3W2SRtg87XU9CKAPhSwsrrUr2C1soJrq8mcJDDboXkdieAqjkn2FAH7j/tlfspfDn4xaj4O8c/F3x/8A8IT4Q8O6KbOSATRW0tzOx8wDzZcgcKR5aqXcnAII5AOP+N2p+CPiP/wTD+JGgfBeXUdd8I+F1trK2ub+WR3kitry1urh1aY7jHHHvwCBgRlUXaEyAfjDQAUAFABQB+4Xwi/ZG034+/8ABPP4SeAPGd3Jp1rJBba9Hd6eytPGkpeaLyywKq7RT7SWVsBmGD1oA8s+If7WHwp/4JpeJNU+FXw1+Es+o61BDDLqGq3eoLCbl3iDI7TFZJJMbydmEUEsFCg0Afnj4e/aBtZv2nJfi7478H2fjqG61W61a88NXFy0VtM8qyeXGHdZCI4maMqrBgREqnigD7E0L/gqZrev6hpPgn4L/BPwx4B1nXr6Kxik84XamaVxGrCOOK3XcCwOWJAxzxmgD2X/AILK6vr2i/s6eANIN7JPb3esLHqdykfli4kjtmK7gDhQzb32+qj+7QB+OtAG14p8F654Jn06HXdLuNLk1HT7fVbMXC4FxaToJIZkPRlZT1HcEHBBAAMWgAoA9d/Zh+D3hD42fEWXQfGnxI0r4Y6THZSXK6pqxVUmkUqBErOyIpIYt8zDO3ABJ4AP0E/Zf/Zp/YruPiHbeCbTxTL8YvHUsLyf6Wk4sPkXLmLykWEjGSAzyHg4PSgD1L9uz/goXrX7IfjDSPAvhTwLa3jvp8V0mp6m0kdqseWTyYo1A37Qq5YPgZxt70AYf7YPxZ+OXxK+CHwBtfhF/aWn+JviHpUWrahbeGj5MsYNtby4W4JBgiVp8Fy69FywzggHhd78KPhT+ytfaV43/an8Y6l8YPivcRRTR+Cork6i1vhhg3DyviQKu3iVlQ4cKsmAQAfDHx2+Imk/Fj4teI/FuheF7TwZpWpzJJBodiVMVsFjVDjaiD5ipc4UcsevUgHB0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH0V+yH+yFqP7Rurajr2t3jeFvhX4cVrnxD4nmAVI40Xe8MJbgyleSTkIp3NnKqwB+h37bXjLwz4j/AOCZS33wxePS/Ab3FlYWMMsDxyXFpFdCJQgJBTJjD/OCSoIIBPAB+M9AH2H+wZ+zjHf6zD8dviJe/wDCJ/CTwPcrqT6pcEo1/dQuDHFCACXAkChtoJY/u1BYnaAegf8ABXrTm8X+NPhb8WdJnkvPB3i3wvCNOlZWXaVYzgspA2F47mMgHn5W9DgA/PygAoAKACgD0n9mnxMng39ob4ba1JCZ4rPxDYySRr95k89A2PfBOPegD9l/2mm8AaP+0Pocun/Ctfi98bNY063trKxvIlmstGsI7gkXsxcFYMOz4kxuJXaGXJJAMP8Abi/bN8P/ALGvj/S77R/DUfiL4leIdItre7guLmSG3t9LgmuGhYgAjcZZrgLtH8Lbj8qggHzT8R/F3wX/AOCocWlzR6wPhL8doIv7P0+w1mZprDUlB3Rw+cECnLuyqQFkyzfu3AUUAbnxg1PXP2Bv+Cd9t8IdauLCb4geNLzUbSSG0mMkcFjI7CeVW2jcDF5aDO0gz5wdhFAH5a0AFABQAUAFAH6Wf8EyP2ePDHgXwV4g/aK+LthbafoOkBJvDl7qTkJHs3+dc+Vj5iW8pIupLB9q5KEgHwn8f/i1e/HX4z+L/Hl95iya1fvPDFKQWhtxhIIiRwdkSxp/wGgD7K/ZW/aQ8JftK/CZf2a/jrchRNti8J+K7hgZLWcAiGJnP3ZFJ2oxOHUmNuoDgHyj+0R+y34//Zn8V3OleLdGuF07zjHZa7DExsb5eqtHJjG4jkoTuHcd6API6ACgAoAKAP0G/wCCMviW5T42ePfCSOUtNb8MvcOcZ/ewTIqH/vm4k/yaAPS7yDwR/wAEn/glPEk1n4j/AGjvFVkypPEBIunxEkBxuHyW6EZ5G6Z17Kv7sA9Y/aXkvtB/4J//ABw8caXfRtYePbuy8Q6fJCTuFlqD6fE8Tg99rSLwSCCD3IAB+K1AHs/7JnwAh/aW+Ks3gqTU20u5k0e+vLKRSoEl1FCWhRiQcIX27sDO0HGOoAPe/wDgkn8IZfF37WDa5f27Ja+CrCe9k8xMqt0+YI0b0OHlcehioA8H/bS+Jkvxb/am+JXiFp4bm2OsTWNnLbZ8p7W3PkQuuT/EkSsfUsT3oA8VoAKACgAoA/Vj/gkd8APhTfaQvxA1HXtD8VfEZ9z2/h2Yobrw+sU0ieb5ZcktIBE4kKDaCAp+9kA7f9pH9tHxhp/7Q978G/gz4Dm0/wCKGr3dvp7eLNbtg8hhCs26GJlOYYwWcO2UAEp2HJagDzb/AIKy/tXXumadY/ALRtWnv7uC3t5/FmpyxrHLcNsV4YSEVVG7KzPsUL80YHG5aAPy5oAKACgAoA7T4RfGbxn8B/GUfirwHrsvh/XY4Xt/tMcUcoaJwNyPHIrI6nAOGU4KqRyAQAZ/xE+I/iX4seNdT8XeLdWm1nxFqUglur6VVRnYAKuFQBVAAACqAAAAAKALvgT4d+N/jr41XSPDGj6p4u8RXjCSQQK0zgFlUyzSHhEDMoMjkKMjJFAH6lfBi08If8EydFsfBl2s3xM+OvjyWDb4e0TylSJ/mSFDLIR5cW92XzG5Y5IQBW2gHxD+2V4S/aO8U/EK48XfGLwhrtnJdNstBFCZ9Os4zkpbwvEXjThT8u7c2CxycmgD7J/4JktqOufse/Fj4f6p4Z1Odb2W/iso206dYrzzrEB4TMVESnKjhnH+sHtkA+PtN/4J+eJk8WXXh3xL8SPhn4R1O0gE1za6j4nhaeEk4CNGgJDeoOMDnuMgGt+2V/wT5n/ZE+HvhfxTJ8QtO8V/2xeCyewjsjaSxsYmkEkWZX82MbCGYhMFo+Du4APkSgDf+H2lW2u+PfDWm3sZls7zU7a3njDFd0byqrDI5GQTyKAP3V1/W1/Yw8U+DPCvhXRp9d+HXi3xFpXh+302S/yPC11cS7C6l1eR4ZV+ZUZgEeFwDiQBAD5L/aD+N3w7+DX/AAUZ8bJ8Tvh3oXjnwvrVtpVtPd6xYR3kmkqIFzPFHIjBvvDcAAxC8HIwQDyL9tb/AIJ26n8Kf+Ek+J/w9l07UPg8YoNRtSt+rzW0czKojTP+tQM4KsCTsYDkgkgHp37C/wCydqH7L934k+Pfx10X/hG9I8L6SLzRre6mhkeWaUMDIFWTiQLtRI2GWacYAZRQBb/ax+JOo/Gr/glz4G8ca20k2oav4yvbwCeUytApvtSWOIMeoji2xjp8qgUAfmHQB92/8FCPhsbf9nf9lXx7b2nyXPgXTtGvbpU4DJZwSwKW7khp8D/ZNAHwlQAUAFAH6U/so6JYfsG/sta5+0L4tit7jxl4ysVsPCOkSBt5iclk34I+WTYkzY6Rxpg7mK0AaPgH4kaR/wAFNv2eD8J/GWsWum/HjQC99oOrX6BI9S25JUFRnmP5JFGTwsoDbSFAPb/2w9f+JX7N3/BOj4d2/hxptB8Uabpui+H9evrRg02nQCz8uYxyqcK3npDHvUn75K84YAH4uXt7caleTXd3PLdXU7mSWeZy7yMTkszHkknuaAIaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/XXxt4V1v40f8Exfh74U/Z4tLXVIpBZQeI9JsJ4xcBgu+5jbeRh/tJR3JK5XJ+63IByX/BQSLT/AIBfsFfB74L3F1FF4sc2s95YQncP3UTtcyEjov2iVQufvZOPunAB8gfsz/sSeM/2jtNPiiC70zw98PLG8e31nxJf3sSiwSONZZXMW7ecIwxkBSTyQASADX/bO/an0/4sz6R8Ovh1C+i/BrweotNG09Sy/bWQFftUgY7jnnaHJbDFmwzkAA9++DOhSftd/wDBMjW/hvokC3/jn4b6r/aNpbSM29oXeWZSuFO4tHJdxIvcxgcDBoA/OGgAoAKACgD6H/Yt/Zc8eftDfFfQbrw5pjx+HtI1S3n1PXblStrarGwkK7v45CAAEXJyy52qdwAPvv8A4Kf/ALU/iLwL8RvA/wALvAeoXeianq32e+1nUdN/d3FxA05S3tklX5sFklLAYP3RnDMCAZX/AAUC/Zqtf2lf2mm0ez8XWGh+OLH4fafN4e0K/dI/7bm+26iZYUZmGGVUHQHlwTgAmgDw74KfsS337KviiP4v/tFix8PeD/CbpeWOlRXcdzc6xqAyYIYkRuSrKHwTztGfl3kAHbeEP27PAP7bPjCf4Y/HbwDpljpWv3j2fhnxFp4Ju9JklfECPI2SGyVXzU2pnG6PaWIAPjf9rH9ljxN+yf8AEyTw1rhF/pd0rXGkazEhWK+t84z/ALMi5AdMnaSDyrKSAeK0AFAHpH7Onwx0b4z/ABk8O+CNc8RHwta63JJZwakIBMEumjb7OhUsvDy+WnX+LtnIAPsvwB/wT38A/s4Tw+Mv2oPiB4etdKhi+02PhPS7t5J9QYYLLINqu+0kAxwhgSR8+MhgDxn9tP8Abp1D9pn+z/CnhnSv+EO+F2isF0/RYtqPPsG2N5lT5VCrgLEuVXJ5bggA+UqACgD7i/Zx/wCChobwmvwi/aAsF8d/Cm/haylv542l1GxUlfLYuGzIkZXcCB5qnlWO1VoA9Gsv+CUXw9+J+oC++Gn7QukahoV4vnWVrLbRXl0qYyQ7RzpuI7/IpHIIBFAHB/FD/gj38ZvCWsxReEbrSfHelSrlbuKdbGWMgLkSRStgZJIBV2yFJO3IFAHyj8bPgX4x/Z68Yp4X8cabHpmsSWqXqRRXMc6tC5ZVYMjEdUYYPPH0oA4GgD6a/wCCe/7R3hb9l3463ni/xfDqE+lTaJcacq6bCssgkeWF1JDMvy4jbnPUjigDz/8Aaq+PV7+0p8dPE3jm582Kzu5vJ021mPNtZx/LCmMkA7fmYA43u5HWgD9K/jT4k0vVf+CLukyWt9DIr6BoVknzYLzw39qksag9SrRSZA/uE9BQB+PVAHt37FPxi0z4C/tO+BfGmuNImiWdzJBfPGCfLhnhkgMhA5IQyByBk/JwCcCgD7h/aA+NXwO/ZQ+HfxNm+A3jVdb+I3xPut8t1pF+l3Hpiea7yMrJgQgLNKqDJfcynkISAD8sKACgAoAKACgDX8JeLta8B+IrHXvDuqXWi6zYyebbX1lKY5Y26cEdiCQR0IJByDQB+x/7K/7T9xr3wEtPjZ+0VZeGtNbTb8aT4d8XSaeqajcLJiOaVF2nvkHyQMrHISgC5IB8MftrfslePPDWo6n8YrfxVF8XvAmvTi7PjOwkSRk3nagnRCVRRjy1ZP3Y2qMJlUoA+QKACgAoAKACgD2D9m/9lbx7+1B4nbTPCWniPTbYg6jrt7mOysU/23xyx7IuWPXAAJAB+r37HnhD4S/Cj4X/ABM8K/s9+MtN8c/FqysG+36je7gl1epHJ9nwOENsJGYAxMwAb5nLckA/H/xD4/8AiH4c+NVx4w8QXuqWXxJsNUW/nudVhK3UN2jBl3xuuBtwAEK7QoC4xxQB9R+Fv+Cwvx50CwlttQt/CXih3l8xbjV9LkEkYwBsAgmiXHBPKk5J5xgAA94+Gn/BTzwt+0tp/wDwq74s6Te/DxfEGLFfE/hbVHt4UkkBT95nDRIc7ckyLkgsABuAB8PftgfskeJP2SfiImjao/8AaPh7UvMm0TWkGFvIVK7lI/hkTegYf7SkcEUAeL6x4j1bxCLMarql7qQs4FtbYXlw8vkQqMLGm4naoAACjgUAZ9AHp/7L3hu28X/tG/DTR7x5EtbvxBZJI0JAfb5yngkH0oA/a/WPFcekft/N4L8S2VpNoPjHwlYX+jm62y79S0y8nmXYp+66iQyZx/yxQg5HAB+eX/BZrSrXT/2sNHnt0Cy33hS0uLgj+KQXN1GCf+ARoPwoA+Lrn4h+KrzwrD4YuPE2sT+G4SGj0eS/lazQgkgrCW2DBJPA70Ae/ftbft7eMP2rNE0Dw9c6dB4X8LaUiO2l2k7TfarlV2+bI5VcgD7qYwMkkscYAPTP2NvjN8K/iZ8ENT/Z4+Petz6H4aS+/tPw3rS3BgWykYu0sZlIKR4ZnkUyKyEyyA87AQD0Nf2Mv2KfDl3d6tqf7RZ1XRrZfNXTrbWLJ52A5Knyoy8meeI0VvSgDgv27/21/hl8Zvgp4V+D3ww0TV4PD/hTULSSy1PUPkje2trWe2jjRWZpCNsqENJhjtORnkgHwfQAUAfQP7Hf7K13+0n43uJtVuz4f+HPh+M33iTxFMRHHbW6Dc0au3yiRlB5PCqCxzgBgC1+3H+0tF+0T8WVTw+xt/h34ZhGleGrBUMca26gBpth+60hUHoCEWMEZU0AeA6HrmoeGdYstW0m9n03U7KZbi2vLWQxywyKcq6sOQQRnNAH6mJ8cbv/AIKRfsXav8PItej0740aKsd/PowKwr4hS3+fKrjBD8EhSNsqKTtQjIB+VVzbTWVzLb3ETwTxOY5IpVKsjA4KkHkEHjFAEdABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAdd8Nfi740+Dut/wBr+CfE+p+Gb8ld8mn3DRrMFOQsifdkUHna4I9qAI/iX8VfF3xj8TyeIvGviC98R6y6CL7VeybiiAkhEUYVFBZiFUAAseOaAKOg+O/EvhbSdY0vRfEOq6RpmsRCDUrKwvZYIb6MZASZFYCRfmbhgR8x9aAMOgD6m/4J4/tXaV+yp8YdQ1LxMl3L4T1rT2s79bNDI8bqd8Ugj3ANg7l5yQJDjvQB8+fErxDp/i34i+Ktc0mzOnaVqeq3V7aWbKqmCGSZnSMheBtVgMDjjigDnKACgDT8LQ6TceJtIi1+4uLTQpLyFdQuLRQ00VuXAlZAcgsE3EA9wKAP0B/aA/bW8BfAf4OaZ8HP2V7+S10y5ikm1nxUkTpcu8gCttkkVWMzqPmk2jYoRYyCPkAPjz9m/WYz+0z8J9Q1u+U2kPizSHubq/l+RIlvIixdmOAoUEkngDNAH0v/AMFbviDdXH7Z9rJpclzpOo+F9EsLWC+tpjHKJRJLdLLGykFCDcAAg5BXNAHx741+KHjL4lTQS+LvFuu+KpYBiJ9b1Ka8aP8A3TIzY/CgDmaAP1Q/Zg+JngX/AIKC/AFPgX8WLnyPiJoNuToWtSPuurlETCzROxy8qKMSRk/Oo3c/NsAPzE8W6JD4a8VazpFvqEOrW+n3s1pHqFujJHcrHIVEqqwDBWA3AMAQDyM0AZVACo7RurKxVlOQwOCDQBPe6jdanKJby5mu5Qu0PPIXYDrjJ7cn86AK9ABQAUAFAElvcS2kyTQSvDMhyskbFWU+xHSgD0fTP2nfjFothBY6f8WfHNhZQKEhtrbxJeRxxqOgVVkAA9hQBwmv+IdV8Vavdarrep3msapdOZJ72/neeeZyclndyWYknOSaAM+gAoAKANSXxXrc/huHw7JrF/J4fguDeRaU105tY5yNplWLO0ORwWAzjjNAGXQAUAFABQAUAFABQAUAfXX7M3/BPPxV8d9O+GHil5TD4P8AE2p3yahKgCva2NoyK8ofJ5lfzolBUFWQMQynIAGf8FCP2sIfjn41s/AvhO2g0z4Z+BZpdP0iGykzFesmIvtOFOzZtTEWBkIzHI3lQAeM/DH9pf4h/CDwN4v8HeGtda28N+KbV7XUdPniWaMh12M8YcHy3KEqWXqCM8qpAB5dQAUAFABQB7X+yB8M/h/8VPjRZ6Z8T/Fll4R8GWlrNf3lxeX0dn9q8vAW3SVzgMxYHA5KqwXBwQAes/tWftsad4g0Of4S/A3S4/Afwds2aF/7PQwXGtnG1pJj94Rtj7rEs45kOTtUA+Yvhr8TfE/wf8Zaf4q8IavPomu2LbobqA9R3VlPDqehVgQe4oA/QM/t3fs2ftNaLZR/tD/CeW38VQQhJNd0OMlZSB2likSdQSciM71Hdj3AM3+3/wDgnL/0LXiz/v5qH/x+gCfS/wBqv9iv4EST3vw5+Cep+K9eVlkt7rXUEkSsDkFZLmWV4iPVIvxoA+bP2yf21fEP7YuteHptV0HT/Dmk+H1uF06xs3aV18/yvMMkjY3nEMeMKoGDxzQB850AFAG/8P8Axxqnwz8b6H4r0R4o9X0a8jvrVpoxIgkRgy7lPUZHSgDv/Fv7WPxQ8d/GHQ/ibr3iebUfFOiXMdxpzuipBbBH3CNIkwoQ9GHVgTuJyTQBQ/aQ/aB179pr4qX3jrxFa2tjf3MENstpZGQwxJGgUBd7MRk5YjOMsaAPMKACgAoAKACgAoA9F/Z30/4e6p8aPC1t8Vb6507wA9wx1S4tN28KI3MakoCwVpBGrFRkKzEEEZAB9Nftcftj+DI/hzL8B/gDpEWi/C2F0a91dBIs+qOG3MoL/OULbdzv8zlccL94A+IKACgDo/h58R/E3wn8W2PibwjrV3oGuWTh4byzkKNjIJRh0dDjDIwKsOCCKAPu2w8IfCH/AIKWQnUrHVbX4UftDPBm/wBNdQNL12VFOZY167mwCdpLoN25ZAAxAPlz9p79kDx/+yVqehWnjddMli1uKWSyvNKujNDIYiolQ7lVgy+ZGeVwQ4wTggAHiVABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAAJUggkEcgigC3qur3+u30l7qV7cajeSYD3F3K0sjYGBlmJJwAB+FAFSgAoAnsL+60u8hu7K5ltLqFg8c8DlHRvVWHIP0oAgJLEkkknkk0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH2nf/8ABTHxHYfsl6H8G/CXhuDwvf22nLpN94hgn3NLbBSrmKPaPLlkGNzkkjLFcEhlAPiygAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAfDNJbTJLE7RSxsGR0OGUjkEEdDQB3fxQ+PXxB+NVj4dtPHPiq/wDE0Ph+B7bTftzKzwo5BclwA0jMVXLuWYhVBOAMAHA0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB7P4x/Y3+MfgH4U2vxK1zwVNaeCrmC3uU1SO9tZsRTgGJ3ijlaRAdyjLKMEgHBOKAPGKACgAoAKAHRxvNIscas7sQqqoyST0AFAGn4p8J614H1250XxDpN7oesWu0T2GoQNBNFuUMu5GAIypBHqCDQBlUAfpV+yD4X8DftJ/sC/E7wFa/D/AE67+JfhKwuJrfU4rSL7ZeyyvNcWbrMBv3h42hxnG1FBOGIAB+apGDg8GgDc8R+BfEvg620241/w9quh2+pwC6sZdSspbdLuE8iSIuoDqcj5lyOaAMOgAoAKACgAoA980T9hv4ueJfgCnxg0nQYtS8Kv5sggtrgPe+RGSr3Ah7oGVhgEv8pO3bzQB4HQAUAFABQAUAFABQB2Phr4OeOvGXhHVPFWheEdZ1fw3pZkF9qtlZSS29uUQSSb3AwNqMrH0BBPBoA46gAoA6D4d6Zba38QPDOnXsQn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io3n/gtsv/jFAHLeO/23/jz8SLRbXXPil4ha1EckLwafcCwSVHGHWRbcRiQEcYfPf1NAHh9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH//Z"

/***/ })
/******/ ]);