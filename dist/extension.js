/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMain: () => (/* reexport safe */ _mcb_AppMain_js__WEBPACK_IMPORTED_MODULE_8__.AppMain),
/* harmony export */   Compiler: () => (/* reexport safe */ _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_7__.Compiler),
/* harmony export */   Globals: () => (/* reexport safe */ _mcl_Globals_js__WEBPACK_IMPORTED_MODULE_6__.Globals),
/* harmony export */   LibMain: () => (/* reexport safe */ _LibMain_js__WEBPACK_IMPORTED_MODULE_1__.LibMain),
/* harmony export */   MultiThreadIo: () => (/* reexport safe */ _Io_js__WEBPACK_IMPORTED_MODULE_3__.MultiThreadIo),
/* harmony export */   Parser: () => (/* reexport safe */ _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_5__.Parser),
/* harmony export */   RevertTracker: () => (/* reexport safe */ _Io_js__WEBPACK_IMPORTED_MODULE_3__.RevertTracker),
/* harmony export */   SyncIo: () => (/* reexport safe */ _Io_js__WEBPACK_IMPORTED_MODULE_3__.SyncIo),
/* harmony export */   TemplateArgument: () => (/* reexport safe */ _mcl_args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_4__.TemplateArgument),
/* harmony export */   ThreadedIo: () => (/* reexport safe */ _Io_js__WEBPACK_IMPORTED_MODULE_3__.ThreadedIo),
/* harmony export */   Tokenizer: () => (/* reexport safe */ _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.Tokenizer)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _LibMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _Io_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _mcl_args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _mcl_Globals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _mcb_AppMain_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

_LibMain_js__WEBPACK_IMPORTED_MODULE_1__.LibMain.main()












/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayIterator: () => (/* binding */ ArrayIterator),
/* harmony export */   Register: () => (/* binding */ Register)
/* harmony export */ });

class Register {
	static global(name) {
		if (Register.globals[name]) {
			return Register.globals[name];
		} else {
			return Register.globals[name] = {};
		};
	}
	static createStatic(obj, name, get) {
		let value = null;
		Object.defineProperty(obj, name, {"enumerable": true, "get": function () {
			if (get != null) {
				value = get();
				get = null;
			};
			return value;
		}, "set": function (v) {
			if (get != null) {
				value = get();
				get = null;
			};
			value = v;
		}});
	}
	static iterator(a) {
		if (!Array.isArray(a)) {
			return typeof a.iterator === "function" ? a.iterator.bind(a) : a.iterator;
		} else {
			let a1 = a;
			return function () {
				return Register.mkIter(a1);
			};
		};
	}
	static getIterator(a) {
		if (!Array.isArray(a)) {
			return a.iterator();
		} else {
			return Register.mkIter(a);
		};
	}
	static mkIter(a) {
		return new ArrayIterator(a);
	}
	static extend(superClass) {
		
      function res() {
        this.new.apply(this, arguments)
      }
      Object.setPrototypeOf(res.prototype, superClass.prototype)
      return res
    ;
	}
	static inherits(resolve, defer) {
		if (defer == null) {
			defer = false;
		};
		
      function res() {
        if (defer && resolve && res.__init__) res.__init__()
        this.new.apply(this, arguments)
      }
      if (!defer) {
        if (resolve && resolve.__init__) {
          defer = true
          res.__init__ = () => {
            // this does not exist in the base library, we add this due to some super types not having an __init__ (eg. Native Error)
            if (resolve.__init__) resolve.__init__()
            Object.setPrototypeOf(res.prototype, resolve.prototype)
            res.__init__ = undefined
          } 
        } else if (resolve) {
          Object.setPrototypeOf(res.prototype, resolve.prototype)
        }
      } else {
        res.__init__ = () => {
          const superClass = resolve()
          if (superClass.__init__) superClass.__init__()
          Object.setPrototypeOf(res.prototype, superClass.prototype)
          res.__init__ = undefined
        } 
      }
      return res
    ;
	}
	static bind(o, m) {
		if (m == null) {
			return null;
		};
		if (m.__id__ == null) {
			m.__id__ = Register.fid++;
		};
		let f = null;
		if (o.hx__closures__ == null) {
			o.hx__closures__ = {};
		} else {
			f = o.hx__closures__[m.__id__];
		};
		if (f == null) {
			f = m.bind(o);
			o.hx__closures__[m.__id__] = f;
		};
		return f;
	}
	static get __name__() {
		return "genes.Register"
	}
	get __class__() {
		return Register
	}
}


Register.$global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : undefined
Register.globals = {}
Register.fid = 0
const ArrayIterator = Register.global("$hxClasses")["genes._Register.ArrayIterator"] = 
class ArrayIterator extends Register.inherits() {
	new(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
	static get __name__() {
		return "genes._Register.ArrayIterator"
	}
	get __class__() {
		return ArrayIterator
	}
}



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibMain: () => (/* binding */ LibMain)
/* harmony export */ });
/* harmony import */ var _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _mcl_TemplateRegisterer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Io_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50);










const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const LibMain = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["LibMain"] = 
class LibMain {
	static main() {
		_mcl_TemplateRegisterer_js__WEBPACK_IMPORTED_MODULE_1__.TemplateRegisterer.register();
	}
	static createCompiler(baseDir, config, libStore) {
		return new _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_3__.Compiler(baseDir, config, libStore);
	}
	static parseFile(path, content) {
		let ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_4__.Path.extension(path);
		let tokens = _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.Tokenizer.tokenize(content, path);
		if (ext == "mcb") {
			return _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbFile(tokens);
		} else if (ext == "mcbt") {
			return _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbtFile(tokens);
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Unknown file extension: " + ext);
		};
	}
	static addFileToCompiler(compiler, path) {
		let ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_4__.Path.extension(path);
		let tokens = _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.Tokenizer.tokenize(fs__WEBPACK_IMPORTED_MODULE_7__.readFileSync(path, {"encoding": "utf8"}), path);
		compiler.addFile(path, (ext == "mcb") ? _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbFile(tokens) : _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbtFile(tokens));
	}
	static compileFromFsLikeMap(baseDir, files, io) {
		let compiler = LibMain.createCompiler(baseDir, {}, null);
		let jsIterator = files.entries();
		let _g_jsIterator = jsIterator;
		let _g_lastStep = jsIterator.next();
		while (!_g_lastStep.done) {
			let v = _g_lastStep.value;
			_g_lastStep = _g_jsIterator.next();
			let path = v;
			let tokens = _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.Tokenizer.tokenize(path[1], path[0]);
			let tmp = (_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_4__.Path.extension(path[0]) == "mcb") ? _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbFile(tokens) : _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.parseMcbtFile(tokens);
			compiler.addFile(path[0], tmp);
		};
		compiler.io = io;
		compiler.compile(new _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_3__.VariableMap(null));
	}
	static createIoProvider(threadCount) {
		switch (threadCount) {
			case 0:
				return new _Io_js__WEBPACK_IMPORTED_MODULE_8__.SyncIo();
				break
			case 1:
				return new _Io_js__WEBPACK_IMPORTED_MODULE_8__.ThreadedIo();
				break
			default:
			return new _Io_js__WEBPACK_IMPORTED_MODULE_8__.MultiThreadIo(threadCount);
			
		};
	}
	static get __name__() {
		return "LibMain"
	}
	get __class__() {
		return LibMain
	}
}



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Brackets: () => (/* binding */ Brackets),
/* harmony export */   Token: () => (/* binding */ Token),
/* harmony export */   Tokenizer: () => (/* binding */ Tokenizer)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _StringTools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Token = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["mcl.Token"] = 
{
	__ename__: "mcl.Token",
	
	Literal: Object.assign((v, pos) => ({_hx_index: 0, __enum__: "mcl.Token", "v": v, "pos": pos, "@kind": "Literal"}), {_hx_name: "Literal", __params__: ["v", "pos"]}),
	BracketOpen: Object.assign((pos, data) => ({_hx_index: 1, __enum__: "mcl.Token", "pos": pos, "data": data, "@kind": "BracketOpen"}), {_hx_name: "BracketOpen", __params__: ["pos", "data"]}),
	BracketClose: Object.assign((pos) => ({_hx_index: 2, __enum__: "mcl.Token", "pos": pos, "@kind": "BracketClose"}), {_hx_name: "BracketClose", __params__: ["pos"]})
}
Token.__constructs__ = [Token.Literal, Token.BracketOpen, Token.BracketClose]
Token.__empty_constructs__ = []

const Brackets = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["mcl.Brackets"] = 
{
	__ename__: "mcl.Brackets",
	
	Curly: {_hx_name: "Curly", _hx_index: 0, __enum__: "mcl.Brackets", "@kind": "Curly"},
	Square: {_hx_name: "Square", _hx_index: 1, __enum__: "mcl.Brackets", "@kind": "Square"},
	Round: {_hx_name: "Round", _hx_index: 2, __enum__: "mcl.Brackets", "@kind": "Round"}
}
Brackets.__constructs__ = [Brackets.Curly, Brackets.Square, Brackets.Round]
Brackets.__empty_constructs__ = [Brackets.Curly, Brackets.Square, Brackets.Round]

const Tokenizer = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["mcl.Tokenizer"] = 
class Tokenizer {
	static tokenize(code, file) {
		let isInMultilineComment = false;
		let indents = [];
		let _g = [];
		let _g1 = 0;
		let _g2 = code.split("\n");
		while (_g1 < _g2.length) {
			let line = _g2[_g1];
			++_g1;
			let indent = 0;
			while (true) {
				let tmp;
				switch (line.charAt(0)) {
					case "\t":case " ":
						line = line.substring(1);
						++indent;
						tmp = true;
						break
					default:
					tmp = false;
					
				};
				if (!tmp) {
					break;
				};
			};
			indents.push(indent);
			_g.push(line);
		};
		let lines = _g;
		let result = [];
		let lineNum = 0;
		let colNum = 0;
		let lineIdx = 0;
		while (lineIdx < lines.length) {
			let line = lines[lineIdx];
			let indent = indents[lineNum];
			let internalLineNum = 0;
			while (true) {
				while (line.charAt(line.length - 1) == "\n" || line.charAt(line.length - 1) == "\r") line = line.substring(0, line.length - 1);
				if (line.endsWith(" \\")) {
					line = _StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.rtrim(line.substring(0, line.length - 2));
					line += " " + _StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.trim(lines[++lineIdx]);
					++lineNum;
				} else {
					break;
				};
			};
			++lineIdx;
			++lineNum;
			if (line == "###") {
				isInMultilineComment = !isInMultilineComment;
				continue;
			};
			if (isInMultilineComment) {
				result.push(Token.Literal("### " + line, {"line": lineNum, "col": colNum + indent, "file": file}));
				continue;
			};
			if (line.charAt(0) == "#") {
				result.push(Token.Literal(line, {"line": lineNum, "col": colNum + indent, "file": file}));
				continue;
			};
			if (line.charAt(0) == "}") {
				result.push(Token.BracketClose({"line": lineNum, "col": colNum + indent, "file": file}));
				line = line.substring(1);
			};
			let i = 0;
			let braces = [];
			let done = false;
			while (i < line.length) {
				let idx = line.length - i - 1;
				let c = line.charAt(idx);
				if (c == "}") {
					braces.push(Brackets.Curly);
				} else if (c == "{") {
					if (braces.length == 0) {
						let content = _StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.trim(line.substring(0, idx));
						if (content.length > 0) {
							result.push(Token.Literal(content, {"line": lineNum, "col": colNum + indent, "file": file}));
						};
						let tmp = _StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.trim(line.substring(idx + 1));
						result.push(Token.BracketOpen({"line": lineNum, "col": colNum + indent + idx, "file": file}, tmp));
						done = true;
						break;
					};
					braces.pop();
				};
				++i;
			};
			let trimmed = _StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.trim(line);
			if (done || trimmed.length == 0) {
				continue;
			};
			result.push(Token.Literal(_StringTools_js__WEBPACK_IMPORTED_MODULE_1__.StringTools.trim(trimmed), {"line": lineNum, "col": colNum + indent, "file": file}));
		};
		return result;
	}
	static get __name__() {
		return "mcl.Tokenizer"
	}
	get __class__() {
		return Tokenizer
	}
}



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringTools: () => (/* binding */ StringTools)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
This class provides advanced methods on Strings. It is ideally used with
`using StringTools` and then acts as an [extension](https://haxe.org/manual/lf-static-extension.html)
to the `String` class.

If the first argument to any of the methods is null, the result is
unspecified.
*/
const StringTools = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["StringTools"] = 
class StringTools {
	
	/**
	Tells if the character in the string `s` at position `pos` is a space.
	
	A character is considered to be a space character if its character code
	is 9,10,11,12,13 or 32.
	
	If `s` is the empty String `""`, or if pos is not a valid position within
	`s`, the result is false.
	*/
	static isSpace(s, pos) {
		let c = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.cca(s, pos);
		if (!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		};
	}
	
	/**
	Removes leading space characters of `s`.
	
	This function internally calls `isSpace()` to decide which characters to
	remove.
	
	If `s` is the empty String `""` or consists only of space characters, the
	result is the empty String `""`.
	*/
	static ltrim(s) {
		let l = s.length;
		let r = 0;
		while (r < l && StringTools.isSpace(s, r)) ++r;
		if (r > 0) {
			return _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(s, r, l - r);
		} else {
			return s;
		};
	}
	
	/**
	Removes trailing space characters of `s`.
	
	This function internally calls `isSpace()` to decide which characters to
	remove.
	
	If `s` is the empty String `""` or consists only of space characters, the
	result is the empty String `""`.
	*/
	static rtrim(s) {
		let l = s.length;
		let r = 0;
		while (r < l && StringTools.isSpace(s, l - r - 1)) ++r;
		if (r > 0) {
			return _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(s, 0, l - r);
		} else {
			return s;
		};
	}
	
	/**
	Removes leading and trailing space characters of `s`.
	
	This is a convenience function for `ltrim(rtrim(s))`.
	*/
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
	
	/**
	Encodes `n` into a hexadecimal representation.
	
	If `digits` is specified, the resulting String is padded with "0" until
	its `length` equals `digits`.
	*/
	static hex(n, digits) {
		let s = "";
		let hexChars = "0123456789ABCDEF";
		do {
			s = hexChars.charAt(n & 15) + s;
			n >>>= 4;
		} while (n > 0);
		if (digits != null) {
			while (s.length < digits) s = "0" + s;
		};
		return s;
	}
	static get __name__() {
		return "StringTools"
	}
	get __class__() {
		return StringTools
	}
}



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HxOverrides: () => (/* binding */ HxOverrides)
/* harmony export */ });
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const HxOverrides = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["HxOverrides"] = 
class HxOverrides {
	static dateStr(date) {
		let m = date.getMonth() + 1;
		let d = date.getDate();
		let h = date.getHours();
		let mi = date.getMinutes();
		let s = date.getSeconds();
		return date.getFullYear() + "-" + ((m < 10) ? "0" + m : "" + m) + "-" + ((d < 10) ? "0" + d : "" + d) + " " + ((h < 10) ? "0" + h : "" + h) + ":" + ((mi < 10) ? "0" + mi : "" + mi) + ":" + ((s < 10) ? "0" + s : "" + s);
	}
	static strDate(s) {
		switch (s.length) {
			case 8:
				let k = s.split(":");
				let d = new Date();
				d["setTime"](0);
				d["setUTCHours"](k[0]);
				d["setUTCMinutes"](k[1]);
				d["setUTCSeconds"](k[2]);
				return d;
				break
			case 10:
				let k1 = s.split("-");
				return new Date(k1[0], k1[1] - 1, k1[2], 0, 0, 0);
				break
			case 19:
				let k2 = s.split(" ");
				let y = k2[0].split("-");
				let t = k2[1].split(":");
				return new Date(y[0], y[1] - 1, y[2], t[0], t[1], t[2]);
				break
			default:
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception.thrown("Invalid date format : " + s);
			
		};
	}
	static cca(s, index) {
		let x = s.charCodeAt(index);
		if (x != x) {
			return undefined;
		};
		return x;
	}
	static substr(s, pos, len) {
		if (len == null) {
			len = s.length;
		} else if (len < 0) {
			if (pos == 0) {
				len = s.length + len;
			} else {
				return "";
			};
		};
		return s.substr(pos, len);
	}
	static now() {
		return Date.now();
	}
	static get __name__() {
		return "HxOverrides"
	}
	get __class__() {
		return HxOverrides
	}
}


;((typeof(performance) != "undefined") ? typeof(performance.now) == "function" : false) ? HxOverrides.now = performance.now.bind(performance) : null


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Exception: () => (/* binding */ Exception)
/* harmony export */ });
/* harmony import */ var _ValueException_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
Base class for exceptions.

If this class (or derivatives) is used to catch an exception, then
`haxe.CallStack.exceptionStack()` will not return a stack for the exception
caught. Use `haxe.Exception.stack` property instead:
```haxe
try {
throwSomething();
} catch(e:Exception) {
trace(e.stack);
}
```

Custom exceptions should extend this class:
```haxe
class MyException extends haxe.Exception {}
//...
throw new MyException('terrible exception');
```

`haxe.Exception` is also a wildcard type to catch any exception:
```haxe
try {
throw 'Catch me!';
} catch(e:haxe.Exception) {
trace(e.message); // Output: Catch me!
}
```

To rethrow an exception just throw it again.
Haxe will try to rethrow an original native exception whenever possible.
```haxe
try {
var a:Array<Int> = null;
a.push(1); // generates target-specific null-pointer exception
} catch(e:haxe.Exception) {
throw e; // rethrows native exception instead of haxe.Exception
}
```
*/
const Exception = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["haxe.Exception"] = 
class Exception extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(() => Error, true) {
	new(message, previous, $native) {
		Error.call(this, message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = ($native != null) ? $native : this;
	}
	unwrap() {
		return this.__nativeException;
	}
	
	/**
	Returns exception message.
	*/
	toString() {
		return this.get_message();
	}
	get_message() {
		return this.message;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if (((value) instanceof Exception)) {
			return value;
		} else if (((value) instanceof Error)) {
			return new Exception(value.message, null, value);
		} else {
			return new _ValueException_js__WEBPACK_IMPORTED_MODULE_0__.ValueException(value, null, value);
		};
	}
	static thrown(value) {
		if (((value) instanceof Exception)) {
			return value.get_native();
		} else if (((value) instanceof Error)) {
			return value;
		} else {
			let e = new _ValueException_js__WEBPACK_IMPORTED_MODULE_0__.ValueException(value);
			return e;
		};
	}
	static get __name__() {
		return "haxe.Exception"
	}
	static get __super__() {
		return Error
	}
	get __class__() {
		return Exception
	}
}



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueException: () => (/* binding */ ValueException)
/* harmony export */ });
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
An exception containing arbitrary value.

This class is automatically used for throwing values, which don't extend `haxe.Exception`
or native exception type.
For example:
```haxe
throw "Terrible error";
```
will be compiled to
```haxe
throw new ValueException("Terrible error");
```
*/
const ValueException = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["haxe.ValueException"] = 
class ValueException extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(() => _Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception, true) {
	new(value, previous, $native) {
		super.new(String(value), previous, $native);
		this.value = value;
	}
	
	/**
	Extract an originally thrown value.
	
	This method must return the same value on subsequent calls.
	Used internally for catching non-native exceptions.
	Do _not_ override unless you know what you are doing.
	*/
	unwrap() {
		return this.value;
	}
	static get __name__() {
		return "haxe.ValueException"
	}
	static get __super__() {
		return _Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception
	}
	get __class__() {
		return ValueException
	}
}



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateRegisterer: () => (/* binding */ TemplateRegisterer)
/* harmony export */ });
/* harmony import */ var _args_WordTemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _args_RawTemplateArgument_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var _args_JsTemplateArgument_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _args_IntTemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67);
/* harmony import */ var _args_FloatTemplateArgument_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var _args_BlockTemplateArgument_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const TemplateRegisterer = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["mcl.TemplateRegisterer"] = 
class TemplateRegisterer {
	static register() {
		_args_RawTemplateArgument_js__WEBPACK_IMPORTED_MODULE_1__.RawTemplateArgument.register();
		_args_IntTemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__.IntTemplateArgument.register();
		_args_JsTemplateArgument_js__WEBPACK_IMPORTED_MODULE_2__.JsTemplateArgument.register();
		_args_BlockTemplateArgument_js__WEBPACK_IMPORTED_MODULE_5__.BlockTemplateArgument.register();
		_args_FloatTemplateArgument_js__WEBPACK_IMPORTED_MODULE_4__.FloatTemplateArgument.register();
		_args_WordTemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.WordTemplateArgument.register();
	}
	static get __name__() {
		return "mcl.TemplateRegisterer"
	}
	get __class__() {
		return TemplateRegisterer
	}
}



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WordTemplateArgument: () => (/* binding */ WordTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const WordTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.args.WordTemplateArgument"] = 
class WordTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument) {
	new(s, pos) {
		super.new(s, pos);
	}
	parseValue(value, pos, ctx) {
		if (value == "") {
			return {"success": false};
		};
		let split = value.indexOf(" ");
		let res = (split == -1) ? value : _HxOverrides_js__WEBPACK_IMPORTED_MODULE_2__.HxOverrides.substr(value, 0, split);
		return {"success": true, "value": res, "raw": res};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("word", WordTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.WordTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return WordTemplateArgument
	}
}



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateArgument: () => (/* binding */ TemplateArgument)
/* harmony export */ });
/* harmony import */ var _LiteralTemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);






const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.$global

const TemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["mcl.args.TemplateArgument"] = 
class TemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.inherits() {
	new(s, pos) {
		this.expectJsValue = false;
		this.expectBlock = false;
		this.name = s;
		this.pos = pos;
	}
	parseValue(s, p, context) {
		throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("override this method in subclass, plz thx");
	}
	parseValueBlock(s, p, context) {
		throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("override this method in subclass, plz thx");
	}
	static parse(s, p) {
		let colon = s.indexOf(":");
		let type = (colon == -1) ? "literal" : s.substring(colon + 1);
		let name = (colon == -1) ? s : s.substring(0, colon);
		if (type == "literal") {
			return new _LiteralTemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.LiteralTemplateArgument(p, name);
		};
		if (!TemplateArgument.argumentTypes.inst.has(type)) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unknown template argument type: '" + type + "'");
		};
		return _Type_js__WEBPACK_IMPORTED_MODULE_4__.Type.createInstance(TemplateArgument.argumentTypes.inst.get(type), [name]);
	}
	static register(type, c) {
		if (TemplateArgument.argumentTypes.inst.has(type)) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Template argument type already registered: " + type);
		};
		TemplateArgument.argumentTypes.inst.set(type, c);
	}
	static get __name__() {
		return "mcl.args.TemplateArgument"
	}
	get __class__() {
		return TemplateArgument
	}
}


TemplateArgument.jsCache = null
TemplateArgument.jsCacheIdx = 0
TemplateArgument.argumentTypes = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__.StringMap()

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiteralTemplateArgument: () => (/* binding */ LiteralTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _JsTemplateArgument_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const LiteralTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl.args.LiteralTemplateArgument"] = 
class LiteralTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits(() => _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument, true) {
	new(pos, value) {
		this.value = value;
		super.new(null, pos);
	}
	parseValue(value, pos, ctx) {
		if (value == this.value || value.startsWith(this.value + " ")) {
			return {"success": true, "value": value, "raw": this.value};
		};
		return {"success": false};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("literal", _JsTemplateArgument_js__WEBPACK_IMPORTED_MODULE_1__.JsTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.LiteralTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return LiteralTemplateArgument
	}
}



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsTemplateArgument: () => (/* binding */ JsTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Compiler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const JsTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl.args.JsTemplateArgument"] = 
class JsTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits(() => _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument, true) {
	new(s, p) {
		super.new(s, p);
		this.expectJsValue = true;
	}
	parseValue(value, pos, ctx) {
		let v = value;
		if ("<" == v.charAt(0) && "%" == v.charAt(1)) {
			let end = value.indexOf("%>");
			if (end == -1) {
				return {"success": false};
			};
			let code = value.substring(2, end);
			try {
				let idx = _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.jsCacheIdx;
				let alreadyParsed = _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.jsCache.inst.has(idx);
				let v;
				if (!alreadyParsed) {
					v = _Compiler_js__WEBPACK_IMPORTED_MODULE_1__.McFile.invokeExpressionInline(code, ctx, pos);
					_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.jsCache.inst.set(idx, v);
				} else {
					v = _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.jsCache.inst.get(idx);
				};
				return {"success": true, "value": v, "raw": value.substring(0, end + 2)};
			}catch (_g) {
				return {"success": false};
			};
		};
		return {"success": false};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("js", JsTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.JsTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return JsTemplateArgument
	}
}



/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Compiler: () => (/* binding */ Compiler),
/* harmony export */   ErrorUtil: () => (/* binding */ ErrorUtil),
/* harmony export */   ImportFileType: () => (/* binding */ ImportFileType),
/* harmony export */   McFile: () => (/* binding */ McFile),
/* harmony export */   McTemplate: () => (/* binding */ McTemplate),
/* harmony export */   UidTracker: () => (/* binding */ UidTracker),
/* harmony export */   VariableMap: () => (/* binding */ VariableMap)
/* harmony export */ });
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_McbError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _TagManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _McMath_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27);
/* harmony import */ var _Globals_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44);
/* harmony import */ var _Config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49);
/* harmony import */ var _AstNode_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);
/* harmony import */ var _js_Boot_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var _haxe_ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(46);
/* harmony import */ var _haxe_ds_IntMap_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3);
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47);
/* harmony import */ var _StringTools_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(24);
/* harmony import */ var _Reflect_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(48);
/* harmony import */ var _Io_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(50);

























const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.$global

const ErrorUtil = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl.ErrorUtil"] = 
class ErrorUtil {
	static format(message, pos) {
		return "" + pos.file + ":" + pos.line + ":" + (pos.col + 1) + ": " + message;
	}
	static formatWithStack(message, stack) {
		let res = message;
		let _g = 0;
		while (_g < stack.length) {
			let pos = stack[_g];
			++_g;
			res += "\n\tat " + pos.file + ":" + pos.line + ":" + (pos.col + 1);
		};
		return res;
	}
	static formatContext(message, pos, context) {
		return ErrorUtil.formatWithStack(message, context.stack.concat([pos]));
	}
	static get __name__() {
		return "mcl.ErrorUtil"
	}
	get __class__() {
		return ErrorUtil
	}
}


const UidTracker = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl._Compiler.UidTracker"] = 
class UidTracker extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.inherits() {
	new() {
		this.uid = 0;
	}
	get() {
		return this.uid++;
	}
	static get __name__() {
		return "mcl._Compiler.UidTracker"
	}
	get __class__() {
		return UidTracker
	}
}


const McTemplate = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl.McTemplate"] = 
class McTemplate extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.inherits() {
	new(name, body, file) {
		this.jsValueCache = new _haxe_ds_IntMap_js__WEBPACK_IMPORTED_MODULE_15__.IntMap();
		this.hasBeenUsed = false;
		this.tickBlock = null;
		this.loadBlock = null;
		this.overloads = new _haxe_ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_14__.ObjectMap();
		this.name = name;
		this.body = body;
		this.parse(body);
		this.file = file;
	}
	compileArgs(args, pos) {
		let $arguments = [];
		let sections = args.split(" ");
		let offset = 0;
		let _g = 0;
		while (_g < sections.length) {
			let section = sections[_g];
			++_g;
			if (section == "") {
				++offset;
				continue;
			};
			$arguments.push(_args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__.TemplateArgument.parse(section, {"file": pos.file, "line": pos.line, "col": pos.col + offset}));
			offset += section.length;
		};
		return $arguments;
	}
	parse(nodes) {
		let _g = 0;
		while (_g < nodes.length) {
			let node = nodes[_g];
			++_g;
			switch (node._hx_index) {
				case 9:
					let pos = node.pos;
					let body = node.body;
					if (this.tickBlock == null) {
						this.tickBlock = body;
					} else {
						throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.format("Templates can only have one top-level tick block", pos));
					};
					break
				case 10:
					let pos1 = node.pos;
					let body1 = node.body;
					if (this.loadBlock == null) {
						this.loadBlock = body1;
					} else {
						throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.format("Templates can only have one top-level load block", pos1));
					};
					break
				case 17:
					let pos2 = node.pos;
					let args = node.args;
					let body2 = node.body;
					let this1 = this.overloads;
					let key = this.compileArgs(args, pos2);
					this1.inst.set(key, body2);
					break
				default:
				if (node._hx_index != 16) {
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.format("Unexpected node type: " + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(node), _Reflect_js__WEBPACK_IMPORTED_MODULE_22__.Reflect.field(node, "pos")));
				};
				
			};
		};
	}
	inject(context, into) {
		this.hasBeenUsed = true;
		let defs = [];
		if (this.loadBlock != null && this.loadBlock.length > 0) {
			let pos = this.loadBlock[0].pos;
			defs.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_10__.AstNode.FunctionDef(pos, "load", this.loadBlock, "load"));
		};
		if (this.tickBlock != null && this.tickBlock.length > 0) {
			let pos = this.tickBlock[0].pos;
			defs.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_10__.AstNode.FunctionDef(pos, "tick", this.tickBlock, "tick"));
		};
		if (defs.length > 0) {
			let pos = defs[0].pos;
			let info = context.compiler.getInitialPathInfo(this.file.name);
			let tmp = {"append": function (v) {
				throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("tried to append to a Void context (template virtual context)", pos, context));
			}, "namespace": info.namespace, "path": info.path, "uidIndex": context.uidIndex, "variables": new VariableMap(context.globalVariables), "templates": this.file.templates, "stack": context.stack, "replacements": new VariableMap(null), "isTemplate": false, "requireTemplateKeyword": true, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
			let tmp1 = _AstNode_js__WEBPACK_IMPORTED_MODULE_10__.AstNode.Directory(pos, this.name, defs);
			into.embed(tmp, pos, new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap(), [tmp1], true);
		};
	}
	process(file, context, pos, value, extras) {
		let argstring = _StringTools_js__WEBPACK_IMPORTED_MODULE_20__.StringTools.ltrim(value.substring(this.name.length));
		this.jsValueCache.clear();
		_args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__.TemplateArgument.jsCache = this.jsValueCache;
		let map = this.overloads;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let types = _g_key;
			let overloadBody = _g_value;
			let args = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
			let successCount = 0;
			let pidx = 0;
			let argList = [argstring].concat((extras == null) ? [] : extras);
			let lastEntryWasBlock = false;
			let jsCacheIdx = 0;
			let _g = 0;
			while (_g < types.length) {
				let arg = types[_g];
				++_g;
				while (pidx < argList.length && argList[pidx] == "") ++pidx;
				if (pidx >= argList.length) {
					break;
				};
				if (arg.expectBlock) {
					if (!_Type_js__WEBPACK_IMPORTED_MODULE_19__.Type.enumEq(_Type_js__WEBPACK_IMPORTED_MODULE_19__.Type["typeof"](argList[pidx]), _Type_js__WEBPACK_IMPORTED_MODULE_19__.ValueType.TEnum(_AstNode_js__WEBPACK_IMPORTED_MODULE_10__.AstNode))) {
						break;
					};
					let x = arg.parseValueBlock(argList[pidx], pos, context);
					if (!x.success) {
						break;
					};
					lastEntryWasBlock = true;
					args.inst.set(arg.name, x.value);
					argList[pidx] = x.raw;
					++successCount;
					++pidx;
				} else {
					if (typeof(argList[pidx]) != "string") {
						break;
					};
					let s = argList[pidx];
					let jsBlockRaw = null;
					if (s.charAt(0) == "<" && s.charAt(1) == "%" && !arg.expectJsValue) {
						let end = s.indexOf("%>");
						if (end == -1) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected end of inline script block", pos, context));
						};
						let script = s.substring(2, end);
						jsBlockRaw = script;
						if (this.jsValueCache.inst.has(jsCacheIdx)) {
							let jsVal = this.jsValueCache.inst.get(jsCacheIdx);
							s = (jsVal == null) ? "null" : _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(jsVal);
						} else {
							let jsVal = McFile.invokeExpressionInline(script, context, pos);
							this.jsValueCache.inst.set(jsCacheIdx, jsVal);
							s = (jsVal == null) ? "null" : _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(jsVal);
						};
						++jsCacheIdx;
					} else if (arg.expectJsValue) {
						_args_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_3__.TemplateArgument.jsCacheIdx = jsCacheIdx;
						++jsCacheIdx;
					};
					let x = arg.parseValue(s, pos, context);
					if (!x.success) {
						break;
					};
					if (arg.name != null) {
						args.inst.set(arg.name, x.value);
					};
					if (jsBlockRaw != null) {
						argList[pidx] = _StringTools_js__WEBPACK_IMPORTED_MODULE_20__.StringTools.ltrim((_js_Boot_js__WEBPACK_IMPORTED_MODULE_11__.Boot.__cast(argList[pidx], String)).substring(jsBlockRaw.length + 4));
					} else {
						argList[pidx] = _StringTools_js__WEBPACK_IMPORTED_MODULE_20__.StringTools.ltrim((_js_Boot_js__WEBPACK_IMPORTED_MODULE_11__.Boot.__cast(argList[pidx], String)).substring(x.raw.length));
					};
					++successCount;
					lastEntryWasBlock = false;
				};
			};
			while (pidx < argList.length && argList[pidx] == "") ++pidx;
			if (successCount != types.length || pidx != argList.length || argList[pidx - 1] != "" && !lastEntryWasBlock) {
				continue;
			};
			if (!this.hasBeenUsed) {
				this.inject(context, file);
			};
			let newContext = {"append": context.append, "namespace": context.namespace, "path": context.path, "uidIndex": context.uidIndex, "variables": context.variables, "templates": this.file.templates, "stack": context.stack, "replacements": context.replacements, "isTemplate": false, "requireTemplateKeyword": true, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
			file.embed(newContext, pos, args, overloadBody);
			return;
		};
		throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("Failed to find matching template overload for: " + value);
	}
	static get __name__() {
		return "mcl.McTemplate"
	}
	get __class__() {
		return McTemplate
	}
}


const VariableMap = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl.VariableMap"] = 
class VariableMap extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.inherits() {
	new(parent, variables) {
		this.parent = parent;
		this.variables = (variables == null) ? new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap() : variables;
	}
	get() {
		if (this._cache != null) {
			let _g = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
			let map = this._cache;
			let _g_map = map;
			let _g_keys = map.keys();
			while (_g_keys.hasNext()) {
				let key = _g_keys.next();
				let _g_value = _g_map.get(key);
				let _g_key = key;
				let k = _g_key;
				let v = _g_value;
				_g.inst.set(k, v);
			};
			return _g;
		};
		let res = (this.parent == null) ? new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap() : this.parent.get();
		let map = this.variables;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			res.inst.set(k, v);
		};
		this._cache = res;
		return res;
	}
	static fromObject(obj) {
		let res = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		let _g = 0;
		let _g1 = _Reflect_js__WEBPACK_IMPORTED_MODULE_22__.Reflect.fields(obj);
		while (_g < _g1.length) {
			let k = _g1[_g];
			++_g;
			res.inst.set(k, _Reflect_js__WEBPACK_IMPORTED_MODULE_22__.Reflect.field(obj, k));
		};
		return new VariableMap(null, res);
	}
	static get __name__() {
		return "mcl.VariableMap"
	}
	get __class__() {
		return VariableMap
	}
}


_genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.createStatic(VariableMap, "globals", function () { return new VariableMap(null, _Globals_js__WEBPACK_IMPORTED_MODULE_8__.Globals.map) })
const ImportFileType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxEnums")["mcl.ImportFileType"] = 
{
	__ename__: "mcl.ImportFileType",
	
	IMcFile: Object.assign((f) => ({_hx_index: 0, __enum__: "mcl.ImportFileType", "f": f, "@kind": "IMcFile"}), {_hx_name: "IMcFile", __params__: ["f"]}),
	IJsFile: Object.assign((f) => ({_hx_index: 1, __enum__: "mcl.ImportFileType", "f": f, "@kind": "IJsFile"}), {_hx_name: "IJsFile", __params__: ["f"]})
}
ImportFileType.__constructs__ = [ImportFileType.IMcFile, ImportFileType.IJsFile]
ImportFileType.__empty_constructs__ = []

const McFile = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl.McFile"] = 
class McFile extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.inherits() {
	new(name, ast) {
		this.fileJs = {};
		this.tickCommands = [];
		this.loadCommands = [];
		this.imports = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		this.exportedTemplates = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		this.templates = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		this.ast = [];
		this.name = name;
		this.ast = ast;
		this.ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.extension(name);
	}
	getTemplates() {
		if (this.ext == "mcbt") {
			return this.exportedTemplates;
		};
		throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("tried to get templates from non-template file:" + this.name);
	}
	setup(compiler) {
		let ast = this.ast;
		this.ast = [];
		let _g = 0;
		while (_g < ast.length) {
			let node = ast[_g];
			++_g;
			switch (node._hx_index) {
				case 2:
					let _g1 = node.pos;
					let name = node.name;
					let body = node.body;
					let template = new McTemplate(name, body, this);
					this.templates.inst.set(name, template);
					this.exportedTemplates.inst.set(name, template);
					break
				case 4:
					let _g2 = node.pos;
					let importName = node.name;
					let res = compiler.resolve(this.name, importName);
					switch (res._hx_index) {
						case 0:
							let f = res.f;
							this.imports.inst.set(importName, f);
							break
						case 1:
							let f1 = res.f;
							Object.assign(this.fileJs, f1);;
							break
						
					};
					break
				case 15:
					let _g3 = node.pos;
					let _g4 = node.value;
					break
				default:
				this.ast.push(node);
				
			};
		};
		let dep = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_17__.EsMap.adaptIterator(this.imports.inst.values());
		while (dep.hasNext()) {
			let dep1 = dep.next();
			let importedTemplates = dep1.getTemplates();
			let map = importedTemplates;
			let _g_map = map;
			let _g_keys = map.keys();
			while (_g_keys.hasNext()) {
				let key = _g_keys.next();
				let _g_value = _g_map.get(key);
				let _g_key = key;
				let k = _g_key;
				let v = _g_value;
				this.templates.inst.set(k, v);
			};
		};
	}
	createAnonymousFunction(pos, body, data, context, name, isMacro) {
		let commands = [];
		let uid = (name == null) ? _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get()) : "";
		let id = (name == null) ? "" + context.compiler.config.generatedDirName + "/" + uid : name;
		let callSig = context.namespace + ":" + context.path.concat((name == null) ? [context.compiler.config.generatedDirName, uid] : [name]).join("/");
		let namespace = context.namespace;
		let _this = context.variables;
		let variables = null;
		let variableMap = (variables == null) ? _this : new VariableMap(_this, variables);
		let path = context.path.concat([context.compiler.config.generatedDirName]);
		let uidIndex = context.uidIndex;
		let stack = context.stack;
		let replacements = context.variables;
		let templates = context.templates;
		let requireTemplateKeyword = context.requireTemplateKeyword;
		let compiler = context.compiler;
		let globalVariables = context.globalVariables;
		let functions = context.functions.concat([callSig]);
		let newContext = {"append": function (v) {
			commands.push(v);
		}, "namespace": namespace, "path": (path == null) ? [] : path, "uidIndex": uidIndex, "variables": variableMap, "stack": stack, "replacements": replacements, "isTemplate": this.ext == "mcbt", "templates": templates, "requireTemplateKeyword": requireTemplateKeyword, "compiler": compiler, "globalVariables": globalVariables, "functions": functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
		let _g = 0;
		while (_g < body.length) {
			let node = body[_g];
			++_g;
			this.compileCommand(node, newContext);
		};
		let result = commands.join("\n");
		if (name != null) {
			name = this.injectValues(name, context, pos);
		};
		let path1 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([id + ".mcfunction"])));
		let content = result;
		if (context.compiler.config.header.length > 0 && path1.endsWith(".mcfunction")) {
			content = context.compiler.config.header + "\n" + content;
		};
		context.compiler.io.write(path1, content);
		let cmd = "function " + context.namespace + ":" + context.path.concat([id]).join("/");
		return "" + ((isMacro) ? "$" : "") + (cmd + ((data == null) ? "" : " " + data));
	}
	embed(context, pos, varmap, body, useTld) {
		if (useTld == null) {
			useTld = false;
		};
		let namespace = context.namespace;
		let append = context.append;
		let _this = context.globalVariables;
		let variableMap = new VariableMap(VariableMap.globals, ((varmap == null) ? _this : new VariableMap(_this, varmap)).get());
		let path = context.path;
		let newContext = {"append": append, "namespace": namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": variableMap, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
		let _g = 0;
		while (_g < body.length) {
			let node = body[_g];
			++_g;
			if (useTld) {
				this.compileTld(node, newContext);
			} else {
				this.compileCommand(node, newContext);
			};
		};
	}
	processTemplate(context, pos, value, extras, isMacro) {
		let v = value;
		if ("t" == v.charAt(0) && "e" == v.charAt(1) && "m" == v.charAt(2) && "p" == v.charAt(3) && "l" == v.charAt(4) && "a" == v.charAt(5) && "t" == v.charAt(6) && "e" == v.charAt(7) && " " == v.charAt(8)) {
			value = value.substring(9);
		};
		let map = context.templates;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			if (value == k || value.startsWith(k)) {
				v.process(this, context, pos, value, extras);
				return;
			};
		};
		if (extras != null && extras.length > 0) {
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected extra data in non template command", pos, context));
		};
		let cmd = this.injectValues(value, context, pos);
		context.append("" + ((isMacro) ? "$" : "") + cmd);
	}
	compileInline(context, code) {
		let tokens = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.Tokenizer.tokenize(code, "<inline " + this.name + ">");
		let tokenInput = new _Parser_js__WEBPACK_IMPORTED_MODULE_6__.ArrayInput(tokens);
		let astNodes = [];
		while (tokenInput.hasNext()) astNodes.push(_Parser_js__WEBPACK_IMPORTED_MODULE_6__.Parser.innerParse(tokenInput));
		let _g = 0;
		while (_g < astNodes.length) {
			let node = astNodes[_g];
			++_g;
			this.compileCommand(node, context);
		};
	}
	processMlScript(context, pos, tokens) {
		let str = "";
		let _g = 0;
		while (_g < tokens.length) {
			let t = tokens[_g];
			++_g;
			switch (t._hx_index) {
				case 0:
					let v = t.v;
					let pos = t.pos;
					str += v + "\n";
					break
				case 1:
					let pos1 = t.pos;
					let data = t.data;
					str += "{" + data;
					break
				case 2:
					let pos2 = t.pos;
					str += "}";
					break
				
			};
		};
		let names = ["emit", "context", "embed", "require"];
		let emit = function (c) {
			context.append(c);
		};
		let _gthis = this;
		let emitMcb = function (code) {
			_gthis.compileInline(context, code);
		};
		let emitBlock = function (commands, data) {
			let id = "" + context.compiler.config.generatedDirName + "/" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
			let path = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([id + ".mcfunction"])));
			let content = commands.join("\n");
			if (context.compiler.config.header.length > 0 && path.endsWith(".mcfunction")) {
				content = context.compiler.config.header + "\n" + content;
			};
			context.compiler.io.write(path, content);
			let signature = "" + context.namespace + ":" + context.path.concat([id]).join("/");
			context.append("function " + signature + ((data == null) ? "" : " " + data));
			return signature;
		};
		emit.mcb = emitMcb;
		emit.block = emitBlock;
		let values = [emit, context, function (v) {
			return v.embedTo(context, pos, _gthis);
		}, (context.compiler.disableRequire) ? function (s) {
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("Require not available as it has been disabled, please disable compiler.disableRequire");
		} : module__WEBPACK_IMPORTED_MODULE_0__.createRequire(this.name)];
		let jsEnv = context.variables.get();
		let map = jsEnv;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			names.push(k);
			values.push(v);
		};
		try {
			new Function(...names,str)(...values);
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.caught(_g);
			if (((e) instanceof _error_McbError_js__WEBPACK_IMPORTED_MODULE_1__.McbError)) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.thrown(e);
			} else {
				throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Error in multi-line script, '" + e.get_message() + "' at " + pos.file + ":" + pos.line + ":" + (pos.col + 1), pos, context));
			};
		};
	}
	compileCommand(node, context) {
		let _gthis = this;
		switch (node._hx_index) {
			case 0:
				let pos = node.pos;
				let value = node.value;
				let extras = node.continuations;
				let isMacro = node.isMacro;
				this.processTemplate(context, pos, value, extras, isMacro);
				break
			case 5:
				let pos1 = node.pos;
				let expression = node.expression;
				let as = node.as;
				let body = node.body;
				this.processCompilerLoop(expression, as, context, body, pos1, function (context, v) {
					_gthis.compileCommand(v, context);
				});
				break
			case 6:
				let pos2 = node.pos;
				let expression1 = node.expression;
				let body1 = node.body;
				let elseExpressions = node.elseExpressions;
				this.compileTimeIf(expression1, body1, elseExpressions, pos2, context, function (v) {
					_gthis.compileCommand(v, context);
				});
				break
			case 7:
				let pos3 = node.pos;
				let value1 = node.value;
				this.processMlScript(context, pos3, value1);
				break
			case 8:
				let _g = node.pos;
				let _g1 = node.name;
				let _g2 = node.body;
				let _g3 = node.data;
				let _g4 = node.isMacro;
				let _g5 = node.isInline;
				if (_g1 == null) {
					let pos = _g;
					let body = _g2;
					let data = _g3;
					let isMacro = _g4;
					let isInline = _g5;
					if (isInline) {
						if (data != null) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Inline block cannot have data", pos, context));
						} else {
							let _g = 0;
							while (_g < body.length) {
								let node = body[_g];
								++_g;
								this.compileCommand(node, context);
							};
						};
					} else {
						let context1 = context;
						let tmp = this.createAnonymousFunction(pos, body, data, context, null, isMacro);
						context1.append(tmp);
					};
				} else if (_g1 == "") {
					let pos = _g;
					let body = _g2;
					let data = _g3;
					let isMacro = _g4;
					let isInline = _g5;
					if (isInline) {
						if (data != null) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Inline block cannot have data", pos, context));
						} else {
							let _g = 0;
							while (_g < body.length) {
								let node = body[_g];
								++_g;
								this.compileCommand(node, context);
							};
						};
					} else {
						let context1 = context;
						let tmp = this.createAnonymousFunction(pos, body, data, context, null, isMacro);
						context1.append(tmp);
					};
				} else {
					let name = _g1;
					let pos = _g;
					let body = _g2;
					let data = _g3;
					let isMacro = _g4;
					let isInline = _g5;
					if (isInline) {
						if (data != null) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Inline block cannot have data", pos, context));
						} else {
							let _g = 0;
							while (_g < body.length) {
								let node = body[_g];
								++_g;
								this.compileCommand(node, context);
							};
						};
					} else {
						let context1 = context;
						let tmp = this.createAnonymousFunction(pos, body, data, context, name, isMacro);
						context1.append(tmp);
					};
				};
				break
			case 9:
				let pos4 = node.pos;
				let body2 = node.body;
				let functions = context.functions.concat([null]);
				let path = context.path;
				let newContext = {"append": function (v) {
					_gthis.tickCommands.push(v);
				}, "namespace": context.namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				let _g6 = 0;
				while (_g6 < body2.length) {
					let node = body2[_g6];
					++_g6;
					this.compileCommand(node, newContext);
				};
				break
			case 10:
				let pos5 = node.pos;
				let body3 = node.body;
				let functions1 = context.functions.concat([null]);
				let path1 = context.path;
				let newContext1 = {"append": function (v) {
					_gthis.loadCommands.push(v);
				}, "namespace": context.namespace, "path": (path1 == null) ? [] : path1, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions1, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				let _g7 = 0;
				while (_g7 < body3.length) {
					let node = body3[_g7];
					++_g7;
					this.compileCommand(node, newContext1);
				};
				break
			case 11:
				let pos6 = node.pos;
				let execute = node.execute;
				let data = node.data;
				let body4 = node.body;
				let continuations = node.continuations;
				let isMacro1 = node.isMacro;
				let commands = [];
				let append = function (command) {
					commands.push(command);
				};
				let uid = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
				let callSignature = "" + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, uid]).join("/");
				let functions2 = context.functions.concat([callSignature]);
				let path2 = context.path;
				let newContext2 = {"append": append, "namespace": context.namespace, "path": (path2 == null) ? [] : path2, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions2, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				if (continuations != null) {
					context.append("scoreboard players set #ifelse " + context.compiler.config.internalScoreboardName + " 0");
					newContext2.append("scoreboard players set #ifelse " + context.compiler.config.internalScoreboardName + " 1");
				};
				let _g8 = 0;
				while (_g8 < body4.length) {
					let node = body4[_g8];
					++_g8;
					this.compileCommand(node, newContext2);
				};
				let result = commands.join("\n");
				let path3 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, uid + ".mcfunction"])));
				let content = result;
				if (context.compiler.config.header.length > 0 && path3.endsWith(".mcfunction")) {
					content = context.compiler.config.header + "\n" + content;
				};
				context.compiler.io.write(path3, content);
				let context1 = context;
				let tmp = this.injectValues("" + ((isMacro1) ? "$" : "") + ("" + execute + " function " + callSignature + ((data == null) ? "" : " " + data)), context, pos6);
				context1.append(tmp);
				if (continuations != null) {
					let idx = 0;
					let _g = 0;
					while (_g < continuations.length) {
						let continuation = continuations[_g];
						++_g;
						let isDone = idx == continuations.length - 1;
						switch (continuation._hx_index) {
							case 8:
								let _g1 = continuation.pos;
								let _g2 = continuation.name;
								let _g3 = continuation.isInline;
								let body = continuation.body;
								let data = continuation.data;
								let isMacro2 = continuation.isMacro;
								let embedCommands = ["scoreboard players set #ifelse " + context.compiler.config.internalScoreboardName + " 1"];
								if (!isDone) {
									throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("block continuation must be the last continuation", true);
								};
								let appendEmbed = function (command) {
									embedCommands.push(command);
								};
								let id = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
								let callSignature = "" + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, id]).join("/");
								let functions = context.functions.concat([callSignature]);
								let path = context.path;
								let embedContext = {"append": appendEmbed, "namespace": context.namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
								let _g4 = 0;
								while (_g4 < body.length) {
									let node = body[_g4];
									++_g4;
									this.compileCommand(node, embedContext);
								};
								let result = embedCommands.join("\n");
								let path1 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, id + ".mcfunction"])));
								let content = result;
								if (context.compiler.config.header.length > 0 && path1.endsWith(".mcfunction")) {
									content = context.compiler.config.header + "\n" + content;
								};
								context.compiler.io.write(path1, content);
								let context1 = context;
								let cmd = "execute if score #ifelse " + context.compiler.config.internalScoreboardName + " matches 0 run function " + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, id]).join("/");
								context1.append("" + ((isMacro2) ? "$" : "") + (cmd + ((data == null) ? "" : " " + data)));
								break
							case 11:
								let _g5 = continuation.continuations;
								let pos = continuation.pos;
								let execute = continuation.execute;
								let data1 = continuation.data;
								let body1 = continuation.body;
								let isMacro21 = continuation.isMacro;
								let embedCommands1 = ["scoreboard players set #ifelse " + context.compiler.config.internalScoreboardName + " 1"];
								let embedAppend = function (command) {
									embedCommands1.push(command);
								};
								let id1 = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
								let callSignature1 = "" + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, id1]).join("/");
								let functions1 = context.functions.concat([callSignature1]);
								let path2 = context.path;
								let embedContext1 = {"append": embedAppend, "namespace": context.namespace, "path": (path2 == null) ? [] : path2, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions1, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
								let _g6 = 0;
								while (_g6 < body1.length) {
									let node = body1[_g6];
									++_g6;
									this.compileCommand(node, embedContext1);
								};
								let result1 = embedCommands1.join("\n");
								let path3 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, id1 + ".mcfunction"])));
								let content1 = result1;
								if (context.compiler.config.header.length > 0 && path3.endsWith(".mcfunction")) {
									content1 = context.compiler.config.header + "\n" + content1;
								};
								context.compiler.io.write(path3, content1);
								let v = execute;
								let executeCommandArgs = ("e" == v.charAt(0) && "x" == v.charAt(1) && "e" == v.charAt(2) && "c" == v.charAt(3) && "u" == v.charAt(4) && "t" == v.charAt(5) && "e" == v.charAt(6) && " " == v.charAt(7)) ? execute.substring(8) : execute;
								let context2 = context;
								let cmd1 = "execute if score #ifelse " + context.compiler.config.internalScoreboardName + " matches 0 " + executeCommandArgs + " function " + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, id1]).join("/");
								context2.append("" + ((isMacro21) ? "$" : "") + (cmd1 + ((data1 == null) ? "" : " " + data1)));
								break
							default:
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected continuation type: " + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(continuation), continuation.pos, newContext2));
							
						};
						++idx;
					};
				};
				break
			case 12:
				let pos7 = node.pos;
				let delay = node.delay;
				let type = node.type;
				let body5 = node.body;
				let isMacro2 = node.isMacro;
				let commands1 = [];
				let append1 = function (command) {
					commands1.push(command);
				};
				let uid1 = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
				let callSignature1 = "" + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, uid1]).join("/");
				let functions3 = context.functions.concat([callSignature1]);
				let path4 = context.path;
				let newContext3 = {"append": append1, "namespace": context.namespace, "path": (path4 == null) ? [] : path4, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions3, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				let _g9 = 0;
				while (_g9 < body5.length) {
					let node = body5[_g9];
					++_g9;
					this.compileCommand(node, newContext3);
				};
				let result1 = commands1.join("\n");
				let id = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
				let path5 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, id + ".mcfunction"])));
				let content1 = result1;
				if (context.compiler.config.header.length > 0 && path5.endsWith(".mcfunction")) {
					content1 = context.compiler.config.header + "\n" + content1;
				};
				context.compiler.io.write(path5, content1);
				let context2 = context;
				let cmd = "schedule function " + context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, id]).join("/") + " " + delay + " " + type;
				context2.append("" + ((isMacro2) ? "$" : "") + cmd);
				break
			case 15:
				let _g10 = node.pos;
				let value2 = node.value;
				context.append(value2);
				break
			case 19:
				let pos8 = node.pos;
				let command = node.command;
				let value3 = node.value;
				let isMacro3 = node.isMacro;
				let commands2 = [];
				let path6 = context.path;
				let newContext4 = {"append": function (v) {
					commands2.push(v);
				}, "namespace": context.namespace, "path": (path6 == null) ? [] : path6, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				this.compileCommand(value3, newContext4);
				if (commands2.length != 1) {
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Expected exactly 1 command after execute, got " + commands2.length, pos8, context));
				};
				let context3 = context;
				let tmp1 = this.injectValues("" + ((isMacro3) ? "$" : "") + ("" + command + " " + commands2[0]), context, pos8);
				context3.append(tmp1);
				break
			case 20:
				let pos9 = node.pos;
				let name = node.name;
				let data1 = node.data;
				let isMacro4 = node.isMacro;
				name = this.injectValues(name, context, pos9);
				let tagPrefix = (name.charAt(0) == "#") ? "#" : "";
				if (tagPrefix != "") {
					name = name.substring(1);
				};
				switch (name.charAt(0)) {
					case "*":
						let context4 = context;
						let tmp2 = this.injectValues("" + ((isMacro4) ? "$" : "") + ("function " + tagPrefix + context.namespace + ":" + name.substring(1) + ((data1.length == 0) ? "" : " " + data1)), context, pos9);
						context4.append(tmp2);
						break
					case ".":
						if (name.charAt(1) == "/" || name.charAt(1) == "." && name.charAt(2) == "/") {
							let path = context.currentFunction.concat(name.split("/"));
							let resolved = [];
							let _g = 0;
							while (_g < path.length) {
								let node = path[_g];
								++_g;
								switch (node) {
									case "":case ".":
										break
									case "..":
										if (resolved.length == 0) {
											throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Invalid function call: " + name, pos9, context));
										};
										resolved.pop();
										break
									default:
									resolved.push(node);
									
								};
							};
							let context1 = context;
							let cmd = this.injectValues("function " + tagPrefix + context.namespace + ":" + resolved.join("/") + ((data1.length == 0) ? "" : " " + data1), context, pos9);
							context1.append("" + ((isMacro4) ? "$" : "") + cmd);
						} else {
							let context1 = context;
							let cmd = this.injectValues("function " + tagPrefix + name + ((data1.length == 0) ? "" : " " + data1), context, pos9);
							context1.append("" + ((isMacro4) ? "$" : "") + cmd);
						};
						break
					case "^":
						let levels = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.parseInt(name.substring(1));
						let fn = context.functions[context.functions.length - levels - 1];
						if (fn == null) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected function call: " + name, pos9, context));
						};
						let context5 = context;
						let tmp3 = this.injectValues("" + ((isMacro4) ? "$" : "") + ("function " + tagPrefix + fn + ((data1.length == 0) ? "" : " " + data1)), context, pos9);
						context5.append(tmp3);
						break
					default:
					let context6 = context;
					let cmd1 = this.injectValues("function " + tagPrefix + name + ((data1.length == 0) ? "" : " " + data1), context, pos9);
					context6.append("" + ((isMacro4) ? "$" : "") + cmd1);
					
				};
				break
			case 21:
				let pos10 = node.pos;
				let command1 = node.command;
				let res = _McMath_js__WEBPACK_IMPORTED_MODULE_7__.McMath.compile(command1, context);
				context.append(res.commands);
				let addScoreboardCommand = "scoreboard objectives add " + context.compiler.config.eqConstScoreboardName + " dummy";
				if (!this.loadCommands.includes(addScoreboardCommand)) {
					this.loadCommands.push(addScoreboardCommand);
				};
				addScoreboardCommand = "scoreboard objectives add " + context.compiler.config.eqVarScoreboardName + " dummy";
				if (!this.loadCommands.includes(addScoreboardCommand)) {
					this.loadCommands.push(addScoreboardCommand);
				};
				let _g11 = 0;
				let _g12 = res.constants;
				while (_g11 < _g12.length) {
					let k = _g12[_g11];
					++_g11;
					let cmd = "scoreboard players set " + k + " " + context.compiler.config.eqConstScoreboardName + " " + k;
					if (!this.loadCommands.includes(cmd)) {
						this.loadCommands.push(cmd);
					};
				};
				break
			case 22:
				let pos11 = node.pos;
				let delay1 = node.delay;
				let name1 = node.target;
				let mode = node.mode;
				let isMacro5 = node.isMacro;
				let tagPrefix1 = (name1.charAt(0) == "#") ? "#" : "";
				if (tagPrefix1 != "") {
					name1 = name1.substring(1);
				};
				switch (name1.charAt(0)) {
					case "*":
						let context7 = context;
						let tmp4 = this.injectValues("" + ((isMacro5) ? "$" : "") + ("schedule function " + tagPrefix1 + context.namespace + ":" + name1.substring(1) + " " + delay1 + " " + mode), context, pos11);
						context7.append(tmp4);
						break
					case ".":
						if (name1.charAt(1) == "/" || name1.charAt(1) == "." && name1.charAt(2) == "/") {
							let path = context.currentFunction.concat(name1.split("/"));
							let resolved = [];
							let _g = 0;
							while (_g < path.length) {
								let node = path[_g];
								++_g;
								switch (node) {
									case "":case ".":
										break
									case "..":
										if (resolved.length == 0) {
											throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Invalid schedule call: " + name1, pos11, context));
										};
										resolved.pop();
										break
									default:
									resolved.push(node);
									
								};
							};
							let context1 = context;
							let cmd = "schedule function " + tagPrefix1 + context.namespace + ":" + resolved.join("/") + " " + delay1 + " " + mode;
							let tmp = this.injectValues("" + ((isMacro5) ? "$" : "") + cmd, context, pos11);
							context1.append(tmp);
						} else {
							let context1 = context;
							let tmp = this.injectValues("" + ((isMacro5) ? "$" : "") + ("schedule function " + tagPrefix1 + name1 + " " + delay1 + " " + mode), context, pos11);
							context1.append(tmp);
						};
						break
					case "^":
						let levels1 = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.parseInt(name1.substring(1));
						let fn1 = context.functions[context.functions.length - levels1 - 1];
						if (fn1 == null) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected schedule call: " + name1, pos11, context));
						};
						let context8 = context;
						let tmp5 = this.injectValues("" + ((isMacro5) ? "$" : "") + ("schedule function " + tagPrefix1 + fn1 + " " + delay1 + " " + mode), context, pos11);
						context8.append(tmp5);
						break
					default:
					let context9 = context;
					let tmp6 = this.injectValues("" + ((isMacro5) ? "$" : "") + ("schedule function " + tagPrefix1 + name1 + " " + delay1 + " " + mode), context, pos11);
					context9.append(tmp6);
					
				};
				break
			case 23:
				let pos12 = node.pos;
				let value4 = node.value;
				let isMacro6 = node.isMacro;
				let content2 = [];
				let path7 = context.path;
				let newContext5 = {"append": function (v) {
					content2.push(v);
				}, "namespace": context.namespace, "path": (path7 == null) ? [] : path7, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				this.compileCommand(value4, newContext5);
				if (content2.length != 1) {
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Expected exactly 1 command after return run, got " + content2.length, pos12, context));
				};
				context.append("" + ((isMacro6) ? "$" : "") + ("return run " + content2[0]));
				break
			default:
			debugger;
			console.log("src/mcl/Compiler.hx:828:",_Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(node));
			
		};
	}
	compileFunction(pos, name, body, appendTo, context) {
		name = this.injectValues(name, context, pos);
		let commands = [];
		let append = function (command) {
			commands.push(command);
		};
		let funcId = context.namespace + ":" + context.path.concat([name]).join("/");
		let functions = context.functions.concat([funcId]);
		let path = context.path;
		let newContext = {"append": append, "namespace": context.namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
		newContext.currentFunction = context.path;
		let _g = 0;
		while (_g < body.length) {
			let node = body[_g];
			++_g;
			this.compileCommand(node, newContext);
		};
		if (appendTo != null) {
			if (appendTo == "load") {
				context.compiler.tags.addLoadingCommand(funcId);
			} else if (appendTo == "tick") {
				context.compiler.tags.addTickingCommand(funcId);
			} else {
				throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected appendTo value: " + appendTo, true);
			};
		};
		let path1 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([name + ".mcfunction"])));
		let content = commands.join("\n");
		if (context.compiler.config.header.length > 0 && path1.endsWith(".mcfunction")) {
			content = context.compiler.config.header + "\n" + content;
		};
		context.compiler.io.write(path1, content);
	}
	compileDirectory(pos, name, body, context) {
		name = this.injectValues(name, context, pos);
		let namespace = context.namespace;
		let variableMap = context.variables;
		let path = context.path.concat([name]);
		let uidIndex = new UidTracker();
		let newContext = {"append": function (v) {
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("append not available for directory context", true);
		}, "namespace": namespace, "path": (path == null) ? [] : path, "uidIndex": uidIndex, "variables": variableMap, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
		let _g = 0;
		while (_g < body.length) {
			let node = body[_g];
			++_g;
			this.compileTld(node, newContext);
		};
	}
	compileTld(node, context) {
		let _gthis = this;
		switch (node._hx_index) {
			case 1:
				let pos = node.pos;
				let name = node.name;
				let body = node.body;
				let appendTo = node.appendTo;
				if (!context.isTemplate) {
					this.compileFunction(pos, name, body, appendTo, context);
				} else {
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected node type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(node), true);
				};
				break
			case 3:
				let pos1 = node.pos;
				let name1 = node.name;
				let body1 = node.body;
				this.compileDirectory(pos1, name1, body1, context);
				break
			case 5:
				let pos2 = node.pos;
				let expression = node.expression;
				let as = node.as;
				let body2 = node.body;
				this.processCompilerLoop(expression, as, context, body2, pos2, function (context, v) {
					_gthis.compileTld(v, context);
				});
				break
			case 6:
				let pos3 = node.pos;
				let expression1 = node.expression;
				let body3 = node.body;
				let elseExpressions = node.elseExpressions;
				this.compileTimeIf(expression1, body3, elseExpressions, pos3, context, function (v) {
					_gthis.compileTld(v, context);
				});
				break
			case 15:
				let _g = node.pos;
				let _g1 = node.value;
				break
			case 16:
				let pos4 = node.pos;
				let name2 = node.name;
				let info = node.info;
				this.compileJsonFile(pos4, name2, info, context);
				break
			case 18:
				let pos5 = node.pos;
				let name3 = node.name;
				let time = node.time;
				let body4 = node.body;
				let commands = [];
				let path = context.path;
				let newContext = {"append": function (v) {
					commands.push(v);
				}, "namespace": context.namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				let id = _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(context.uidIndex.get());
				let path1 = ((name3 == null) ? context.path.concat([context.compiler.config.generatedDirName, "" + id]) : context.path.concat([name3])).join("/");
				let functionId = context.namespace + ":" + path1;
				commands.push("schedule function " + functionId + " " + time + " replace");
				let _g2 = 0;
				while (_g2 < body4.length) {
					let node = body4[_g2];
					++_g2;
					this.compileCommand(node, newContext);
				};
				let result = commands.join("\n");
				let path2 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions", "" + path1 + ".mcfunction"]);
				let content = result;
				if (context.compiler.config.header.length > 0 && path2.endsWith(".mcfunction")) {
					content = context.compiler.config.header + "\n" + content;
				};
				context.compiler.io.write(path2, content);
				context.compiler.tags.addLoadingCommand(functionId);
				break
			default:
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected node type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(node), true);
			
		};
	}
	compileJsonFile(pos, name, info, context) {
		switch (info._hx_index) {
			case 0:
				let subType = info.subType;
				let replace = info.replace;
				let entries = info.entries;
				let _g = [];
				let _g1 = 0;
				while (_g1 < entries.length) {
					let e = entries[_g1];
					++_g1;
					let data;
					switch (e._hx_index) {
						case 0:
							let _g2 = e.continuations;
							if (_g2 == null) {
								throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected node type in json tag", pos, context));
							} else if (_g2.length == 0) {
								if (e.isMacro == false) {
									let pos = e.pos;
									let value = e.value;
									value = this.injectValues(value, context, pos);
									if (value.indexOf(" ") != -1 && value.endsWith(" replace")) {
										data = {"id": value.substring(0, value.length - 8), "replace": true};
									} else if (value.indexOf(" ") != -1) {
										throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Malformed tag entry", pos, context));
									} else {
										data = value;
									};
								} else {
									throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected node type in json tag", pos, context));
								};
							} else {
								throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected node type in json tag", pos, context));
							};
							break
						case 15:
							let pos1 = e.pos;
							let value = e.value;
							value = this.injectValues(value, context, pos1);
							if (value.indexOf(" ") != -1 && value.endsWith(" replace")) {
								data = {"id": value.substring(0, value.length - 8), "replace": true};
							} else if (value.indexOf(" ") != -1) {
								throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Malformed tag entry", pos1, context));
							} else {
								data = value;
							};
							break
						default:
						throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected node type in json tag", pos, context));
						
					};
					_g.push(data);
				};
				let data = JSON.stringify({"replace": replace, "values": _g});
				let path = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "tags", subType].concat(context.path.concat([name + ".json"])));
				let content = data;
				if (context.compiler.config.header.length > 0 && path.endsWith(".mcfunction")) {
					content = context.compiler.config.header + "\n" + content;
				};
				context.compiler.io.write(path, content);
				break
			case 1:
				let entries1 = info.entries;
				let values = "{" + this.stringifyJsonTag(pos, name, entries1, context) + "}";
				let type;
				switch (info._hx_index) {
					case 1:
						let _g2 = info.entries;
						type = "advancements";
						break
					case 2:
						let _g3 = info.entries;
						type = "item_modifiers";
						break
					case 3:
						let _g4 = info.entries;
						type = "loot_tables";
						break
					case 4:
						let _g5 = info.entries;
						type = "predicates";
						break
					case 5:
						let _g6 = info.entries;
						type = "recipes";
						break
					case 6:
						let _g7 = info.entries;
						type = "chat";
						break
					case 7:
						let _g8 = info.entries;
						type = "damage";
						break
					case 8:
						let _g9 = info.entries;
						type = "dimension";
						break
					case 9:
						let _g10 = info.entries;
						type = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path1 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type].concat(context.path.concat([name + ".json"])));
				let content1 = values;
				if (context.compiler.config.header.length > 0 && path1.endsWith(".mcfunction")) {
					content1 = context.compiler.config.header + "\n" + content1;
				};
				context.compiler.io.write(path1, content1);
				break
			case 2:
				let entries2 = info.entries;
				let values1 = "{" + this.stringifyJsonTag(pos, name, entries2, context) + "}";
				let type1;
				switch (info._hx_index) {
					case 1:
						let _g11 = info.entries;
						type1 = "advancements";
						break
					case 2:
						let _g12 = info.entries;
						type1 = "item_modifiers";
						break
					case 3:
						let _g13 = info.entries;
						type1 = "loot_tables";
						break
					case 4:
						let _g14 = info.entries;
						type1 = "predicates";
						break
					case 5:
						let _g15 = info.entries;
						type1 = "recipes";
						break
					case 6:
						let _g16 = info.entries;
						type1 = "chat";
						break
					case 7:
						let _g17 = info.entries;
						type1 = "damage";
						break
					case 8:
						let _g18 = info.entries;
						type1 = "dimension";
						break
					case 9:
						let _g19 = info.entries;
						type1 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path2 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type1].concat(context.path.concat([name + ".json"])));
				let content2 = values1;
				if (context.compiler.config.header.length > 0 && path2.endsWith(".mcfunction")) {
					content2 = context.compiler.config.header + "\n" + content2;
				};
				context.compiler.io.write(path2, content2);
				break
			case 3:
				let entries3 = info.entries;
				let values2 = "{" + this.stringifyJsonTag(pos, name, entries3, context) + "}";
				let type2;
				switch (info._hx_index) {
					case 1:
						let _g20 = info.entries;
						type2 = "advancements";
						break
					case 2:
						let _g21 = info.entries;
						type2 = "item_modifiers";
						break
					case 3:
						let _g22 = info.entries;
						type2 = "loot_tables";
						break
					case 4:
						let _g23 = info.entries;
						type2 = "predicates";
						break
					case 5:
						let _g24 = info.entries;
						type2 = "recipes";
						break
					case 6:
						let _g25 = info.entries;
						type2 = "chat";
						break
					case 7:
						let _g26 = info.entries;
						type2 = "damage";
						break
					case 8:
						let _g27 = info.entries;
						type2 = "dimension";
						break
					case 9:
						let _g28 = info.entries;
						type2 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path3 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type2].concat(context.path.concat([name + ".json"])));
				let content3 = values2;
				if (context.compiler.config.header.length > 0 && path3.endsWith(".mcfunction")) {
					content3 = context.compiler.config.header + "\n" + content3;
				};
				context.compiler.io.write(path3, content3);
				break
			case 4:
				let entries4 = info.entries;
				let values3 = "{" + this.stringifyJsonTag(pos, name, entries4, context) + "}";
				let type3;
				switch (info._hx_index) {
					case 1:
						let _g29 = info.entries;
						type3 = "advancements";
						break
					case 2:
						let _g30 = info.entries;
						type3 = "item_modifiers";
						break
					case 3:
						let _g31 = info.entries;
						type3 = "loot_tables";
						break
					case 4:
						let _g32 = info.entries;
						type3 = "predicates";
						break
					case 5:
						let _g33 = info.entries;
						type3 = "recipes";
						break
					case 6:
						let _g34 = info.entries;
						type3 = "chat";
						break
					case 7:
						let _g35 = info.entries;
						type3 = "damage";
						break
					case 8:
						let _g36 = info.entries;
						type3 = "dimension";
						break
					case 9:
						let _g37 = info.entries;
						type3 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path4 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type3].concat(context.path.concat([name + ".json"])));
				let content4 = values3;
				if (context.compiler.config.header.length > 0 && path4.endsWith(".mcfunction")) {
					content4 = context.compiler.config.header + "\n" + content4;
				};
				context.compiler.io.write(path4, content4);
				break
			case 5:
				let entries5 = info.entries;
				let values4 = "{" + this.stringifyJsonTag(pos, name, entries5, context) + "}";
				let type4;
				switch (info._hx_index) {
					case 1:
						let _g38 = info.entries;
						type4 = "advancements";
						break
					case 2:
						let _g39 = info.entries;
						type4 = "item_modifiers";
						break
					case 3:
						let _g40 = info.entries;
						type4 = "loot_tables";
						break
					case 4:
						let _g41 = info.entries;
						type4 = "predicates";
						break
					case 5:
						let _g42 = info.entries;
						type4 = "recipes";
						break
					case 6:
						let _g43 = info.entries;
						type4 = "chat";
						break
					case 7:
						let _g44 = info.entries;
						type4 = "damage";
						break
					case 8:
						let _g45 = info.entries;
						type4 = "dimension";
						break
					case 9:
						let _g46 = info.entries;
						type4 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path5 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type4].concat(context.path.concat([name + ".json"])));
				let content5 = values4;
				if (context.compiler.config.header.length > 0 && path5.endsWith(".mcfunction")) {
					content5 = context.compiler.config.header + "\n" + content5;
				};
				context.compiler.io.write(path5, content5);
				break
			case 6:
				let entries6 = info.entries;
				let values5 = "{" + this.stringifyJsonTag(pos, name, entries6, context) + "}";
				let type5;
				switch (info._hx_index) {
					case 1:
						let _g47 = info.entries;
						type5 = "advancements";
						break
					case 2:
						let _g48 = info.entries;
						type5 = "item_modifiers";
						break
					case 3:
						let _g49 = info.entries;
						type5 = "loot_tables";
						break
					case 4:
						let _g50 = info.entries;
						type5 = "predicates";
						break
					case 5:
						let _g51 = info.entries;
						type5 = "recipes";
						break
					case 6:
						let _g52 = info.entries;
						type5 = "chat";
						break
					case 7:
						let _g53 = info.entries;
						type5 = "damage";
						break
					case 8:
						let _g54 = info.entries;
						type5 = "dimension";
						break
					case 9:
						let _g55 = info.entries;
						type5 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path6 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type5].concat(context.path.concat([name + ".json"])));
				let content6 = values5;
				if (context.compiler.config.header.length > 0 && path6.endsWith(".mcfunction")) {
					content6 = context.compiler.config.header + "\n" + content6;
				};
				context.compiler.io.write(path6, content6);
				break
			case 7:
				let entries7 = info.entries;
				let values6 = "{" + this.stringifyJsonTag(pos, name, entries7, context) + "}";
				let type6;
				switch (info._hx_index) {
					case 1:
						let _g56 = info.entries;
						type6 = "advancements";
						break
					case 2:
						let _g57 = info.entries;
						type6 = "item_modifiers";
						break
					case 3:
						let _g58 = info.entries;
						type6 = "loot_tables";
						break
					case 4:
						let _g59 = info.entries;
						type6 = "predicates";
						break
					case 5:
						let _g60 = info.entries;
						type6 = "recipes";
						break
					case 6:
						let _g61 = info.entries;
						type6 = "chat";
						break
					case 7:
						let _g62 = info.entries;
						type6 = "damage";
						break
					case 8:
						let _g63 = info.entries;
						type6 = "dimension";
						break
					case 9:
						let _g64 = info.entries;
						type6 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path7 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type6].concat(context.path.concat([name + ".json"])));
				let content7 = values6;
				if (context.compiler.config.header.length > 0 && path7.endsWith(".mcfunction")) {
					content7 = context.compiler.config.header + "\n" + content7;
				};
				context.compiler.io.write(path7, content7);
				break
			case 8:
				let entries8 = info.entries;
				let values7 = "{" + this.stringifyJsonTag(pos, name, entries8, context) + "}";
				let type7;
				switch (info._hx_index) {
					case 1:
						let _g65 = info.entries;
						type7 = "advancements";
						break
					case 2:
						let _g66 = info.entries;
						type7 = "item_modifiers";
						break
					case 3:
						let _g67 = info.entries;
						type7 = "loot_tables";
						break
					case 4:
						let _g68 = info.entries;
						type7 = "predicates";
						break
					case 5:
						let _g69 = info.entries;
						type7 = "recipes";
						break
					case 6:
						let _g70 = info.entries;
						type7 = "chat";
						break
					case 7:
						let _g71 = info.entries;
						type7 = "damage";
						break
					case 8:
						let _g72 = info.entries;
						type7 = "dimension";
						break
					case 9:
						let _g73 = info.entries;
						type7 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path8 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type7].concat(context.path.concat([name + ".json"])));
				let content8 = values7;
				if (context.compiler.config.header.length > 0 && path8.endsWith(".mcfunction")) {
					content8 = context.compiler.config.header + "\n" + content8;
				};
				context.compiler.io.write(path8, content8);
				break
			case 9:
				let entries9 = info.entries;
				let values8 = "{" + this.stringifyJsonTag(pos, name, entries9, context) + "}";
				let type8;
				switch (info._hx_index) {
					case 1:
						let _g74 = info.entries;
						type8 = "advancements";
						break
					case 2:
						let _g75 = info.entries;
						type8 = "item_modifiers";
						break
					case 3:
						let _g76 = info.entries;
						type8 = "loot_tables";
						break
					case 4:
						let _g77 = info.entries;
						type8 = "predicates";
						break
					case 5:
						let _g78 = info.entries;
						type8 = "recipes";
						break
					case 6:
						let _g79 = info.entries;
						type8 = "chat";
						break
					case 7:
						let _g80 = info.entries;
						type8 = "damage";
						break
					case 8:
						let _g81 = info.entries;
						type8 = "dimension";
						break
					case 9:
						let _g82 = info.entries;
						type8 = "dimension_type";
						break
					default:
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected json tag type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(info), true);
					
				};
				let path9 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, type8].concat(context.path.concat([name + ".json"])));
				let content9 = values8;
				if (context.compiler.config.header.length > 0 && path9.endsWith(".mcfunction")) {
					content9 = context.compiler.config.header + "\n" + content9;
				};
				context.compiler.io.write(path9, content9);
				break
			case 10:
				let subType1 = info.subType;
				let name1 = info.name;
				let entries10 = info.entries;
				let values9 = "{" + this.stringifyJsonTag(pos, name1, entries10, context) + "}";
				let path10 = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "worldgen", subType1].concat(context.path.concat([name1 + ".json"])));
				let content10 = values9;
				if (context.compiler.config.header.length > 0 && path10.endsWith(".mcfunction")) {
					content10 = context.compiler.config.header + "\n" + content10;
				};
				context.compiler.io.write(path10, content10);
				break
			
		};
	}
	processCompilerLoop(expression, as, context, body, pos, handler) {
		let itterator = McFile.invokeExpressionInline(expression, context, pos);
		let v = itterator;
		while (v.hasNext()) {
			let v1 = v.next();
			if (as == null) {
				let _g = 0;
				while (_g < body.length) {
					let node = body[_g];
					++_g;
					handler(context, node);
				};
			} else {
				let namespace = context.namespace;
				let append = context.append;
				let _this = context.variables;
				let _g = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
				_g.inst.set(as, v1);
				let variables = _g;
				let variableMap = (variables == null) ? _this : new VariableMap(_this, variables);
				let path = context.path;
				let newContext = {"append": append, "namespace": namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": variableMap, "stack": context.stack, "replacements": context.variables, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
				let _g1 = 0;
				while (_g1 < body.length) {
					let node = body[_g1];
					++_g1;
					handler(newContext, node);
				};
			};
		};
	}
	stringifyJsonTag(pos, name, value, context) {
		name = this.injectValues(name, context, pos);
		let values = [];
		let path = context.path;
		let newContext = {"append": function (v) {
			values.push(v);
		}, "namespace": context.namespace, "path": (path == null) ? [] : path, "uidIndex": context.uidIndex, "variables": context.variables, "stack": context.stack, "replacements": context.replacements, "isTemplate": this.ext == "mcbt", "templates": context.templates, "requireTemplateKeyword": context.requireTemplateKeyword, "compiler": context.compiler, "globalVariables": context.globalVariables, "functions": context.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": context.currentFunction};
		let _gthis = this;
		let _g = 0;
		while (_g < value.length) {
			let v = value[_g];
			++_g;
			switch (v._hx_index) {
				case 0:
					if (v.isMacro == false) {
						let extra = v.continuations;
						let value = v.value;
						let pos = v.pos;
						if (extra != null && extra.length > 0) {
							throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected extra data in json tag", pos, context));
						};
						values.push(this.injectValues(value, context, pos));
					} else {
						throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected node type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(v), true);
					};
					break
				case 5:
					let pos = v.pos;
					let expression = v.expression;
					let as = v.as;
					let body = v.body;
					this.processCompilerLoop(expression, as, context, body, pos, function (context, v) {
						_gthis.compileCommand(v, context);
					});
					break
				case 6:
					let pos1 = v.pos;
					let expression1 = v.expression;
					let body1 = v.body;
					let elseExpression = v.elseExpressions;
					this.compileTimeIf(expression1, body1, elseExpression, pos1, newContext, function (v) {
						_gthis.compileCommand(v, context);
					});
					break
				default:
				throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("unexpected node type:" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(v), true);
				
			};
		};
		return values.join("");
	}
	injectValues(target, context, pos) {
		if (target.indexOf("<%") == -1) {
			return target;
		};
		let variables = context.variables.get();
		let argList = ["embed", "context"];
		let _gthis = this;
		let valueList = [function (v) {
			return v.embedTo(context, pos, _gthis);
		}, context];
		let map = variables;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			argList.push(k);
			valueList.push(v);
		};
		let segments = [];
		let values = [];
		let _g = 0;
		let _g1 = target.split("<%");
		while (_g < _g1.length) {
			let segment = _g1[_g];
			++_g;
			let parts = segment.split("%>");
			if (parts.length == 1) {
				values.push(parts[0]);
				segments.push("$$context" + "[" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(values.length - 1) + "]");
			} else {
				segments.push(parts[0]);
				values.push(parts[1]);
				segments.push("$$context" + "[" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(values.length - 1) + "]");
			};
		};
		let code = "return ([" + segments.join(",") + "].join(''));";
		try {
			return new Function(...argList,"$$context",code).apply(null, valueList.concat([values]));;
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.caught(_g);
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(_Parser_js__WEBPACK_IMPORTED_MODULE_6__.Parser.format("Encountered an error whilst evaluating expression '{}' at {}:{}:{}", e.get_message(), pos.file, pos.line, pos.col + 1));
		};
	}
	compileTimeIf(expression, body, elseExpression, pos, newContext, processNode, isContinuation) {
		if (isContinuation == null) {
			isContinuation = false;
		};
		let bool = McFile.invokeExpressionInline(expression, newContext, pos);
		if (bool) {
			let _g = 0;
			while (_g < body.length) {
				let node = body[_g];
				++_g;
				processNode(node);
			};
		} else {
			let _g = 0;
			while (_g < elseExpression.length) {
				let elseNode = elseExpression[_g];
				++_g;
				let invoke = (elseNode.condition == null) ? true : McFile.invokeExpressionInline(elseNode.condition, newContext, pos);
				if (invoke) {
					let _g = 0;
					let _g1 = elseNode.node;
					while (_g < _g1.length) {
						let node = _g1[_g];
						++_g;
						processNode(node);
					};
					return;
				};
			};
		};
	}
	compile(vars, compiler) {
		let info = compiler.getInitialPathInfo(this.name);
		let _g = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		let _g1 = 0;
		let _g2 = _Reflect_js__WEBPACK_IMPORTED_MODULE_22__.Reflect.fields(this.fileJs);
		while (_g1 < _g2.length) {
			let k = _g2[_g1];
			++_g1;
			_g.inst.set(k, _Reflect_js__WEBPACK_IMPORTED_MODULE_22__.Reflect.field(this.fileJs, k));
		};
		let thisFileVars = new VariableMap(vars, _g);
		let namespace = info.namespace;
		let variableMap = new VariableMap(thisFileVars, _Globals_js__WEBPACK_IMPORTED_MODULE_8__.Globals.map);
		let path = info.path;
		let uidIndex = new UidTracker();
		let replacements = new VariableMap(null, new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap());
		let context = {"append": function (v) {
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("append not available for top-level context", true);
		}, "namespace": namespace, "path": (path == null) ? [] : path, "uidIndex": uidIndex, "variables": variableMap, "stack": [], "replacements": replacements, "isTemplate": this.ext == "mcbt", "templates": this.templates, "requireTemplateKeyword": this.ext == "mcbt", "compiler": compiler, "globalVariables": thisFileVars, "functions": [], "baseNamespaceInfo": info, "currentFunction": null};
		if (context.isTemplate) {
			if (this.ast.length > 0) {
				throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(ErrorUtil.formatContext("Unexpected top-level content in template file", this.ast[0].pos, context));
			};
			return;
		};
		let _g3 = 0;
		let _g4 = this.ast;
		while (_g3 < _g4.length) {
			let node = _g4[_g3];
			++_g3;
			switch (node._hx_index) {
				case 2:
					let _g = node.pos;
					let _g1 = node.name;
					let _g2 = node.body;
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("import or template definition found after setup", true);
					break
				case 4:
					let _g5 = node.pos;
					let _g6 = node.name;
					throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("import or template definition found after setup", true);
					break
				default:
				this.compileTld(node, context);
				
			};
		};
		if (this.loadCommands.length > 0) {
			let path = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, "load.mcfunction"])));
			let content = this.loadCommands.join("\n");
			if (context.compiler.config.header.length > 0 && path.endsWith(".mcfunction")) {
				content = context.compiler.config.header + "\n" + content;
			};
			context.compiler.io.write(path, content);
			compiler.tags.addLoadingCommand(context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, "load"]).join("/"));
		};
		if (this.tickCommands.length > 0) {
			let path = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join(["data", context.namespace, "functions"].concat(context.path.concat([context.compiler.config.generatedDirName, "tick.mcfunction"])));
			let content = this.tickCommands.join("\n");
			if (context.compiler.config.header.length > 0 && path.endsWith(".mcfunction")) {
				content = context.compiler.config.header + "\n" + content;
			};
			context.compiler.io.write(path, content);
			compiler.tags.addTickingCommand(context.namespace + ":" + context.path.concat([context.compiler.config.generatedDirName, "tick"]).join("/"));
		};
	}
	static invokeExpressionInline(expression, context, pos) {
		let variables = context.variables.get();
		let argList = ["context"];
		let valueList = [context];
		let map = variables;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			argList.push(k);
			valueList.push(v);
		};
		let code = "return (" + expression + ");";
		try {
			return new Function(...argList,code).apply(null, valueList);;
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.caught(_g);
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError(_Parser_js__WEBPACK_IMPORTED_MODULE_6__.Parser.format("Encountered an error whilst evaluating expression '{}' at {}:{}:{}", e.get_message(), pos.file, pos.line, pos.col + 1));
		};
	}
	static get __name__() {
		return "mcl.McFile"
	}
	get __class__() {
		return McFile
	}
}


const Compiler = _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.global("$hxClasses")["mcl.Compiler"] = 
class Compiler extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_18__.Register.inherits() {
	new(baseDir, config, lib) {
		this.success = true;
		this.disableRequire = false;
		this.config = _Config_js__WEBPACK_IMPORTED_MODULE_9__.Config.create({});
		this.packNamespace = "mcb-" + _Std_js__WEBPACK_IMPORTED_MODULE_21__.Std.string(new Date());
		this.tags = new _TagManager_js__WEBPACK_IMPORTED_MODULE_5__.TagManager();
		this.libStore = null;
		this.alreadySetupFiles = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		this.files = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_13__.StringMap();
		this.io = new _Io_js__WEBPACK_IMPORTED_MODULE_23__.SyncIo();
		this.config = _Config_js__WEBPACK_IMPORTED_MODULE_9__.Config.create(config);
		this.baseDir = baseDir;
		this.libStore = lib;
	}
	addFile(name, ast) {
		let file = new McFile(name, ast);
		this.files.inst.set(name, file);
	}
	resolve(baseFile, resolutionPath) {
		if (resolutionPath.charAt(0) == ".") {
			let base = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.directory(baseFile);
			let resolved = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.join([base, resolutionPath]);
			let ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.extension(resolutionPath);
			if (ext.endsWith("js") || ext == "json") {
				return ImportFileType.IJsFile(__webpack_require__(65)(resolved));
			};
			if (this.files.inst.has(resolved)) {
				if (!this.alreadySetupFiles.inst.has(resolved)) {
					this.alreadySetupFiles.inst.set(resolved, true);
					this.files.inst.get(resolved).setup(this);
				};
				return ImportFileType.IMcFile(this.files.inst.get(resolved));
			};
			throw new _error_CompilerError_js__WEBPACK_IMPORTED_MODULE_2__.CompilerError("Failed to resolve import: " + resolved);
		} else {
			return ImportFileType.IMcFile(this.libStore.lookup(resolutionPath, {"file": baseFile, "line": 0, "col": 0}, this));
		};
	}
	getInitialPathInfo(p) {
		let projectPath = ((p.startsWith(this.baseDir)) ? p.substring(this.baseDir.length) : p).split("\\").join("/");
		if (projectPath.charAt(0) == "/") {
			projectPath = projectPath.substring(1);
		};
		let parts = projectPath.split("/");
		let namespace = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.withoutExtension(parts[0]);
		let path = parts.slice(1).join("/");
		return {"namespace": namespace, "path": (parts.length > 1) ? _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_12__.Path.withoutExtension(path).split("/") : []};
	}
	compile(root) {
		this.success = true;
		try {
			let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_17__.EsMap.adaptIterator(this.files.inst.values());
			while (file.hasNext()) {
				let file1 = file.next();
				if (this.alreadySetupFiles.inst.has(file1.name)) {
					continue;
				};
				file1.setup(this);
			};
			let file1 = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_17__.EsMap.adaptIterator(this.files.inst.values());
			while (file1.hasNext()) {
				let file = file1.next();
				file.compile(root, this);
			};
			this.tags.writeTagFiles(this);
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.caught(_g).unwrap();
			this.success = false;
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_16__.Exception.thrown(e);
		};
	}
	static get __name__() {
		return "mcl.Compiler"
	}
	get __class__() {
		return Compiler
	}
}



/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   McbError: () => (/* binding */ McbError)
/* harmony export */ });
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const McbError = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.error.McbError"] = 
class McbError extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception) {
	new(msg) {
		super.new(msg);
	}
	__init__() {
	}
	static isMclError(e) {
		return ((e) instanceof McbError);
	}
	static get __name__() {
		return "mcl.error.McbError"
	}
	static get __super__() {
		return _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception
	}
	get __class__() {
		return McbError
	}
}



/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompilerError: () => (/* binding */ CompilerError)
/* harmony export */ });
/* harmony import */ var _McbError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const CompilerError = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.error.CompilerError"] = 
class CompilerError extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError) {
	new(message, internal) {
		if (internal == null) {
			internal = false;
		};
		super.new("" + ((internal) ? "Internal " : "") + "Compiler Error:\n\t" + message);
		this.internal = internal;
	}
	static get __name__() {
		return "mcl.error.CompilerError"
	}
	static get __super__() {
		return _McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError
	}
	get __class__() {
		return CompilerError
	}
}



/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagManager: () => (/* binding */ TagManager)
/* harmony export */ });
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const TagManager = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.TagManager"] = 
class TagManager extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits() {
	new() {
		this.loadFunctionEntries = new Set();
		this.tickFunctionEntries = new Set();
	}
	addTickingCommand(command) {
		this.tickFunctionEntries.add(command);
	}
	addLoadingCommand(command) {
		this.loadFunctionEntries.add(command);
	}
	writeTagFiles(compiler) {
		let basePath = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__.Path.join(["data", "minecraft", "tags", "functions"]);
		let tickPath = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__.Path.join([basePath, "tick.json"]);
		let loadPath = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__.Path.join([basePath, "load.json"]);
		if (this.tickFunctionEntries.size > 0) {
			let compiler1 = compiler.io;
			let _g = [];
			let jsIterator = this.tickFunctionEntries.values();
			let _g_jsIterator = jsIterator;
			let _g_lastStep = jsIterator.next();
			while (!_g_lastStep.done) {
				let v = _g_lastStep.value;
				_g_lastStep = _g_jsIterator.next();
				let k = v;
				_g.push(k);
			};
			compiler1.write(tickPath, JSON.stringify({"values": _g}));
		};
		if (this.loadFunctionEntries.size > 0) {
			let compiler1 = compiler.io;
			let _g = [];
			let jsIterator = this.loadFunctionEntries.values();
			let _g_jsIterator = jsIterator;
			let _g_lastStep = jsIterator.next();
			while (!_g_lastStep.done) {
				let v = _g_lastStep.value;
				_g_lastStep = _g_jsIterator.next();
				let k = v;
				_g.push(k);
			};
			compiler1.write(loadPath, JSON.stringify({"values": _g}));
		};
	}
	static get __name__() {
		return "mcl.TagManager"
	}
	get __class__() {
		return TagManager
	}
}



/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
This class provides a convenient way of working with paths. It supports the
common path formats:

- `directory1/directory2/filename.extension`
- `directory1\directory2\filename.extension`
*/
const Path = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxe.io.Path"] = 
class Path extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new(path) {
		switch (path) {
			case ".":case "..":
				this.dir = path;
				this.file = "";
				return;
				break
			
		};
		let c1 = path.lastIndexOf("/");
		let c2 = path.lastIndexOf("\\");
		if (c1 < c2) {
			this.dir = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, 0, c2);
			path = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, c2 + 1, null);
			this.backslash = true;
		} else if (c2 < c1) {
			this.dir = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, 0, c1);
			path = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, c1 + 1, null);
		} else {
			this.dir = null;
		};
		let cp = path.lastIndexOf(".");
		if (cp != -1) {
			this.ext = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, cp + 1, null);
			this.file = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.substr(path, 0, cp);
		} else {
			this.ext = null;
			this.file = path;
		};
	}
	
	/**
	Returns a String representation of `this` path.
	
	If `this.backslash` is `true`, backslash is used as directory separator,
	otherwise slash is used. This only affects the separator between
	`this.dir` and `this.file`.
	
	If `this.directory` or `this.extension` is `null`, their representation
	is the empty String `""`.
	*/
	toString() {
		return ((this.dir == null) ? "" : this.dir + ((this.backslash) ? "\\" : "/")) + this.file + ((this.ext == null) ? "" : "." + this.ext);
	}
	
	/**
	Returns the String representation of `path` without the file extension.
	
	If `path` is `null`, the result is unspecified.
	*/
	static withoutExtension(path) {
		let s = new Path(path);
		s.ext = null;
		return s.toString();
	}
	
	/**
	Returns the directory of `path`.
	
	If the directory is `null`, the empty String `""` is returned.
	
	If `path` is `null`, the result is unspecified.
	*/
	static directory(path) {
		let s = new Path(path);
		if (s.dir == null) {
			return "";
		};
		return s.dir;
	}
	
	/**
	Returns the extension of `path`.
	
	If `path` has no extension, the empty String `""` is returned.
	
	If `path` is `null`, the result is unspecified.
	*/
	static extension(path) {
		let s = new Path(path);
		if (s.ext == null) {
			return "";
		};
		return s.ext;
	}
	
	/**
	Joins all paths in `paths` together.
	
	If `paths` is empty, the empty String `""` is returned. Otherwise the
	paths are joined with a slash between them.
	
	If `paths` is `null`, the result is unspecified.
	*/
	static join(paths) {
		let _g = [];
		let _g1 = 0;
		let _g2 = paths;
		while (_g1 < _g2.length) {
			let v = _g2[_g1];
			++_g1;
			if (v != null && v != "") {
				_g.push(v);
			};
		};
		let paths1 = _g;
		if (paths1.length == 0) {
			return "";
		};
		let path = paths1[0];
		let _g3 = 1;
		let _g4 = paths1.length;
		while (_g3 < _g4) {
			let i = _g3++;
			path = Path.addTrailingSlash(path);
			path += paths1[i];
		};
		return Path.normalize(path);
	}
	
	/**
	Normalize a given `path` (e.g. turn `'/usr/local/../lib'` into `'/usr/lib'`).
	
	Also replaces backslashes `\` with slashes `/` and afterwards turns
	multiple slashes into a single one.
	
	If `path` is `null`, the result is unspecified.
	*/
	static normalize(path) {
		let slash = "/";
		path = path.split("\\").join(slash);
		if (path == slash) {
			return slash;
		};
		let target = [];
		let _g = 0;
		let _g1 = path.split(slash);
		while (_g < _g1.length) {
			let token = _g1[_g];
			++_g;
			if (token == ".." && target.length > 0 && target[target.length - 1] != "..") {
				target.pop();
			} else if (token == "") {
				if (target.length > 0 || _HxOverrides_js__WEBPACK_IMPORTED_MODULE_1__.HxOverrides.cca(path, 0) == 47) {
					target.push(token);
				};
			} else if (token != ".") {
				target.push(token);
			};
		};
		let tmp = target.join(slash);
		let acc_b = "";
		let colon = false;
		let slashes = false;
		let _g_offset = 0;
		let _g_s = tmp;
		while (_g_offset < _g_s.length) {
			let s = _g_s;
			let index = _g_offset++;
			let c = s.charCodeAt(index);
			if (c >= 55296 && c <= 56319) {
				c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
			};
			let c1 = c;
			if (c1 >= 65536) {
				++_g_offset;
			};
			let c2 = c1;
			switch (c2) {
				case 47:
					if (!colon) {
						slashes = true;
					} else {
						let i = c2;
						colon = false;
						if (slashes) {
							acc_b += "/";
							slashes = false;
						};
						acc_b += String.fromCodePoint(i);
					};
					break
				case 58:
					acc_b += ":";
					colon = true;
					break
				default:
				let i = c2;
				colon = false;
				if (slashes) {
					acc_b += "/";
					slashes = false;
				};
				acc_b += String.fromCodePoint(i);
				
			};
		};
		return acc_b;
	}
	
	/**
	Adds a trailing slash to `path`, if it does not have one already.
	
	If the last slash in `path` is a backslash, a backslash is appended to
	`path`.
	
	If the last slash in `path` is a slash, or if no slash is found, a slash
	is appended to `path`. In particular, this applies to the empty String
	`""`.
	
	If `path` is `null`, the result is unspecified.
	*/
	static addTrailingSlash(path) {
		if (path.length == 0) {
			return "/";
		};
		let c1 = path.lastIndexOf("/");
		let c2 = path.lastIndexOf("\\");
		if (c1 < c2) {
			if (c2 != path.length - 1) {
				return path + "\\";
			} else {
				return path;
			};
		} else if (c1 != path.length - 1) {
			return path + "/";
		} else {
			return path;
		};
	}
	static get __name__() {
		return "haxe.io.Path"
	}
	get __class__() {
		return Path
	}
}



/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayInput: () => (/* binding */ ArrayInput),
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _AstNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _StringTools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _EReg_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.$global

const ArrayInput = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["mcl.ArrayInput"] = 
class ArrayInput extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.inherits() {
	new(array) {
		this.array = array;
		this.set_index(0);
	}
	get index() {
		return this.get_index()
	}
	set index(v) {
		this.set_index(v)
	}
	get_index() {
		return this._index;
	}
	set_index(i) {
		return this._index = i;
	}
	next() {
		if (this._index >= this.array.length) {
			throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError("Tried to read past the end of the token list");
		};
		let tmp = this.array;
		let lhs = this.get_index();
		this.set_index(lhs + 1);
		return tmp[lhs];
	}
	skip() {
		this.set_index(this.get_index() + 1);
	}
	peek() {
		return this.array[this.get_index()];
	}
	hasNext() {
		return this.get_index() < this.array.length;
	}
	insert(token) {
		let _this = this.array;
		let pos = this.get_index();
		_this.splice(pos, 0, token);
	}
	back() {
		this.set_index(this.get_index() - 1);
	}
	update(token) {
		this.array[this.get_index()] = token;
	}
	static get __name__() {
		return "mcl.ArrayInput"
	}
	get __class__() {
		return ArrayInput
	}
}


const Parser = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["mcl.Parser"] = 
class Parser {
	static format(template, ...data) {
		let regex_r = new RegExp("\\{\\}", "".split("u").join(""));
		let _g = 0;
		let _g1 = data.slice();
		while (_g < _g1.length) {
			let field = _g1[_g];
			++_g;
			template = template.replace(regex_r, _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(field));
		};
		return template;
	}
	static toss(token, error) {
		switch (token._hx_index) {
			case 0:
				let v = token.v;
				let pos = token.pos;
				throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(Parser.format(error, v, pos.file, pos.line, pos.col));
				break
			case 1:
				let pos1 = token.pos;
				let data = token.data;
				throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(Parser.format(error, data, pos1.file, pos1.line, pos1.col));
				break
			case 2:
				let pos2 = token.pos;
				throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(Parser.format(error, pos2.file, pos2.line, pos2.col));
				break
			
		};
	}
	static unreachable(token) {
		let tmp;
		switch (token._hx_index) {
			case 0:
				let v = token.v;
				let p = token.pos;
				tmp = Parser.format("Unexpected token '{}' at {}:{}:{}", v, p.file, p.line, p.col);
				break
			case 1:
				let p1 = token.pos;
				let d = token.data;
				tmp = Parser.format("Unexpected '{' with data '{}' at {}:{}:{}", d, p1.file, p1.line, p1.col);
				break
			case 2:
				let p2 = token.pos;
				tmp = Parser.format("Unexpected '}' at {}:{}:{}", p2.file, p2.line, p2.col);
				break
			
		};
		return new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(tmp);
	}
	static expect(reader, match) {
		let token = reader.next();
		if (!match(token)) {
			throw Parser.unreachable(token);
		};
	}
	static expectThenData(reader, allowData) {
		if (allowData == null) {
			allowData = true;
		};
		let token = reader.peek();
		Parser.expect(reader, function (token) {
			return token._hx_index == 1;
		});
		if (token._hx_index == 1) {
			let _g = token.pos;
			let data = token.data;
			if (!allowData && data.length > 0) {
				throw Parser.unreachable(token);
			};
			return data;
		} else {
			return null;
		};
	}
	static block(reader, sub, allowData, onLastToken) {
		if (allowData == null) {
			allowData = true;
		};
		let data = Parser.expectThenData(reader, allowData);
		while (true) {
			let token = reader.peek();
			if (token._hx_index == 2) {
				let _g = token.pos;
				if (onLastToken != null) {
					onLastToken(token);
				};
				break;
			} else {
				sub();
			};
		};
		Parser.expect(reader, function (token) {
			return token._hx_index == 2;
		});
		if (data == "") {
			return null;
		} else {
			return data;
		};
	}
	static readFunction(name, reader, pos) {
		let commands = [];
		let appendTo = null;
		if (name.endsWith(" load")) {
			appendTo = "load";
			name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(name.substring(0, name.length - " load".length));
		} else if (name.endsWith(" tick")) {
			appendTo = "tick";
			name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(name.substring(0, name.length - " tick".length));
		};
		Parser.block(reader, function () {
			commands.push(Parser.innerParse(reader));
		}, false);
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.FunctionDef(pos, name, commands, appendTo);
	}
	static innerParseTemplate(reader) {
		let _g = reader.peek();
		if (_g._hx_index == 0) {
			let _g1 = _g.v;
			let _g2 = _g.pos;
			switch (_g1) {
				case "load":
					let pos = _g2;
					reader.skip();
					let content = [];
					Parser.block(reader, function () {
						content.push(Parser.innerParse(reader));
					}, false);
					return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.LoadBlock(pos, content);
					break
				case "tick":
					let pos1 = _g2;
					reader.skip();
					let content1 = [];
					Parser.block(reader, function () {
						content1.push(Parser.innerParse(reader));
					}, false);
					return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.TickBlock(pos1, content1);
					break
				default:
				let v = _g1;
				let pos2 = _g2;
				let tmp;
				if (v != "with") {
					let v1 = v;
					tmp = "w" == v1.charAt(0) && "i" == v1.charAt(1) && "t" == v1.charAt(2) && "h" == v1.charAt(3) && " " == v1.charAt(4);
				} else {
					tmp = true;
				};
				if (tmp) {
					reader.skip();
					let args = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("with ".length));
					let content = [];
					Parser.block(reader, function () {
						content.push(Parser.innerParse(reader));
					}, false);
					return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.TemplateOverload(pos2, args, content);
				} else {
					throw Parser.unreachable(reader.next());
				};
				
			};
		} else {
			throw Parser.unreachable(reader.next());
		};
	}
	static readTemplate(name, reader, pos) {
		let entries = [];
		Parser.block(reader, function () {
			entries.push(Parser.innerParseTemplate(reader));
		}, false);
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.TemplateDef(pos, name, entries);
	}
	static pos(token) {
		switch (token._hx_index) {
			case 0:
				let _g = token.v;
				let pos = token.pos;
				return pos;
				break
			case 1:
				let _g1 = token.data;
				let pos1 = token.pos;
				return pos1;
				break
			case 2:
				let pos2 = token.pos;
				return pos2;
				break
			
		};
	}
	static json(reader) {
		let pos = Parser.pos(reader.peek());
		let depth = 0;
		let result = "";
		do {
			let token = reader.next();
			switch (token._hx_index) {
				case 0:
					let _g = token.pos;
					let v = token.v;
					result += v;
					break
				case 1:
					let _g1 = token.pos;
					let data = token.data;
					result += "{";
					result += data;
					++depth;
					break
				case 2:
					let _g2 = token.pos;
					--depth;
					result += "}";
					break
				
			};
		} while (depth > 0);
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Raw(pos, result, [], false);
	}
	static parseMcbFile(tokens) {
		let reader = new ArrayInput(tokens);
		let nodes = [];
		while (reader.hasNext()) nodes.push(Parser.parseTLD(reader));
		return nodes;
	}
	static parseMcbtFile(tokens) {
		let reader = new ArrayInput(tokens);
		let nodes = [];
		while (reader.hasNext()) {
			let token = reader.next();
			let tmp;
			if (token._hx_index == 0) {
				let v = token.v;
				let pos = token.pos;
				let v1 = v;
				if ("t" == v1.charAt(0) && "e" == v1.charAt(1) && "m" == v1.charAt(2) && "p" == v1.charAt(3) && "l" == v1.charAt(4) && "a" == v1.charAt(5) && "t" == v1.charAt(6) && "e" == v1.charAt(7) && " " == v1.charAt(8)) {
					let name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("template ".length));
					tmp = Parser.readTemplate(name, reader, pos);
				} else {
					let v1 = v;
					if ("#" == v1.charAt(0)) {
						tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Comment(pos, v);
					} else {
						let v1 = v;
						if ("i" == v1.charAt(0) && "m" == v1.charAt(1) && "p" == v1.charAt(2) && "o" == v1.charAt(3) && "r" == v1.charAt(4) && "t" == v1.charAt(5) && " " == v1.charAt(6)) {
							tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Import(pos, v.substring("import ".length));
						} else {
							throw Parser.unreachable(token);
						};
					};
				};
			} else {
				throw Parser.unreachable(token);
			};
			nodes.push(tmp);
		};
		return nodes;
	}
	static parserCompilerLoop(v, pos, reader, handler) {
		let content = [];
		Parser.block(reader, function () {
			content.push(handler());
		});
		if (Parser.loopRegExp.match(v)) {
			let loop = Parser.loopRegExp.matched(1);
			let as = Parser.loopRegExp.matched(2);
			return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.CompileTimeLoop(pos, loop, as, content);
		};
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.CompileTimeLoop(pos, v, null, content);
	}
	static parseTLD(reader) {
		let _g = reader.next();
		if (_g._hx_index == 0) {
			let v = _g.v;
			let pos = _g.pos;
			let v1 = v;
			if ("f" == v1.charAt(0) && "u" == v1.charAt(1) && "n" == v1.charAt(2) && "c" == v1.charAt(3) && "t" == v1.charAt(4) && "i" == v1.charAt(5) && "o" == v1.charAt(6) && "n" == v1.charAt(7) && " " == v1.charAt(8)) {
				let name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("function ".length));
				return Parser.readFunction(name, reader, pos);
			} else {
				let v1 = v;
				if ("c" == v1.charAt(0) && "l" == v1.charAt(1) && "o" == v1.charAt(2) && "c" == v1.charAt(3) && "k" == v1.charAt(4) && " " == v1.charAt(5)) {
					let time = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("clock ".length));
					if (time.indexOf(" ") == -1) {
						throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(Parser.format("\"Expected a name and a time for the clock command\" at {}:{}:{}", pos.file, pos.line, pos.col));
					};
					let name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(time.substring(0, time.indexOf(" ") + 1));
					time = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(time.substring(time.indexOf(" ")));
					let content = [];
					Parser.block(reader, function () {
						content.push(Parser.innerParse(reader));
					});
					return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ClockExpr(pos, name, time, content);
				} else {
					let v1 = v;
					if ("i" == v1.charAt(0) && "m" == v1.charAt(1) && "p" == v1.charAt(2) && "o" == v1.charAt(3) && "r" == v1.charAt(4) && "t" == v1.charAt(5) && " " == v1.charAt(6)) {
						return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Import(pos, v.substring("import ".length));
					} else {
						let v1 = v;
						if ("d" == v1.charAt(0) && "i" == v1.charAt(1) && "r" == v1.charAt(2) && " " == v1.charAt(3) && reader.peek()._hx_index == 1) {
							let content = [];
							let data = Parser.block(reader, function () {
								content.push(Parser.parseTLD(reader));
							}, false);
							if (data != null) {
								throw Parser.unreachable(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(v, pos));
							};
							return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Directory(pos, v.substring("dir ".length), content);
						} else {
							let v1 = v;
							if ("#" == v1.charAt(0)) {
								return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Comment(pos, v);
							} else {
								let v1 = v;
								if ("R" == v1.charAt(0) && "E" == v1.charAt(1) && "P" == v1.charAt(2) && "E" == v1.charAt(3) && "A" == v1.charAt(4) && "T" == v1.charAt(5)) {
									return Parser.parserCompilerLoop(v, pos, reader, function () {
										return Parser.parseTLD(reader);
									});
								} else {
									let v1 = v;
									if ("I" == v1.charAt(0) && "F" == v1.charAt(1)) {
										return Parser.parseCompileTimeIf(v, pos, reader, function () {
											return Parser.parseTLD(reader);
										});
									} else {
										let v1 = v;
										if ("t" == v1.charAt(0) && "a" == v1.charAt(1) && "g" == v1.charAt(2) && " " == v1.charAt(3)) {
											let sections = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("tag ".length)).split(" ");
											let type = sections.shift();
											let name = sections.shift();
											let replace = sections.shift() == "replace";
											let content = [];
											Parser.block(reader, function () {
												content.push(Parser.innerParse(reader));
											});
											return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.JsonFile(pos, name, _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.Tag(type, replace, content));
										} else {
											let tmp;
											let tmp1;
											let tmp2;
											let tmp3;
											let tmp4;
											let tmp5;
											let tmp6;
											let tmp7;
											let v1 = v;
											if (!("a" == v1.charAt(0) && "d" == v1.charAt(1) && "v" == v1.charAt(2) && "a" == v1.charAt(3) && "n" == v1.charAt(4) && "c" == v1.charAt(5) && "e" == v1.charAt(6) && "m" == v1.charAt(7) && "e" == v1.charAt(8) && "n" == v1.charAt(9) && "t" == v1.charAt(10) && " " == v1.charAt(11))) {
												let v1 = v;
												tmp7 = "i" == v1.charAt(0) && "t" == v1.charAt(1) && "e" == v1.charAt(2) && "m" == v1.charAt(3) && "_" == v1.charAt(4) && "m" == v1.charAt(5) && "o" == v1.charAt(6) && "d" == v1.charAt(7) && "i" == v1.charAt(8) && "f" == v1.charAt(9) && "i" == v1.charAt(10) && "e" == v1.charAt(11) && "r" == v1.charAt(12) && " " == v1.charAt(13);
											} else {
												tmp7 = true;
											};
											if (!tmp7) {
												let v1 = v;
												tmp6 = "l" == v1.charAt(0) && "o" == v1.charAt(1) && "o" == v1.charAt(2) && "t" == v1.charAt(3) && "_" == v1.charAt(4) && "t" == v1.charAt(5) && "a" == v1.charAt(6) && "b" == v1.charAt(7) && "l" == v1.charAt(8) && "e" == v1.charAt(9) && " " == v1.charAt(10);
											} else {
												tmp6 = true;
											};
											if (!tmp6) {
												let v1 = v;
												tmp5 = "p" == v1.charAt(0) && "r" == v1.charAt(1) && "e" == v1.charAt(2) && "d" == v1.charAt(3) && "i" == v1.charAt(4) && "c" == v1.charAt(5) && "a" == v1.charAt(6) && "t" == v1.charAt(7) && "e" == v1.charAt(8) && " " == v1.charAt(9);
											} else {
												tmp5 = true;
											};
											if (!tmp5) {
												let v1 = v;
												tmp4 = "r" == v1.charAt(0) && "e" == v1.charAt(1) && "c" == v1.charAt(2) && "i" == v1.charAt(3) && "p" == v1.charAt(4) && "e" == v1.charAt(5) && " " == v1.charAt(6);
											} else {
												tmp4 = true;
											};
											if (!tmp4) {
												let v1 = v;
												tmp3 = "c" == v1.charAt(0) && "h" == v1.charAt(1) && "a" == v1.charAt(2) && "t" == v1.charAt(3) && "_" == v1.charAt(4) && "t" == v1.charAt(5) && "y" == v1.charAt(6) && "p" == v1.charAt(7) && "e" == v1.charAt(8) && " " == v1.charAt(9);
											} else {
												tmp3 = true;
											};
											if (!tmp3) {
												let v1 = v;
												tmp2 = "d" == v1.charAt(0) && "a" == v1.charAt(1) && "m" == v1.charAt(2) && "a" == v1.charAt(3) && "g" == v1.charAt(4) && "e" == v1.charAt(5) && "_" == v1.charAt(6) && "t" == v1.charAt(7) && "y" == v1.charAt(8) && "p" == v1.charAt(9) && "e" == v1.charAt(10) && " " == v1.charAt(11);
											} else {
												tmp2 = true;
											};
											if (!tmp2) {
												let v1 = v;
												tmp1 = "d" == v1.charAt(0) && "i" == v1.charAt(1) && "m" == v1.charAt(2) && "e" == v1.charAt(3) && "n" == v1.charAt(4) && "s" == v1.charAt(5) && "i" == v1.charAt(6) && "o" == v1.charAt(7) && "n" == v1.charAt(8) && " " == v1.charAt(9);
											} else {
												tmp1 = true;
											};
											if (!tmp1) {
												let v1 = v;
												tmp = "d" == v1.charAt(0) && "i" == v1.charAt(1) && "m" == v1.charAt(2) && "e" == v1.charAt(3) && "n" == v1.charAt(4) && "s" == v1.charAt(5) && "i" == v1.charAt(6) && "o" == v1.charAt(7) && "n" == v1.charAt(8) && "_" == v1.charAt(9) && "t" == v1.charAt(10) && "y" == v1.charAt(11) && "p" == v1.charAt(12) && "e" == v1.charAt(13) && " " == v1.charAt(14);
											} else {
												tmp = true;
											};
											if (tmp) {
												return Parser.readPlainJsonFile(v, pos, reader);
											} else {
												throw Parser.unreachable(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(v, pos));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		} else {
			let node = _g;
			throw Parser.unreachable(node);
		};
	}
	static readPlainJsonFile(v, pos, reader) {
		let _g = [];
		let _g1 = 0;
		let _g2 = v.split(" ");
		while (_g1 < _g2.length) {
			let v = _g2[_g1];
			++_g1;
			if (v != "") {
				_g.push(v);
			};
		};
		let bits = _g;
		let type = bits.shift();
		let name = bits.shift();
		let content = [];
		Parser.block(reader, function () {
			content.push(Parser.json(reader));
		});
		let tmp;
		if (type == null) {
			throw Parser.unreachable(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(v, pos));
		} else {
			switch (type) {
				case "advancement":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.Advancement(content);
					break
				case "chat_type":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.ChatType(content);
					break
				case "damage_type":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.DamageType(content);
					break
				case "dimension":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.Dimension(content);
					break
				case "dimension_type":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.DimensionType(content);
					break
				case "item_modifier":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.ItemModifier(content);
					break
				case "loot_table":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.LootTable(content);
					break
				case "predicate":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.Predicate(content);
					break
				case "recipe":
					tmp = _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.JsonTagType.Recipe(content);
					break
				default:
				throw Parser.unreachable(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(v, pos));
				
			};
		};
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.JsonFile(pos, name, tmp);
	}
	static innerParse(reader) {
		let token = reader.peek();
		switch (token._hx_index) {
			case 0:
				let v = token.v;
				let pos = token.pos;
				reader.next();
				let isMacroArg = v.charAt(0) == "$";
				if (isMacroArg) {
					v = v.substring(1);
				};
				if (v == "<%%") {
					let content = [];
					while (true) {
						let _g = reader.peek();
						if (_g._hx_index == 0) {
							let _g1 = _g.pos;
							if (_g.v == "%%>") {
								reader.skip();
								break;
							};
						};
						content.push(reader.next());
					};
					return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.MultiLineScript(pos, content);
				} else {
					let v1 = v;
					if ("I" == v1.charAt(0) && "F" == v1.charAt(1)) {
						return Parser.parseCompileTimeIf(v, pos, reader, function () {
							return Parser.innerParse(reader);
						});
					} else {
						let v1 = v;
						if ("f" == v1.charAt(0) && "u" == v1.charAt(1) && "n" == v1.charAt(2) && "c" == v1.charAt(3) && "t" == v1.charAt(4) && "i" == v1.charAt(5) && "o" == v1.charAt(6) && "n" == v1.charAt(7) && " " == v1.charAt(8)) {
							let target = v.substring("function ".length);
							let end = target.indexOf(" ");
							let name = target.substring(0, (end == -1) ? target.length : end);
							let data = target.substring(name.length + 1);
							return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.FunctionCall(pos, name, data, isMacroArg);
						} else {
							let v1 = v;
							if ("s" == v1.charAt(0) && "c" == v1.charAt(1) && "h" == v1.charAt(2) && "e" == v1.charAt(3) && "d" == v1.charAt(4) && "u" == v1.charAt(5) && "l" == v1.charAt(6) && "e" == v1.charAt(7) && " " == v1.charAt(8)) {
								let name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("schedule ".length));
								let v1 = name;
								if ("f" == v1.charAt(0) && "u" == v1.charAt(1) && "n" == v1.charAt(2) && "c" == v1.charAt(3) && "t" == v1.charAt(4) && "i" == v1.charAt(5) && "o" == v1.charAt(6) && "n" == v1.charAt(7) && " " == v1.charAt(8)) {
									let target = name.substring("function ".length);
									let end = target.indexOf(" ");
									let funcName = target.substring(0, (end == -1) ? target.length : end);
									let delay = (end == -1) ? null : target.substring(funcName.length + 1);
									let mode = "replace";
									if (delay.endsWith(" append")) {
										mode = "append";
										delay = delay.substring(0, delay.length - " append".length);
									};
									if (delay.endsWith(" replace")) {
										mode = "replace";
										delay = delay.substring(0, delay.length - " replace".length);
									};
									if (delay == null) {
										throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError(Parser.format("\"Expected delay after function name in schedule command\" at {}:{}:{}", pos.file, pos.line, pos.col));
									};
									return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ScheduleCall(pos, delay, funcName, mode, isMacroArg);
								};
								let delayIdx = name.indexOf(" ");
								let delay = (delayIdx == -1) ? name : name.substring(0, delayIdx);
								let mode = "append";
								if (delay.endsWith(" append")) {
									mode = "append";
									delay = delay.substring(0, delay.length - " append".length);
								};
								if (delay.endsWith(" replace")) {
									mode = "replace";
									delay = delay.substring(0, delay.length - " replace".length);
								};
								let content = [];
								if (reader.peek()._hx_index != 1) {
									throw new _error_ParserError_js__WEBPACK_IMPORTED_MODULE_0__.ParserError("Expected { after delay in schedule block command");
								};
								Parser.block(reader, function () {
									content.push(Parser.innerParse(reader));
								});
								return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ScheduleBlock(pos, delay, mode, content, isMacroArg);
							} else {
								let v1 = v;
								if ("e" == v1.charAt(0) && "x" == v1.charAt(1) && "e" == v1.charAt(2) && "c" == v1.charAt(3) && "u" == v1.charAt(4) && "t" == v1.charAt(5) && "e" == v1.charAt(6) && " " == v1.charAt(7)) {
									if (reader.hasNext() && reader.peek()._hx_index == 1) {
										let content = [];
										if (!v.endsWith("run") && Parser.executeRegExp.match(v)) {
											let p = Parser.executeRegExp.matchedPos();
											let subPos = {"file": pos.file, "line": pos.line, "col": pos.col + p.pos + p.len};
											let continuationToken = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(_StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.ltrim(v.substring(p.pos + p.len)), subPos);
											reader.insert(continuationToken);
											return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Execute(pos, _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.rtrim(v.substring(0, p.pos + 3)), Parser.innerParse(reader), isMacroArg);
										};
										let data = Parser.block(reader, function () {
											content.push(Parser.innerParse(reader));
										});
										let extraBlocks = [];
										_hx_loop2: while (true) {
											let _g = reader.peek();
											if (_g._hx_index == 0) {
												let _g1 = _g.v;
												let _g2 = _g.pos;
												switch (_g1) {
													case "else $run":
														let pos = _g2;
														reader.skip();
														let elseContent = [];
														let elseData = Parser.block(reader, function () {
															elseContent.push(Parser.innerParse(reader));
														});
														extraBlocks.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos, null, elseContent, elseData, true, false));
														break
													case "else run":
														let pos1 = _g2;
														reader.skip();
														let elseContent1 = [];
														let elseData1 = Parser.block(reader, function () {
															elseContent1.push(Parser.innerParse(reader));
														});
														extraBlocks.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos1, null, elseContent1, elseData1, false, false));
														break
													default:
													let v = _g1;
													let pos2 = _g2;
													let v1 = v;
													if ("e" == v1.charAt(0) && "l" == v1.charAt(1) && "s" == v1.charAt(2) && "e" == v1.charAt(3) && " " == v1.charAt(4) && "$" == v1.charAt(5) && v.endsWith("run")) {
														reader.skip();
														let executeCommand = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("else $".length));
														let elseContent = [];
														let elseData = Parser.block(reader, function () {
															elseContent.push(Parser.innerParse(reader));
														});
														pos2.col += 5;
														extraBlocks.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ExecuteBlock(pos2, executeCommand, elseData, elseContent, null, true));
													} else {
														let v = _g1;
														let pos = _g2;
														let v1 = v;
														if ("e" == v1.charAt(0) && "l" == v1.charAt(1) && "s" == v1.charAt(2) && "e" == v1.charAt(3) && " " == v1.charAt(4) && v.endsWith("run")) {
															reader.skip();
															let executeCommand = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("else ".length));
															let elseContent = [];
															let elseData = Parser.block(reader, function () {
																elseContent.push(Parser.innerParse(reader));
															});
															pos.col += 5;
															extraBlocks.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ExecuteBlock(pos, executeCommand, elseData, elseContent, null, false));
														} else {
															break _hx_loop2;
														};
													};
													
												};
											} else {
												break;
											};
										};
										return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ExecuteBlock(pos, v, data, content, (extraBlocks.length > 0) ? extraBlocks : null, isMacroArg);
									} else {
										if (!Parser.executeRegExp.match(v)) {
											return Parser.readRaw(pos, v, reader, isMacroArg);
										};
										let p = Parser.executeRegExp.matchedPos();
										let subPos = {"file": pos.file, "line": pos.line, "col": pos.col + p.pos + p.len};
										let continuationToken = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(_StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.ltrim(v.substring(p.pos + p.len)), subPos);
										reader.insert(continuationToken);
										return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Execute(pos, _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.rtrim(v.substring(0, p.pos + 3)), Parser.innerParse(reader), isMacroArg);
									};
								} else {
									let v1 = v;
									if ("R" == v1.charAt(0) && "E" == v1.charAt(1) && "P" == v1.charAt(2) && "E" == v1.charAt(3) && "A" == v1.charAt(4) && "T" == v1.charAt(5)) {
										return Parser.parserCompilerLoop(v, pos, reader, function () {
											return Parser.innerParse(reader);
										});
									} else {
										let v1 = v;
										if ("#" == v1.charAt(0)) {
											return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Comment(pos, v);
										} else {
											let tmp;
											if (v != "block") {
												let v1 = v;
												tmp = "b" == v1.charAt(0) && "l" == v1.charAt(1) && "o" == v1.charAt(2) && "c" == v1.charAt(3) && "k" == v1.charAt(4) && " " == v1.charAt(5);
											} else {
												tmp = true;
											};
											if (tmp) {
												let name = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("block ".length));
												let content = [];
												let data = Parser.block(reader, function () {
													content.push(Parser.innerParse(reader));
												});
												return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos, name, content, data, isMacroArg, false);
											} else {
												let v1 = v;
												if ("r" == v1.charAt(0) && "e" == v1.charAt(1) && "t" == v1.charAt(2) && "u" == v1.charAt(3) && "r" == v1.charAt(4) && "n" == v1.charAt(5) && " " == v1.charAt(6) && "r" == v1.charAt(7) && "u" == v1.charAt(8) && "n" == v1.charAt(9)) {
													let subCommand = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("return run ".length));
													let pos1 = {"file": pos.file, "line": pos.line, "col": pos.col + "return run ".length};
													let _g = reader.peek();
													if (_g._hx_index == 1) {
														let pos = _g.pos;
														let data = _g.data;
														let content = [];
														let data1 = Parser.block(reader, function () {
															content.push(Parser.innerParse(reader));
														});
														return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ReturnRun(pos, _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos, null, content, data1, false, false), isMacroArg);
													} else {
														reader.back();
														reader.update(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(subCommand, pos1));
														return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.ReturnRun(pos1, Parser.innerParse(reader), isMacroArg);
													};
												} else if (v == "tick") {
													let content = [];
													Parser.block(reader, function () {
														content.push(Parser.innerParse(reader));
													}, false);
													return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.TickBlock(pos, content);
												} else if (v == "load") {
													let content = [];
													Parser.block(reader, function () {
														content.push(Parser.innerParse(reader));
													}, false);
													return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.LoadBlock(pos, content);
												} else {
													let v1 = v;
													if ("e" == v1.charAt(0) && "q" == v1.charAt(1) && " " == v1.charAt(2)) {
														return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.EqCommand(pos, v.substring("eq ".length));
													} else {
														return Parser.readRaw(pos, v, reader, isMacroArg);
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				break
			case 1:
				let _g = token.data;
				let pos1 = token.pos;
				let content = [];
				let data = Parser.block(reader, function () {
					content.push(Parser.innerParse(reader));
				});
				return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos1, null, content, data, false, false);
				break
			default:
			throw Parser.unreachable(token);
			
		};
	}
	static readRaw(pos, v, reader, isMacro) {
		if (!reader.hasNext()) {
			return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Raw(pos, v, [], isMacro);
		};
		let content = [];
		let line = pos.line;
		_hx_loop1: while (true) {
			let _g = reader.peek();
			switch (_g._hx_index) {
				case 0:
					let v1 = _g.v;
					let pos = _g.pos;
					if (pos.line == line) {
						reader.skip();
						content.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Raw(pos, v1, [], false));
					} else {
						break _hx_loop1;
					};
					break
				case 1:
					let pos1 = _g.pos;
					let data = _g.data;
					if (pos1.line == line) {
						let blockContent = [];
						let blockData = Parser.block(reader, function () {
							blockContent.push(Parser.innerParse(reader));
						});
						content.push(_AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Block(pos1, null, blockContent, blockData, false, false));
					} else {
						break _hx_loop1;
					};
					break
				case 2:
					let pos2 = _g.pos;
					if (pos2.line == line) {
						throw Parser.unreachable(_Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Token.Literal(v, pos2));
					} else {
						break _hx_loop1;
					};
					break
				default:
				break _hx_loop1;
				
			};
		};
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.Raw(pos, v, content, isMacro);
	}
	static parseCompileTimeIf(v, pos, reader, arg) {
		let exp = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("IF".length));
		let content = [];
		let data = Parser.block(reader, function () {
			content.push(arg());
		}, false);
		let elseDatas = [];
		while (true) {
			let _g = reader.peek();
			if (_g._hx_index == 0) {
				let v = _g.v;
				let pos = _g.pos;
				let tmp;
				if (v != "ELSE") {
					let v1 = v;
					tmp = "E" == v1.charAt(0) && "L" == v1.charAt(1) && "S" == v1.charAt(2) && "E" == v1.charAt(3) && " " == v1.charAt(4);
				} else {
					tmp = true;
				};
				if (tmp) {
					reader.skip();
					let condition = (v == "ELSE") ? null : _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(v.substring("ELSE ".length));
					if (condition != null) {
						let v = condition;
						if ("I" == v.charAt(0) && "F" == v.charAt(1)) {
							condition = _StringTools_js__WEBPACK_IMPORTED_MODULE_4__.StringTools.trim(condition.substring("IF".length));
						};
					} else {
						condition = null;
					};
					let elseContent = [];
					Parser.block(reader, function () {
						elseContent.push(arg());
					}, false);
					elseDatas.push({"condition": condition, "node": elseContent});
				} else {
					break;
				};
			} else {
				break;
			};
		};
		return _AstNode_js__WEBPACK_IMPORTED_MODULE_2__.AstNode.CompileTimeIf(pos, exp, content, elseDatas);
	}
	static get __name__() {
		return "mcl.Parser"
	}
	get __class__() {
		return Parser
	}
}


Parser.loopRegExp = new _EReg_js__WEBPACK_IMPORTED_MODULE_6__.EReg("(REPEAT\\s*\\(.+?\\))\\s\\s*as\\s\\s*([a-zA-Z]+)", "")
Parser.executeRegExp = new _EReg_js__WEBPACK_IMPORTED_MODULE_6__.EReg("\\b(run\\s+?)\\b", "")

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParserError: () => (/* binding */ ParserError)
/* harmony export */ });
/* harmony import */ var _McbError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const ParserError = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.error.ParserError"] = 
class ParserError extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError) {
	new(message) {
		super.new("Parser Error:\n\t" + message);
	}
	static get __name__() {
		return "mcl.error.ParserError"
	}
	static get __super__() {
		return _McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError
	}
	get __class__() {
		return ParserError
	}
}



/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AstNode: () => (/* binding */ AstNode),
/* harmony export */   JsonTagType: () => (/* binding */ JsonTagType)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const JsonTagType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["mcl.JsonTagType"] = 
{
	__ename__: "mcl.JsonTagType",
	
	Tag: Object.assign((subType, replace, entries) => ({_hx_index: 0, __enum__: "mcl.JsonTagType", "subType": subType, "replace": replace, "entries": entries, "@kind": "Tag"}), {_hx_name: "Tag", __params__: ["subType", "replace", "entries"]}),
	Advancement: Object.assign((entries) => ({_hx_index: 1, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "Advancement"}), {_hx_name: "Advancement", __params__: ["entries"]}),
	ItemModifier: Object.assign((entries) => ({_hx_index: 2, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "ItemModifier"}), {_hx_name: "ItemModifier", __params__: ["entries"]}),
	LootTable: Object.assign((entries) => ({_hx_index: 3, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "LootTable"}), {_hx_name: "LootTable", __params__: ["entries"]}),
	Predicate: Object.assign((entries) => ({_hx_index: 4, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "Predicate"}), {_hx_name: "Predicate", __params__: ["entries"]}),
	Recipe: Object.assign((entries) => ({_hx_index: 5, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "Recipe"}), {_hx_name: "Recipe", __params__: ["entries"]}),
	ChatType: Object.assign((entries) => ({_hx_index: 6, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "ChatType"}), {_hx_name: "ChatType", __params__: ["entries"]}),
	DamageType: Object.assign((entries) => ({_hx_index: 7, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "DamageType"}), {_hx_name: "DamageType", __params__: ["entries"]}),
	Dimension: Object.assign((entries) => ({_hx_index: 8, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "Dimension"}), {_hx_name: "Dimension", __params__: ["entries"]}),
	DimensionType: Object.assign((entries) => ({_hx_index: 9, __enum__: "mcl.JsonTagType", "entries": entries, "@kind": "DimensionType"}), {_hx_name: "DimensionType", __params__: ["entries"]}),
	WorldGen: Object.assign((subType, name, entries) => ({_hx_index: 10, __enum__: "mcl.JsonTagType", "subType": subType, "name": name, "entries": entries, "@kind": "WorldGen"}), {_hx_name: "WorldGen", __params__: ["subType", "name", "entries"]})
}
JsonTagType.__constructs__ = [JsonTagType.Tag, JsonTagType.Advancement, JsonTagType.ItemModifier, JsonTagType.LootTable, JsonTagType.Predicate, JsonTagType.Recipe, JsonTagType.ChatType, JsonTagType.DamageType, JsonTagType.Dimension, JsonTagType.DimensionType, JsonTagType.WorldGen]
JsonTagType.__empty_constructs__ = []

const AstNode = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["mcl.AstNode"] = 
{
	__ename__: "mcl.AstNode",
	
	Raw: Object.assign((pos, value, continuations, isMacro) => ({_hx_index: 0, __enum__: "mcl.AstNode", "pos": pos, "value": value, "continuations": continuations, "isMacro": isMacro, "@kind": "Raw"}), {_hx_name: "Raw", __params__: ["pos", "value", "continuations", "isMacro"]}),
	FunctionDef: Object.assign((pos, name, body, appendTo) => ({_hx_index: 1, __enum__: "mcl.AstNode", "pos": pos, "name": name, "body": body, "appendTo": appendTo, "@kind": "FunctionDef"}), {_hx_name: "FunctionDef", __params__: ["pos", "name", "body", "appendTo"]}),
	TemplateDef: Object.assign((pos, name, body) => ({_hx_index: 2, __enum__: "mcl.AstNode", "pos": pos, "name": name, "body": body, "@kind": "TemplateDef"}), {_hx_name: "TemplateDef", __params__: ["pos", "name", "body"]}),
	Directory: Object.assign((pos, name, body) => ({_hx_index: 3, __enum__: "mcl.AstNode", "pos": pos, "name": name, "body": body, "@kind": "Directory"}), {_hx_name: "Directory", __params__: ["pos", "name", "body"]}),
	Import: Object.assign((pos, name) => ({_hx_index: 4, __enum__: "mcl.AstNode", "pos": pos, "name": name, "@kind": "Import"}), {_hx_name: "Import", __params__: ["pos", "name"]}),
	CompileTimeLoop: Object.assign((pos, expression, as, body) => ({_hx_index: 5, __enum__: "mcl.AstNode", "pos": pos, "expression": expression, "as": as, "body": body, "@kind": "CompileTimeLoop"}), {_hx_name: "CompileTimeLoop", __params__: ["pos", "expression", "as", "body"]}),
	CompileTimeIf: Object.assign((pos, expression, body, elseExpressions) => ({_hx_index: 6, __enum__: "mcl.AstNode", "pos": pos, "expression": expression, "body": body, "elseExpressions": elseExpressions, "@kind": "CompileTimeIf"}), {_hx_name: "CompileTimeIf", __params__: ["pos", "expression", "body", "elseExpressions"]}),
	MultiLineScript: Object.assign((pos, value) => ({_hx_index: 7, __enum__: "mcl.AstNode", "pos": pos, "value": value, "@kind": "MultiLineScript"}), {_hx_name: "MultiLineScript", __params__: ["pos", "value"]}),
	Block: Object.assign((pos, name, body, data, isMacro, isInline) => ({_hx_index: 8, __enum__: "mcl.AstNode", "pos": pos, "name": name, "body": body, "data": data, "isMacro": isMacro, "isInline": isInline, "@kind": "Block"}), {_hx_name: "Block", __params__: ["pos", "name", "body", "data", "isMacro", "isInline"]}),
	TickBlock: Object.assign((pos, body) => ({_hx_index: 9, __enum__: "mcl.AstNode", "pos": pos, "body": body, "@kind": "TickBlock"}), {_hx_name: "TickBlock", __params__: ["pos", "body"]}),
	LoadBlock: Object.assign((pos, body) => ({_hx_index: 10, __enum__: "mcl.AstNode", "pos": pos, "body": body, "@kind": "LoadBlock"}), {_hx_name: "LoadBlock", __params__: ["pos", "body"]}),
	ExecuteBlock: Object.assign((pos, execute, data, body, continuations, isMacro) => ({_hx_index: 11, __enum__: "mcl.AstNode", "pos": pos, "execute": execute, "data": data, "body": body, "continuations": continuations, "isMacro": isMacro, "@kind": "ExecuteBlock"}), {_hx_name: "ExecuteBlock", __params__: ["pos", "execute", "data", "body", "continuations", "isMacro"]}),
	ScheduleBlock: Object.assign((pos, delay, type, body, isMacro) => ({_hx_index: 12, __enum__: "mcl.AstNode", "pos": pos, "delay": delay, "type": type, "body": body, "isMacro": isMacro, "@kind": "ScheduleBlock"}), {_hx_name: "ScheduleBlock", __params__: ["pos", "delay", "type", "body", "isMacro"]}),
	SequenceBlock: Object.assign((pos, body) => ({_hx_index: 13, __enum__: "mcl.AstNode", "pos": pos, "body": body, "@kind": "SequenceBlock"}), {_hx_name: "SequenceBlock", __params__: ["pos", "body"]}),
	RuntimeLoop: Object.assign((pos, expression, body) => ({_hx_index: 14, __enum__: "mcl.AstNode", "pos": pos, "expression": expression, "body": body, "@kind": "RuntimeLoop"}), {_hx_name: "RuntimeLoop", __params__: ["pos", "expression", "body"]}),
	Comment: Object.assign((pos, value) => ({_hx_index: 15, __enum__: "mcl.AstNode", "pos": pos, "value": value, "@kind": "Comment"}), {_hx_name: "Comment", __params__: ["pos", "value"]}),
	JsonFile: Object.assign((pos, name, info) => ({_hx_index: 16, __enum__: "mcl.AstNode", "pos": pos, "name": name, "info": info, "@kind": "JsonFile"}), {_hx_name: "JsonFile", __params__: ["pos", "name", "info"]}),
	TemplateOverload: Object.assign((pos, args, body) => ({_hx_index: 17, __enum__: "mcl.AstNode", "pos": pos, "args": args, "body": body, "@kind": "TemplateOverload"}), {_hx_name: "TemplateOverload", __params__: ["pos", "args", "body"]}),
	ClockExpr: Object.assign((pos, name, time, body) => ({_hx_index: 18, __enum__: "mcl.AstNode", "pos": pos, "name": name, "time": time, "body": body, "@kind": "ClockExpr"}), {_hx_name: "ClockExpr", __params__: ["pos", "name", "time", "body"]}),
	Execute: Object.assign((pos, command, value, isMacro) => ({_hx_index: 19, __enum__: "mcl.AstNode", "pos": pos, "command": command, "value": value, "isMacro": isMacro, "@kind": "Execute"}), {_hx_name: "Execute", __params__: ["pos", "command", "value", "isMacro"]}),
	FunctionCall: Object.assign((pos, name, data, isMacro) => ({_hx_index: 20, __enum__: "mcl.AstNode", "pos": pos, "name": name, "data": data, "isMacro": isMacro, "@kind": "FunctionCall"}), {_hx_name: "FunctionCall", __params__: ["pos", "name", "data", "isMacro"]}),
	EqCommand: Object.assign((pos, command) => ({_hx_index: 21, __enum__: "mcl.AstNode", "pos": pos, "command": command, "@kind": "EqCommand"}), {_hx_name: "EqCommand", __params__: ["pos", "command"]}),
	ScheduleCall: Object.assign((pos, delay, target, mode, isMacro) => ({_hx_index: 22, __enum__: "mcl.AstNode", "pos": pos, "delay": delay, "target": target, "mode": mode, "isMacro": isMacro, "@kind": "ScheduleCall"}), {_hx_name: "ScheduleCall", __params__: ["pos", "delay", "target", "mode", "isMacro"]}),
	ReturnRun: Object.assign((pos, value, isMacro) => ({_hx_index: 23, __enum__: "mcl.AstNode", "pos": pos, "value": value, "isMacro": isMacro, "@kind": "ReturnRun"}), {_hx_name: "ReturnRun", __params__: ["pos", "value", "isMacro"]})
}
AstNode.__constructs__ = [AstNode.Raw, AstNode.FunctionDef, AstNode.TemplateDef, AstNode.Directory, AstNode.Import, AstNode.CompileTimeLoop, AstNode.CompileTimeIf, AstNode.MultiLineScript, AstNode.Block, AstNode.TickBlock, AstNode.LoadBlock, AstNode.ExecuteBlock, AstNode.ScheduleBlock, AstNode.SequenceBlock, AstNode.RuntimeLoop, AstNode.Comment, AstNode.JsonFile, AstNode.TemplateOverload, AstNode.ClockExpr, AstNode.Execute, AstNode.FunctionCall, AstNode.EqCommand, AstNode.ScheduleCall, AstNode.ReturnRun]
AstNode.__empty_constructs__ = []


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Std: () => (/* binding */ Std)
/* harmony export */ });
/* harmony import */ var _js_Boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
The Std class provides standard methods for manipulating basic types.
*/
const Std = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["Std"] = 
class Std {
	
	/**
	Converts any value to a String.
	
	If `s` is of `String`, `Int`, `Float` or `Bool`, its value is returned.
	
	If `s` is an instance of a class and that class or one of its parent classes has
	a `toString` method, that method is called. If no such method is present, the result
	is unspecified.
	
	If `s` is an enum constructor without argument, the constructor's name is returned. If
	arguments exists, the constructor's name followed by the String representations of
	the arguments is returned.
	
	If `s` is a structure, the field names along with their values are returned. The field order
	and the operator separating field names and values are unspecified.
	
	If s is null, "null" is returned.
	*/
	static string(s) {
		return _js_Boot_js__WEBPACK_IMPORTED_MODULE_0__.Boot.__string_rec(s, "");
	}
	
	/**
	Converts a `String` to an `Int`.
	
	Leading whitespaces are ignored.
	
	`x` may optionally start with a + or - to denote a postive or negative value respectively.
	
	If the optional sign is followed 0x or 0X, hexadecimal notation is recognized where the following
	digits may contain 0-9 and A-F. Both the prefix and digits are case insensitive.
	
	Otherwise `x` is read as decimal number with 0-9 being allowed characters. Octal and binary
	notations are not supported.
	
	Parsing continues until an invalid character is detected, in which case the result up to
	that point is returned. Scientific notation is not supported. That is `Std.parseInt('10e2')` produces `10`.
	
	If `x` is `null`, the result is `null`.
	If `x` cannot be parsed as integer or is empty, the result is `null`.
	
	If `x` starts with a hexadecimal prefix which is not followed by at least one valid hexadecimal
	digit, the result is unspecified.
	*/
	static parseInt(x) {
		let v = parseInt(x);
		if ((isNaN)(v)) {
			return null;
		};
		return v;
	}
	static get __name__() {
		return "Std"
	}
	get __class__() {
		return Std
	}
}


;{
	Object.defineProperty(String.prototype, "__class__", {"value": _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["String"] = String, "enumerable": false, "writable": true});
	String.__name__ = true;
	_genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["Array"] = Array;
	Array.__name__ = true;
	Date.prototype.__class__ = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["Date"] = Date;
	Date.__name__ = "Date";
	var Int = { };;
	var Dynamic = { };;
	var Float = Number;
	var Bool = Boolean;
	var Class = { };;
	var Enum = { };;
}


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Boot: () => (/* binding */ Boot)
/* harmony export */ });
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const Boot = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["js.Boot"] = 
class Boot {
	static getClass(o) {
		if (o == null) {
			return null;
		} else if (((o) instanceof Array)) {
			return Array;
		} else {
			let cl = o.__class__;
			if (cl != null) {
				return cl;
			};
			let name = Boot.__nativeClassName(o);
			if (name != null) {
				return Boot.__resolveNativeClass(name);
			};
			return null;
		};
	}
	static __string_rec(o, s) {
		if (o == null) {
			return "null";
		};
		if (s.length >= 500) {
			return "<...>";
		};
		let t = typeof(o);
		if (t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		};
		switch (t) {
			case "function":
				return "<function>";
				break
			case "object":
				if (o.__enum__) {
					let e = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxEnums")[o.__enum__];
					let con = e.__constructs__[o._hx_index];
					let n = con._hx_name;
					if (con.__params__) {
						s = s + "\t";
						return n + "(" + ((function($this) {var $r0
							let _g = [];
							{
								let _g1 = 0;
								let _g2 = con.__params__;
								while (true) {
									if (!(_g1 < _g2.length)) {
										break;
									};
									let p = _g2[_g1];
									_g1 = _g1 + 1;
									_g.push(Boot.__string_rec(o[p], s));
								};
							};
							
							$r0 = _g
							return $r0})(this)).join(",") + ")";
					} else {
						return n;
					};
				};
				if (((o) instanceof Array)) {
					let str = "[";
					s += "\t";
					let _g = 0;
					let _g1 = o.length;
					while (_g < _g1) {
						let i = _g++;
						str += ((i > 0) ? "," : "") + Boot.__string_rec(o[i], s);
					};
					str += "]";
					return str;
				};
				let tostr;
				try {
					tostr = o.toString;
				}catch (_g) {
					return "???";
				};
				if (tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
					let s2 = o.toString();
					if (s2 != "[object Object]") {
						return s2;
					};
				};
				let str = "{\n";
				s += "\t";
				let hasp = o.hasOwnProperty != null;
				let k = null;
				for( k in o ) {;
				if (hasp && !o.hasOwnProperty(k)) {
					continue;
				};
				if (k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
					continue;
				};
				if (str.length != 2) {
					str += ", \n";
				};
				str += s + k + " : " + Boot.__string_rec(o[k], s);
				};
				s = s.substring(1);
				str += "\n" + s + "}";
				return str;
				break
			case "string":
				return o;
				break
			default:
			return String(o);
			
		};
	}
	static __interfLoop(cc, cl) {
		if (cc == null) {
			return false;
		};
		if (cc == cl) {
			return true;
		};
		let intf = cc.__interfaces__;
		if (intf != null && (cc.__super__ == null || cc.__super__.__interfaces__ != intf)) {
			let _g = 0;
			let _g1 = intf.length;
			while (_g < _g1) {
				let i = _g++;
				let i1 = intf[i];
				if (i1 == cl || Boot.__interfLoop(i1, cl)) {
					return true;
				};
			};
		};
		return Boot.__interfLoop(cc.__super__, cl);
	}
	static __instanceof(o, cl) {
		if (cl == null) {
			return false;
		};
		switch (cl) {
			case Array:
				return ((o) instanceof Array);
				break
			case "$hxCoreType__Bool":
				return typeof(o) == "boolean";
				break
			case "$hxCoreType__Dynamic":
				return o != null;
				break
			case "$hxCoreType__Float":
				return typeof(o) == "number";
				break
			case "$hxCoreType__Int":
				if (typeof(o) == "number") {
					return ((o | 0) === (o));
				} else {
					return false;
				};
				break
			case String:
				return typeof(o) == "string";
				break
			default:
			if (o != null) {
				if (typeof(cl) == "function") {
					if (Boot.__downcastCheck(o, cl)) {
						return true;
					};
				} else if (typeof(cl) == "object" && Boot.__isNativeObj(cl)) {
					if (((o) instanceof cl)) {
						return true;
					};
				};
			} else {
				return false;
			};
			if ((cl == "$hxCoreType__Class") ? o.__name__ != null : false) {
				return true;
			};
			if ((cl == "$hxCoreType__Enum") ? o.__ename__ != null : false) {
				return true;
			};
			return (o.__enum__ != null) ? _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxEnums")[o.__enum__] == cl : false;
			
		};
	}
	static __downcastCheck(o, cl) {
		if (!((o) instanceof cl)) {
			if (cl.__isInterface__) {
				return Boot.__interfLoop(Boot.getClass(o), cl);
			} else {
				return false;
			};
		} else {
			return true;
		};
	}
	static __cast(o, t) {
		if (o == null || Boot.__instanceof(o, t)) {
			return o;
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception.thrown("Cannot cast " + _Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.string(o) + " to " + _Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.string(t));
		};
	}
	static __nativeClassName(o) {
		let name = Boot.__toStr.call(o).slice(8, -1);
		if (name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
			return null;
		};
		return name;
	}
	static __isNativeObj(o) {
		return Boot.__nativeClassName(o) != null;
	}
	static __resolveNativeClass(name) {
		return _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global[name];
	}
	static get __name__() {
		return "js.Boot"
	}
	get __class__() {
		return Boot
	}
}


;Boot.__toStr = ({}).toString


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EReg: () => (/* binding */ EReg)
/* harmony export */ });
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
The EReg class represents regular expressions.

While basic usage and patterns consistently work across platforms, some more
complex operations may yield different results. This is a necessary trade-
off to retain a certain level of performance.

EReg instances can be created by calling the constructor, or with the
special syntax `~/pattern/modifier`

EReg instances maintain an internal state, which is affected by several of
its methods.

A detailed explanation of the supported operations is available at
<https://haxe.org/manual/std-regex.html>
*/
const EReg = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["EReg"] = 
class EReg extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits() {
	new(r, opt) {
		this.r = new RegExp(r, opt.split("u").join(""));
	}
	
	/**
	Tells if `this` regular expression matches String `s`.
	
	This method modifies the internal state.
	
	If `s` is `null`, the result is unspecified.
	*/
	match(s) {
		if (this.r.global) {
			this.r.lastIndex = 0;
		};
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	
	/**
	Returns the matched sub-group `n` of `this` EReg.
	
	This method should only be called after `this.match` or
	`this.matchSub`, and then operates on the String of that operation.
	
	The index `n` corresponds to the n-th set of parentheses in the pattern
	of `this` EReg. If no such sub-group exists, the result is unspecified.
	
	If `n` equals 0, the whole matched substring is returned.
	*/
	matched(n) {
		if (this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception.thrown("EReg::matched");
		};
	}
	
	/**
	Returns the part to the right of the last matched substring.
	
	If the most recent call to `this.match` or `this.matchSub` did not
	match anything, the result is unspecified.
	
	If the global g modifier was in place for the matching, only the
	substring to the right of the leftmost match is returned.
	
	The result does not include the matched part.
	*/
	matchedRight() {
		if (this.r.m == null) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception.thrown("No string matched");
		};
		let sz = this.r.m.index + this.r.m[0].length;
		return _HxOverrides_js__WEBPACK_IMPORTED_MODULE_2__.HxOverrides.substr(this.r.s, sz, this.r.s.length - sz);
	}
	
	/**
	Returns the position and length of the last matched substring, within
	the String which was last used as argument to `this.match` or
	`this.matchSub`.
	
	If the most recent call to `this.match` or `this.matchSub` did not
	match anything, the result is unspecified.
	
	If the global g modifier was in place for the matching, the position and
	length of the leftmost substring is returned.
	*/
	matchedPos() {
		if (this.r.m == null) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_0__.Exception.thrown("No string matched");
		};
		return {"pos": this.r.m.index, "len": this.r.m[0].length};
	}
	static get __name__() {
		return "EReg"
	}
	get __class__() {
		return EReg
	}
}



/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlattenedType: () => (/* binding */ FlattenedType),
/* harmony export */   McMath: () => (/* binding */ McMath)
/* harmony export */ });
/* harmony import */ var _haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _haxpression_Parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _haxpression_Expression_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);











const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.$global

const FlattenedType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.global("$hxEnums")["mcl.FlattenedType"] = 
{
	__ename__: "mcl.FlattenedType",
	
	FLiteral: Object.assign((value) => ({_hx_index: 0, __enum__: "mcl.FlattenedType", "value": value, "@kind": "FLiteral"}), {_hx_name: "FLiteral", __params__: ["value"]}),
	FIdentifier: Object.assign((name) => ({_hx_index: 1, __enum__: "mcl.FlattenedType", "name": name, "@kind": "FIdentifier"}), {_hx_name: "FIdentifier", __params__: ["name"]}),
	FUnary: Object.assign((operant, operand) => ({_hx_index: 2, __enum__: "mcl.FlattenedType", "operant": operant, "operand": operand, "@kind": "FUnary"}), {_hx_name: "FUnary", __params__: ["operant", "operand"]}),
	FBinary: Object.assign((operant, left, right) => ({_hx_index: 3, __enum__: "mcl.FlattenedType", "operant": operant, "left": left, "right": right, "@kind": "FBinary"}), {_hx_name: "FBinary", __params__: ["operant", "left", "right"]}),
	FAdd: Object.assign((item) => ({_hx_index: 4, __enum__: "mcl.FlattenedType", "item": item, "@kind": "FAdd"}), {_hx_name: "FAdd", __params__: ["item"]}),
	FMul: Object.assign((item) => ({_hx_index: 5, __enum__: "mcl.FlattenedType", "item": item, "@kind": "FMul"}), {_hx_name: "FMul", __params__: ["item"]}),
	FCall: Object.assign((callee, args) => ({_hx_index: 6, __enum__: "mcl.FlattenedType", "callee": callee, "args": args, "@kind": "FCall"}), {_hx_name: "FCall", __params__: ["callee", "args"]}),
	FConditional: Object.assign((test, consequent, alternate) => ({_hx_index: 7, __enum__: "mcl.FlattenedType", "test": test, "consequent": consequent, "alternate": alternate, "@kind": "FConditional"}), {_hx_name: "FConditional", __params__: ["test", "consequent", "alternate"]}),
	FArray: Object.assign((items) => ({_hx_index: 8, __enum__: "mcl.FlattenedType", "items": items, "@kind": "FArray"}), {_hx_name: "FArray", __params__: ["items"]}),
	FCompound: Object.assign((items) => ({_hx_index: 9, __enum__: "mcl.FlattenedType", "items": items, "@kind": "FCompound"}), {_hx_name: "FCompound", __params__: ["items"]})
}
FlattenedType.__constructs__ = [FlattenedType.FLiteral, FlattenedType.FIdentifier, FlattenedType.FUnary, FlattenedType.FBinary, FlattenedType.FAdd, FlattenedType.FMul, FlattenedType.FCall, FlattenedType.FConditional, FlattenedType.FArray, FlattenedType.FCompound]
FlattenedType.__empty_constructs__ = []

const McMath = _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.global("$hxClasses")["mcl.McMath"] = 
class McMath {
	static flatten(exp) {
		switch (exp._hx_index) {
			case 0:
				let value = exp.value;
				return FlattenedType.FLiteral(value);
				break
			case 1:
				let name = exp.name;
				return FlattenedType.FIdentifier(name);
				break
			case 2:
				let operant = exp.operator2;
				let operand = exp.operand;
				return FlattenedType.FUnary(operant, McMath.flatten(operand));
				break
			case 3:
				let operant1 = exp.operator2;
				let left = exp.left;
				let right = exp.right;
				if (operant1 == "+") {
					let entries = new Array();
					let literals = 0;
					let flattenAdd = null;
					flattenAdd = function (exp) {
						switch (exp._hx_index) {
							case 0:
								let value = exp.value;
								switch (value._hx_index) {
									case 0:
										let v = value.v;
										if (v == Math.floor(v)) {
											literals += Math.floor(v);
										} else {
											entries.push(McMath.flatten(exp));
										};
										break
									case 1:
										let v1 = value.v;
										literals += v1;
										break
									default:
									entries.push(McMath.flatten(exp));
									
								};
								break
							case 3:
								if (exp.operator2 == "+") {
									let left = exp.left;
									let right = exp.right;
									flattenAdd(left);
									flattenAdd(right);
								} else {
									entries.push(McMath.flatten(exp));
								};
								break
							default:
							entries.push(McMath.flatten(exp));
							
						};
					};
					flattenAdd(exp);
					if (literals != 0) {
						entries.push(FlattenedType.FLiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(literals)));
					};
					return FlattenedType.FAdd(entries);
				};
				if (operant1 == "*") {
					let entries = new Array();
					let literals = 1;
					let flattenMul = null;
					flattenMul = function (exp) {
						switch (exp._hx_index) {
							case 0:
								let value = exp.value;
								switch (value._hx_index) {
									case 0:
										let v = value.v;
										if (v == Math.floor(v)) {
											literals *= Math.floor(v);
										} else {
											entries.push(McMath.flatten(exp));
										};
										break
									case 1:
										let v1 = value.v;
										literals *= v1;
										break
									default:
									entries.push(McMath.flatten(exp));
									
								};
								break
							case 3:
								if (exp.operator2 == "*") {
									let left = exp.left;
									let right = exp.right;
									flattenMul(left);
									flattenMul(right);
								} else {
									entries.push(McMath.flatten(exp));
								};
								break
							default:
							entries.push(McMath.flatten(exp));
							
						};
					};
					flattenMul(exp);
					if (literals != 1) {
						entries.push(FlattenedType.FLiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(literals)));
					};
					return FlattenedType.FMul(entries);
				};
				return FlattenedType.FBinary(operant1, McMath.flatten(left), McMath.flatten(right));
				break
			case 4:
				let callee = exp.callee;
				let args = exp["arguments"];
				let f = McMath.flatten;
				let result = new Array(args.length);
				let _g = 0;
				let _g1 = args.length;
				while (_g < _g1) {
					let i = _g++;
					result[i] = f(args[i]);
				};
				return FlattenedType.FCall(callee, result);
				break
			case 5:
				let test = exp.test;
				let consequent = exp.consequent;
				let alternate = exp.alternate;
				return FlattenedType.FConditional(McMath.flatten(test), McMath.flatten(consequent), McMath.flatten(alternate));
				break
			case 6:
				let items = exp.items;
				let f1 = McMath.flatten;
				let result1 = new Array(items.length);
				let _g2 = 0;
				let _g3 = items.length;
				while (_g2 < _g3) {
					let i = _g2++;
					result1[i] = f1(items[i]);
				};
				return FlattenedType.FArray(result1);
				break
			case 7:
				let items1 = exp.items;
				let f2 = McMath.flatten;
				let result2 = new Array(items1.length);
				let _g4 = 0;
				let _g5 = items1.length;
				while (_g4 < _g5) {
					let i = _g4++;
					result2[i] = f2(items1[i]);
				};
				return FlattenedType.FCompound(result2);
				break
			
		};
	}
	static organize(exp) {
		switch (exp._hx_index) {
			case 0:
				let value = exp.value;
				switch (value._hx_index) {
					case 0:
						let v = value.v;
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VFloat(v));
						break
					case 1:
						let v1 = value.v;
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(v1));
						break
					case 2:
						let v2 = value.v;
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VBool(v2));
						break
					case 3:
						let v3 = value.v;
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VString(v3));
						break
					default:
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported literal");
					
				};
				break
			case 1:
				let name = exp.name;
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EIdentifier(name);
				break
			case 2:
				let operant = exp.operator2;
				let operand = exp.operand;
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EUnary(operant, McMath.organize(operand));
				break
			case 3:
				let _g = exp.operator2;
				let _g1 = exp.left;
				let _g2 = exp.right;
				if (_g1._hx_index == 0) {
					let a = _g1.value;
					let operant = _g;
					let right = _g2;
					let v;
					switch (a._hx_index) {
						case 0:
							let v1 = a.v;
							if (v1 == Math.floor(v1)) {
								v = Math.floor(v1);
							} else {
								return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(a), McMath.organize(right));
							};
							break
						case 1:
							let v2 = a.v;
							v = v2;
							break
						default:
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(a), McMath.organize(right));
						
					};
					if (operant == "+") {
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, McMath.organize(right), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(v)));
					};
					if (operant == "-") {
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary("+", McMath.organize(right), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(-v)));
					};
					if (operant == "*") {
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, McMath.organize(right), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(v)));
					};
					return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(a), McMath.organize(right));
				} else if (_g == "-") {
					if (_g2._hx_index == 0) {
						let left = _g1;
						let value = _g2.value;
						let v;
						switch (value._hx_index) {
							case 0:
								let v1 = value.v;
								if (v1 == Math.floor(v1)) {
									v = Math.floor(v1);
								} else {
									return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary("-", McMath.organize(left), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(value));
								};
								break
							case 1:
								let v2 = value.v;
								v = v2;
								break
							default:
							return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary("-", McMath.organize(left), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(value));
							
						};
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary("+", McMath.organize(left), _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ELiteral(_haxpression_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(-v)));
					} else {
						let left = _g1;
						let operant = _g;
						let right = _g2;
						return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, McMath.organize(left), McMath.organize(right));
					};
				} else {
					let left = _g1;
					let operant = _g;
					let right = _g2;
					return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EBinary(operant, McMath.organize(left), McMath.organize(right));
				};
				break
			case 4:
				let name1 = exp.callee;
				let args = exp["arguments"];
				let f = McMath.organize;
				let result = new Array(args.length);
				let _g3 = 0;
				let _g4 = args.length;
				while (_g3 < _g4) {
					let i = _g3++;
					result[i] = f(args[i]);
				};
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ECall(name1, result);
				break
			case 5:
				let test = exp.test;
				let consequent = exp.consequent;
				let alternate = exp.alternate;
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EConditional(McMath.organize(test), McMath.organize(consequent), McMath.organize(alternate));
				break
			case 6:
				let items = exp.items;
				let f1 = McMath.organize;
				let result1 = new Array(items.length);
				let _g5 = 0;
				let _g6 = items.length;
				while (_g5 < _g6) {
					let i = _g5++;
					result1[i] = f1(items[i]);
				};
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.EArray(result1);
				break
			case 7:
				let items1 = exp.items;
				let f2 = McMath.organize;
				let result2 = new Array(items1.length);
				let _g7 = 0;
				let _g8 = items1.length;
				while (_g7 < _g8) {
					let i = _g7++;
					result2[i] = f2(items1[i]);
				};
				return _haxpression_ExpressionType_js__WEBPACK_IMPORTED_MODULE_2__.ExpressionType.ECompound(result2);
				break
			
		};
	}
	static compile(eq, context) {
		let _g = 0;
		let _g1 = eq.length;
		while (_g < _g1) {
			let i = _g++;
			if (eq.charAt(i) == "@" && eq.charAt(i + 1) != "s" && eq.charAt(i + 2) != "[") {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("only unrestricted @s selectors are allowed in equations to avoid unexpected behavior.");
			};
		};
		let skip = function () {
			let idx = 0;
			while (eq.charAt(idx) == " " && idx < eq.length) ++idx;
			eq = eq.substring(idx);
		};
		let collect = function () {
			let value = "";
			let idx = 0;
			while (eq.charAt(idx) != " " && idx < eq.length) {
				value += eq.charAt(idx);
				++idx;
			};
			eq = eq.substring(idx);
			return value;
		};
		let lhs = collect();
		skip();
		lhs += " " + collect();
		skip();
		let sep = collect();
		skip();
		let rhs = eq;
		let variables = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__.StringMap();
		let idx = 0;
		let isAlphaNumeric = function (c) {
			let code = c.charCodeAt(0);
			if (!(code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code == 46 || code == 95 || code == 36 || code == 35)) {
				return code == 64;
			} else {
				return true;
			};
		};
		let varnameIdx = 0;
		let getNextVarName = function () {
			varnameIdx += 1;
			return "var" + varnameIdx;
		};
		let newEquation = "";
		while (idx < rhs.length) {
			let c = rhs.charAt(idx);
			let code = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.cca(c, 0);
			if (code == 64 || code >= 97 && code <= 122 || code >= 65 && code <= 90) {
				let name = "";
				while (idx < rhs.length && isAlphaNumeric(rhs.charAt(idx))) {
					name += rhs.charAt(idx);
					++idx;
				};
				++idx;
				name += " ";
				while (idx < rhs.length && isAlphaNumeric(rhs.charAt(idx))) {
					name += rhs.charAt(idx);
					++idx;
				};
				if (!variables.inst.has(name)) {
					let value = getNextVarName();
					variables.inst.set(name, value);
				};
				newEquation += variables.inst.get(name);
			} else {
				newEquation += c;
				++idx;
			};
		};
		let x = McMath.flatten(McMath.organize(_haxpression_Expression_js__WEBPACK_IMPORTED_MODULE_3__.Expression.toExpressionType(_haxpression_Expression_js__WEBPACK_IMPORTED_MODULE_3__.Expression.simplify(_haxpression_Parser_js__WEBPACK_IMPORTED_MODULE_1__.Parser.parse(newEquation)))));
		let _g2 = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__.StringMap();
		let map = variables;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			_g2.inst.set(v, k);
		};
		return McMath.render(x, lhs, _g2, sep, context);
	}
	static render(x, result, variables, finalOp, context) {
		let commands = [];
		let idx = 0;
		let unsafeToModify_inst = new Map();
		let $const = context.compiler.config.eqConstScoreboardName;
		let temp = context.compiler.config.eqVarScoreboardName;
		let constantValues_inst = new Map();
		let c = function (v, remove) {
			if (remove == null) {
				remove = false;
			};
			if (remove) {
				let count = constantValues_inst.get(v);
				--count;
				if (count <= 0) {
					constantValues_inst["delete"](v);
				} else {
					constantValues_inst.set(v, count);
				};
			} else {
				let count = constantValues_inst.get(v);
				if (count == null) {
					count = 1;
				} else {
					++count;
				};
				constantValues_inst.set(v, count);
			};
		};
		let map = variables;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			unsafeToModify_inst.set(v, true);
		};
		let isSafeToModify = function (s) {
			if (unsafeToModify_inst.has(s)) {
				return false;
			};
			if (s.endsWith(" " + $const)) {
				return false;
			};
			return true;
		};
		let mkTemp = function (from, alt) {
			if (alt != null && isSafeToModify(alt)) {
				commands.push("scoreboard players operation " + alt + " = " + from);
				return alt;
			};
			idx += 1;
			let id = "tmp" + (idx - 1) + " " + temp;
			if (from.endsWith(" " + $const)) {
				c(_Std_js__WEBPACK_IMPORTED_MODULE_8__.Std.parseInt(from.substring(0, from.length - 6)), true);
				commands.push("scoreboard players set " + id + " " + from.substring(0, from.length - 6));
			} else {
				commands.push("scoreboard players operation " + id + " = " + from);
			};
			return id;
		};
		let makeSafe = function (v, alt) {
			if (isSafeToModify(v)) {
				return v;
			};
			return mkTemp(v, alt);
		};
		let isConstant = function (v) {
			if (v._hx_index == 0) {
				let _g = v.value;
				return true;
			} else {
				return false;
			};
		};
		let isVariable = function (v) {
			if (v._hx_index == 1) {
				let _g = v.name;
				return true;
			} else {
				return false;
			};
		};
		let getVariable = function (v) {
			if (v._hx_index == 1) {
				let name = v.name;
				return variables.inst.get(name);
			} else {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("not a variable");
			};
		};
		let getValue = function (v) {
			if (v._hx_index == 0) {
				let value = v.value;
				switch (value._hx_index) {
					case 0:
						let v1 = value.v;
						return v1;
						break
					case 1:
						let v2 = value.v;
						return v2;
						break
					default:
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported literal");
					
				};
			};
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("not a constant");
		};
		let getConstant = function (v) {
			let val = Math.floor(getValue(v));
			c(val);
			return "" + val + " " + $const;
		};
		let renderNode = null;
		renderNode = function (node, output) {
			switch (node._hx_index) {
				case 0:
					let id = node.value;
					switch (id._hx_index) {
						case 0:
							let v = id.v;
							c(Math.floor(v));
							return "" + Math.floor(v) + " " + $const;
							break
						case 1:
							let v1 = id.v;
							c(v1);
							return "" + v1 + " " + $const;
							break
						default:
						throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported literal");
						
					};
					break
				case 1:
					let id1 = node.name;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("NO NO NO NO NO2");
					break
				case 2:
					let operant = node.operant;
					let operand = node.operand;
					let l = (isVariable(operand)) ? makeSafe(getVariable(operand), output) : (isConstant(operand)) ? makeSafe(getConstant(operand), output) : renderNode(operand, output);
					if (operant == "-") {
						let r = makeSafe(l);
						c(-1);
						commands.push("scoreboard players operation " + r + " *= -1 " + $const);
						return r;
					};
					return l;
					break
				case 3:
					let operant1 = node.operant;
					let left = node.left;
					let right = node.right;
					let l1 = (isVariable(left)) ? makeSafe(getVariable(left), output) : (isConstant(left)) ? makeSafe(getConstant(left), output) : renderNode(left, output);
					let r = (isVariable(right)) ? getVariable(right) : (isConstant(right)) ? getConstant(right) : renderNode(right, null);
					commands.push("scoreboard players operation " + l1 + " " + operant1 + "= " + r);
					return l1;
					break
				case 4:
					let items = node.item;
					let l2 = (isVariable(items[0])) ? makeSafe(getVariable(items[0]), output) : (isConstant(items[0])) ? makeSafe(getConstant(items[0]), output) : renderNode(items[0], output);
					let _g = 1;
					let _g1 = items.length;
					while (_g < _g1) {
						let i = _g++;
						if (isVariable(items[i])) {
							commands.push("scoreboard players operation " + l2 + " += " + getVariable(items[i]));
						} else if (isConstant(items[i])) {
							let v = getValue(items[i]);
							if (v > 0) {
								commands.push("scoreboard players add " + l2 + " " + v);
							} else if (v < 0) {
								commands.push("scoreboard players remove " + l2 + " " + -v);
							};
						} else {
							let r = renderNode(items[i], null);
							commands.push("scoreboard players operation " + l2 + " += " + r);
						};
					};
					return l2;
					break
				case 5:
					let items1 = node.item;
					let l3 = (isVariable(items1[0])) ? makeSafe(getVariable(items1[0]), output) : (isConstant(items1[0])) ? makeSafe(getConstant(items1[0]), output) : renderNode(items1[0], output);
					let _g2 = 1;
					let _g3 = items1.length;
					while (_g2 < _g3) {
						let i = _g2++;
						let r = (isVariable(items1[i])) ? getVariable(items1[i]) : (isConstant(items1[i])) ? getConstant(items1[i]) : renderNode(items1[i], null);
						commands.push("scoreboard players operation " + l3 + " *= " + r);
					};
					return l3;
					break
				case 6:
					let callee = node.callee;
					let args = node.args;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported call");
					break
				case 7:
					let test = node.test;
					let consequent = node.consequent;
					let alternate = node.alternate;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported conditional");
					break
				case 8:
					let items2 = node.items;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported array");
					break
				case 9:
					let items3 = node.items;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("unsupported compound");
					break
				
			};
		};
		if (isConstant(x) && finalOp == "=") {
			commands.push("scoreboard players set " + result + " " + getValue(x));
		} else if (isVariable(x)) {
			commands.push("scoreboard players operation " + result + " " + finalOp + " " + getVariable(x));
		} else {
			let stored = renderNode(x, result);
			if (result != stored) {
				commands.push("scoreboard players operation " + result + " " + finalOp + " " + stored);
			};
		};
		let tmp = commands.join("\n");
		let _g = [];
		let k = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_6__.EsMap.adaptIterator(constantValues_inst.keys());
		while (k.hasNext()) {
			let k1 = k.next();
			_g.push(k1);
		};
		return {"commands": tmp, "constants": _g};
	}
	static get __name__() {
		return "mcl.McMath"
	}
	get __class__() {
		return McMath
	}
}



/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueType: () => (/* binding */ ValueType)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const ValueType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["haxpression.ValueType"] = 
{
	__ename__: "haxpression.ValueType",
	
	VFloat: Object.assign((v) => ({_hx_index: 0, __enum__: "haxpression.ValueType", "v": v, "@kind": "VFloat"}), {_hx_name: "VFloat", __params__: ["v"]}),
	VInt: Object.assign((v) => ({_hx_index: 1, __enum__: "haxpression.ValueType", "v": v, "@kind": "VInt"}), {_hx_name: "VInt", __params__: ["v"]}),
	VBool: Object.assign((v) => ({_hx_index: 2, __enum__: "haxpression.ValueType", "v": v, "@kind": "VBool"}), {_hx_name: "VBool", __params__: ["v"]}),
	VString: Object.assign((v) => ({_hx_index: 3, __enum__: "haxpression.ValueType", "v": v, "@kind": "VString"}), {_hx_name: "VString", __params__: ["v"]}),
	VNA: {_hx_name: "VNA", _hx_index: 4, __enum__: "haxpression.ValueType", "@kind": "VNA"},
	VNM: {_hx_name: "VNM", _hx_index: 5, __enum__: "haxpression.ValueType", "@kind": "VNM"}
}
ValueType.__constructs__ = [ValueType.VFloat, ValueType.VInt, ValueType.VBool, ValueType.VString, ValueType.VNA, ValueType.VNM]
ValueType.__empty_constructs__ = [ValueType.VNA, ValueType.VNM]


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _ValueType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _Expression_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);











const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.$global

const Parser = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.global("$hxClasses")["haxpression.Parser"] = 
class Parser extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.inherits() {
	new(inputString) {
		this.inputString = inputString;
		this.index = 0;
		this.length = inputString.length;
		this.expressions = [];
	}
	internalParse() {
		while (this.index < this.length) {
			let charCode = this.charCodeAt(this.index);
			if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.SEMICOLON_CODE || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.COMMA_CODE) {
				this.index++;
			} else {
				let expression = this.gobbleExpression();
				if (expression != null) {
					this.expressions.push(expression);
				} else if (this.index < this.length) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("unexpected internal parse \"" + this.charAt(this.index) + "\"", this.inputString, this.index));
				};
			};
		};
		if (this.expressions.length == 1) {
			return this.expressions[0];
		} else {
			let _this = this.expressions;
			let result = new Array(_this.length);
			let _g = 0;
			let _g1 = _this.length;
			while (_g < _g1) {
				let i = _g++;
				result[i] = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(_this[i]);
			};
			return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ECompound(result));
		};
	}
	charAt(index) {
		return this.inputString.charAt(index);
	}
	charCodeAt(index) {
		return _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.cca(this.inputString, index);
	}
	gobbleSpaces() {
		let charCode = this.charCodeAt(this.index);
		while (this.index < this.length && _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isWhiteSpace(charCode)) charCode = this.charCodeAt(++this.index);
	}
	gobbleExpression() {
		let expression = this.gobbleBinaryExpression();
		this.gobbleSpaces();
		if (this.charCodeAt(this.index) == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.QUESTION_MARK_CODE) {
			this.index++;
			let consequent = this.gobbleExpression();
			if (consequent == null) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected a \"consequent\" expression for ternary conditional expression", this.inputString, this.index));
			};
			this.gobbleSpaces();
			if (this.charCodeAt(this.index) == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.COLON_CODE) {
				this.index++;
				let alternate = this.gobbleExpression();
				if (alternate == null) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected an \"alternate\" expression for ternary conditional expression", this.inputString, this.index));
				};
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EConditional(_Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(expression), _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(consequent), _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(alternate)));
			};
		};
		return expression;
	}
	gobbleBinaryOperator() {
		this.gobbleSpaces();
		let toCheck = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.substr(this.inputString, this.index, _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_6__.BinaryOperations.getMaxOperatorLength());
		let toCheckLength = toCheck.length;
		while (toCheckLength > 0) {
			if (_BinaryOperations_js__WEBPACK_IMPORTED_MODULE_6__.BinaryOperations.hasOperator(toCheck)) {
				this.index += toCheckLength;
				return toCheck;
			};
			--toCheckLength;
			toCheck = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.substr(toCheck, 0, toCheckLength);
		};
		return null;
	}
	gobbleBinaryExpression() {
		let $char;
		let expression;
		let binaryOperator;
		let precedence;
		let stack;
		let left;
		let right;
		let left1 = this.gobbleToken();
		let binaryOperator1 = this.gobbleBinaryOperator();
		if (binaryOperator1 == null) {
			return left1;
		};
		let binaryOperatorInfo = {"op": binaryOperator1, "precedence": _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_6__.BinaryOperations.getOperatorPrecedence(binaryOperator1)};
		let right1 = this.gobbleToken();
		if (right1 == null) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected expression after binary op: \"" + binaryOperator1 + "\"", this.inputString, this.index));
		};
		let stack1 = [left1, binaryOperatorInfo, right1];
		while (true) {
			binaryOperator1 = this.gobbleBinaryOperator();
			if (!(binaryOperator1 != null)) {
				break;
			};
			precedence = _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_6__.BinaryOperations.getOperatorPrecedence(binaryOperator1);
			if (precedence == 0) {
				break;
			};
			binaryOperatorInfo = {"op": binaryOperator1, "precedence": precedence};
			while (stack1.length > 2 && precedence <= stack1[stack1.length - 2].precedence) {
				right1 = stack1.pop();
				binaryOperator1 = stack1.pop().op;
				left1 = stack1.pop();
				let expression = _ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EBinary(binaryOperator1, _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(left1), _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(right1));
				stack1.push(expression);
			};
			expression = this.gobbleToken();
			if (expression == null) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected expression after binary op: \"" + binaryOperator1 + "\"", this.inputString, this.index));
			};
			stack1.push(binaryOperatorInfo);
			stack1.push(expression);
		};
		let i = stack1.length - 1;
		expression = stack1[i];
		while (i > 1) {
			expression = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EBinary(stack1[i - 1].op, stack1[i - 2], _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(expression)));
			i -= 2;
		};
		return expression;
	}
	gobbleToken() {
		this.gobbleSpaces();
		let charCode = this.charCodeAt(this.index);
		if (_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isDecimalDigit(charCode) || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.PERIOD_CODE) {
			return this.gobbleNumericLiteral();
		} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.SINGLE_QUOTE_CODE || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.DOUBLE_QUOTE_CODE) {
			return this.gobbleStringLiteral();
		} else if (_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isIdentifierStart(charCode) || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_PAREN_CODE) {
			return this.gobbleVariable();
		} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_BRACKET_CODE) {
			return this.gobbleArray();
		} else {
			let toCheck = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.substr(this.inputString, this.index, _UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__.UnaryOperations.getMaxOperatorLength());
			let toCheckLength = toCheck.length;
			while (toCheckLength > 0) {
				if (_UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__.UnaryOperations.hasOperator(toCheck)) {
					this.index += toCheckLength;
					return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EUnary(toCheck, _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(this.gobbleToken())));
				};
				--toCheckLength;
				toCheck = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.substr(toCheck, 0, toCheckLength);
			};
			return null;
		};
	}
	gobbleNumericLiteral() {
		let numberString = "";
		while (this.index < this.length && _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isDecimalDigit(this.charCodeAt(this.index))) numberString += this.charAt(this.index++);
		if (this.charCodeAt(this.index) == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.PERIOD_CODE) {
			numberString += this.charAt(this.index++);
			while (this.index < this.length && _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isDecimalDigit(this.charCodeAt(this.index))) numberString += this.charAt(this.index++);
		};
		let $char = this.charAt(this.index);
		if ($char == "e" || $char == "E") {
			numberString += this.charAt(this.index++);
			$char = this.charAt(this.index);
			if ($char == "+" || $char == "-") {
				numberString += this.charAt(this.index++);
			};
			while (this.index < this.length && _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isDecimalDigit(this.charCodeAt(this.index))) numberString += this.charAt(this.index++);
			if (!_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isDecimalDigit(this.charCodeAt(this.index - 1))) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected exponent in numeric literal: \"" + numberString + this.charAt(this.index) + "\"", this.inputString, this.index));
			};
		};
		if (this.index >= this.length) {
			return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VFloat(parseFloat(numberString))));
		};
		let charCode = this.charCodeAt(this.index);
		if (_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isIdentifierStart(charCode)) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("variable names cannot start with a number: \"" + numberString + this.charAt(this.index) + "\"", this.inputString, this.index));
		} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.PERIOD_CODE) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("unexpected period in numeric literal: \"" + numberString + this.charAt(this.index) + "\"", this.inputString, this.index));
		};
		return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VFloat(parseFloat(numberString))));
	}
	gobbleStringLiteral() {
		let str = "";
		let quote = this.charAt(this.index++);
		let closed = false;
		while (this.index < this.length) {
			let $char = this.charAt(this.index++);
			if ($char == quote) {
				closed = true;
				break;
			} else if ($char == "\\") {
				$char = this.charAt(this.index++);
				switch ($char) {
					case "n":
						str += "\n";
						break
					case "r":
						str += "\r";
						break
					case "t":
						str += "\t";
						break
					case "v":
						str += "\x0B";
						break
					
				};
			} else {
				str += $char;
			};
		};
		if (!closed) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("unclosed quote after: \"" + str + "\"", this.inputString, this.index));
		};
		return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VString(str)));
	}
	gobbleIdentifier() {
		let charCode = this.charCodeAt(this.index);
		let start = this.index;
		if (_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isIdentifierStart(charCode)) {
			this.index++;
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("unexpected " + this.charAt(this.index), this.inputString, this.index));
		};
		while (this.index < this.length) {
			charCode = this.charCodeAt(this.index);
			if (_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.isIdentifierPart(charCode)) {
				this.index++;
			} else {
				break;
			};
		};
		let identifier = this.inputString.substring(start, this.index);
		switch (identifier.toLowerCase()) {
			case "false":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VBool(false)));
				break
			case "na":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VNA));
				break
			case "nm":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VNM));
				break
			case "null":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VNA));
				break
			case "true":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VBool(true)));
				break
			case "undefined":
				return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ELiteral(_ValueType_js__WEBPACK_IMPORTED_MODULE_1__.ValueType.VNA));
				break
			default:
			return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EIdentifier(identifier));
			
		};
	}
	gobbleArguments(terminationCharCode) {
		let expressions = [];
		let sawTermination = false;
		while (this.index < this.length) {
			this.gobbleSpaces();
			let charCode = this.charCodeAt(this.index);
			if (charCode == terminationCharCode) {
				sawTermination = true;
				this.index++;
				break;
			} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.COMMA_CODE) {
				this.index++;
			} else {
				let expression = this.gobbleExpression();
				if (expression == null || _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.isCompound(expression)) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected comma between arguments", this.inputString, this.index));
				};
				expressions.push(expression);
			};
		};
		if (!sawTermination) {
			let $char = String.fromCodePoint(terminationCharCode);
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected termination character: \"" + $char + "\"", this.inputString, this.index));
		};
		return expressions;
	}
	gobbleVariable() {
		let charCode = this.charCodeAt(this.index);
		let expression;
		if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_PAREN_CODE) {
			expression = this.gobbleGroup();
		} else {
			expression = this.gobbleIdentifier();
		};
		this.gobbleSpaces();
		if (this.index < this.length) {
			charCode = this.charCodeAt(this.index);
			while (this.index < this.length && (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.PERIOD_CODE || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_BRACKET_CODE || charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_PAREN_CODE)) {
				this.index++;
				if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.PERIOD_CODE) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("member access expressions like \"a.b\" are not supported", this.inputString, this.index));
				} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_BRACKET_CODE) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("member access expressions like \"a[\"b\"]\" are not supported", this.inputString, this.index));
				} else if (charCode == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.OPEN_PAREN_CODE) {
					let callee;
					let _g = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(expression);
					if (_g._hx_index == 1) {
						let name = _g.name;
						callee = name;
					} else {
						throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("expected function name identifier for function call expression", this.inputString, this.index));
					};
					let _this = this.gobbleArguments(_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.CLOSE_PAREN_CODE);
					let result = new Array(_this.length);
					let _g1 = 0;
					let _g2 = _this.length;
					while (_g1 < _g2) {
						let i = _g1++;
						result[i] = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(_this[i]);
					};
					let $arguments = result;
					expression = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.ECall(callee, $arguments));
				};
				this.gobbleSpaces();
				charCode = this.charCodeAt(this.index);
			};
		};
		return expression;
	}
	gobbleGroup() {
		this.index++;
		let expression = this.gobbleExpression();
		if (this.charCodeAt(this.index) == _utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.CLOSE_PAREN_CODE) {
			this.index++;
			return expression;
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_7__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("unclosed (", this.inputString, this.index));
		};
	}
	gobbleArray() {
		this.index++;
		let _this = this.gobbleArguments(_utils_Chars_js__WEBPACK_IMPORTED_MODULE_0__.Chars.CLOSE_BRACKET_CODE);
		let result = new Array(_this.length);
		let _g = 0;
		let _g1 = _this.length;
		while (_g < _g1) {
			let i = _g++;
			result[i] = _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.toExpressionType(_this[i]);
		};
		let items = result;
		return _Expression_js__WEBPACK_IMPORTED_MODULE_4__.Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionType.EArray(items));
	}
	static parse(input) {
		let parser = new Parser(input);
		return parser.internalParse();
	}
	static get __name__() {
		return "haxpression.Parser"
	}
	get __class__() {
		return Parser
	}
}



/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chars: () => (/* binding */ Chars)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Chars = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxpression.utils.Chars"] = 
class Chars {
	static isDecimalDigit(charCode) {
		if (charCode >= 48) {
			return charCode <= 57;
		} else {
			return false;
		};
	}
	static isUpperCaseLetter(charCode) {
		if (charCode >= 65) {
			return charCode <= 90;
		} else {
			return false;
		};
	}
	static isLowerCaseLetter(charCode) {
		if (charCode >= 97) {
			return charCode <= 122;
		} else {
			return false;
		};
	}
	static isIdentifierStart(charCode) {
		if (!(charCode == Chars.DOLLAR_CODE || charCode == Chars.UNDERSCORE_CODE || Chars.isUpperCaseLetter(charCode) || Chars.isLowerCaseLetter(charCode))) {
			return Chars.OTHER_IDENTIFIER_START_CODES.includes(charCode);
		} else {
			return true;
		};
	}
	static isIdentifierPart(charCode) {
		if (!(Chars.isIdentifierStart(charCode) || Chars.isDecimalDigit(charCode))) {
			return Chars.OTHER_IDENTIFIER_PART_CODES.includes(charCode);
		} else {
			return true;
		};
	}
	static isWhiteSpace(charCode) {
		if (!(charCode == Chars.TAB_CODE || charCode == Chars.LF_CODE || charCode == Chars.CR_CODE)) {
			return charCode == Chars.SPACE_CODE;
		} else {
			return true;
		};
	}
	static get __name__() {
		return "haxpression.utils.Chars"
	}
	get __class__() {
		return Chars
	}
}


Chars.TAB_CODE = 9
Chars.LF_CODE = 10
Chars.CR_CODE = 13
Chars.SPACE_CODE = 32
Chars.EXCLAMATION_POINT_CODE = 33
Chars.DOUBLE_QUOTE_CODE = 34
Chars.DOLLAR_CODE = 36
Chars.SINGLE_QUOTE_CODE = 39
Chars.OPEN_PAREN_CODE = 40
Chars.CLOSE_PAREN_CODE = 41
Chars.COMMA_CODE = 44
Chars.PERIOD_CODE = 46
Chars.COLON_CODE = 58
Chars.SEMICOLON_CODE = 59
Chars.QUESTION_MARK_CODE = 63
Chars.OPEN_BRACKET_CODE = 91
Chars.CLOSE_BRACKET_CODE = 93
Chars.UNDERSCORE_CODE = 95
Chars.OTHER_IDENTIFIER_START_CODES = []
Chars.OTHER_IDENTIFIER_PART_CODES = [Chars.EXCLAMATION_POINT_CODE, Chars.DOLLAR_CODE, Chars.COLON_CODE]

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnaryOperations: () => (/* binding */ UnaryOperations)
/* harmony export */ });
/* harmony import */ var _utils_Iterators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _ValueType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _Value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const UnaryOperations = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["haxpression.UnaryOperations"] = 
class UnaryOperations {
	static evaluate(op, value) {
		return UnaryOperations.map.inst.get(op).operation(value);
	}
	static addOperator(op, operation) {
		let this1 = UnaryOperations.map;
		let value = {"operation": UnaryOperations.wrapOperation(operation)};
		this1.inst.set(op, value);
	}
	static hasOperator(op) {
		return UnaryOperations.map.inst.has(op);
	}
	static getMaxOperatorLength() {
		return _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_1__.Arrays.reduce(_utils_Iterators_js__WEBPACK_IMPORTED_MODULE_0__.Iterators.toArray(_genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_5__.EsMap.adaptIterator(UnaryOperations.map.inst.keys())), function (maxLength, key) {
			if (key.length > maxLength) {
				return key.length;
			} else {
				return maxLength;
			};
		}, 0);
	}
	static wrapOperation(operation) {
		return function (value) {
			if (_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNA(value)) {
				return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_2__.ValueType.VNA);
			} else if (_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNM(value)) {
				return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_2__.ValueType.VNM);
			} else {
				return operation(value);
			};
		};
	}
	static get __name__() {
		return "haxpression.UnaryOperations"
	}
	get __class__() {
		return UnaryOperations
	}
}


;{
	UnaryOperations.map = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__.StringMap();
	UnaryOperations.addOperator("-", function (value) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(value) * -1);
	});
	UnaryOperations.addOperator("+", function (value) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(value));
	});
	UnaryOperations.addOperator("!", function (value) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(!_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toBool(value));
	});
	UnaryOperations.addOperator("~", function (value) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(~_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(value));
	});
}


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iterators: () => (/* binding */ Iterators)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Iterators = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxpression.utils.Iterators"] = 
class Iterators {
	static toArray(iterator) {
		let result = [];
		let value = iterator;
		while (value.hasNext()) {
			let value1 = value.next();
			result.push(value1);
		};
		return result;
	}
	static get __name__() {
		return "haxpression.utils.Iterators"
	}
	get __class__() {
		return Iterators
	}
}



/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrays: () => (/* binding */ Arrays)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Arrays = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxpression.utils.Arrays"] = 
class Arrays {
	static all(items, check) {
		let _g = [];
		let _g1 = 0;
		let _g2 = items;
		while (_g1 < _g2.length) {
			let v = _g2[_g1];
			++_g1;
			if (check(v)) {
				_g.push(v);
			};
		};
		return _g.length == items.length;
	}
	static reduce(items, callback, acc) {
		let _g = 0;
		while (_g < items.length) {
			let item = items[_g];
			++_g;
			acc = callback(acc, item);
		};
		return acc;
	}
	static get __name__() {
		return "haxpression.utils.Arrays"
	}
	get __class__() {
		return Arrays
	}
}



/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Value: () => (/* binding */ Value)
/* harmony export */ });
/* harmony import */ var _ValueType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);





const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.$global

const Value = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["haxpression._Value.Value"] = 
class Value {
	static fromValueType(valueType) {
		return valueType;
	}
	static toValueType(this1) {
		return this1;
	}
	static fromFloat(v) {
		return Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VFloat(v));
	}
	static fromInt(v) {
		return Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VInt(v));
	}
	static fromBool(v) {
		return Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VBool(v));
	}
	static toFloat(this1) {
		switch (this1._hx_index) {
			case 0:
				let v = this1.v;
				return v;
				break
			case 1:
				let v1 = this1.v;
				return v1;
				break
			case 2:
				let v2 = this1.v;
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert Bool to Float"));
				break
			case 3:
				let v3 = this1.v;
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert String to Float"));
				break
			case 4:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NA to Float"));
				break
			case 5:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NM to Float"));
				break
			
		};
	}
	static toInt(this1) {
		switch (this1._hx_index) {
			case 0:
				let v = this1.v;
				return v | 0;
				break
			case 1:
				let v1 = this1.v;
				return v1;
				break
			case 2:
				let v2 = this1.v;
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert Bool to Int"));
				break
			case 3:
				let v3 = this1.v;
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert String to Int"));
				break
			case 4:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NA to Int"));
				break
			case 5:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NM to Int"));
				break
			
		};
	}
	static toBool(this1) {
		switch (this1._hx_index) {
			case 0:
				let v = this1.v;
				return v != 0.0;
				break
			case 1:
				let v1 = this1.v;
				return v1 != 0;
				break
			case 2:
				let v2 = this1.v;
				return v2;
				break
			case 3:
				let v3 = this1.v;
				return v3.toLowerCase() == Value.TRUE_STRING;
				break
			case 4:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NA to Bool"));
				break
			case 5:
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_1__.Error("cannot convert NM to Bool"));
				break
			
		};
	}
	static isNA(this1) {
		if (this1._hx_index == 4) {
			return true;
		} else {
			return false;
		};
	}
	static isNM(this1) {
		if (this1._hx_index == 5) {
			return true;
		} else {
			return false;
		};
	}
	static get __name__() {
		return "haxpression._Value.Value_Impl_"
	}
	get __class__() {
		return Value
	}
}


Value.TRUE_STRING = "true"

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Error = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxpression.Error"] = 
class Error extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new(message, expression, position) {
		this.message = message;
		this.expression = expression;
		this.position = position;
	}
	toString() {
		let expressionInfo = (this.expression != null) ? " in expression: \"" + this.expression + "\"" : "";
		let positionInfo = (this.position != null) ? " at position: " + this.position : "";
		return "" + this.message + expressionInfo + positionInfo;
	}
	static get __name__() {
		return "haxpression.Error"
	}
	get __class__() {
		return Error
	}
}



/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringMap: () => (/* binding */ StringMap)
/* harmony export */ });
/* harmony import */ var _Constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const StringMap = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxe.ds.StringMap"] = 
class StringMap extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits(_genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap) {
	new() {
		super.new();
	}
	static get __name__() {
		return "haxe.ds.StringMap"
	}
	static get __interfaces__() {
		return [_Constraints_js__WEBPACK_IMPORTED_MODULE_0__.IMap]
	}
	static get __super__() {
		return _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap
	}
	get __class__() {
		return StringMap
	}
}



/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMap: () => (/* binding */ IMap)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const IMap = function() {};
IMap.__isInterface__ = true;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EsMap: () => (/* binding */ EsMap)
/* harmony export */ });
/* harmony import */ var _Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const EsMap = _Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["genes.util.EsMap"] = 
class EsMap extends _Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new() {
		this.inst = new Map();
	}
	get(key) {
		return this.inst.get(key);
	}
	keys() {
		return EsMap.adaptIterator(this.inst.keys());
	}
	clear() {
		this.inst.clear();
	}
	static adaptIterator(from) {
		let value;
		let done;
		let queue = function () {
			let data = from.next();
			value = data.value;
			done = data.done;
		};
		return {"hasNext": function () {
			if (done == null) {
				queue();
			};
			return !done;
		}, "next": function () {
			if (done == null) {
				queue();
			};
			let pending = value;
			queue();
			return pending;
		}};
	}
	static get __name__() {
		return "genes.util.EsMap"
	}
	get __class__() {
		return EsMap
	}
}



/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionType: () => (/* binding */ ExpressionType)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const ExpressionType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["haxpression.ExpressionType"] = 
{
	__ename__: "haxpression.ExpressionType",
	
	ELiteral: Object.assign((value) => ({_hx_index: 0, __enum__: "haxpression.ExpressionType", "value": value, "@kind": "ELiteral"}), {_hx_name: "ELiteral", __params__: ["value"]}),
	EIdentifier: Object.assign((name) => ({_hx_index: 1, __enum__: "haxpression.ExpressionType", "name": name, "@kind": "EIdentifier"}), {_hx_name: "EIdentifier", __params__: ["name"]}),
	EUnary: Object.assign((operator2, operand) => ({_hx_index: 2, __enum__: "haxpression.ExpressionType", "operator2": operator2, "operand": operand, "@kind": "EUnary"}), {_hx_name: "EUnary", __params__: ["operator2", "operand"]}),
	EBinary: Object.assign((operator2, left, right) => ({_hx_index: 3, __enum__: "haxpression.ExpressionType", "operator2": operator2, "left": left, "right": right, "@kind": "EBinary"}), {_hx_name: "EBinary", __params__: ["operator2", "left", "right"]}),
	ECall: Object.assign((callee, $arguments) => ({_hx_index: 4, __enum__: "haxpression.ExpressionType", "callee": callee, "arguments": $arguments, "@kind": "ECall"}), {_hx_name: "ECall", __params__: ["callee", "arguments"]}),
	EConditional: Object.assign((test, consequent, alternate) => ({_hx_index: 5, __enum__: "haxpression.ExpressionType", "test": test, "consequent": consequent, "alternate": alternate, "@kind": "EConditional"}), {_hx_name: "EConditional", __params__: ["test", "consequent", "alternate"]}),
	EArray: Object.assign((items) => ({_hx_index: 6, __enum__: "haxpression.ExpressionType", "items": items, "@kind": "EArray"}), {_hx_name: "EArray", __params__: ["items"]}),
	ECompound: Object.assign((items) => ({_hx_index: 7, __enum__: "haxpression.ExpressionType", "items": items, "@kind": "ECompound"}), {_hx_name: "ECompound", __params__: ["items"]})
}
ExpressionType.__constructs__ = [ExpressionType.ELiteral, ExpressionType.EIdentifier, ExpressionType.EUnary, ExpressionType.EBinary, ExpressionType.ECall, ExpressionType.EConditional, ExpressionType.EArray, ExpressionType.ECompound]
ExpressionType.__empty_constructs__ = []


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Expression: () => (/* binding */ Expression)
/* harmony export */ });
/* harmony import */ var _ValueType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _Value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _CallOperations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42);
/* harmony import */ var _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);












const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_10__.Register.$global

const Expression = _genes_Register_js__WEBPACK_IMPORTED_MODULE_10__.Register.global("$hxClasses")["haxpression._Expression.Expression"] = 
class Expression {
	static fromExpressionType(expressionType) {
		return expressionType;
	}
	static toExpressionType(this1) {
		return this1;
	}
	static simplify(this1) {
		switch (this1._hx_index) {
			case 0:
				let value = this1.value;
				return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ELiteral(value));
				break
			case 1:
				let name = this1.name;
				return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.EIdentifier(name));
				break
			case 2:
				let op = this1.operator2;
				let operand = this1.operand;
				if (Expression.canEvaluate(Expression.fromExpressionType(operand))) {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ELiteral(_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toValueType(_UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__.UnaryOperations.evaluate(op, Expression.evaluate(Expression.fromExpressionType(operand))))));
				} else {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.EUnary(op, Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(operand)))));
				};
				break
			case 3:
				let op1 = this1.operator2;
				let left = this1.left;
				let right = this1.right;
				if (Expression.canEvaluate(Expression.fromExpressionType(left)) && Expression.canEvaluate(Expression.fromExpressionType(right))) {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ELiteral(_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toValueType(_BinaryOperations_js__WEBPACK_IMPORTED_MODULE_7__.BinaryOperations.evaluate(op1, Expression.evaluate(Expression.fromExpressionType(left)), Expression.evaluate(Expression.fromExpressionType(right))))));
				} else {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.EBinary(op1, Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(left))), Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(right)))));
				};
				break
			case 4:
				let callee = this1.callee;
				let $arguments = this1["arguments"];
				if (_ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.canEvaluateAll($arguments)) {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ELiteral(_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toValueType(_CallOperations_js__WEBPACK_IMPORTED_MODULE_6__.CallOperations.evaluate(callee, _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.evaluate($arguments)))));
				} else {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ECall(callee, _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.simplify($arguments)));
				};
				break
			case 5:
				let test = this1.test;
				let consequent = this1.consequent;
				let alternate = this1.alternate;
				if (Expression.canEvaluate(Expression.fromExpressionType(test))) {
					if (_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toBool(Expression.evaluate(Expression.fromExpressionType(test)))) {
						return Expression.simplify(Expression.fromExpressionType(consequent));
					} else {
						return Expression.simplify(Expression.fromExpressionType(alternate));
					};
				} else {
					return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.EConditional(Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(test))), Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(consequent))), Expression.toExpressionType(Expression.simplify(Expression.fromExpressionType(alternate)))));
				};
				break
			case 6:
				let items = this1.items;
				return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.EArray(_ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.simplify(items)));
				break
			case 7:
				let items1 = this1.items;
				return Expression.fromExpressionType(_ExpressionType_js__WEBPACK_IMPORTED_MODULE_4__.ExpressionType.ECompound(_ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.simplify(items1)));
				break
			
		};
	}
	static canEvaluate(this1) {
		switch (this1._hx_index) {
			case 0:
				let value = this1.value;
				return true;
				break
			case 1:
				let name = this1.name;
				return false;
				break
			case 2:
				let op = this1.operator2;
				let operand = this1.operand;
				return Expression.canEvaluate(Expression.fromExpressionType(operand));
				break
			case 3:
				let op1 = this1.operator2;
				let left = this1.left;
				let right = this1.right;
				if (Expression.canEvaluate(Expression.fromExpressionType(left))) {
					return Expression.canEvaluate(Expression.fromExpressionType(right));
				} else {
					return false;
				};
				break
			case 4:
				let callee = this1.callee;
				let $arguments = this1["arguments"];
				return _CallOperations_js__WEBPACK_IMPORTED_MODULE_6__.CallOperations.canEvaluate(callee, $arguments);
				break
			case 5:
				let test = this1.test;
				let consequent = this1.consequent;
				let alternate = this1.alternate;
				if (!Expression.canEvaluate(Expression.fromExpressionType(test))) {
					return false;
				} else if (_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toBool(Expression.evaluate(Expression.fromExpressionType(test)))) {
					return Expression.canEvaluate(Expression.fromExpressionType(consequent));
				} else {
					return Expression.canEvaluate(Expression.fromExpressionType(alternate));
				};
				break
			case 6:
				let items = this1.items;
				return _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.canEvaluateAll(items);
				break
			case 7:
				let items1 = this1.items;
				return _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.canEvaluateAll(items1);
				break
			
		};
	}
	static evaluate(this1, variables) {
		if (variables == null) {
			variables = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_8__.StringMap();
		};
		switch (this1._hx_index) {
			case 0:
				let value = this1.value;
				return _Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.fromValueType(value);
				break
			case 1:
				let name = this1.name;
				if (!variables.inst.has(name)) {
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_9__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_5__.Error("cannot evaluate expression with unset variable: " + name));
				};
				return variables.inst.get(name);
				break
			case 2:
				let op = this1.operator2;
				let operand = this1.operand;
				let operandValue = Expression.evaluate(Expression.fromExpressionType(operand), variables);
				return _UnaryOperations_js__WEBPACK_IMPORTED_MODULE_2__.UnaryOperations.evaluate(op, operandValue);
				break
			case 3:
				let op1 = this1.operator2;
				let left = this1.left;
				let right = this1.right;
				let leftValue = Expression.evaluate(Expression.fromExpressionType(left), variables);
				let rightValue = Expression.evaluate(Expression.fromExpressionType(right), variables);
				return _BinaryOperations_js__WEBPACK_IMPORTED_MODULE_7__.BinaryOperations.evaluate(op1, leftValue, rightValue);
				break
			case 4:
				let callee = this1.callee;
				let $arguments = this1["arguments"];
				return _CallOperations_js__WEBPACK_IMPORTED_MODULE_6__.CallOperations.evaluate(callee, _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.evaluate($arguments, variables));
				break
			case 5:
				let test = this1.test;
				let consequent = this1.consequent;
				let alternate = this1.alternate;
				if (_Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.toBool(Expression.evaluate(Expression.fromExpressionType(test), variables))) {
					return Expression.evaluate(Expression.fromExpressionType(consequent), variables);
				} else {
					return Expression.evaluate(Expression.fromExpressionType(alternate), variables);
				};
				break
			case 6:
				let items = this1.items;
				if (items.length == 0) {
					return _Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VNA);
				} else {
					let values = _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.evaluate(items, variables);
					return values[values.length - 1];
				};
				break
			case 7:
				let items1 = this1.items;
				if (items1.length == 0) {
					return _Value_js__WEBPACK_IMPORTED_MODULE_1__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_0__.ValueType.VNA);
				} else {
					let values = _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_3__.ExpressionTypes.evaluate(items1, variables);
					return values[values.length - 1];
				};
				break
			
		};
	}
	static isCompound(this1) {
		let _g = Expression.toExpressionType(this1);
		if (_g._hx_index == 7) {
			let _g1 = _g.items;
			return true;
		} else {
			return false;
		};
	}
	static get __name__() {
		return "haxpression._Expression.Expression_Impl_"
	}
	get __class__() {
		return Expression
	}
}



/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionTypes: () => (/* binding */ ExpressionTypes)
/* harmony export */ });
/* harmony import */ var _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _Expression_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const ExpressionTypes = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxpression.ExpressionTypes"] = 
class ExpressionTypes {
	static canEvaluateAll(expressionTypes) {
		return _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_0__.Arrays.all(expressionTypes, function (expressionType) {
			return _Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.canEvaluate(_Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.fromExpressionType(expressionType));
		});
	}
	static simplify(expressionTypes) {
		let result = new Array(expressionTypes.length);
		let _g = 0;
		let _g1 = expressionTypes.length;
		while (_g < _g1) {
			let i = _g++;
			result[i] = _Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.toExpressionType(_Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.simplify(_Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.fromExpressionType(expressionTypes[i])));
		};
		return result;
	}
	static evaluate(expressionTypes, variables) {
		let result = new Array(expressionTypes.length);
		let _g = 0;
		let _g1 = expressionTypes.length;
		while (_g < _g1) {
			let i = _g++;
			result[i] = _Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.evaluate(_Expression_js__WEBPACK_IMPORTED_MODULE_1__.Expression.fromExpressionType(expressionTypes[i]), variables);
		};
		return result;
	}
	static get __name__() {
		return "haxpression.ExpressionTypes"
	}
	get __class__() {
		return ExpressionTypes
	}
}



/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallOperations: () => (/* binding */ CallOperations)
/* harmony export */ });
/* harmony import */ var _Value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);







const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_5__.Register.$global

const CallOperations = _genes_Register_js__WEBPACK_IMPORTED_MODULE_5__.Register.global("$hxClasses")["haxpression.CallOperations"] = 
class CallOperations {
	static addFunction(callee, arity, operation) {
		let this1 = CallOperations.map;
		let value = {"arity": arity, "operation": CallOperations.wrapOperation(callee, arity, operation)};
		this1.inst.set(callee, value);
	}
	static hasFunction(callee) {
		return CallOperations.map.inst.has(callee);
	}
	static getFunction(callee) {
		if (!CallOperations.hasFunction(callee)) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_4__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_2__.Error("no function implementation found for name: " + callee));
		};
		return CallOperations.map.inst.get(callee).operation;
	}
	static getArity(callee) {
		if (!CallOperations.hasFunction(callee)) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_4__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_2__.Error("no function implementation found for name: " + callee));
		};
		return CallOperations.map.inst.get(callee).arity;
	}
	static canEvaluate(callee, $arguments) {
		if (!CallOperations.hasFunction(callee)) {
			return false;
		};
		let arity = CallOperations.getArity(callee);
		if (arity >= 0 && arity != $arguments.length) {
			return false;
		};
		return _ExpressionTypes_js__WEBPACK_IMPORTED_MODULE_1__.ExpressionTypes.canEvaluateAll($arguments);
	}
	static evaluate(callee, $arguments) {
		let operation = CallOperations.getFunction(callee);
		return operation($arguments);
	}
	static wrapOperation(callee, arity, operation) {
		return function ($arguments) {
			if (arity >= 0 && $arguments.length != arity) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_4__.Exception.thrown(new _Error_js__WEBPACK_IMPORTED_MODULE_2__.Error("function " + callee + " expects exactly " + arity + " argument(s)"));
			};
			return operation($arguments);
		};
	}
	static get __name__() {
		return "haxpression.CallOperations"
	}
	get __class__() {
		return CallOperations
	}
}


;{
	CallOperations.map = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
	CallOperations.addFunction("abs", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.abs(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("acos", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.acos(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("asin", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.asin(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("atan", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.atan(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("atan2", 2, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.atan2(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0]), _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[1])));
	});
	CallOperations.addFunction("ceil", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromInt(Math.ceil(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("cos", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.cos(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("exp", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.exp(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("fceil", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.ceil(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("ffloor", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.floor(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("floor", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromInt(Math.floor(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("fround", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.round(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("log", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.log(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("max", 2, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.max(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0]), _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[1])));
	});
	CallOperations.addFunction("min", 2, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.min(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0]), _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[1])));
	});
	CallOperations.addFunction("pow", 2, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.pow(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0]), _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[1])));
	});
	CallOperations.addFunction("random", 0, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.random());
	});
	CallOperations.addFunction("rand", 0, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.random());
	});
	CallOperations.addFunction("round", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromInt(Math.round(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("sin", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.sin(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("sqrt", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.sqrt(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
	CallOperations.addFunction("tan", 1, function ($arguments) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.fromFloat(Math.tan(_Value_js__WEBPACK_IMPORTED_MODULE_0__.Value.toFloat($arguments[0])));
	});
}


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryOperations: () => (/* binding */ BinaryOperations)
/* harmony export */ });
/* harmony import */ var _utils_Iterators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _ValueType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _Value_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const BinaryOperations = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["haxpression.BinaryOperations"] = 
class BinaryOperations {
	static evaluate(op, left, right) {
		return BinaryOperations.map.inst.get(op).operation(left, right);
	}
	static addOperator(op, precedence, operation) {
		let this1 = BinaryOperations.map;
		let value = {"precedence": precedence, "operation": BinaryOperations.wrapOperation(operation)};
		this1.inst.set(op, value);
	}
	static hasOperator(op) {
		return BinaryOperations.map.inst.has(op);
	}
	static getOperatorPrecedence(op) {
		return BinaryOperations.map.inst.get(op).precedence;
	}
	static getMaxOperatorLength() {
		return _utils_Arrays_js__WEBPACK_IMPORTED_MODULE_1__.Arrays.reduce(_utils_Iterators_js__WEBPACK_IMPORTED_MODULE_0__.Iterators.toArray(_genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_5__.EsMap.adaptIterator(BinaryOperations.map.inst.keys())), function (maxLength, key) {
			if (key.length > maxLength) {
				return key.length;
			} else {
				return maxLength;
			};
		}, 0);
	}
	static wrapOperation(operation) {
		return function (left, right) {
			if (_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNA(left) || _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNA(right)) {
				return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_2__.ValueType.VNA);
			} else if (_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNM(left) || _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.isNM(right)) {
				return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromValueType(_ValueType_js__WEBPACK_IMPORTED_MODULE_2__.ValueType.VNM);
			} else {
				return operation(left, right);
			};
		};
	}
	static get __name__() {
		return "haxpression.BinaryOperations"
	}
	get __class__() {
		return BinaryOperations
	}
}


;{
	BinaryOperations.map = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__.StringMap();
	BinaryOperations.addOperator("||", 1, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toBool(left) || _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toBool(right));
	});
	BinaryOperations.addOperator("&&", 2, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toBool(left) && _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toBool(right));
	});
	BinaryOperations.addOperator("|", 3, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) | _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator("^", 4, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) ^ _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator("&", 5, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) & _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator("==", 6, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) == _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("!=", 6, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) != _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("<", 7, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) < _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator(">", 7, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) > _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("<=", 7, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) <= _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator(">=", 7, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromBool(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) >= _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("<<", 8, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) << _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator(">>", 8, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) >> _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator(">>>", 8, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromInt(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(left) >>> _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toInt(right));
	});
	BinaryOperations.addOperator("+", 9, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) + _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("-", 9, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) - _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("*", 10, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) * _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("/", 10, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) / _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("%", 10, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left) % _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right));
	});
	BinaryOperations.addOperator("**", 11, function (left, right) {
		return _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.fromFloat(Math.pow(_Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(left), _Value_js__WEBPACK_IMPORTED_MODULE_3__.Value.toFloat(right)));
	});
}


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Globals: () => (/* binding */ Globals),
/* harmony export */   McFloatIterator: () => (/* binding */ McFloatIterator),
/* harmony export */   McIntIterator: () => (/* binding */ McIntIterator)
/* harmony export */ });
/* harmony import */ var _haxe_iterators_ArrayIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _haxe_ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.$global

const McIntIterator = _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.global("$hxClasses")["mcl.McIntIterator"] = 
class McIntIterator extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.inherits() {
	new(min, max) {
		this.min = min;
		this.max = max;
		this.current = min;
		this.offset = (min < max) ? 1 : -1;
	}
	hasNext() {
		if (this.offset == 1) {
			return this.current <= this.max;
		} else {
			return this.current >= this.max;
		};
	}
	next() {
		let result = this.current;
		if (!this.hasNext()) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__.Exception.thrown("No such element");
		};
		this.current += this.offset;
		return result;
	}
	static get __name__() {
		return "mcl.McIntIterator"
	}
	get __class__() {
		return McIntIterator
	}
}


const McFloatIterator = _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.global("$hxClasses")["mcl.McFloatIterator"] = 
class McFloatIterator extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.inherits() {
	new(min, max, step) {
		this.min = min;
		this.max = max;
		this.current = min;
		this.offset = step;
		if (step < 0 && min < max) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__.Exception.thrown("Invalid step for range");
		};
		if (step > 0 && min > max) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__.Exception.thrown("Invalid step for range");
		};
	}
	hasNext() {
		if (this.offset > 0) {
			return this.current <= this.max;
		} else {
			return this.current >= this.max;
		};
	}
	next() {
		let result = this.current;
		if (!this.hasNext()) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__.Exception.thrown("No such element");
		};
		this.current += this.offset;
		return result;
	}
	static get __name__() {
		return "mcl.McFloatIterator"
	}
	get __class__() {
		return McFloatIterator
	}
}


const Globals = _genes_Register_js__WEBPACK_IMPORTED_MODULE_4__.Register.global("$hxClasses")["mcl.Globals"] = 
class Globals {
	static set(name, value) {
		Globals.map.inst.set(name, value);
	}
	static get(name) {
		return Globals.map.inst.get(name);
	}
	static has(name) {
		return Globals.map.inst.has(name);
	}
	static delete(name) {
		return Globals.map.inst["delete"](name);
	}
	static get __name__() {
		return "mcl.Globals"
	}
	get __class__() {
		return Globals
	}
}


Globals.loopVariants = (function($this) {var $r0
	let _g = new _haxe_ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_2__.ObjectMap();
	_g.inst.set([_Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TInt, _Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TInt], function (args) {
		let min = args[0];
		let max = args[1];
		return new McIntIterator(min, max);
	});
	_g.inst.set([_Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TFloat, _Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TFloat, _Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TFloat], function (args) {
		let min = args[0];
		let max = args[1];
		let step = args[2];
		return new McFloatIterator(min, max, step);
	});
	_g.inst.set([_Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TClass(Array)], function (args) {
		return new _haxe_iterators_ArrayIterator_js__WEBPACK_IMPORTED_MODULE_0__.ArrayIterator(args[0]);
	});
	_g.inst.set([_Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TFunction], function (args) {
		let iterator = args[0];
		return new _haxe_iterators_ArrayIterator_js__WEBPACK_IMPORTED_MODULE_0__.ArrayIterator(Array.from(iterator()));
	});
	
	$r0 = _g
	return $r0})(undefined)
Globals.map = (function($this) {var $r0
	let _g = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__.StringMap();
	_g.inst.set("REPEAT", function (...args) {
		let argCount = args.length;
		let map = Globals.loopVariants;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let overlod = _g_key;
			let handler = _g_value;
			if (overlod.length == argCount) {
				let failure = false;
				let _g = 0;
				let _g1 = argCount;
				while (_g < _g1) {
					let i = _g++;
					let t = _Type_js__WEBPACK_IMPORTED_MODULE_5__.Type["typeof"](args[i]);
					if (!(_Type_js__WEBPACK_IMPORTED_MODULE_5__.Type.enumEq(overlod[i], t) || overlod[i] == _Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TFloat && t == _Type_js__WEBPACK_IMPORTED_MODULE_5__.ValueType.TInt)) {
						failure = true;
						break;
					};
				};
				if (!failure) {
					return handler(args.slice());
				};
			};
		};
		let _this = args.slice();
		let result = new Array(_this.length);
		let _g = 0;
		let _g1 = _this.length;
		while (_g < _g1) {
			let i = _g++;
			result[i] = _Std_js__WEBPACK_IMPORTED_MODULE_6__.Std.string(_Type_js__WEBPACK_IMPORTED_MODULE_5__.Type["typeof"](_this[i]));
		};
		throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_3__.Exception.thrown("Invalid arguments for REPEAT (" + result.join(", ") + ")");
	});
	
	$r0 = _g
	return $r0})(undefined)

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayIterator: () => (/* binding */ ArrayIterator)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
This iterator is used only when `Array<T>` is passed to `Iterable<T>`
*/
const ArrayIterator = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxe.iterators.ArrayIterator"] = 
class ArrayIterator extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new(array) {
		this.current = 0;
		this.array = array;
	}
	
	/**
	See `Iterator.hasNext`
	*/
	hasNext() {
		return this.current < this.array.length;
	}
	
	/**
	See `Iterator.next`
	*/
	next() {
		return this.array[this.current++];
	}
	static get __name__() {
		return "haxe.iterators.ArrayIterator"
	}
	get __class__() {
		return ArrayIterator
	}
}



/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectMap: () => (/* binding */ ObjectMap)
/* harmony export */ });
/* harmony import */ var _Constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const ObjectMap = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxe.ds.ObjectMap"] = 
class ObjectMap extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits(_genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap) {
	new() {
		super.new();
	}
	static get __name__() {
		return "haxe.ds.ObjectMap"
	}
	static get __interfaces__() {
		return [_Constraints_js__WEBPACK_IMPORTED_MODULE_0__.IMap]
	}
	static get __super__() {
		return _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap
	}
	get __class__() {
		return ObjectMap
	}
}



/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Type: () => (/* binding */ Type),
/* harmony export */   ValueType: () => (/* binding */ ValueType)
/* harmony export */ });
/* harmony import */ var _js_Boot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Reflect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);





const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const ValueType = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxEnums")["ValueType"] = 
{
	__ename__: "ValueType",
	
	TNull: {_hx_name: "TNull", _hx_index: 0, __enum__: "ValueType", "@kind": "TNull"},
	TInt: {_hx_name: "TInt", _hx_index: 1, __enum__: "ValueType", "@kind": "TInt"},
	TFloat: {_hx_name: "TFloat", _hx_index: 2, __enum__: "ValueType", "@kind": "TFloat"},
	TBool: {_hx_name: "TBool", _hx_index: 3, __enum__: "ValueType", "@kind": "TBool"},
	TObject: {_hx_name: "TObject", _hx_index: 4, __enum__: "ValueType", "@kind": "TObject"},
	TFunction: {_hx_name: "TFunction", _hx_index: 5, __enum__: "ValueType", "@kind": "TFunction"},
	TClass: Object.assign((c) => ({_hx_index: 6, __enum__: "ValueType", "c": c, "@kind": "TClass"}), {_hx_name: "TClass", __params__: ["c"]}),
	TEnum: Object.assign((e) => ({_hx_index: 7, __enum__: "ValueType", "e": e, "@kind": "TEnum"}), {_hx_name: "TEnum", __params__: ["e"]}),
	TUnknown: {_hx_name: "TUnknown", _hx_index: 8, __enum__: "ValueType", "@kind": "TUnknown"}
}
ValueType.__constructs__ = [ValueType.TNull, ValueType.TInt, ValueType.TFloat, ValueType.TBool, ValueType.TObject, ValueType.TFunction, ValueType.TClass, ValueType.TEnum, ValueType.TUnknown]
ValueType.__empty_constructs__ = [ValueType.TNull, ValueType.TInt, ValueType.TFloat, ValueType.TBool, ValueType.TObject, ValueType.TFunction, ValueType.TUnknown]

/**
The Haxe Reflection API allows retrieval of type information at runtime.

This class complements the more lightweight Reflect class, with a focus on
class and enum instances.

@see https://haxe.org/manual/types.html
@see https://haxe.org/manual/std-reflection.html
*/
const Type = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["Type"] = 
class Type {
	
	/**
	Creates an instance of class `cl`, using `args` as arguments to the
	class constructor.
	
	This function guarantees that the class constructor is called.
	
	Default values of constructors arguments are not guaranteed to be
	taken into account.
	
	If `cl` or `args` are null, or if the number of elements in `args` does
	not match the expected number of constructor arguments, or if any
	argument has an invalid type,  or if `cl` has no own constructor, the
	result is unspecified.
	
	In particular, default values of constructor arguments are not
	guaranteed to be taken into account.
	*/
	static createInstance(cl, args) {
		let ctor = Function.prototype.bind.apply(cl, [null].concat(args));
		return new (ctor);
	}
	
	/**
	Creates an instance of enum `e` by calling its constructor `constr` with
	arguments `params`.
	
	If `e` or `constr` is null, or if enum `e` has no constructor named
	`constr`, or if the number of elements in `params` does not match the
	expected number of constructor arguments, or if any argument has an
	invalid type, the result is unspecified.
	*/
	static createEnum(e, constr, params) {
		let f = _Reflect_js__WEBPACK_IMPORTED_MODULE_3__.Reflect.field(e, constr);
		if (f == null) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("No such constructor " + constr);
		};
		if (_Reflect_js__WEBPACK_IMPORTED_MODULE_3__.Reflect.isFunction(f)) {
			if (params == null) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("Constructor " + constr + " need parameters");
			};
			return f.apply(e, params);
		};
		if (params != null && params.length != 0) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("Constructor " + constr + " does not need parameters");
		};
		return f;
	}
	
	/**
	Returns the runtime type of value `v`.
	
	The result corresponds to the type `v` has at runtime, which may vary
	per platform. Assumptions regarding this should be minimized to avoid
	surprises.
	*/
	static typeof(v) {
		switch (typeof(v)) {
			case "boolean":
				return ValueType.TBool;
				break
			case "function":
				if (v.__name__ || v.__ename__) {
					return ValueType.TObject;
				};
				return ValueType.TFunction;
				break
			case "number":
				if (Math.ceil(v) == v % 2147483648.0) {
					return ValueType.TInt;
				};
				return ValueType.TFloat;
				break
			case "object":
				if (v == null) {
					return ValueType.TNull;
				};
				let e = v.__enum__;
				if (e != null) {
					return ValueType.TEnum(_genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxEnums")[e]);
				};
				let c = _js_Boot_js__WEBPACK_IMPORTED_MODULE_0__.Boot.getClass(v);
				if (c != null) {
					return ValueType.TClass(c);
				};
				return ValueType.TObject;
				break
			case "string":
				return ValueType.TClass(String);
				break
			case "undefined":
				return ValueType.TNull;
				break
			default:
			return ValueType.TUnknown;
			
		};
	}
	
	/**
	Recursively compares two enum instances `a` and `b` by value.
	
	Unlike `a == b`, this function performs a deep equality check on the
	arguments of the constructors, if exists.
	
	If `a` or `b` are null, the result is unspecified.
	*/
	static enumEq(a, b) {
		if (a == b) {
			return true;
		};
		try {
			let e = a.__enum__;
			if (e == null || e != b.__enum__) {
				return false;
			};
			if (a._hx_index != b._hx_index) {
				return false;
			};
			let enm = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxEnums")[e];
			let params = enm.__constructs__[a._hx_index].__params__;
			let _g = 0;
			while (_g < params.length) {
				let f = params[_g];
				++_g;
				if (!Type.enumEq(a[f], b[f])) {
					return false;
				};
			};
		}catch (_g) {
			return false;
		};
		return true;
	}
	static get __name__() {
		return "Type"
	}
	get __class__() {
		return Type
	}
}



/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Reflect: () => (/* binding */ Reflect)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
The Reflect API is a way to manipulate values dynamically through an
abstract interface in an untyped manner. Use with care.

@see https://haxe.org/manual/std-reflection.html
*/
const Reflect = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["Reflect"] = 
class Reflect {
	
	/**
	Returns the value of the field named `field` on object `o`.
	
	If `o` is not an object or has no field named `field`, the result is
	null.
	
	If the field is defined as a property, its accessors are ignored. Refer
	to `Reflect.getProperty` for a function supporting property accessors.
	
	If `field` is null, the result is unspecified.
	*/
	static field(o, field) {
		try {
			return o[field];
		}catch (_g) {
			return null;
		};
	}
	
	/**
	Returns the value of the field named `field` on object `o`, taking
	property getter functions into account.
	
	If the field is not a property, this function behaves like
	`Reflect.field`, but might be slower.
	
	If `o` or `field` are null, the result is unspecified.
	*/
	static getProperty(o, field) {
		let tmp;
		if (o == null) {
			return null;
		} else {
			let tmp1;
			if (o.__properties__) {
				tmp = o.__properties__["get_" + field];
				tmp1 = tmp;
			} else {
				tmp1 = false;
			};
			if (tmp1) {
				return o[tmp]();
			} else {
				return o[field];
			};
		};
	}
	
	/**
	Returns the fields of structure `o`.
	
	This method is only guaranteed to work on anonymous structures. Refer to
	`Type.getInstanceFields` for a function supporting class instances.
	
	If `o` is null, the result is unspecified.
	*/
	static fields(o) {
		let a = [];
		if (o != null) {
			let hasOwnProperty = Object.prototype.hasOwnProperty;
			for( var f in o ) {;
			if (f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o, f)) {
				a.push(f);
			};
			};
		};
		return a;
	}
	
	/**
	Returns true if `f` is a function, false otherwise.
	
	If `f` is null, the result is false.
	*/
	static isFunction(f) {
		if (typeof(f) == "function") {
			return !(f.__name__ || f.__ename__);
		} else {
			return false;
		};
	}
	
	/**
	Tells if `v` is an object.
	
	The result is true if `v` is one of the following:
	
	- class instance
	- structure
	- `Class<T>`
	- `Enum<T>`
	
	Otherwise, including if `v` is null, the result is false.
	*/
	static isObject(v) {
		if (v == null) {
			return false;
		};
		let t = typeof(v);
		if (!(t == "string" || t == "object" && v.__enum__ == null)) {
			if (t == "function") {
				return (v.__name__ || v.__ename__) != null;
			} else {
				return false;
			};
		} else {
			return true;
		};
	}
	static get __name__() {
		return "Reflect"
	}
	get __class__() {
		return Reflect
	}
}



/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Config: () => (/* binding */ Config),
/* harmony export */   ConfigEvents: () => (/* binding */ ConfigEvents),
/* harmony export */   ConfigUtil: () => (/* binding */ ConfigUtil),
/* harmony export */   EventDispatcher: () => (/* binding */ EventDispatcher),
/* harmony export */   UserConfig: () => (/* binding */ UserConfig)
/* harmony export */ });
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _Reflect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _Io_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);






const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const EventDispatcher = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl._Config.EventDispatcher"] = 
class EventDispatcher extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits() {
	new() {
		this._subscribers = new Array();
	}
	dispatch(event) {
		if (this._subscribers.length == 0) {
			return;
		};
		let _g = 0;
		let _g1 = this._subscribers;
		while (_g < _g1.length) {
			let subscriber = _g1[_g];
			++_g;
			subscriber(event);
		};
	}
	static get __name__() {
		return "mcl._Config.EventDispatcher"
	}
	get __class__() {
		return EventDispatcher
	}
}


const ConfigEvents = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl.ConfigEvents"] = 
class ConfigEvents extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits() {
	new() {
		this.onPostBuild = new EventDispatcher();
		this.onPreBuild = new EventDispatcher();
	}
	static get __name__() {
		return "mcl.ConfigEvents"
	}
	get __class__() {
		return ConfigEvents
	}
}


const ConfigUtil = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl._Config.ConfigUtil"] = 
class ConfigUtil {
	static lock(obj) {
		Object.freeze(obj);
		let _g = 0;
		let _g1 = _Reflect_js__WEBPACK_IMPORTED_MODULE_3__.Reflect.fields(obj);
		while (_g < _g1.length) {
			let field = _g1[_g];
			++_g;
			let value = _Reflect_js__WEBPACK_IMPORTED_MODULE_3__.Reflect.field(obj, field);
			if (value != null && typeof(value) == "object") {
				ConfigUtil.lock(value);
			};
		};
		return obj;
	}
	static get __name__() {
		return "mcl._Config.ConfigUtil"
	}
	get __class__() {
		return ConfigUtil
	}
}


const Config = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["mcl.Config"] = 
class Config extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits() {
	new() {
		this.header = "# Generated with MC-Build\n";
		this.eqConstScoreboardName = "mcb.eq.const";
		this.eqVarScoreboardName = "mcb.eq.var";
		this.io = null;
		this.generatedDirName = "zzz";
		this.events = new ConfigEvents();
		this.libDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_0__.Path.join([__filename, "..", ".mcblib"]);
		this.internalScoreboardName = "mcb.internal";
	}
	static create(base) {
		ConfigUtil.lock(base);
		let c = new Config();
		if (base.libDir != null) {
			c.libDir = base.libDir;
		};
		if (base.generatedDirName != null) {
			c.generatedDirName = base.generatedDirName;
		};
		if (base.internalScoreboardName != null) {
			c.internalScoreboardName = base.internalScoreboardName;
		};
		if (base.ioThreadCount != null) {
			let _g = base.ioThreadCount;
			if (base.ioThreadCount < 1) {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("io-thread-count must be greater than 0");
			} else if (_g == null) {
				c.io = new _Io_js__WEBPACK_IMPORTED_MODULE_4__.MultiThreadIo(base.ioThreadCount);
			} else {
				switch (_g) {
					case 1:
						c.io = new _Io_js__WEBPACK_IMPORTED_MODULE_4__.SyncIo();
						break
					case 2:
						c.io = new _Io_js__WEBPACK_IMPORTED_MODULE_4__.ThreadedIo();
						break
					default:
					c.io = new _Io_js__WEBPACK_IMPORTED_MODULE_4__.MultiThreadIo(base.ioThreadCount);
					
				};
			};
		};
		if (base.eqConstScoreboardName != null) {
			c.eqConstScoreboardName = base.eqConstScoreboardName;
		};
		if (base.eqVarScoreboardName != null) {
			c.eqVarScoreboardName = base.eqVarScoreboardName;
		};
		if (base.header != null) {
			c.header = base.header;
		};
		if (base.setup != null) {
			base.setup(c);
		};
		return c;
	}
	static get __name__() {
		return "mcl.Config"
	}
	get __class__() {
		return Config
	}
}


const UserConfig = function() {};
UserConfig.__isInterface__ = true;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Io: () => (/* binding */ Io),
/* harmony export */   MultiThreadIo: () => (/* binding */ MultiThreadIo),
/* harmony export */   RevertTracker: () => (/* binding */ RevertTracker),
/* harmony export */   SyncIo: () => (/* binding */ SyncIo),
/* harmony export */   ThreadedIo: () => (/* binding */ ThreadedIo)
/* harmony export */ });
/* harmony import */ var _sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _js_node_buffer_Buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _haxe_crypto_Sha1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony import */ var _haxe_Resource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_10__);












const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.$global

const Io = function() {};
Io.__isInterface__ = true;

const RevertTracker = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.global("$hxClasses")["RevertTracker"] = 
class RevertTracker extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.inherits() {
	new() {
		this.filesTracked = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
	}
	track(path) {
		if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(path)) {
			let this1 = this.filesTracked;
			let value = _js_node_buffer_Buffer_js__WEBPACK_IMPORTED_MODULE_1__.Helper.bytesOfBuffer(fs__WEBPACK_IMPORTED_MODULE_9__.readFileSync(path));
			this1.inst.set(path, value);
		} else {
			this.filesTracked.inst.set(path, null);
		};
	}
	revert() {
		let map = this.filesTracked;
		let _g_map = map;
		let _g_keys = map.keys();
		while (_g_keys.hasNext()) {
			let key = _g_keys.next();
			let _g_value = _g_map.get(key);
			let _g_key = key;
			let k = _g_key;
			let v = _g_value;
			if (v == null) {
				fs__WEBPACK_IMPORTED_MODULE_9__.unlinkSync(k);
			} else {
				_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_2__.Path.directory(k));
				let data = v.b;
				fs__WEBPACK_IMPORTED_MODULE_9__.writeFileSync(k, buffer__WEBPACK_IMPORTED_MODULE_10__.Buffer.from(data.buffer, data.byteOffset, v.length));
			};
		};
		this.filesTracked = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
	}
	static get __name__() {
		return "RevertTracker"
	}
	get __class__() {
		return RevertTracker
	}
}


const SyncIo = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.global("$hxClasses")["SyncIo"] = 
class SyncIo extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.inherits() {
	new() {
		this.existingDirectories = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
		this.revertMap = new RevertTracker();
		this.fileData = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
	}
	reportFilesRemoved(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(oldFiles.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!this.fileData.inst.has(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFilesAdded(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(this.fileData.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!oldFiles.inst.has(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFilesChanged(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(this.fileData.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (oldFiles.inst.has(file1) && oldFiles.inst.get(file1) != this.fileData.inst.get(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFileMetadata() {
		return this.fileData;
	}
	write(path, content) {
		let this1 = this.fileData;
		let value = _haxe_crypto_Sha1_js__WEBPACK_IMPORTED_MODULE_4__.Sha1.encode(content);
		this1.inst.set(path, value);
		this.revertMap.track(path);
		let dir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_2__.Path.directory(path);
		if (!this.existingDirectories.inst.has(dir)) {
			_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(dir);
			this.existingDirectories.inst.set(dir, true);
		};
		fs__WEBPACK_IMPORTED_MODULE_9__.writeFileSync(path, content);
	}
	cleanup() {
	}
	finished() {
		return true;
	}
	static get __name__() {
		return "SyncIo"
	}
	static get __interfaces__() {
		return [Io]
	}
	get __class__() {
		return SyncIo
	}
}


const ThreadedIo = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.global("$hxClasses")["ThreadedIo"] = 
class ThreadedIo extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.inherits() {
	new() {
		this.terminated = false;
		this.pending = false;
		this.done = false;
		this.fileData = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
		this.queue = [];
		this.enableLog = false;
		this.proc || (this.proc = __webpack_require__(63));;
		this.thread = new this.proc.Worker(_haxe_Resource_js__WEBPACK_IMPORTED_MODULE_5__.Resource.getString("io-worker"),{name:'IoWorker',eval:true,workerData:{ enableLog : false}});;
		let _gthis = this;
		this.thread.on("error", function (error) {
			_gthis.log("Worker error: " + error);
			_gthis.terminated = true;
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_6__.Exception.thrown(error);
		});
		this.thread.on("exit", function (code) {
			_gthis.log("Worker stopped with exit code " + code);
			return _gthis.terminated = true;
		});
		this.thread.on("message", function () {
			_gthis.flush();
		});
	}
	reportFilesRemoved(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(oldFiles.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!this.fileData.inst.has(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFilesAdded(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(this.fileData.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!oldFiles.inst.has(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFilesChanged(oldFiles) {
		let _g = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(this.fileData.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (oldFiles.inst.has(file1) && oldFiles.inst.get(file1) != this.fileData.inst.get(file1)) {
				_g.push(file1);
			};
		};
		return _g;
	}
	reportFileMetadata() {
		return this.fileData;
	}
	log(msg) {
		if (this.enableLog) {
			console.log("src/Io.hx:153:","[ThreadedIo | " + process.uptime() + "] " + msg);
		};
	}
	flush() {
		this.log("flush");
		if (this.queue.length == 0) {
			if (!this.done) {
				this.pending = false;
			} else {
				this.log("Terminating worker thread");
				this.thread.terminate();
			};
			return;
		};
		let packet = this.queue;
		this.queue = [];
		this.pending = true;
		this.log("Posting " + packet.length + " entries to worker thread");
		this.thread.postMessage(packet);
	}
	write(path, content) {
		let this1 = this.fileData;
		let value = _haxe_crypto_Sha1_js__WEBPACK_IMPORTED_MODULE_4__.Sha1.encode(content);
		this1.inst.set(path, value);
		this.log("write " + path);
		if (this.done) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_6__.Exception.thrown("Cannot write after cleanup()");
		};
		this.queue.push({"p": path, "c": content});
		if (!this.pending) {
			this.flush();
		};
	}
	cleanup() {
		this.log("cleanup");
		this.done = true;
		if (!this.pending) {
			this.flush();
		};
	}
	finished() {
		return this.terminated;
	}
	static get __name__() {
		return "ThreadedIo"
	}
	static get __interfaces__() {
		return [Io]
	}
	get __class__() {
		return ThreadedIo
	}
}


const MultiThreadIo = _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.global("$hxClasses")["MultiThreadIo"] = 
class MultiThreadIo extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_8__.Register.inherits() {
	new(count) {
		this.fileData = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_3__.StringMap();
		this.idx = 0;
		this.threads = [];
		if ((count & count - 1) != 0) {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_6__.Exception.thrown("Thread count must be a power of two");
		};
		this.mask = count - 1;
		let _g = 0;
		let _g1 = count;
		while (_g < _g1) {
			let i = _g++;
			this.threads.push(new ThreadedIo());
		};
	}
	reportFilesRemoved(oldFiles) {
		let result = [];
		let files = this.reportFileMetadata();
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(oldFiles.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!files.inst.has(file1)) {
				result.push(file1);
			};
		};
		return result;
	}
	reportFilesAdded(oldFiles) {
		let files = this.reportFileMetadata();
		let result = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(files.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (!oldFiles.inst.has(file1)) {
				result.push(file1);
			};
		};
		return result;
	}
	reportFilesChanged(oldFiles) {
		let data = this.reportFileMetadata();
		let result = [];
		let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(data.inst.keys());
		while (file.hasNext()) {
			let file1 = file.next();
			if (oldFiles.inst.has(file1) && oldFiles.inst.get(file1) != data.inst.get(file1)) {
				result.push(file1);
			};
		};
		return result;
	}
	reportFileMetadata() {
		let _g = 0;
		let _g1 = this.threads;
		while (_g < _g1.length) {
			let t = _g1[_g];
			++_g;
			let file = _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_7__.EsMap.adaptIterator(t.reportFileMetadata().inst.keys());
			while (file.hasNext()) {
				let file1 = file.next();
				let this1 = this.fileData;
				let value = t.reportFileMetadata().inst.get(file1);
				this1.inst.set(file1, value);
			};
		};
		return this.fileData;
	}
	cleanup() {
		let _g = 0;
		let _g1 = this.threads;
		while (_g < _g1.length) {
			let t = _g1[_g];
			++_g;
			t.cleanup();
		};
	}
	write(path, content) {
		this.threads[this.idx++ & this.mask].write(path, content);
	}
	finished() {
		let _g = 0;
		let _g1 = this.threads;
		while (_g < _g1.length) {
			let t = _g1[_g];
			++_g;
			if (!t.finished()) {
				return false;
			};
		};
		return true;
	}
	static isPowerOfTwo(x) {
		return (x & x - 1) == 0;
	}
	static get __name__() {
		return "MultiThreadIo"
	}
	static get __interfaces__() {
		return [Io]
	}
	get __class__() {
		return MultiThreadIo
	}
}



/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystem: () => (/* binding */ FileSystem)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);





const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

/**
This class provides information about files and directories.

If `null` is passed as a file path to any function in this class, the
result is unspecified, and may differ from target to target.

See `sys.io.File` for the complementary file API.
*/
const FileSystem = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["sys.FileSystem"] = 
class FileSystem {
	
	/**
	Returns `true` if the file or directory specified by `path` exists.
	*/
	static exists(path) {
		try {
			fs__WEBPACK_IMPORTED_MODULE_3__.accessSync(path);
			return true;
		}catch (_g) {
			return false;
		};
	}
	
	/**
	Returns `true` if the file or directory specified by `path` is a directory.
	
	If `path` is not a valid file system entry or if its destination is not
	accessible, an exception is thrown.
	*/
	static isDirectory(path) {
		try {
			return fs__WEBPACK_IMPORTED_MODULE_3__.statSync(path).isDirectory();
		}catch (_g) {
			return false;
		};
	}
	
	/**
	Creates a directory specified by `path`.
	
	This method is recursive: The parent directories don't have to exist.
	
	If the directory cannot be created, an exception is thrown.
	*/
	static createDirectory(path) {
		try {
			fs__WEBPACK_IMPORTED_MODULE_3__.mkdirSync(path);
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.caught(_g).unwrap();
			if (e.code == "ENOENT") {
				FileSystem.createDirectory(path__WEBPACK_IMPORTED_MODULE_0__.dirname(path));
				fs__WEBPACK_IMPORTED_MODULE_3__.mkdirSync(path);
			} else {
				let stat;
				try {
					stat = fs__WEBPACK_IMPORTED_MODULE_3__.statSync(path);
				}catch (_g) {
					throw e;
				};
				if (!stat.isDirectory()) {
					throw e;
				};
			};
		};
	}
	
	/**
	Deletes the directory specified by `path`. Only empty directories can
	be deleted.
	
	If `path` does not denote a valid directory, or if that directory cannot
	be deleted, an exception is thrown.
	*/
	static deleteDirectory(path) {
		if (FileSystem.exists(path)) {
			let _g = 0;
			let _g1 = fs__WEBPACK_IMPORTED_MODULE_3__.readdirSync(path);
			while (_g < _g1.length) {
				let file = _g1[_g];
				++_g;
				let curPath = path + "/" + file;
				if (FileSystem.isDirectory(curPath)) {
					FileSystem.deleteDirectory(curPath);
				} else {
					fs__WEBPACK_IMPORTED_MODULE_3__.unlinkSync(curPath);
				};
			};
			fs__WEBPACK_IMPORTED_MODULE_3__.rmdirSync(path);
		};
	}
	static get __name__() {
		return "sys.FileSystem"
	}
	get __class__() {
		return FileSystem
	}
}



/***/ }),
/* 52 */
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),
/* 53 */
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Helper: () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _haxe_io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const Helper = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["js.node.buffer._Buffer.Helper"] = 
class Helper {
	static bytesOfBuffer(b) {
		let o = Object.create(_haxe_io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes.prototype);
		o.length = b.byteLength;
		o.b = b;
		b.bufferValue = b;
		b.hxBytes = o;
		b.bytes = b;
		return o;
	}
	static get __name__() {
		return "js.node.buffer._Buffer.Helper"
	}
	get __class__() {
		return Helper
	}
}



/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bytes: () => (/* binding */ Bytes)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _Encoding_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);





const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.$global

const Bytes = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["haxe.io.Bytes"] = 
class Bytes extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.inherits() {
	new(data) {
		this.length = data.byteLength;
		this.b = new Uint8Array(data);
		this.b.bufferValue = data;
		data.hxBytes = this;
		data.bytes = this.b;
	}
	
	/**
	Returns the `len`-bytes long string stored at the given position `pos`,
	interpreted with the given `encoding` (UTF-8 by default).
	*/
	getString(pos, len, encoding) {
		if (pos < 0 || len < 0 || pos + len > this.length) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(_Error_js__WEBPACK_IMPORTED_MODULE_0__.Error.OutsideBounds);
		};
		if (encoding == null) {
			encoding = _Encoding_js__WEBPACK_IMPORTED_MODULE_1__.Encoding.UTF8;
		};
		let s = "";
		let b = this.b;
		let i = pos;
		let max = pos + len;
		switch (encoding._hx_index) {
			case 0:
				let debug = pos > 0;
				while (i < max) {
					let c = b[i++];
					if (c < 128) {
						if (c == 0) {
							break;
						};
						s += String.fromCodePoint(c);
					} else if (c < 224) {
						let code = (c & 63) << 6 | b[i++] & 127;
						s += String.fromCodePoint(code);
					} else if (c < 240) {
						let c2 = b[i++];
						let code = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
						s += String.fromCodePoint(code);
					} else {
						let c2 = b[i++];
						let c3 = b[i++];
						let u = (c & 15) << 18 | (c2 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
						s += String.fromCodePoint(u);
					};
				};
				break
			case 1:
				while (i < max) {
					let c = b[i++] | b[i++] << 8;
					s += String.fromCodePoint(c);
				};
				break
			
		};
		return s;
	}
	
	/**
	Returns a `String` representation of the bytes interpreted as UTF-8.
	*/
	toString() {
		return this.getString(0, this.length);
	}
	
	/**
	Returns the `Bytes` representation of the given `String`, using the
	specified encoding (UTF-8 by default).
	*/
	static ofString(s, encoding) {
		if (encoding == _Encoding_js__WEBPACK_IMPORTED_MODULE_1__.Encoding.RawNative) {
			let buf = new Uint8Array(s.length << 1);
			let _g = 0;
			let _g1 = s.length;
			while (_g < _g1) {
				let i = _g++;
				let c = s.charCodeAt(i);
				buf[i << 1] = c & 255;
				buf[i << 1 | 1] = c >> 8;
			};
			return new Bytes(buf.buffer);
		};
		let a = new Array();
		let i = 0;
		while (i < s.length) {
			let c = s.charCodeAt(i++);
			if (55296 <= c && c <= 56319) {
				c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
			};
			if (c <= 127) {
				a.push(c);
			} else if (c <= 2047) {
				a.push(192 | c >> 6);
				a.push(128 | c & 63);
			} else if (c <= 65535) {
				a.push(224 | c >> 12);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			} else {
				a.push(240 | c >> 18);
				a.push(128 | c >> 12 & 63);
				a.push(128 | c >> 6 & 63);
				a.push(128 | c & 63);
			};
		};
		return new Bytes(new Uint8Array(a).buffer);
	}
	
	/**
	Returns the `Bytes` representation of the given `BytesData`.
	*/
	static ofData(b) {
		let hb = b.hxBytes;
		if (hb != null) {
			return hb;
		};
		return new Bytes(b);
	}
	static get __name__() {
		return "haxe.io.Bytes"
	}
	get __class__() {
		return Bytes
	}
}



/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
The possible IO errors that can occur
*/
const Error = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["haxe.io.Error"] = 
{
	__ename__: "haxe.io.Error",
	
	/**
	The IO is set into nonblocking mode and some data cannot be read or written
	*/
	Blocked: {_hx_name: "Blocked", _hx_index: 0, __enum__: "haxe.io.Error", "@kind": "Blocked"},
	/**
	An integer value is outside its allowed range
	*/
	Overflow: {_hx_name: "Overflow", _hx_index: 1, __enum__: "haxe.io.Error", "@kind": "Overflow"},
	/**
	An operation on Bytes is outside of its valid range
	*/
	OutsideBounds: {_hx_name: "OutsideBounds", _hx_index: 2, __enum__: "haxe.io.Error", "@kind": "OutsideBounds"},
	/**
	Other errors
	*/
	Custom: Object.assign((e) => ({_hx_index: 3, __enum__: "haxe.io.Error", "e": e, "@kind": "Custom"}), {_hx_name: "Custom", __params__: ["e"]})
}
Error.__constructs__ = [Error.Blocked, Error.Overflow, Error.OutsideBounds, Error.Custom]
Error.__empty_constructs__ = [Error.Blocked, Error.Overflow, Error.OutsideBounds]


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Encoding: () => (/* binding */ Encoding)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
String binary encoding supported by Haxe I/O
*/
const Encoding = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxEnums")["haxe.io.Encoding"] = 
{
	__ename__: "haxe.io.Encoding",
	
	UTF8: {_hx_name: "UTF8", _hx_index: 0, __enum__: "haxe.io.Encoding", "@kind": "UTF8"},
	/**
	Output the string the way the platform represent it in memory. This is the most efficient but is platform-specific
	*/
	RawNative: {_hx_name: "RawNative", _hx_index: 1, __enum__: "haxe.io.Encoding", "@kind": "RawNative"}
}
Encoding.__constructs__ = [Encoding.UTF8, Encoding.RawNative]
Encoding.__empty_constructs__ = [Encoding.UTF8, Encoding.RawNative]


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha1: () => (/* binding */ Sha1)
/* harmony export */ });
/* harmony import */ var _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _StringTools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
Creates a Sha1 of a String.
*/
const Sha1 = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["haxe.crypto.Sha1"] = 
class Sha1 extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits() {
	new() {
	}
	doEncode(x) {
		let w = new Array();
		let a = 1732584193;
		let b = -271733879;
		let c = -1732584194;
		let d = 271733878;
		let e = -1009589776;
		let i = 0;
		while (i < x.length) {
			let olda = a;
			let oldb = b;
			let oldc = c;
			let oldd = d;
			let olde = e;
			let j = 0;
			while (j < 80) {
				if (j < 16) {
					w[j] = x[i + j];
				} else {
					let num = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
					w[j] = num << 1 | num >>> 31;
				};
				let t = (a << 5 | a >>> 27) + this.ft(j, b, c, d) + e + w[j] + this.kt(j);
				e = d;
				d = c;
				c = b << 30 | b >>> 2;
				b = a;
				a = t;
				++j;
			};
			a += olda;
			b += oldb;
			c += oldc;
			d += oldd;
			e += olde;
			i += 16;
		};
		return [a, b, c, d, e];
	}
	
	/**
	Perform the appropriate triplet combination function for the current iteration
	*/
	ft(t, b, c, d) {
		if (t < 20) {
			return b & c | ~b & d;
		};
		if (t < 40) {
			return b ^ c ^ d;
		};
		if (t < 60) {
			return b & c | b & d | c & d;
		};
		return b ^ c ^ d;
	}
	
	/**
	Determine the appropriate additive constant for the current iteration
	*/
	kt(t) {
		if (t < 20) {
			return 1518500249;
		};
		if (t < 40) {
			return 1859775393;
		};
		if (t < 60) {
			return -1894007588;
		};
		return -899497514;
	}
	hex(a) {
		let str = "";
		let _g = 0;
		while (_g < a.length) {
			let num = a[_g];
			++_g;
			str += _StringTools_js__WEBPACK_IMPORTED_MODULE_2__.StringTools.hex(num, 8);
		};
		return str.toLowerCase();
	}
	static encode(s) {
		let sh = new Sha1();
		let h = sh.doEncode(Sha1.str2blks(s));
		return sh.hex(h);
	}
	
	/**
	Convert a string to a sequence of 16-word blocks, stored as an array.
	Append padding bits and the length, as described in the SHA1 standard.
	*/
	static str2blks(s) {
		let s1 = _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes.ofString(s);
		let nblk = (s1.length + 8 >> 6) + 1;
		let blks = new Array();
		let _g = 0;
		let _g1 = nblk * 16;
		while (_g < _g1) {
			let i = _g++;
			blks[i] = 0;
		};
		let _g2 = 0;
		let _g3 = s1.length;
		while (_g2 < _g3) {
			let i = _g2++;
			let p = i >> 2;
			blks[p] |= s1.b[i] << 24 - ((i & 3) << 3);
		};
		let i = s1.length;
		let p = i >> 2;
		blks[p] |= 128 << 24 - ((i & 3) << 3);
		blks[nblk * 16 - 1] = s1.length * 8;
		return blks;
	}
	static get __name__() {
		return "haxe.crypto.Sha1"
	}
	get __class__() {
		return Sha1
	}
}



/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Resource: () => (/* binding */ Resource)
/* harmony export */ });
/* harmony import */ var _crypto_Base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
Resource can be used to access resources that were added through the
`--resource file@name` command line parameter.

Depending on their type they can be obtained as `String` through
`getString(name)`, or as binary data through `getBytes(name)`.

A list of all available resource names can be obtained from `listNames()`.
*/
const Resource = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["haxe.Resource"] = 
class Resource {
	
	/**
	Retrieves the resource identified by `name` as a `String`.
	
	If `name` does not match any resource name, `null` is returned.
	*/
	static getString(name) {
		let _g = 0;
		let _g1 = Resource.content;
		while (_g < _g1.length) {
			let x = _g1[_g];
			++_g;
			if (x.name == name) {
				if (x.str != null) {
					return x.str;
				};
				let b = _crypto_Base64_js__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(x.data);
				return b.toString();
			};
		};
		return null;
	}
	static get __name__() {
		return "haxe.Resource"
	}
	get __class__() {
		return Resource
	}
}


;Resource.content = [{ name : "io-worker", data : "dmFyIGk9cmVxdWlyZSgid29ya2VyX3RocmVhZHMiKSx0PXJlcXVpcmUoImZzIiksYT1yZXF1aXJlKCJwYXRoIiksbj1uZXcgTWFwO2Z1bmN0aW9uIHAocyxvKXtsZXQgcj0oMCxhLnBhcnNlKShzKS5kaXI7bi5oYXMocil8fCgoMCx0Lm1rZGlyU3luYykocix7cmVjdXJzaXZlOiEwfSksbi5zZXQociwhMCkpLCgwLHQud3JpdGVGaWxlU3luYykocyxvKX1pLnBhcmVudFBvcnQub24oIm1lc3NhZ2UiLGZ1bmN0aW9uKG8pe3RyeXtvLm1hcCgoe3A6ZSxjOnJ9KT0+cChlLHIpKSxpLnBhcmVudFBvcnQucG9zdE1lc3NhZ2UoMSl9Y2F0Y2goZSl7Y29uc29sZS5lcnJvcihlKX19KTsK"}]


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64: () => (/* binding */ Base64)
/* harmony export */ });
/* harmony import */ var _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _BaseCode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);





const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

/**
Allows one to encode/decode String and bytes using Base64 encoding.
*/
const Base64 = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxe.crypto.Base64"] = 
class Base64 {
	static decode(str, complement) {
		if (complement == null) {
			complement = true;
		};
		if (complement) {
			while (_HxOverrides_js__WEBPACK_IMPORTED_MODULE_3__.HxOverrides.cca(str, str.length - 1) == 61) str = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_3__.HxOverrides.substr(str, 0, -1);
		};
		return new _BaseCode_js__WEBPACK_IMPORTED_MODULE_1__.BaseCode(Base64.BYTES).decodeBytes(_io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes.ofString(str));
	}
	static get __name__() {
		return "haxe.crypto.Base64"
	}
	get __class__() {
		return Base64
	}
}


Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
Base64.BYTES = _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes.ofString(Base64.CHARS)

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseCode: () => (/* binding */ BaseCode)
/* harmony export */ });
/* harmony import */ var _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

/**
Allows one to encode/decode String and bytes using a power of two base dictionary.
*/
const BaseCode = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxe.crypto.BaseCode"] = 
class BaseCode extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits() {
	new(base) {
		let len = base.length;
		let nbits = 1;
		while (len > 1 << nbits) ++nbits;
		if (nbits > 8 || len != 1 << nbits) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("BaseCode : base length must be a power of two.");
		};
		this.base = base;
		this.nbits = nbits;
	}
	initTable() {
		let tbl = new Array();
		let _g = 0;
		while (_g < 256) {
			let i = _g++;
			tbl[i] = -1;
		};
		let _g1 = 0;
		let _g2 = this.base.length;
		while (_g1 < _g2) {
			let i = _g1++;
			tbl[this.base.b[i]] = i;
		};
		this.tbl = tbl;
	}
	decodeBytes(b) {
		let nbits = this.nbits;
		let base = this.base;
		if (this.tbl == null) {
			this.initTable();
		};
		let tbl = this.tbl;
		let size = b.length * nbits >> 3;
		let out = new _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes(new ArrayBuffer(size));
		let buf = 0;
		let curbits = 0;
		let pin = 0;
		let pout = 0;
		while (pout < size) {
			while (curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				let i = tbl[b.b[pin++]];
				if (i == -1) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_1__.Exception.thrown("BaseCode : invalid encoded char");
				};
				buf |= i;
			};
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255;
		};
		return out;
	}
	static get __name__() {
		return "haxe.crypto.BaseCode"
	}
	get __class__() {
		return BaseCode
	}
}



/***/ }),
/* 62 */
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),
/* 63 */
/***/ ((module) => {

"use strict";
module.exports = require("node:worker_threads");

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntMap: () => (/* binding */ IntMap)
/* harmony export */ });
/* harmony import */ var _Constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.$global

const IntMap = _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.global("$hxClasses")["haxe.ds.IntMap"] = 
class IntMap extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_2__.Register.inherits(_genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap) {
	new() {
		super.new();
	}
	static get __name__() {
		return "haxe.ds.IntMap"
	}
	static get __interfaces__() {
		return [_Constraints_js__WEBPACK_IMPORTED_MODULE_0__.IMap]
	}
	static get __super__() {
		return _genes_util_EsMap_js__WEBPACK_IMPORTED_MODULE_1__.EsMap
	}
	get __class__() {
		return IntMap
	}
}



/***/ }),
/* 65 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 65;
module.exports = webpackEmptyContext;

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawTemplateArgument: () => (/* binding */ RawTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const RawTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.args.RawTemplateArgument"] = 
class RawTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument) {
	new(s, pos) {
		super.new(s, pos);
	}
	parseValue(value, pos, ctx) {
		return {"success": true, "value": value, "raw": value};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("raw", RawTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.RawTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return RawTemplateArgument
	}
}



/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntTemplateArgument: () => (/* binding */ IntTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const IntTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.args.IntTemplateArgument"] = 
class IntTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument) {
	new(s, pos) {
		super.new(s, pos);
	}
	parseValue(value, pos, ctx) {
		let spaceIdx = value.indexOf(" ");
		if (spaceIdx != -1) {
			value = value.substring(0, spaceIdx);
		};
		let intValue = _Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.parseInt(value);
		if (intValue == null) {
			return {"success": false};
		};
		return {"success": true, "value": intValue, "raw": value};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("int", IntTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.IntTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return IntTemplateArgument
	}
}



/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatTemplateArgument: () => (/* binding */ FloatTemplateArgument)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const FloatTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.args.FloatTemplateArgument"] = 
class FloatTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument) {
	new(s, pos) {
		super.new(s, pos);
	}
	parseValue(value, pos, ctx) {
		let spaceIdx = value.indexOf(" ");
		if (spaceIdx != -1) {
			value = value.substring(0, spaceIdx);
		};
		let intValue = parseFloat(value);
		if (intValue == null) {
			return {"success": false};
		};
		return {"success": true, "value": intValue, "raw": value};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("float", FloatTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.FloatTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return FloatTemplateArgument
	}
}



/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockTemplateArgument: () => (/* binding */ BlockTemplateArgument),
/* harmony export */   BoundBlock: () => (/* binding */ BoundBlock)
/* harmony export */ });
/* harmony import */ var _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _AstNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);








const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const BoundBlock = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["mcl.args.BoundBlock"] = 
class BoundBlock extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.inherits() {
	new(node, ctx) {
		this.node = node;
		this.ctx = ctx;
	}
	appendAstNode(node) {
		let _g = this.node;
		if (_g._hx_index == 8) {
			let _g1 = _g.pos;
			let _g2 = _g.name;
			let _g3 = _g.data;
			let _g4 = _g.isMacro;
			let _g5 = _g.isInline;
			let body = _g.body;
			body.push(node);
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("BoundBlock.append: node is not a block");
		};
	}
	append(code) {
		let tokens = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_1__.Tokenizer.tokenize(code, "<inline BoundBlock.append>");
		let tokenInput = new _Parser_js__WEBPACK_IMPORTED_MODULE_2__.ArrayInput(tokens);
		while (tokenInput.hasNext()) this.appendAstNode(_Parser_js__WEBPACK_IMPORTED_MODULE_2__.Parser.innerParse(tokenInput));
	}
	setName(name) {
		let _g = this.node;
		if (_g._hx_index == 8) {
			let _g1 = _g.name;
			let pos = _g.pos;
			let body = _g.body;
			let data = _g.data;
			let isMacro = _g.isMacro;
			let isInline = _g.isInline;
			this.node = _AstNode_js__WEBPACK_IMPORTED_MODULE_3__.AstNode.Block(pos, name, body, data, isMacro, isInline);
		} else {
			throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("BoundBlock.setName: node is not a block");
		};
	}
	embedTo(context, pos, file) {
		let content = [];
		let ctx = {"isTemplate": false, "uidIndex": context.uidIndex, "namespace": context.namespace, "path": context.path, "variables": this.ctx.variables, "replacements": this.ctx.replacements, "stack": this.ctx.stack, "append": function (s) {
			content.push(s);
		}, "templates": this.ctx.templates, "requireTemplateKeyword": this.ctx.requireTemplateKeyword, "compiler": this.ctx.compiler, "globalVariables": this.ctx.globalVariables, "functions": this.ctx.functions, "baseNamespaceInfo": context.baseNamespaceInfo, "currentFunction": this.ctx.currentFunction};
		file.embed(ctx, pos, new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_4__.StringMap(), [this.node]);
		return content.join("\n");
	}
	static get __name__() {
		return "mcl.args.BoundBlock"
	}
	get __class__() {
		return BoundBlock
	}
}


const BlockTemplateArgument = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["mcl.args.BlockTemplateArgument"] = 
class BlockTemplateArgument extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.inherits(_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument) {
	new(s, pos) {
		super.new(s, pos);
		this.expectBlock = true;
	}
	parseValueBlock(s, p, context) {
		if (s._hx_index == 8) {
			let _g = s.pos;
			let _g1 = s.name;
			let _g2 = s.body;
			let _g3 = s.data;
			let _g4 = s.isMacro;
			let _g5 = s.isInline;
			return {"success": true, "value": new BoundBlock(s, context)};
		} else {
			return {"success": false};
		};
	}
	static register() {
		_TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument.register("block", BlockTemplateArgument);
	}
	static get __name__() {
		return "mcl.args.BlockTemplateArgument"
	}
	static get __super__() {
		return _TemplateArgument_js__WEBPACK_IMPORTED_MODULE_0__.TemplateArgument
	}
	get __class__() {
		return BlockTemplateArgument
	}
}



/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppMain: () => (/* binding */ AppMain)
/* harmony export */ });
/* harmony import */ var _sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _mcl_error_McbError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _mcl_TemplateRegisterer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _mcl_LibStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71);
/* harmony import */ var _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony import */ var _haxe_http_HttpNodeJs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var _haxe_Unserializer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90);
/* harmony import */ var _haxe_Template_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(92);
/* harmony import */ var _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24);
/* harmony import */ var _Io_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7);




















const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_14__.Register.$global

const AppMain = _genes_Register_js__WEBPACK_IMPORTED_MODULE_14__.Register.global("$hxClasses")["mcb.AppMain"] = 
class AppMain {
	static loadDebugProject(file, outdir) {
		let reader = new _haxe_Unserializer_js__WEBPACK_IMPORTED_MODULE_11__.Unserializer(fs__WEBPACK_IMPORTED_MODULE_15__.readFileSync(file, {"encoding": "utf8"}));
		while (true) {
			let item = reader.unserialize();
			if (item == null) {
				break;
			};
			let p = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([outdir, item.f]);
			_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.directory(p));
			fs__WEBPACK_IMPORTED_MODULE_15__.writeFileSync(p, item.s);
			fs__WEBPACK_IMPORTED_MODULE_15__.writeFileSync(p + ".tokens", _Std_js__WEBPACK_IMPORTED_MODULE_16__.Std.string(item.t));
			fs__WEBPACK_IMPORTED_MODULE_15__.writeFileSync(p + ".ast", _Std_js__WEBPACK_IMPORTED_MODULE_16__.Std.string(item.a));
		};
	}
	static discoverConfigFile(p) {
		if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(p + ".cjs")) {
			return p + ".cjs";
		} else if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(p + ".js")) {
			return p + ".js";
		} else if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(p + ".json")) {
			return p + ".json";
		} else {
			return p;
		};
	}
	static getFilesInDirectory(dir) {
		let files = fs__WEBPACK_IMPORTED_MODULE_15__.readdirSync(dir);
		let result = [];
		let _g = 0;
		while (_g < files.length) {
			let f = files[_g];
			++_g;
			let p = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([dir, f]);
			if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.isDirectory(p)) {
				result = result.concat(AppMain.getFilesInDirectory(p));
			} else {
				result.push(p);
			};
		};
		return result;
	}
	static create(name) {
		let templateDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.directory(__filename), "template"]);
		let destDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([process.cwd(), name]);
		_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(destDir);
		let fetcher = new _haxe_http_HttpNodeJs_js__WEBPACK_IMPORTED_MODULE_9__.HttpNodeJs("https://raw.githubusercontent.com/misode/mcmeta/summary/version.json");
		fetcher.onData = function (data) {
			let version = JSON.parse(data);
			let copyDir = null;
			copyDir = function (from, to) {
				let _g = 0;
				let _g1 = fs__WEBPACK_IMPORTED_MODULE_15__.readdirSync(from);
				while (_g < _g1.length) {
					let f = _g1[_g];
					++_g;
					let fromPath = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([from, f]);
					let toPath = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([to, f]);
					if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.isDirectory(fromPath)) {
						_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(toPath);
						copyDir(fromPath, toPath);
					} else {
						let template = new _haxe_Template_js__WEBPACK_IMPORTED_MODULE_12__.Template(fs__WEBPACK_IMPORTED_MODULE_15__.readFileSync(fromPath, {"encoding": "utf8"}));
						fs__WEBPACK_IMPORTED_MODULE_15__.writeFileSync(toPath, template.execute({"name": name, "version": version.data_pack_version}));
					};
				};
			};
			copyDir(templateDir, destDir);
		};
		fetcher.request();
	}
	static compile(opts) {
		_Logger_js__WEBPACK_IMPORTED_MODULE_7__.Logger.log("Started build at " + _HxOverrides_js__WEBPACK_IMPORTED_MODULE_18__.HxOverrides.dateStr(new Date()));
		let startTime = Date.now() / 1000;
		let srcDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([opts.baseDir, "src"]);
		let configPath = AppMain.discoverConfigFile(opts.configPath);
		let config = __webpack_require__(94)(configPath);
		let compiler = new _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_6__.Compiler(srcDir, config, new _mcl_LibStore_js__WEBPACK_IMPORTED_MODULE_5__.LibStore(opts.libDir));
		let didFail = true;
		try {
			compiler.config.events.onPreBuild.dispatch({});
			let sourceFiles = AppMain.getFilesInDirectory(srcDir);
			let _g = 0;
			while (_g < sourceFiles.length) {
				let f = sourceFiles[_g];
				++_g;
				let ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.extension(f);
				if (ext != "mcb" && ext != "mcbt") {
					continue;
				};
				let tokens = _mcl_Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.Tokenizer.tokenize(fs__WEBPACK_IMPORTED_MODULE_15__.readFileSync(f, {"encoding": "utf8"}), f);
				try {
					let ast = (ext == "mcb") ? _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_4__.Parser.parseMcbFile(tokens) : _mcl_Parser_js__WEBPACK_IMPORTED_MODULE_4__.Parser.parseMcbtFile(tokens);
					compiler.addFile(f, ast);
				}catch (_g) {
					let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_13__.Exception.caught(_g).unwrap();
					compiler.success = false;
					throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_13__.Exception.thrown(e);
				};
			};
			let _g1 = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_10__.StringMap();
			_g1.inst.set("config", config);
			_g1.inst.set("global", AppMain.globalJsData);
			_g1.inst.set("store", {});
			compiler.compile(new _mcl_Compiler_js__WEBPACK_IMPORTED_MODULE_6__.VariableMap(null, _g1));
			didFail = false;
		}catch (_g) {
			let e = _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_13__.Exception.caught(_g).unwrap();
			didFail = true;
			if (_mcl_error_McbError_js__WEBPACK_IMPORTED_MODULE_1__.McbError.isMclError(e)) {
				let x = e;
				_Logger_js__WEBPACK_IMPORTED_MODULE_7__.Logger.error(x.get_message());
			} else {
				throw _haxe_Exception_js__WEBPACK_IMPORTED_MODULE_13__.Exception.thrown(e);
			};
		};
		compiler.config.events.onPostBuild.dispatch({"success": !didFail});
		let endTime = Date.now() / 1000;
		_Logger_js__WEBPACK_IMPORTED_MODULE_7__.Logger.log("Build finished in " + (endTime - startTime).toFixed(2) + " seconds");
		return compiler;
	}
	static doBuild(opts) {
		_mcl_TemplateRegisterer_js__WEBPACK_IMPORTED_MODULE_3__.TemplateRegisterer.register();
		AppMain.watch = opts.watch;
		let cacheFile = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([opts.baseDir, ".mcb", "fs-cache.txt"]);
		let cache;
		if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(cacheFile)) {
			let _g = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_10__.StringMap();
			let _g1 = 0;
			let _this = fs__WEBPACK_IMPORTED_MODULE_15__.readFileSync(cacheFile, {"encoding": "utf8"}).split("\n");
			let result = new Array(_this.length);
			let _g2 = 0;
			let _g3 = _this.length;
			while (_g2 < _g3) {
				let i = _g2++;
				result[i] = _this[i].split(":");
			};
			let _g4 = result;
			while (_g1 < _g4.length) {
				let e = _g4[_g1];
				++_g1;
				if (e[0] != "") {
					_g.inst.set(e[0], e[1]);
				};
			};
			cache = _g;
		} else {
			cache = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_10__.StringMap();
		};
		let writeCache = function () {
			_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.createDirectory(_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.directory(cacheFile));
			let _g = [];
			let map = cache;
			let _g_map = map;
			let _g_keys = map.keys();
			while (_g_keys.hasNext()) {
				let key = _g_keys.next();
				let _g_value = _g_map.get(key);
				let _g_key = key;
				let k = _g_key;
				let v = _g_value;
				_g.push("" + k + ":" + v);
			};
			let content = _g.join("\n");
			fs__WEBPACK_IMPORTED_MODULE_15__.writeFileSync(cacheFile, content);
		};
		let handleUpdatingFilesBasedOnCache = function (io) {
			let added = io.reportFilesAdded(cache);
			let removed = io.reportFilesRemoved(cache);
			let changed = io.reportFilesChanged(cache);
			let dirsToCheck = new Set();
			let _g = 0;
			while (_g < removed.length) {
				let f = removed[_g];
				++_g;
				fs__WEBPACK_IMPORTED_MODULE_15__.unlinkSync(f);
				dirsToCheck.add(_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.directory(f));
			};
			let _g1 = [];
			let jsIterator = dirsToCheck.values();
			let _g_jsIterator = jsIterator;
			let _g_lastStep = jsIterator.next();
			while (!_g_lastStep.done) {
				let v = _g_lastStep.value;
				_g_lastStep = _g_jsIterator.next();
				let k = v;
				_g1.push(k);
			};
			let dirList = _g1;
			let deletedDirs = new Set();
			let _g2 = 0;
			while (_g2 < dirList.length) {
				let dir = dirList[_g2];
				++_g2;
				if (dir != "" && !deletedDirs.has(dir) && fs__WEBPACK_IMPORTED_MODULE_15__.readdirSync(dir).length == 0) {
					if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(dir)) {
						let _g = 0;
						let _g1 = fs__WEBPACK_IMPORTED_MODULE_15__.readdirSync(dir);
						while (_g < _g1.length) {
							let file = _g1[_g];
							++_g;
							let curPath = dir + "/" + file;
							if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.isDirectory(curPath)) {
								if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(curPath)) {
									let _g = 0;
									let _g1 = fs__WEBPACK_IMPORTED_MODULE_15__.readdirSync(curPath);
									while (_g < _g1.length) {
										let file = _g1[_g];
										++_g;
										let curPath1 = curPath + "/" + file;
										if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.isDirectory(curPath1)) {
											_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.deleteDirectory(curPath1);
										} else {
											fs__WEBPACK_IMPORTED_MODULE_15__.unlinkSync(curPath1);
										};
									};
									fs__WEBPACK_IMPORTED_MODULE_15__.rmdirSync(curPath);
								};
							} else {
								fs__WEBPACK_IMPORTED_MODULE_15__.unlinkSync(curPath);
							};
						};
						fs__WEBPACK_IMPORTED_MODULE_15__.rmdirSync(dir);
					};
					dirList.push(_haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_8__.Path.join([dir, ".."]));
					deletedDirs.add(dir);
				};
			};
			cache = io.reportFileMetadata();
			writeCache();
		};
		let build = AppMain.compile(opts);
		if (build.success) {
			handleUpdatingFilesBasedOnCache(build.io);
		} else if (((build.io) instanceof _Io_js__WEBPACK_IMPORTED_MODULE_17__.SyncIo)) {
			let x = build.io;
			_Logger_js__WEBPACK_IMPORTED_MODULE_7__.Logger.warn("Reverting file changes...");
			x.revertMap.revert();
		};
	}
	static get __name__() {
		return "mcb.AppMain"
	}
	get __class__() {
		return AppMain
	}
}


AppMain.globalJsData = {}
AppMain.watch = false

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibStore: () => (/* binding */ LibStore)
/* harmony export */ });
/* harmony import */ var _sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _error_LibraryError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _Compiler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);











const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.$global

const LibStore = _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.global("$hxClasses")["mcl.LibStore"] = 
class LibStore extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_7__.Register.inherits() {
	new(dir) {
		this.loadedLibs = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_6__.StringMap();
		this.libDir = dir;
	}
	lookup(id, pos, compiler) {
		if (this.loadedLibs.inst.has(id)) {
			return this.loadedLibs.inst.get(id).inst.get("mcblib/" + id + ".mcbt");
		};
		let p = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__.Path.join([this.libDir, id]);
		if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(p)) {
			return this.loadLib(id, p, compiler, pos);
		};
		throw new _error_LibraryError_js__WEBPACK_IMPORTED_MODULE_1__.LibraryError(_Compiler_js__WEBPACK_IMPORTED_MODULE_4__.ErrorUtil.format("Library not found: " + id, pos));
	}
	getFilesInDirectory(dir) {
		let files = fs__WEBPACK_IMPORTED_MODULE_8__.readdirSync(dir);
		let result = [];
		let _g = 0;
		while (_g < files.length) {
			let f = files[_g];
			++_g;
			let p = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__.Path.join([dir, f]);
			if (_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.isDirectory(p)) {
				result = result.concat(this.getFilesInDirectory(p));
			} else {
				result.push(p);
			};
		};
		return result;
	}
	loadLib(id, p, compiler, pos) {
		let baseDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__.Path.join([p, "src", "mcblib"]);
		let srcDir = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__.Path.join([p, "src"]);
		if (!_sys_FileSystem_js__WEBPACK_IMPORTED_MODULE_0__.FileSystem.exists(baseDir)) {
			throw new _error_LibraryError_js__WEBPACK_IMPORTED_MODULE_1__.LibraryError("Library " + id + " does not have a src/mcblib folder");
		};
		let c = new _Compiler_js__WEBPACK_IMPORTED_MODULE_4__.Compiler(p, {});
		let files = this.getFilesInDirectory(baseDir);
		let result = new _haxe_ds_StringMap_js__WEBPACK_IMPORTED_MODULE_6__.StringMap();
		let _g = 0;
		while (_g < files.length) {
			let f = files[_g];
			++_g;
			let ext = _haxe_io_Path_js__WEBPACK_IMPORTED_MODULE_5__.Path.extension(f);
			if (ext != "mbt" && ext != "mcbt") {
				continue;
			};
			let tokens = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_2__.Tokenizer.tokenize(fs__WEBPACK_IMPORTED_MODULE_8__.readFileSync(f, {"encoding": "utf8"}), f);
			let ast = (ext == "mcb") ? _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parseMcbFile(tokens) : _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parseMcbtFile(tokens);
			let mcFile = new _Compiler_js__WEBPACK_IMPORTED_MODULE_4__.McFile(f, ast);
			mcFile.setup(compiler);
			let finalPath = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_9__.HxOverrides.substr(f, srcDir.length + 1, null);
			mcFile.name = finalPath;
			result.inst.set(finalPath, mcFile);
		};
		this.loadedLibs.inst.set(id, result);
		return result.inst.get("mcblib/" + id + ".mcbt");
	}
	static get __name__() {
		return "mcl.LibStore"
	}
	get __class__() {
		return LibStore
	}
}



/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LibraryError: () => (/* binding */ LibraryError)
/* harmony export */ });
/* harmony import */ var _McbError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

const LibraryError = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["mcl.error.LibraryError"] = 
class LibraryError extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits(_McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError) {
	new(message) {
		super.new("Library Error:\n\t" + message);
	}
	static get __name__() {
		return "mcl.error.LibraryError"
	}
	static get __super__() {
		return _McbError_js__WEBPACK_IMPORTED_MODULE_0__.McbError
	}
	get __class__() {
		return LibraryError
	}
}



/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);




const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

const Logger = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["mcb.Logger"] = 
class Logger {
	static log(msg) {
		if (Logger.enabled) {
			let v = Logger.prefix + Logger.chalk.white(msg);
			process.stdout.write(_Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.string(v));
			process.stdout.write("\n");
		};
	}
	static error(msg) {
		if (Logger.enabled) {
			let v = Logger.prefix + Logger.chalk.redBright(msg);
			process.stdout.write(_Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.string(v));
			process.stdout.write("\n");
		};
	}
	static warn(msg) {
		if (Logger.enabled) {
			let v = Logger.prefix + Logger.chalk.yellow(msg);
			process.stdout.write(_Std_js__WEBPACK_IMPORTED_MODULE_2__.Std.string(v));
			process.stdout.write("\n");
		};
	}
	static get __name__() {
		return "mcb.Logger"
	}
	get __class__() {
		return Logger
	}
}


Logger.enabled = true
Logger.chalk = (chalk__WEBPACK_IMPORTED_MODULE_1___default())
Logger.prefix = Logger.chalk.gray("[") + Logger.chalk.green("MCB") + Logger.chalk.gray("] ")

/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const escapeStringRegexp = __webpack_require__(75);
const ansiStyles = __webpack_require__(76);
const stdoutColor = (__webpack_require__(81).stdout);

const template = __webpack_require__(84);

const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');

// `supportsColor.level` → `ansiStyles.color[name]` mapping
const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];

// `color-convert` models to exclude from the Chalk API due to conflicts and such
const skipModels = new Set(['gray']);

const styles = Object.create(null);

function applyOptions(obj, options) {
	options = options || {};

	// Detect level if not set manually
	const scLevel = stdoutColor ? stdoutColor.level : 0;
	obj.level = options.level === undefined ? scLevel : options.level;
	obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
	// We check for this.template here since calling `chalk.constructor()`
	// by itself will have a `this` of a previously constructed chalk object
	if (!this || !(this instanceof Chalk) || this.template) {
		const chalk = {};
		applyOptions(chalk, options);

		chalk.template = function () {
			const args = [].slice.call(arguments);
			return chalkTag.apply(null, [chalk.template].concat(args));
		};

		Object.setPrototypeOf(chalk, Chalk.prototype);
		Object.setPrototypeOf(chalk.template, chalk);

		chalk.template.constructor = Chalk;

		return chalk.template;
	}

	applyOptions(this, options);
}

// Use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001B[94m';
}

for (const key of Object.keys(ansiStyles)) {
	ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

	styles[key] = {
		get() {
			const codes = ansiStyles[key];
			return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
		}
	};
}

styles.visible = {
	get() {
		return build.call(this, this._styles || [], true, 'visible');
	}
};

ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
for (const model of Object.keys(ansiStyles.color.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	styles[model] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.color.close,
					closeRe: ansiStyles.color.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
	if (skipModels.has(model)) {
		continue;
	}

	const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
	styles[bgModel] = {
		get() {
			const level = this.level;
			return function () {
				const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
				const codes = {
					open,
					close: ansiStyles.bgColor.close,
					closeRe: ansiStyles.bgColor.closeRe
				};
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
			};
		}
	};
}

const proto = Object.defineProperties(() => {}, styles);

function build(_styles, _empty, key) {
	const builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder._empty = _empty;

	const self = this;

	Object.defineProperty(builder, 'level', {
		enumerable: true,
		get() {
			return self.level;
		},
		set(level) {
			self.level = level;
		}
	});

	Object.defineProperty(builder, 'enabled', {
		enumerable: true,
		get() {
			return self.enabled;
		},
		set(enabled) {
			self.enabled = enabled;
		}
	});

	// See below for fix regarding invisible grey/dim combination on Windows
	builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';

	// `__proto__` is used because we must return a function, but there is
	// no way to create a function with a different prototype
	builder.__proto__ = proto; // eslint-disable-line no-proto

	return builder;
}

function applyStyle() {
	// Support varags, but simply cast to string in case there's only one arg
	const args = arguments;
	const argsLen = args.length;
	let str = String(arguments[0]);

	if (argsLen === 0) {
		return '';
	}

	if (argsLen > 1) {
		// Don't slice `arguments`, it prevents V8 optimizations
		for (let a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || this.level <= 0 || !str) {
		return this._empty ? '' : str;
	}

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	const originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && this.hasGrey) {
		ansiStyles.dim.open = '';
	}

	for (const code of this._styles.slice().reverse()) {
		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;

		// Close the styling before a linebreak and reopen
		// after next line to fix a bleed issue on macOS
		// https://github.com/chalk/chalk/pull/92
		str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
	}

	// Reset the original `dim` if we changed it to work around the Windows dimmed gray issue
	ansiStyles.dim.open = originalDim;

	return str;
}

function chalkTag(chalk, strings) {
	if (!Array.isArray(strings)) {
		// If chalk() was called by itself or with a string,
		// return the string itself as a string.
		return [].slice.call(arguments, 1).join(' ');
	}

	const args = [].slice.call(arguments, 2);
	const parts = [strings.raw[0]];

	for (let i = 1; i < strings.length; i++) {
		parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
		parts.push(String(strings.raw[i]));
	}

	return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);

module.exports = Chalk(); // eslint-disable-line new-cap
module.exports.supportsColor = stdoutColor;
module.exports["default"] = module.exports; // For TypeScript


/***/ }),
/* 75 */
/***/ ((module) => {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 76 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);

const colorConvert = __webpack_require__(77);

const wrapAnsi16 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${code + offset}m`;
};

const wrapAnsi256 = (fn, offset) => function () {
	const code = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};5;${code}m`;
};

const wrapAnsi16m = (fn, offset) => function () {
	const rgb = fn.apply(colorConvert, arguments);
	return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
};

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39],

			// Bright color
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Fix humans
	styles.color.grey = styles.color.gray;

	for (const groupName of Object.keys(styles)) {
		const group = styles[groupName];

		for (const styleName of Object.keys(group)) {
			const style = group[styleName];

			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});

		Object.defineProperty(styles, 'codes', {
			value: codes,
			enumerable: false
		});
	}

	const ansi2ansi = n => n;
	const rgb2rgb = (r, g, b) => [r, g, b];

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 0)
	};
	styles.color.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 0)
	};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {
		ansi: wrapAnsi16(ansi2ansi, 10)
	};
	styles.bgColor.ansi256 = {
		ansi256: wrapAnsi256(ansi2ansi, 10)
	};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (let key of Object.keys(colorConvert)) {
		if (typeof colorConvert[key] !== 'object') {
			continue;
		}

		const suite = colorConvert[key];

		if (key === 'ansi16') {
			key = 'ansi';
		}

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),
/* 77 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var conversions = __webpack_require__(78);
var route = __webpack_require__(80);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),
/* 78 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* MIT license */
var cssKeywords = __webpack_require__(79);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),
/* 79 */
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 80 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var conversions = __webpack_require__(78);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),
/* 81 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(82);
const hasFlag = __webpack_require__(83);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),
/* 82 */
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),
/* 83 */
/***/ ((module) => {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 84 */
/***/ ((module) => {

"use strict";

const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;

const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);

function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}

	return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;

	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}

	return results;
}

function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;

	const results = [];
	let matches;

	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];

		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}

	return results;
}

function buildStyle(chalk, styles) {
	const enabled = {};

	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}

	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}

			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}

	return current;
}

module.exports = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];

	// eslint-disable-next-line max-params
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}

			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});

	chunks.push(chunk.join(''));

	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}

	return chunks.join('');
};


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpNodeJs: () => (/* binding */ HttpNodeJs)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _io_Bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _HttpBase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _ds_StringMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _Reflect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48);











const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const HttpNodeJs = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["haxe.http.HttpNodeJs"] = 
class HttpNodeJs extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.inherits(_HttpBase_js__WEBPACK_IMPORTED_MODULE_4__.HttpBase) {
	new(url) {
		super.new(url);
	}
	request(post) {
		this.responseAsString = null;
		this.responseBytes = null;
		this.responseHeaders = null;
		let parsedUrl = new url__WEBPACK_IMPORTED_MODULE_0__.URL(this.url);
		let secure = parsedUrl.protocol == "https:";
		let host = parsedUrl.hostname;
		let path = parsedUrl.pathname;
		let port = (parsedUrl.port != null) ? _Std_js__WEBPACK_IMPORTED_MODULE_8__.Std.parseInt(parsedUrl.port) : (secure) ? 443 : 80;
		let h = {};
		let _g = 0;
		let _g1 = this.headers;
		while (_g < _g1.length) {
			let i = _g1[_g];
			++_g;
			let arr = _Reflect_js__WEBPACK_IMPORTED_MODULE_9__.Reflect.field(h, i.name);
			if (arr == null) {
				arr = new Array();
				h[i.name] = arr;
			};
			arr.push(i.value);
		};
		if (this.postData != null || this.postBytes != null) {
			post = true;
		};
		let uri = null;
		let _g2 = 0;
		let _g3 = this.params;
		while (_g2 < _g3.length) {
			let p = _g3[_g2];
			++_g2;
			if (uri == null) {
				uri = "";
			} else {
				uri += "&";
			};
			let s = p.name;
			let uri1 = encodeURIComponent(s) + "=";
			let s1 = p.value;
			uri += uri1 + encodeURIComponent(s1);
		};
		let question = path.split("?").length <= 1;
		if (uri != null) {
			path += ((question) ? "?" : "&") + uri;
		};
		let opts = {"protocol": parsedUrl.protocol, "hostname": host, "port": port, "method": (post) ? "POST" : "GET", "path": path, "headers": h};
		let _gthis = this;
		let httpResponse = function (res) {
			res.setEncoding("binary");
			let s = res.statusCode;
			if (s != null) {
				_gthis.onStatus(s);
			};
			let data = [];
			res.on("data", function (chunk) {
				data.push(buffer__WEBPACK_IMPORTED_MODULE_7__.Buffer.from(chunk, "binary"));
			});
			res.on("end", function (_) {
				let buf = (data.length == 1) ? data[0] : buffer__WEBPACK_IMPORTED_MODULE_7__.Buffer.concat(data);
				let httpResponse = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
				_gthis.responseBytes = _io_Bytes_js__WEBPACK_IMPORTED_MODULE_3__.Bytes.ofData(httpResponse);
				_gthis.req = null;
				let httpResponse1 = new _ds_StringMap_js__WEBPACK_IMPORTED_MODULE_5__.StringMap();
				_gthis.responseHeaders = httpResponse1;
				let _g = 0;
				let _g1 = _Reflect_js__WEBPACK_IMPORTED_MODULE_9__.Reflect.fields(res.headers);
				while (_g < _g1.length) {
					let field = _g1[_g];
					++_g;
					_gthis.responseHeaders.inst.set(field, _Reflect_js__WEBPACK_IMPORTED_MODULE_9__.Reflect.field(res.headers, field));
				};
				if (s != null && s >= 200 && s < 400) {
					_gthis.success(_gthis.responseBytes);
				} else {
					_gthis.onError("Http Error #" + s);
				};
			});
		};
		this.req = (secure) ? https__WEBPACK_IMPORTED_MODULE_1__.request(opts, httpResponse) : http__WEBPACK_IMPORTED_MODULE_2__.request(opts, httpResponse);
		if (post) {
			if (this.postData != null) {
				this.req.write(this.postData);
			} else if (this.postBytes != null) {
				this.req.setHeader("Content-Length", "" + this.postBytes.length);
				this.req.write(buffer__WEBPACK_IMPORTED_MODULE_7__.Buffer.from(this.postBytes.b.bufferValue));
			};
		};
		this.req.end();
	}
	static get __name__() {
		return "haxe.http.HttpNodeJs"
	}
	static get __super__() {
		return _HttpBase_js__WEBPACK_IMPORTED_MODULE_4__.HttpBase
	}
	get __class__() {
		return HttpNodeJs
	}
}



/***/ }),
/* 86 */
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),
/* 87 */
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),
/* 88 */
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpBase: () => (/* binding */ HttpBase)
/* harmony export */ });
/* harmony import */ var _io_Encoding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.$global

/**
This class can be used to handle Http requests consistently across
platforms. There are two intended usages:

- call `haxe.Http.requestUrl(url)` and receive the result as a `String`
(only available on `sys` targets)
- create a `new haxe.Http(url)`, register your callbacks for `onData`,
`onError` and `onStatus`, then call `request()`.
*/
const HttpBase = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.global("$hxClasses")["haxe.http.HttpBase"] = 
class HttpBase extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.inherits() {
	new(url) {
		this.url = url;
		this.headers = [];
		this.params = [];
		this.emptyOnData = _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.bind(this, this.onData);
	}
	get responseData() {
		return this.get_responseData()
	}
	
	/**
	This method is called upon a successful request, with `data` containing
	the result String.
	
	The intended usage is to bind it to a custom function:
	`httpInstance.onData = function(data) { // handle result }`
	*/
	onData(data) {
	}
	
	/**
	This method is called upon a successful request, with `data` containing
	the result String.
	
	The intended usage is to bind it to a custom function:
	`httpInstance.onBytes = function(data) { // handle result }`
	*/
	onBytes(data) {
	}
	
	/**
	This method is called upon a request error, with `msg` containing the
	error description.
	
	The intended usage is to bind it to a custom function:
	`httpInstance.onError = function(msg) { // handle error }`
	*/
	onError(msg) {
	}
	
	/**
	This method is called upon a Http status change, with `status` being the
	new status.
	
	The intended usage is to bind it to a custom function:
	`httpInstance.onStatus = function(status) { // handle status }`
	*/
	onStatus(status) {
	}
	
	/**
	Override this if extending `haxe.Http` with overriding `onData`
	*/
	hasOnData() {
		return _genes_Register_js__WEBPACK_IMPORTED_MODULE_1__.Register.bind(this, this.onData) != this.emptyOnData;
	}
	success(data) {
		this.responseBytes = data;
		this.responseAsString = null;
		if (this.hasOnData()) {
			this.onData(this.get_responseData());
		};
		this.onBytes(this.responseBytes);
	}
	get_responseData() {
		if (this.responseAsString == null && this.responseBytes != null) {
			this.responseAsString = this.responseBytes.getString(0, this.responseBytes.length, _io_Encoding_js__WEBPACK_IMPORTED_MODULE_0__.Encoding.UTF8);
		};
		return this.responseAsString;
	}
	static get __name__() {
		return "haxe.http.HttpBase"
	}
	get __class__() {
		return HttpBase
	}
}



/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultResolver: () => (/* binding */ DefaultResolver),
/* harmony export */   Unserializer: () => (/* binding */ Unserializer)
/* harmony export */ });
/* harmony import */ var _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _ds_List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _ds_IntMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);










const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.$global

const DefaultResolver = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["haxe._Unserializer.DefaultResolver"] = 
class DefaultResolver extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.inherits() {
	new() {
	}
	resolveClass(name) {
		return _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")[name];
	}
	resolveEnum(name) {
		return _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxEnums")[name];
	}
	static get __name__() {
		return "haxe._Unserializer.DefaultResolver"
	}
	get __class__() {
		return DefaultResolver
	}
}


/**
The `Unserializer` class is the complement to the `Serializer` class. It parses
a serialization `String` and creates objects from the contained data.

This class can be used in two ways:

- create a `new Unserializer()` instance with a given serialization
String, then call its `unserialize()` method until all values are
extracted
- call `Unserializer.run()`  to unserialize a single value from a given
String

The specification of the serialization format can be found here:
<https://haxe.org/manual/serialization/format>
*/
const Unserializer = _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.global("$hxClasses")["haxe.Unserializer"] = 
class Unserializer extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_6__.Register.inherits() {
	new(buf) {
		this.buf = buf;
		this.length = this.buf.length;
		this.pos = 0;
		this.scache = new Array();
		this.cache = new Array();
		let r = Unserializer.DEFAULT_RESOLVER;
		if (r == null) {
			r = new DefaultResolver();
			Unserializer.DEFAULT_RESOLVER = r;
		};
		this.resolver = r;
	}
	readDigits() {
		let k = 0;
		let s = false;
		let fpos = this.pos;
		while (true) {
			let c = this.buf.charCodeAt(this.pos);
			if (c != c) {
				break;
			};
			if (c == 45) {
				if (this.pos != fpos) {
					break;
				};
				s = true;
				this.pos++;
				continue;
			};
			if (c < 48 || c > 57) {
				break;
			};
			k = k * 10 + (c - 48);
			this.pos++;
		};
		if (s) {
			k *= -1;
		};
		return k;
	}
	readFloat() {
		let p1 = this.pos;
		while (true) {
			let c = this.buf.charCodeAt(this.pos);
			if (c != c) {
				break;
			};
			if (c >= 43 && c < 58 || c == 101 || c == 69) {
				this.pos++;
			} else {
				break;
			};
		};
		return parseFloat(_HxOverrides_js__WEBPACK_IMPORTED_MODULE_8__.HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	unserializeObject(o) {
		while (true) {
			if (this.pos >= this.length) {
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid object");
			};
			if (this.buf.charCodeAt(this.pos) == 103) {
				break;
			};
			let k = this.unserialize();
			if (typeof(k) != "string") {
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid object key");
			};
			let v = this.unserialize();
			o[k] = v;
		};
		this.pos++;
	}
	unserializeEnum(edecl, tag) {
		if (this.buf.charCodeAt(this.pos++) != 58) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid enum format");
		};
		let nargs = this.readDigits();
		if (nargs == 0) {
			return _Type_js__WEBPACK_IMPORTED_MODULE_7__.Type.createEnum(edecl, tag);
		};
		let args = new Array();
		while (nargs-- > 0) args.push(this.unserialize());
		return _Type_js__WEBPACK_IMPORTED_MODULE_7__.Type.createEnum(edecl, tag, args);
	}
	
	/**
	Unserializes the next part of `this` Unserializer instance and returns
	the according value.
	
	This function may call `this.resolver.resolveClass` to determine a
	Class from a String, and `this.resolver.resolveEnum` to determine an
	Enum from a String.
	
	If `this` Unserializer instance contains no more or invalid data, an
	exception is thrown.
	
	This operation may fail on structurally valid data if a type cannot be
	resolved or if a field cannot be set. This can happen when unserializing
	Strings that were serialized on a different Haxe target, in which the
	serialization side has to make sure not to include platform-specific
	data.
	
	Classes are created from `Type.createEmptyInstance`, which means their
	constructors are not called.
	*/
	unserialize() {
		switch (this.buf.charCodeAt(this.pos++)) {
			case 65:
				let name = this.unserialize();
				let cl = this.resolver.resolveClass(name);
				if (cl == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Class not found " + name);
				};
				return cl;
				break
			case 66:
				let name1 = this.unserialize();
				let e = this.resolver.resolveEnum(name1);
				if (e == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Enum not found " + name1);
				};
				return e;
				break
			case 67:
				let name2 = this.unserialize();
				let cl1 = this.resolver.resolveClass(name2);
				if (cl1 == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Class not found " + name2);
				};
				let o = Object.create(cl1.prototype);
				this.cache.push(o);
				o.hxUnserialize(this);
				if (this.buf.charCodeAt(this.pos++) != 103) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid custom data");
				};
				return o;
				break
			case 77:
				let h = new _ds_ObjectMap_js__WEBPACK_IMPORTED_MODULE_2__.ObjectMap();
				this.cache.push(h);
				let buf = this.buf;
				while (this.buf.charCodeAt(this.pos) != 104) {
					let s = this.unserialize();
					let value = this.unserialize();
					h.inst.set(s, value);
				};
				this.pos++;
				return h;
				break
			case 82:
				let n = this.readDigits();
				if (n < 0 || n >= this.scache.length) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid string reference");
				};
				return this.scache[n];
				break
			case 97:
				let buf1 = this.buf;
				let a = new Array();
				this.cache.push(a);
				while (true) {
					let c = this.buf.charCodeAt(this.pos);
					if (c == 104) {
						this.pos++;
						break;
					};
					if (c == 117) {
						this.pos++;
						let n = this.readDigits();
						a[a.length + n - 1] = null;
					} else {
						a.push(this.unserialize());
					};
				};
				return a;
				break
			case 98:
				let h1 = new _ds_StringMap_js__WEBPACK_IMPORTED_MODULE_1__.StringMap();
				this.cache.push(h1);
				let buf2 = this.buf;
				while (this.buf.charCodeAt(this.pos) != 104) {
					let s = this.unserialize();
					let value = this.unserialize();
					h1.inst.set(s, value);
				};
				this.pos++;
				return h1;
				break
			case 99:
				let name3 = this.unserialize();
				let cl2 = this.resolver.resolveClass(name3);
				if (cl2 == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Class not found " + name3);
				};
				let o1 = Object.create(cl2.prototype);
				this.cache.push(o1);
				this.unserializeObject(o1);
				return o1;
				break
			case 100:
				return this.readFloat();
				break
			case 102:
				return false;
				break
			case 105:
				return this.readDigits();
				break
			case 106:
				let name4 = this.unserialize();
				let edecl = this.resolver.resolveEnum(name4);
				if (edecl == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Enum not found " + name4);
				};
				this.pos++;
				let index = this.readDigits();
				let _this = edecl.__constructs__;
				let result = new Array(_this.length);
				let _g = 0;
				let _g1 = _this.length;
				while (_g < _g1) {
					let i = _g++;
					result[i] = _this[i]._hx_name;
				};
				let tag = result[index];
				if (tag == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Unknown enum index " + name4 + "@" + index);
				};
				let e1 = this.unserializeEnum(edecl, tag);
				this.cache.push(e1);
				return e1;
				break
			case 107:
				return NaN;
				break
			case 108:
				let l = new _ds_List_js__WEBPACK_IMPORTED_MODULE_3__.List();
				this.cache.push(l);
				let buf3 = this.buf;
				while (this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
				this.pos++;
				return l;
				break
			case 109:
				return -Infinity;
				break
			case 110:
				return null;
				break
			case 111:
				let o2 = {};
				this.cache.push(o2);
				this.unserializeObject(o2);
				return o2;
				break
			case 112:
				return Infinity;
				break
			case 113:
				let h2 = new _ds_IntMap_js__WEBPACK_IMPORTED_MODULE_4__.IntMap();
				this.cache.push(h2);
				let buf4 = this.buf;
				let c = this.buf.charCodeAt(this.pos++);
				while (c == 58) {
					let i = this.readDigits();
					let value = this.unserialize();
					h2.inst.set(i, value);
					c = this.buf.charCodeAt(this.pos++);
				};
				if (c != 104) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid IntMap format");
				};
				return h2;
				break
			case 114:
				let n1 = this.readDigits();
				if (n1 < 0 || n1 >= this.cache.length) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid reference");
				};
				return this.cache[n1];
				break
			case 115:
				let len = this.readDigits();
				let buf5 = this.buf;
				if (this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid bytes length");
				};
				let codes = Unserializer.CODES;
				if (codes == null) {
					codes = Unserializer.initCodes();
					Unserializer.CODES = codes;
				};
				let i = this.pos;
				let rest = len & 3;
				let size = (len >> 2) * 3 + ((rest >= 2) ? rest - 1 : 0);
				let max = i + (len - rest);
				let bytes = new _io_Bytes_js__WEBPACK_IMPORTED_MODULE_0__.Bytes(new ArrayBuffer(size));
				let bpos = 0;
				while (i < max) {
					let c1 = codes[buf5.charCodeAt(i++)];
					let c2 = codes[buf5.charCodeAt(i++)];
					bytes.b[bpos++] = c1 << 2 | c2 >> 4;
					let c3 = codes[buf5.charCodeAt(i++)];
					bytes.b[bpos++] = c2 << 4 | c3 >> 2;
					let c4 = codes[buf5.charCodeAt(i++)];
					bytes.b[bpos++] = c3 << 6 | c4;
				};
				if (rest >= 2) {
					let c1 = codes[buf5.charCodeAt(i++)];
					let c2 = codes[buf5.charCodeAt(i++)];
					bytes.b[bpos++] = c1 << 2 | c2 >> 4;
					if (rest == 3) {
						let c3 = codes[buf5.charCodeAt(i++)];
						bytes.b[bpos++] = c2 << 4 | c3 >> 2;
					};
				};
				this.pos += len;
				this.cache.push(bytes);
				return bytes;
				break
			case 116:
				return true;
				break
			case 118:
				let d;
				if (this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
					d = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_8__.HxOverrides.strDate(_HxOverrides_js__WEBPACK_IMPORTED_MODULE_8__.HxOverrides.substr(this.buf, this.pos, 19));
					this.pos += 19;
				} else {
					d = new Date(this.readFloat());
				};
				this.cache.push(d);
				return d;
				break
			case 119:
				let name5 = this.unserialize();
				let edecl1 = this.resolver.resolveEnum(name5);
				if (edecl1 == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Enum not found " + name5);
				};
				let e2 = this.unserializeEnum(edecl1, this.unserialize());
				this.cache.push(e2);
				return e2;
				break
			case 120:
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown(this.unserialize());
				break
			case 121:
				let len1 = this.readDigits();
				if (this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len1) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid string length");
				};
				let s = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_8__.HxOverrides.substr(this.buf, this.pos, len1);
				this.pos += len1;
				s = decodeURIComponent(s.split("+").join(" "));
				this.scache.push(s);
				return s;
				break
			case 122:
				return 0;
				break
			default:
			
		};
		this.pos--;
		throw _Exception_js__WEBPACK_IMPORTED_MODULE_5__.Exception.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	static initCodes() {
		let codes = new Array();
		let _g = 0;
		let _g1 = Unserializer.BASE64.length;
		while (_g < _g1) {
			let i = _g++;
			codes[Unserializer.BASE64.charCodeAt(i)] = i;
		};
		return codes;
	}
	static get __name__() {
		return "haxe.Unserializer"
	}
	get __class__() {
		return Unserializer
	}
}


Unserializer.DEFAULT_RESOLVER = new DefaultResolver()
Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:"
Unserializer.CODES = null

/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   ListNode: () => (/* binding */ ListNode)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);



const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
A linked-list of elements. The list is composed of element container objects
that are chained together. It is optimized so that adding or removing an
element does not imply copying the whole list content every time.

@see https://haxe.org/manual/std-List.html
*/
const List = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxe.ds.List"] = 
class List extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new() {
		this.length = 0;
	}
	
	/**
	Adds element `item` at the end of `this` List.
	
	`this.length` increases by 1.
	*/
	add(item) {
		let x = new ListNode(item, null);
		if (this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		};
		this.q = x;
		this.length++;
	}
	
	/**
	Adds element `item` at the beginning of `this` List.
	
	`this.length` increases by 1.
	*/
	push(item) {
		let x = new ListNode(item, this.h);
		this.h = x;
		if (this.q == null) {
			this.q = x;
		};
		this.length++;
	}
	
	/**
	Returns the first element of `this` List, or null if no elements exist.
	
	This function does not modify `this` List.
	*/
	first() {
		if (this.h == null) {
			return null;
		} else {
			return this.h.item;
		};
	}
	
	/**
	Returns the first element of `this` List, or null if no elements exist.
	
	The element is removed from `this` List.
	*/
	pop() {
		if (this.h == null) {
			return null;
		};
		let x = this.h.item;
		this.h = this.h.next;
		if (this.h == null) {
			this.q = null;
		};
		this.length--;
		return x;
	}
	
	/**
	Tells if `this` List is empty.
	*/
	isEmpty() {
		return this.h == null;
	}
	
	/**
	Returns a string representation of `this` List.
	
	The result is enclosed in { } with the individual elements being
	separated by a comma.
	*/
	toString() {
		let s_b = "";
		let first = true;
		let l = this.h;
		s_b += "{";
		while (l != null) {
			if (first) {
				first = false;
			} else {
				s_b += ", ";
			};
			s_b += _Std_js__WEBPACK_IMPORTED_MODULE_1__.Std.string(_Std_js__WEBPACK_IMPORTED_MODULE_1__.Std.string(l.item));
			l = l.next;
		};
		s_b += "}";
		return s_b;
	}
	static get __name__() {
		return "haxe.ds.List"
	}
	get __class__() {
		return List
	}
}


const ListNode = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["haxe.ds._List.ListNode"] = 
class ListNode extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new(item, next) {
		this.item = item;
		this.next = next;
	}
	static get __name__() {
		return "haxe.ds._List.ListNode"
	}
	get __class__() {
		return ListNode
	}
}



/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Template: () => (/* binding */ Template),
/* harmony export */   TemplateExpr: () => (/* binding */ TemplateExpr)
/* harmony export */ });
/* harmony import */ var _iterators_ArrayIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _ds_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _Exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _StringBuf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93);
/* harmony import */ var _Std_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _Reflect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _EReg_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);










const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.$global

const TemplateExpr = 
_genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxEnums")["haxe._Template.TemplateExpr"] = 
{
	__ename__: "haxe._Template.TemplateExpr",
	
	OpVar: Object.assign((v) => ({_hx_index: 0, __enum__: "haxe._Template.TemplateExpr", "v": v, "@kind": "OpVar"}), {_hx_name: "OpVar", __params__: ["v"]}),
	OpExpr: Object.assign((expr) => ({_hx_index: 1, __enum__: "haxe._Template.TemplateExpr", "expr": expr, "@kind": "OpExpr"}), {_hx_name: "OpExpr", __params__: ["expr"]}),
	OpIf: Object.assign((expr, eif, eelse) => ({_hx_index: 2, __enum__: "haxe._Template.TemplateExpr", "expr": expr, "eif": eif, "eelse": eelse, "@kind": "OpIf"}), {_hx_name: "OpIf", __params__: ["expr", "eif", "eelse"]}),
	OpStr: Object.assign((str) => ({_hx_index: 3, __enum__: "haxe._Template.TemplateExpr", "str": str, "@kind": "OpStr"}), {_hx_name: "OpStr", __params__: ["str"]}),
	OpBlock: Object.assign((l) => ({_hx_index: 4, __enum__: "haxe._Template.TemplateExpr", "l": l, "@kind": "OpBlock"}), {_hx_name: "OpBlock", __params__: ["l"]}),
	OpForeach: Object.assign((expr, loop) => ({_hx_index: 5, __enum__: "haxe._Template.TemplateExpr", "expr": expr, "loop": loop, "@kind": "OpForeach"}), {_hx_name: "OpForeach", __params__: ["expr", "loop"]}),
	OpMacro: Object.assign((name, params) => ({_hx_index: 6, __enum__: "haxe._Template.TemplateExpr", "name": name, "params": params, "@kind": "OpMacro"}), {_hx_name: "OpMacro", __params__: ["name", "params"]})
}
TemplateExpr.__constructs__ = [TemplateExpr.OpVar, TemplateExpr.OpExpr, TemplateExpr.OpIf, TemplateExpr.OpStr, TemplateExpr.OpBlock, TemplateExpr.OpForeach, TemplateExpr.OpMacro]
TemplateExpr.__empty_constructs__ = []

/**
`Template` provides a basic templating mechanism to replace values in a source
String, and to have some basic logic.

A complete documentation of the supported syntax is available at:
<https://haxe.org/manual/std-template.html>
*/
const Template = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.global("$hxClasses")["haxe.Template"] = 
class Template extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.inherits() {
	new(str) {
		let tokens = this.parseTokens(str);
		this.expr = this.parseBlock(tokens);
		if (!tokens.isEmpty()) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unexpected '" + _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(tokens.first().s) + "'");
		};
	}
	
	/**
	Executes `this` `Template`, taking into account `context` for
	replacements and `macros` for callback functions.
	
	If `context` has a field `name`, its value replaces all occurrences of
	`::name::` in the `Template`. Otherwise `Template.globals` is checked instead,
	If `name` is not a field of that either, `::name::` is replaced with `null`.
	
	If `macros` has a field `name`, all occurrences of `$$name(args)` are
	replaced with the result of calling that field. The first argument is
	always the `resolve()` method, followed by the given arguments.
	If `macros` has no such field, the result is unspecified.
	
	If `context` is `null`, the result is unspecified. If `macros` is `null`,
	no macros are used.
	*/
	execute(context, macros) {
		this.macros = (macros == null) ? {} : macros;
		this.context = context;
		this.stack = new _ds_List_js__WEBPACK_IMPORTED_MODULE_1__.List();
		this.buf = new _StringBuf_js__WEBPACK_IMPORTED_MODULE_4__.StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	resolve(v) {
		if (v == "__current__") {
			return this.context;
		};
		if (_Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.isObject(this.context)) {
			let value = _Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.getProperty(this.context, v);
			if (value != null || Object.prototype.hasOwnProperty.call(this.context, v)) {
				return value;
			};
		};
		let _g_head = this.stack.h;
		while (_g_head != null) {
			let val = _g_head.item;
			_g_head = _g_head.next;
			let ctx = val;
			let value = _Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.getProperty(ctx, v);
			if (value != null || Object.prototype.hasOwnProperty.call(ctx, v)) {
				return value;
			};
		};
		return _Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.field(Template.globals, v);
	}
	parseTokens(data) {
		let tokens = new _ds_List_js__WEBPACK_IMPORTED_MODULE_1__.List();
		while (Template.splitter.match(data)) {
			let p = Template.splitter.matchedPos();
			if (p.pos > 0) {
				tokens.add({"p": _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(data, 0, p.pos), "s": true, "l": null});
			};
			if (_HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.cca(data, p.pos) == 58) {
				tokens.add({"p": _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(data, p.pos + 2, p.len - 4), "s": false, "l": null});
				data = Template.splitter.matchedRight();
				continue;
			};
			let parp = p.pos + p.len;
			let npar = 1;
			let params = [];
			let part = "";
			while (true) {
				let c = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.cca(data, parp);
				++parp;
				if (c == 40) {
					++npar;
				} else if (c == 41) {
					--npar;
					if (npar <= 0) {
						break;
					};
				} else if (c == null) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unclosed macro parenthesis");
				};
				if (c == 44 && npar == 1) {
					params.push(part);
					part = "";
				} else {
					part += String.fromCodePoint(c);
				};
			};
			params.push(part);
			tokens.add({"p": Template.splitter.matched(2), "s": false, "l": params});
			data = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(data, parp, data.length - parp);
		};
		if (data.length > 0) {
			tokens.add({"p": data, "s": true, "l": null});
		};
		return tokens;
	}
	parseBlock(tokens) {
		let l = new _ds_List_js__WEBPACK_IMPORTED_MODULE_1__.List();
		while (true) {
			let t = tokens.first();
			if (t == null) {
				break;
			};
			if (!t.s && (t.p == "end" || t.p == "else" || _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(t.p, 0, 7) == "elseif ")) {
				break;
			};
			l.add(this.parse(tokens));
		};
		if (l.length == 1) {
			return l.first();
		};
		return TemplateExpr.OpBlock(l);
	}
	parse(tokens) {
		let t = tokens.pop();
		let p = t.p;
		if (t.s) {
			return TemplateExpr.OpStr(p);
		};
		if (t.l != null) {
			let pe = new _ds_List_js__WEBPACK_IMPORTED_MODULE_1__.List();
			let _g = 0;
			let _g1 = t.l;
			while (_g < _g1.length) {
				let p = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p)));
			};
			return TemplateExpr.OpMacro(p, pe);
		};
		let kwdEnd = function (kwd) {
			let pos = -1;
			let length = kwd.length;
			if (_HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(p, 0, length) == kwd) {
				pos = length;
				let _g_offset = 0;
				let _g_s = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(p, length, null);
				while (_g_offset < _g_s.length) {
					let c = _g_s.charCodeAt(_g_offset++);
					if (c == 32) {
						++pos;
					} else {
						break;
					};
				};
			};
			return pos;
		};
		let pos = kwdEnd("if");
		if (pos > 0) {
			p = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(p, pos, p.length - pos);
			let e = this.parseExpr(p);
			let eif = this.parseBlock(tokens);
			let t = tokens.first();
			let eelse;
			if (t == null) {
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unclosed 'if'");
			};
			if (t.p == "end") {
				tokens.pop();
				eelse = null;
			} else if (t.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t = tokens.pop();
				if (t == null || t.p != "end") {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unclosed 'else'");
				};
			} else {
				t.p = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(t.p, 4, t.p.length - 4);
				eelse = this.parse(tokens);
			};
			return TemplateExpr.OpIf(e, eif, eelse);
		};
		let pos1 = kwdEnd("foreach");
		if (pos1 >= 0) {
			p = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(p, pos1, p.length - pos1);
			let e = this.parseExpr(p);
			let efor = this.parseBlock(tokens);
			let t = tokens.pop();
			if (t == null || t.p != "end") {
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unclosed 'foreach'");
			};
			return TemplateExpr.OpForeach(e, efor);
		};
		if (Template.expr_splitter.match(p)) {
			return TemplateExpr.OpExpr(this.parseExpr(p));
		};
		return TemplateExpr.OpVar(p);
	}
	parseExpr(data) {
		let l = new _ds_List_js__WEBPACK_IMPORTED_MODULE_1__.List();
		let expr = data;
		while (Template.expr_splitter.match(data)) {
			let p = Template.expr_splitter.matchedPos();
			let k = p.pos + p.len;
			if (p.pos != 0) {
				l.add({"p": _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(data, 0, p.pos), "s": true});
			};
			let p1 = Template.expr_splitter.matched(0);
			l.add({"p": p1, "s": p1.indexOf("\"") >= 0});
			data = Template.expr_splitter.matchedRight();
		};
		if (data.length != 0) {
			let _g_offset = 0;
			let _g_s = data;
			while (_g_offset < _g_s.length) {
				let _g_key = _g_offset;
				let _g_value = _g_s.charCodeAt(_g_offset++);
				let i = _g_key;
				let c = _g_value;
				if (c != 32) {
					l.add({"p": _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(data, i, null), "s": true});
					break;
				};
			};
		};
		let e;
		try {
			e = this.makeExpr(l);
			if (!l.isEmpty()) {
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(l.first().p);
			};
		}catch (_g) {
			let _g1 = _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.caught(_g).unwrap();
			if (typeof(_g1) == "string") {
				let s = _g1;
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unexpected '" + s + "' in " + expr);
			} else {
				throw _g;
			};
		};
		return function () {
			try {
				return e();
			}catch (_g) {
				let exc = _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.caught(_g).unwrap();
				throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Error : " + _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(exc) + " in " + expr);
			};
		};
	}
	makeConst(v) {
		Template.expr_trim.match(v);
		v = Template.expr_trim.matched(1);
		if (_HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.cca(v, 0) == 34) {
			let str = _HxOverrides_js__WEBPACK_IMPORTED_MODULE_7__.HxOverrides.substr(v, 1, v.length - 2);
			return function () {
				return str;
			};
		};
		if (Template.expr_int.match(v)) {
			let i = _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.parseInt(v);
			return function () {
				return i;
			};
		};
		if (Template.expr_float.match(v)) {
			let f = parseFloat(v);
			return function () {
				return f;
			};
		};
		let me = this;
		return function () {
			return me.resolve(v);
		};
	}
	makePath(e, l) {
		let p = l.first();
		if (p == null || p.p != ".") {
			return e;
		};
		l.pop();
		let field = l.pop();
		if (field == null || !field.s) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(field.p);
		};
		let f = field.p;
		Template.expr_trim.match(f);
		f = Template.expr_trim.matched(1);
		return this.makePath(function () {
			return _Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.field(e(), f);
		}, l);
	}
	makeExpr(l) {
		return this.makePath(this.makeExpr2(l), l);
	}
	skipSpaces(l) {
		let p = l.first();
		while (p != null) {
			let _g_offset = 0;
			let _g_s = p.p;
			while (_g_offset < _g_s.length) {
				let c = _g_s.charCodeAt(_g_offset++);
				if (c != 32) {
					return;
				};
			};
			l.pop();
			p = l.first();
		};
	}
	makeExpr2(l) {
		this.skipSpaces(l);
		let p = l.pop();
		this.skipSpaces(l);
		if (p == null) {
			throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("<eof>");
		};
		if (p.s) {
			return this.makeConst(p.p);
		};
		switch (p.p) {
			case "!":
				let e = this.makeExpr(l);
				return function () {
					let v = e();
					if (v != null) {
						return v == false;
					} else {
						return true;
					};
				};
				break
			case "(":
				this.skipSpaces(l);
				let e1 = this.makeExpr(l);
				this.skipSpaces(l);
				let p1 = l.pop();
				if (p1 == null || p1.s) {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(p1);
				};
				if (p1.p == ")") {
					return e1;
				};
				this.skipSpaces(l);
				let e2 = this.makeExpr(l);
				this.skipSpaces(l);
				let p2 = l.pop();
				this.skipSpaces(l);
				if (p2 == null || p2.p != ")") {
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(p2);
				};
				switch (p1.p) {
					case "!=":
						return function () {
							return e1() != e2();
						};
						break
					case "&&":
						return function () {
							return e1() && e2();
						};
						break
					case "*":
						return function () {
							return e1() * e2();
						};
						break
					case "+":
						return function () {
							return e1() + e2();
						};
						break
					case "-":
						return function () {
							return e1() - e2();
						};
						break
					case "/":
						return function () {
							return e1() / e2();
						};
						break
					case "<":
						return function () {
							return e1() < e2();
						};
						break
					case "<=":
						return function () {
							return e1() <= e2();
						};
						break
					case "==":
						return function () {
							return e1() == e2();
						};
						break
					case ">":
						return function () {
							return e1() > e2();
						};
						break
					case ">=":
						return function () {
							return e1() >= e2();
						};
						break
					case "||":
						return function () {
							return e1() || e2();
						};
						break
					default:
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Unknown operation " + p1.p);
					
				};
				break
			case "-":
				let e3 = this.makeExpr(l);
				return function () {
					return -e3();
				};
				break
			
		};
		throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(p.p);
	}
	run(e) {
		switch (e._hx_index) {
			case 0:
				let v = e.v;
				let _this = this.buf;
				let x = _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(this.resolve(v));
				_this.b += _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(x);
				break
			case 1:
				let e1 = e.expr;
				let _this1 = this.buf;
				let x1 = _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(e1());
				_this1.b += _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(x1);
				break
			case 2:
				let e2 = e.expr;
				let eif = e.eif;
				let eelse = e.eelse;
				let v1 = e2();
				if (v1 == null || v1 == false) {
					if (eelse != null) {
						this.run(eelse);
					};
				} else {
					this.run(eif);
				};
				break
			case 3:
				let str = e.str;
				this.buf.b += (str == null) ? "null" : "" + str;
				break
			case 4:
				let l = e.l;
				let _g_head = l.h;
				while (_g_head != null) {
					let val = _g_head.item;
					_g_head = _g_head.next;
					let e = val;
					this.run(e);
				};
				break
			case 5:
				let e3 = e.expr;
				let loop = e.loop;
				let v2 = e3();
				try {
					let x = _genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.getIterator(v2);
					if (x.hasNext == null) {
						throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(null);
					};
					v2 = x;
				}catch (_g) {
					try {
						if (v2.hasNext == null) {
							throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(null);
						};
					}catch (_g) {
						throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown("Cannot iter on " + _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(v2));
					};
				};
				this.stack.push(this.context);
				let v3 = v2;
				let ctx = v3;
				while (ctx.hasNext()) {
					let ctx1 = ctx.next();
					this.context = ctx1;
					this.run(loop);
				};
				this.context = this.stack.pop();
				break
			case 6:
				let m = e.name;
				let params = e.params;
				let v4 = _Reflect_js__WEBPACK_IMPORTED_MODULE_6__.Reflect.field(this.macros, m);
				let pl = new Array();
				let old = this.buf;
				pl.push(_genes_Register_js__WEBPACK_IMPORTED_MODULE_3__.Register.bind(this, this.resolve));
				let _g_head1 = params.h;
				while (_g_head1 != null) {
					let val = _g_head1.item;
					_g_head1 = _g_head1.next;
					let p = val;
					if (p._hx_index == 0) {
						let v = p.v;
						pl.push(this.resolve(v));
					} else {
						this.buf = new _StringBuf_js__WEBPACK_IMPORTED_MODULE_4__.StringBuf();
						this.run(p);
						pl.push(this.buf.b);
					};
				};
				this.buf = old;
				try {
					let _this = this.buf;
					let x = _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(v4.apply(this.macros, pl));
					_this.b += _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(x);
				}catch (_g) {
					let e = _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.caught(_g).unwrap();
					let plstr;
					try {
						plstr = pl.join(",");
					}catch (_g) {
						plstr = "???";
					};
					let msg = "Macro call " + m + "(" + plstr + ") failed (" + _Std_js__WEBPACK_IMPORTED_MODULE_5__.Std.string(e) + ")";
					throw _Exception_js__WEBPACK_IMPORTED_MODULE_2__.Exception.thrown(msg);
				};
				break
			
		};
	}
	static get __name__() {
		return "haxe.Template"
	}
	get __class__() {
		return Template
	}
}


Template.splitter = new _EReg_js__WEBPACK_IMPORTED_MODULE_8__.EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()", "")
Template.expr_splitter = new _EReg_js__WEBPACK_IMPORTED_MODULE_8__.EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)", "")
Template.expr_trim = new _EReg_js__WEBPACK_IMPORTED_MODULE_8__.EReg("^[ ]*([^ ]+)[ ]*$", "")
Template.expr_int = new _EReg_js__WEBPACK_IMPORTED_MODULE_8__.EReg("^[0-9]+$", "")
Template.expr_float = new _EReg_js__WEBPACK_IMPORTED_MODULE_8__.EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$", "")
Template.globals = {}
Template.hxKeepArrayIterator = new _iterators_ArrayIterator_js__WEBPACK_IMPORTED_MODULE_0__.ArrayIterator([])

/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringBuf: () => (/* binding */ StringBuf)
/* harmony export */ });
/* harmony import */ var _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


const $global = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.$global

/**
A String buffer is an efficient way to build a big string by appending small
elements together.

Unlike String, an instance of StringBuf is not immutable in the sense that
it can be passed as argument to functions which modify it by appending more
values.
*/
const StringBuf = _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.global("$hxClasses")["StringBuf"] = 
class StringBuf extends _genes_Register_js__WEBPACK_IMPORTED_MODULE_0__.Register.inherits() {
	new() {
		this.b = "";
	}
	static get __name__() {
		return "StringBuf"
	}
	get __class__() {
		return StringBuf
	}
}



/***/ }),
/* 94 */
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 94;
module.exports = webpackEmptyContext;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = void 0;
const vscode = __webpack_require__(1);
const mcbuild = __webpack_require__(2);
const fs = __webpack_require__(53);
const pathjs = __webpack_require__(52);
const Compiler_1 = __webpack_require__(15);
// import * as crypto from 'crypto'
async function activate(context) {
    console.log('MCBuild Activated!');
    vscode.commands.registerCommand('mc-build.build', async () => {
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage('No workspace folder found!');
            return;
        }
        const workspaceFolder = vscode.workspace.workspaceFolders[0];
        const rootFolder = workspaceFolder.uri.fsPath;
        const configJsFile = pathjs.join(rootFolder, 'mcb.config.js');
        const configJSONFile = pathjs.join(rootFolder, 'mcb.config.json');
        const srcFolder = pathjs.join(rootFolder, 'src');
        // const mcbFolder = pathjs.join(rootFolder, '.mcb')
        // const mcbFsCache = pathjs.join(mcbFolder, 'fs-cache.txt')
        if (!fs.existsSync(srcFolder)) {
            vscode.window.showErrorMessage(`No src folder found!`);
            return;
        }
        let config = {};
        try {
            if (fs.existsSync(configJsFile)) {
                config = eval(await fs.promises.readFile(configJsFile, 'utf8'));
            }
            else if (fs.existsSync(configJSONFile)) {
                config = JSON.parse(await fs.promises.readFile(configJSONFile, 'utf8'));
            }
            else {
                vscode.window.showErrorMessage(`No config file found!`);
                return;
            }
        }
        catch (e) {
            vscode.window.showErrorMessage(`Error parsing MCBuild config file: ${e}`);
            return;
        }
        console.log('Config:', config);
        console.log('Building...');
        const compiler = new mcbuild.Compiler(srcFolder, config);
        const fileCache = new Map();
        const customIO = new mcbuild.SyncIo();
        customIO.write = (localPath, content) => {
            const writePath = pathjs.join(rootFolder, localPath);
            console.log('Write:', writePath);
            fileCache.set(writePath, content);
        };
        compiler.io = customIO;
        async function recurseSrc(path) {
            console.log('Recurse:', path);
            if (!fs.existsSync(path))
                return;
            const stat = await fs.promises.stat(path);
            if (stat.isDirectory()) {
                const files = await fs.promises.readdir(path);
                for (const file of files) {
                    await recurseSrc(pathjs.join(path, file));
                }
            }
            else {
                const content = await fs.promises.readFile(path, 'utf8');
                const tokens = mcbuild.Tokenizer.tokenize(content, path);
                switch (pathjs.extname(path)) {
                    case '.mcb': {
                        const ast = mcbuild.Parser.parseMcbFile(tokens);
                        compiler.addFile(path, ast);
                        break;
                    }
                    case '.mcbt': {
                        const ast = mcbuild.Parser.parseMcbtFile(tokens);
                        compiler.addFile(path, ast);
                        break;
                    }
                }
            }
        }
        await recurseSrc(srcFolder);
        console.log('Compiling...');
        try {
            compiler.compile(Compiler_1.VariableMap.fromObject({}));
        }
        catch (e) {
            vscode.window.showErrorMessage(`Encountered error compiling MCBuild Project: ${e}`);
            return;
        }
        console.log('Compiled!');
        console.log('File cache:', fileCache);
        console.log('Writing files...');
        const folderCache = new Set();
        for (const [path, content] of fileCache) {
            const dirName = pathjs.dirname(path);
            if (!folderCache.has(dirName)) {
                await fs.promises.mkdir(dirName, { recursive: true });
                folderCache.add(dirName);
            }
            await fs.promises.writeFile(path, content, 'utf8');
        }
        console.log('Build complete!');
        vscode.window.showInformationMessage('Build complete!');
    });
    vscode.commands.registerCommand('mc-build.watch', async () => {
        console.log('Watching...');
    });
}
exports.activate = activate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map