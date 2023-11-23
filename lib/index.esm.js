import _defineProperty from "@babel/runtime-corejs2/helpers/defineProperty";
import _slicedToArray from "@babel/runtime-corejs2/helpers/slicedToArray";
import _typeof2 from "@babel/runtime-corejs2/helpers/typeof";
import _Object$defineProperty from "@babel/runtime-corejs2/core-js/object/define-property";
import _Object$keys from "@babel/runtime-corejs2/core-js/object/keys";
import _Object$defineProperties from "@babel/runtime-corejs2/core-js/object/define-properties";
import _Object$create from "@babel/runtime-corejs2/core-js/object/create";
import _Object$getPrototypeOf from "@babel/runtime-corejs2/core-js/object/get-prototype-of";
import _Array$from from "@babel/runtime-corejs2/core-js/array/from";
import _Array$isArray2 from "@babel/runtime-corejs2/core-js/array/is-array";
import _parseFloat2 from "@babel/runtime-corejs2/core-js/parse-float";
import _Object$assign from "@babel/runtime-corejs2/core-js/object/assign";
import _Object$isExtensible from "@babel/runtime-corejs2/core-js/object/is-extensible";
import _Object$preventExtensions from "@babel/runtime-corejs2/core-js/object/prevent-extensions";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs2/core-js/object/get-own-property-symbols";
import _Object$getOwnPropertyNames from "@babel/runtime-corejs2/core-js/object/get-own-property-names";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs2/core-js/object/get-own-property-descriptor";
var exchangeDateTime = function exchangeDateTime(startDateTime, endDateTime) {
  if (!startDateTime || !endDateTime) {
    return [startDateTime, endDateTime];
  }
  if (new Date(startDateTime).valueOf() > new Date(endDateTime).valueOf()) {
    return [endDateTime, startDateTime];
  }
  return [startDateTime, endDateTime];
};
/**
 * @description 获取当前日期是当月的第几周
 * @param date
 * @returns
 */
var getMonthWeek = function getMonthWeek(date) {
  var currentDay = new Date(date);
  var theSaturday = currentDay.getDate() + (6 - currentDay.getDay());
  return Math.ceil(theSaturday / 7);
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};
var toInteger$2 = _toInteger;
var defined$3 = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
  return function (that, pos) {
    var s = String(defined$3(that));
    var i = toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
var _library = true;
var _global = {
  exports: {}
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$9 = _global.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global$9; // eslint-disable-line no-undef

var _globalExports = _global.exports;
var _core = {
  exports: {}
};
var core$4 = _core.exports = {
  version: '2.6.12'
};
if (typeof __e == 'number') __e = core$4; // eslint-disable-line no-undef

var _coreExports = _core.exports;
var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding
var aFunction$3 = _aFunction;
var _ctx = function _ctx(fn, that, length) {
  aFunction$3(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};
var _objectDp = {};
var _isObject = function _isObject(it) {
  return _typeof2(it) === 'object' ? it !== null : typeof it === 'function';
};
var isObject$7 = _isObject;
var _anObject = function _anObject(it) {
  if (!isObject$7(it)) throw TypeError(it + ' is not an object!');
  return it;
};
var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return _Object$defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});
var isObject$6 = _isObject;
var document$2 = _globalExports.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$6(document$2) && isObject$6(document$2.createElement);
var _domCreate = function _domCreate(it) {
  return is ? document$2.createElement(it) : {};
};
var _ie8DomDefine = !_descriptors && !_fails(function () {
  return _Object$defineProperty(_domCreate('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$5 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
  if (!isObject$5(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$5(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject$5(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$5(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};
var anObject$7 = _anObject;
var IE8_DOM_DEFINE$1 = _ie8DomDefine;
var toPrimitive$2 = _toPrimitive;
var dP$3 = _Object$defineProperty;
_objectDp.f = _descriptors ? _Object$defineProperty : function defineProperty(O, P, Attributes) {
  anObject$7(O);
  P = toPrimitive$2(P, true);
  anObject$7(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return dP$3(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};
var dP$2 = _objectDp;
var createDesc$2 = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP$2.f(object, key, createDesc$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};
var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};
var global$8 = _globalExports;
var core$3 = _coreExports;
var ctx$3 = _ctx;
var hide$2 = _hide;
var has$5 = _has;
var PROTOTYPE$2 = 'prototype';
var $export$a = function $export$a(type, name, source) {
  var IS_FORCED = type & $export$a.F;
  var IS_GLOBAL = type & $export$a.G;
  var IS_STATIC = type & $export$a.S;
  var IS_PROTO = type & $export$a.P;
  var IS_BIND = type & $export$a.B;
  var IS_WRAP = type & $export$a.W;
  var exports = IS_GLOBAL ? core$3 : core$3[name] || (core$3[name] = {});
  var expProto = exports[PROTOTYPE$2];
  var target = IS_GLOBAL ? global$8 : IS_STATIC ? global$8[name] : (global$8[name] || {})[PROTOTYPE$2];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has$5(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx$3(out, global$8)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }
          return new C(a, b, c);
        }
        return C.apply(this, arguments);
      };
      F[PROTOTYPE$2] = C[PROTOTYPE$2];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx$3(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export$a.R && expProto && !expProto[key]) hide$2(expProto, key, out);
    }
  }
};
// type bitmap
$export$a.F = 1; // forced
$export$a.G = 2; // global
$export$a.S = 4; // static
$export$a.P = 8; // proto
$export$a.B = 16; // bind
$export$a.W = 32; // wrap
$export$a.U = 64; // safe
$export$a.R = 128; // real proto method for `library`
var _export = $export$a;
var _redefine = _hide;
var _iterators = {};
var toString$1 = {}.toString;
var _cof = function _cof(it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof$2 = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof$2(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _iobject;
var defined$2 = _defined;
var _toIobject = function _toIobject(it) {
  return IObject(defined$2(it));
};

// 7.1.15 ToLength
var toInteger$1 = _toInteger;
var min$1 = Math.min;
var _toLength = function _toLength(it) {
  return it > 0 ? min$1(toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger = _toInteger;
var max = Math.max;
var min = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$5 = _toIobject;
var toLength$1 = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$5($this);
    var length = toLength$1(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var _shared = {
  exports: {}
};
var core$2 = _coreExports;
var global$7 = _globalExports;
var SHARED = '__core-js_shared__';
var store$1 = global$7[SHARED] || (global$7[SHARED] = {});
(_shared.exports = function (key, value) {
  return store$1[key] || (store$1[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core$2.version,
  mode: 'pure',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
var _sharedExports = _shared.exports;
var id$1 = 0;
var px = Math.random();
var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px).toString(36));
};
var shared$1 = _sharedExports('keys');
var uid$2 = _uid;
var _sharedKey = function _sharedKey(key) {
  return shared$1[key] || (shared$1[key] = uid$2(key));
};
var has$4 = _has;
var toIObject$4 = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey('IE_PROTO');
var _objectKeysInternal = function _objectKeysInternal(object, names) {
  var O = toIObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$2) has$4(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has$4(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys$1 = _objectKeysInternal;
var enumBugKeys$1 = _enumBugKeys;
var _objectKeys = _Object$keys || function keys(O) {
  return $keys$1(O, enumBugKeys$1);
};
var dP$1 = _objectDp;
var anObject$6 = _anObject;
var getKeys$1 = _objectKeys;
var _objectDps = _descriptors ? _Object$defineProperties : function defineProperties(O, Properties) {
  anObject$6(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP$1.f(O, P = keys[i++], Properties[P]);
  return O;
};
var document$1 = _globalExports.document;
var _html = document$1 && document$1.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$5 = _anObject;
var dPs = _objectDps;
var enumBugKeys = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) delete _createDict[PROTOTYPE$1][enumBugKeys[i]];
  return _createDict();
};
var _objectCreate = _Object$create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = anObject$5(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
var _wks = {
  exports: {}
};
var store = _sharedExports('wks');
var uid$1 = _uid;
var _Symbol2 = _globalExports.Symbol;
var USE_SYMBOL = typeof _Symbol2 == 'function';
var $exports = _wks.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol2[name] || (USE_SYMBOL ? _Symbol2 : uid$1)('Symbol.' + name));
};
$exports.store = store;
var _wksExports = _wks.exports;
var _setToStringTag;
var hasRequired_setToStringTag;
function require_setToStringTag() {
  if (hasRequired_setToStringTag) return _setToStringTag;
  hasRequired_setToStringTag = 1;
  var def = _objectDp.f;
  var has = _has;
  var TAG = _wksExports('toStringTag');
  _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return _setToStringTag;
}
var create = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$2 = require_setToStringTag();
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wksExports('iterator'), function () {
  return this;
});
var _iterCreate = function _iterCreate(Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag$2(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function _toObject(it) {
  return Object(defined$1(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3 = _has;
var toObject$1 = _toObject;
var IE_PROTO = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;
var _objectGpo = _Object$getPrototypeOf || function (O) {
  O = toObject$1(O);
  if (has$3(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto$1 : null;
};
var $export$9 = _export;
var redefine$1 = _redefine;
var hide$1 = _hide;
var Iterators$4 = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag$1 = require_setToStringTag();
var getPrototypeOf = _objectGpo;
var ITERATOR$2 = _wksExports('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function returnThis() {
  return this;
};
var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR$2] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$1(IteratorPrototype, TAG, true);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if (FORCED && (BUGGY || VALUES_BUG || !proto[ITERATOR$2])) {
    hide$1(proto, ITERATOR$2, $default);
  }
  // Plug for library
  Iterators$4[NAME] = $default;
  Iterators$4[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine$1(proto, key, methods[key]);
    } else $export$9($export$9.P + $export$9.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});
var _iterStep = function _iterStep(done, value) {
  return {
    value: value,
    done: !!done
  };
};
var step = _iterStep;
var Iterators$3 = _iterators;
var toIObject$3 = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
_iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$3(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$3.Arguments = Iterators$3.Array;
var global$6 = _globalExports;
var hide = _hide;
var Iterators$2 = _iterators;
var TO_STRING_TAG = _wksExports('toStringTag');
var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global$6[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators$2[NAME] = Iterators$2.Array;
}

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wksExports('toStringTag');
// ES3 wrong here
var ARG = cof$1(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};
var _classof = function _classof(it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof$1(O)
  // ES3 arguments fallback
  : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }
  return it;
};
var _forOf = {
  exports: {}
};

// call something on iterator step with safe closing on error
var anObject$4 = _anObject;
var _iterCall = function _iterCall(iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$4(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject$4(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator
var Iterators$1 = _iterators;
var ITERATOR$1 = _wksExports('iterator');
var ArrayProto = Array.prototype;
var _isArrayIter = function _isArrayIter(it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayProto[ITERATOR$1] === it);
};
var classof$1 = _classof;
var ITERATOR = _wksExports('iterator');
var Iterators = _iterators;
var core_getIteratorMethod = _coreExports.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof$1(it)];
};
var ctx$2 = _ctx;
var call = _iterCall;
var isArrayIter = _isArrayIter;
var anObject$3 = _anObject;
var toLength = _toLength;
var getIterFn = core_getIteratorMethod;
var BREAK = {};
var RETURN = {};
var exports = _forOf.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx$2(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject$3(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
var _forOfExports = _forOf.exports;

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$2 = _anObject;
var aFunction$2 = _aFunction;
var SPECIES = _wksExports('species');
var _speciesConstructor = function _speciesConstructor(O, D) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || (S = anObject$2(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function _invoke(fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};
var ctx$1 = _ctx;
var invoke = _invoke;
var html = _html;
var cel = _domCreate;
var global$5 = _globalExports;
var process$2 = global$5.process;
var setTask = global$5.setImmediate;
var clearTask = global$5.clearImmediate;
var MessageChannel = global$5.MessageChannel;
var Dispatch = global$5.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$2) == 'process') {
    defer = function defer(id) {
      process$2.nextTick(ctx$1(run, id, 1));
    };
    // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx$1(run, id, 1));
    };
    // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$1(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts) {
    defer = function defer(id) {
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
    // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
    // Rest old browsers
  } else {
    defer = function defer(id) {
      setTimeout(ctx$1(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};
var global$4 = _globalExports;
var macrotask = _task.set;
var Observer = global$4.MutationObserver || global$4.WebKitMutationObserver;
var process$1 = global$4.process;
var Promise$1 = global$4.Promise;
var isNode$1 = _cof(process$1) == 'process';
var _microtask = function _microtask() {
  var head, last, notify;
  var flush = function flush() {
    var parent, fn;
    if (isNode$1 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$1) {
    notify = function notify() {
      process$1.nextTick(flush);
    };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global$4.navigator && global$4.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new
    notify = function notify() {
      node.data = toggle = !toggle;
    };
    // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$4, flush);
    };
  }
  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};
var _newPromiseCapability = {};

// 25.4.1.5 NewPromiseCapability(C)
var aFunction$1 = _aFunction;
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject = aFunction$1(reject);
}
_newPromiseCapability.f = function (C) {
  return new PromiseCapability(C);
};
var _perform = function _perform(exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};
var global$3 = _globalExports;
var navigator = global$3.navigator;
var _userAgent = navigator && navigator.userAgent || '';
var anObject$1 = _anObject;
var isObject$4 = _isObject;
var newPromiseCapability$2 = _newPromiseCapability;
var _promiseResolve = function _promiseResolve(C, x) {
  anObject$1(C);
  if (isObject$4(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$2.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};
var _redefineAll;
var hasRequired_redefineAll;
function require_redefineAll() {
  if (hasRequired_redefineAll) return _redefineAll;
  hasRequired_redefineAll = 1;
  var hide = _hide;
  _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
    }
    return target;
  };
  return _redefineAll;
}
var _setSpecies;
var hasRequired_setSpecies;
function require_setSpecies() {
  if (hasRequired_setSpecies) return _setSpecies;
  hasRequired_setSpecies = 1;
  var global = _globalExports;
  var core = _coreExports;
  var dP = _objectDp;
  var DESCRIPTORS = _descriptors;
  var SPECIES = _wksExports('species');
  _setSpecies = function _setSpecies(KEY) {
    var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };
  return _setSpecies;
}
var _iterDetect;
var hasRequired_iterDetect;
function require_iterDetect() {
  if (hasRequired_iterDetect) return _iterDetect;
  hasRequired_iterDetect = 1;
  var ITERATOR = _wksExports('iterator');
  var SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    // eslint-disable-next-line no-throw-literal
    _Array$from(riter, function () {
      throw 2;
    });
  } catch (e) {/* empty */}
  _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR]();
      iter.next = function () {
        return {
          done: safe = true
        };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };
  return _iterDetect;
}
var LIBRARY = _library;
var global$2 = _globalExports;
var ctx = _ctx;
var classof = _classof;
var $export$8 = _export;
var isObject$3 = _isObject;
var aFunction = _aFunction;
var anInstance = _anInstance;
var forOf = _forOfExports;
var speciesConstructor$1 = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform$1 = _perform;
var userAgent = _userAgent;
var promiseResolve$1 = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$1 = global$2.TypeError;
var process = global$2.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global$2[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {/* empty */};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability$1 = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wksExports('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {/* empty */}
}();

// helpers
var isThenable = function isThenable(it) {
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global$2, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform$1(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global$2.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global$2.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global$2, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global$2.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions
    this._a = undefined; // <- checked in isUnhandled reactions
    this._s = 0; // <- state
    this._d = false; // <- done
    this._v = undefined; // <- value
    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false; // <- notify
  };

  Internal.prototype = require_redefineAll()($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(speciesConstructor$1(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability$1 = function newPromiseCapability$1(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export$8($export$8.G + $export$8.W + $export$8.F * !USE_NATIVE$1, {
  Promise: $Promise
});
require_setToStringTag()($Promise, PROMISE);
require_setSpecies()(PROMISE);
Wrapper = _coreExports[PROMISE];

// statics
$export$8($export$8.S + $export$8.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$8($export$8.S + $export$8.F * LIBRARY, PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve$1(this === Wrapper ? $Promise : this, x);
  }
});
$export$8($export$8.S + $export$8.F * !(USE_NATIVE$1 && require_iterDetect()(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = perform$1(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});
var $export$7 = _export;
var core$1 = _coreExports;
var global$1 = _globalExports;
var speciesConstructor = _speciesConstructor;
var promiseResolve = _promiseResolve;
$export$7($export$7.P + $export$7.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core$1.Promise || global$1.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

// https://github.com/tc39/proposal-promise-try
var $export$6 = _export;
var newPromiseCapability = _newPromiseCapability;
var perform = _perform;
$export$6($export$6.S, 'Promise', {
  'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  }
});
var promise$1 = _coreExports.Promise;
var promise = promise$1;
var _Promise = /*@__PURE__*/getDefaultExportFromCjs(promise);

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export$5 = _export;
$export$5($export$5.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});
var now$1 = _coreExports.Date.now;
var now = now$1;
var _Date$now = /*@__PURE__*/getDefaultExportFromCjs(now);
var sleep = function sleep(ms) {
  return new _Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var sleepSync = function sleepSync(ms) {
  var endTime = _Date$now() + ms;
  while (1) {
    if (_Date$now() > endTime) {
      return;
    }
  }
};
var _isInteger;
var hasRequired_isInteger;
function require_isInteger() {
  if (hasRequired_isInteger) return _isInteger;
  hasRequired_isInteger = 1;
  // 20.1.2.3 Number.isInteger(number)
  var isObject = _isObject;
  var floor = Math.floor;
  _isInteger = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
  return _isInteger;
}

// 20.1.2.3 Number.isInteger(number)
var $export$4 = _export;
$export$4($export$4.S, 'Number', {
  isInteger: require_isInteger()
});
var isInteger$1 = _coreExports.Number.isInteger;
var isInteger = isInteger$1;
var _Number$isInteger = /*@__PURE__*/getDefaultExportFromCjs(isInteger);

/**
 * @description 两位数字
 * @param {number} number
 * @returns {string}
 */
var preFixInt = function preFixInt(number) {
  return "".concat(number).padStart(2, '0');
};
/**
 * @description 四舍五入保留fixed位小数
 * @param {number} number
 * @param {number} fixed
 * @returns {number}
 */
var numberFixed = function numberFixed(number) {
  var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (_Number$isInteger(number)) {
    return number;
  }
  if (fixed < 0) {
    return Math.floor(number);
  }
  return Math.round(number * Math.pow(10, fixed)) / Math.pow(10, fixed);
};
/**
 * @description 16进制转2进制
 * @param str
 * @returns
 */
var hexToBin = function hexToBin(str) {
  var hexArray = [{
    key: 0,
    val: '0000'
  }, {
    key: 1,
    val: '0001'
  }, {
    key: 2,
    val: '0010'
  }, {
    key: 3,
    val: '0011'
  }, {
    key: 4,
    val: '0100'
  }, {
    key: 5,
    val: '0101'
  }, {
    key: 6,
    val: '0110'
  }, {
    key: 7,
    val: '0111'
  }, {
    key: 8,
    val: '1000'
  }, {
    key: 9,
    val: '1001'
  }, {
    key: 'A',
    val: '1010'
  }, {
    key: 'B',
    val: '1011'
  }, {
    key: 'C',
    val: '1100'
  }, {
    key: 'D',
    val: '1101'
  }, {
    key: 'E',
    val: '1110'
  }, {
    key: 'F',
    val: '1111'
  }];
  var value = '';
  var list = str.split('');
  list.forEach(function (item) {
    var data = hexArray.find(function (hex) {
      return hex.key === item;
    });
    value = value.concat(data === null || data === void 0 ? void 0 : data.val);
  });
  return value;
};
/**
 * @description 2进制转16进制
 * @param str
 * @returns
 */
var binToHex = function binToHex(str) {
  var hexArray = [{
    key: 0,
    val: '0000'
  }, {
    key: 1,
    val: '0001'
  }, {
    key: 2,
    val: '0010'
  }, {
    key: 3,
    val: '0011'
  }, {
    key: 4,
    val: '0100'
  }, {
    key: 5,
    val: '0101'
  }, {
    key: 6,
    val: '0110'
  }, {
    key: 7,
    val: '0111'
  }, {
    key: 8,
    val: '1000'
  }, {
    key: 9,
    val: '1001'
  }, {
    key: 'A',
    val: '1010'
  }, {
    key: 'B',
    val: '1011'
  }, {
    key: 'C',
    val: '1100'
  }, {
    key: 'D',
    val: '1101'
  }, {
    key: 'E',
    val: '1110'
  }, {
    key: 'F',
    val: '1111'
  }];
  var value = '';
  var list = [];
  if (str.length % 4 !== 0) {
    var a = '0000';
    var b = a.substring(0, 4 - str.length % 4);
    str = b.concat(str);
  }
  while (str.length > 4) {
    list.push(str.substring(0, 4));
    str = str.substring(4);
  }
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < hexArray.length; j++) {
      if (list[i] === hexArray[j].val) {
        value = value.concat(hexArray[j].key);
        break;
      }
    }
  }
  return value;
};

// 7.2.2 IsArray(argument)
var cof = _cof;
var _isArray = _Array$isArray2 || function isArray(arg) {
  return cof(arg) == 'Array';
};

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export$3 = _export;
$export$3($export$3.S, 'Array', {
  isArray: _isArray
});
var isArray$4 = _coreExports.Array.isArray;
var isArray$3 = isArray$4;
var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$3);
var _stringWs = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var $export$2 = _export;
var defined = _defined;
var fails = _fails;
var spaces = _stringWs;
var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');
var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export$2($export$2.P + $export$2.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};
var _stringTrim = exporter;
var $parseFloat$1 = _globalExports.parseFloat;
var $trim = _stringTrim.trim;
var _parseFloat$3 = 1 / $parseFloat$1(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat$1(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat$1;
var $export$1 = _export;
var $parseFloat = _parseFloat$3;
// 18.2.4 parseFloat(string)
$export$1($export$1.G + $export$1.F * (_parseFloat2 != $parseFloat), {
  parseFloat: $parseFloat
});
var _parseFloat$2 = _coreExports.parseFloat;
var _parseFloat = _parseFloat$2;
var _parseFloat$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseFloat);

/**
 * @preserve
 * gcoord 1.0.5, geographic coordinate library
 * Copyright (c) 2023 Jiulong Hu <me@hujiulong.com>
 */
var sin$1 = Math.sin,
  cos$1 = Math.cos,
  sqrt$1 = Math.sqrt,
  abs$1 = Math.abs,
  PI$1 = Math.PI;
var a = 6378245;
var ee = 0.006693421622965823;
// roughly check whether coordinates are in China.
function isInChinaBbox(lon, lat) {
  return lon >= 72.004 && lon <= 137.8347 && lat >= 0.8293 && lat <= 55.8271;
}
function transformLat(x, y) {
  var ret = -100 + 2 * x + 3 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * sqrt$1(abs$1(x));
  ret += (20 * sin$1(6 * x * PI$1) + 20 * sin$1(2 * x * PI$1)) * 2 / 3;
  ret += (20 * sin$1(y * PI$1) + 40 * sin$1(y / 3 * PI$1)) * 2 / 3;
  ret += (160 * sin$1(y / 12 * PI$1) + 320 * sin$1(y * PI$1 / 30)) * 2 / 3;
  return ret;
}
function transformLon(x, y) {
  var ret = 300 + x + 2 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * sqrt$1(abs$1(x));
  ret += (20 * sin$1(6 * x * PI$1) + 20 * sin$1(2 * x * PI$1)) * 2 / 3;
  ret += (20 * sin$1(x * PI$1) + 40 * sin$1(x / 3 * PI$1)) * 2 / 3;
  ret += (150 * sin$1(x / 12 * PI$1) + 300 * sin$1(x / 30 * PI$1)) * 2 / 3;
  return ret;
}
function delta(lon, lat) {
  var dLon = transformLon(lon - 105, lat - 35);
  var dLat = transformLat(lon - 105, lat - 35);
  var radLat = lat / 180 * PI$1;
  var magic = sin$1(radLat);
  magic = 1 - ee * magic * magic;
  var sqrtMagic = sqrt$1(magic);
  dLon = dLon * 180 / (a / sqrtMagic * cos$1(radLat) * PI$1);
  dLat = dLat * 180 / (a * (1 - ee) / (magic * sqrtMagic) * PI$1);
  return [dLon, dLat];
}
function WGS84ToGCJ02(coord) {
  var _coord = _slicedToArray(coord, 2),
    lon = _coord[0],
    lat = _coord[1];
  if (!isInChinaBbox(lon, lat)) return [lon, lat];
  var d = delta(lon, lat);
  return [lon + d[0], lat + d[1]];
}
function GCJ02ToWGS84(coord) {
  var _coord2 = _slicedToArray(coord, 2),
    lon = _coord2[0],
    lat = _coord2[1];
  if (!isInChinaBbox(lon, lat)) return [lon, lat];
  var wgsLon = lon,
    wgsLat = lat;
  var tempPoint = WGS84ToGCJ02([wgsLon, wgsLat]);
  var dx = tempPoint[0] - lon;
  var dy = tempPoint[1] - lat;
  while (abs$1(dx) > 1e-6 || abs$1(dy) > 1e-6) {
    wgsLon -= dx;
    wgsLat -= dy;
    tempPoint = WGS84ToGCJ02([wgsLon, wgsLat]);
    dx = tempPoint[0] - lon;
    dy = tempPoint[1] - lat;
  }
  return [wgsLon, wgsLat];
}
var sin = Math.sin,
  cos = Math.cos,
  atan2 = Math.atan2,
  sqrt = Math.sqrt,
  PI = Math.PI;
var baiduFactor = PI * 3000.0 / 180.0;
function BD09ToGCJ02(coord) {
  var _coord3 = _slicedToArray(coord, 2),
    lon = _coord3[0],
    lat = _coord3[1];
  var x = lon - 0.0065;
  var y = lat - 0.006;
  var z = sqrt(x * x + y * y) - 0.00002 * sin(y * baiduFactor);
  var theta = atan2(y, x) - 0.000003 * cos(x * baiduFactor);
  var newLon = z * cos(theta);
  var newLat = z * sin(theta);
  return [newLon, newLat];
}
function GCJ02ToBD09(coord) {
  var _coord4 = _slicedToArray(coord, 2),
    lon = _coord4[0],
    lat = _coord4[1];
  var x = lon;
  var y = lat;
  var z = sqrt(x * x + y * y) + 0.00002 * sin(y * baiduFactor);
  var theta = atan2(y, x) + 0.000003 * cos(x * baiduFactor);
  var newLon = z * cos(theta) + 0.0065;
  var newLat = z * sin(theta) + 0.006;
  return [newLon, newLat];
}

// https://github.com/Turfjs/turf/blob/master/packages/turf-projection/index.ts
var R2D = 180 / Math.PI;
var D2R = Math.PI / 180;
var A = 6378137.0;
var MAXEXTENT = 20037508.342789244;
function ESPG3857ToWGS84(xy) {
  return [xy[0] * R2D / A, (Math.PI * 0.5 - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D];
}
function WGS84ToEPSG3857(lonLat) {
  // compensate longitudes passing the 180th meridian
  // from https://github.com/proj4js/proj4js/blob/master/lib/common/adjust_lon.js
  var adjusted = Math.abs(lonLat[0]) <= 180 ? lonLat[0] : lonLat[0] - (lonLat[0] < 0 ? -1 : 1) * 360;
  var xy = [A * adjusted * D2R, A * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * lonLat[1] * D2R))];
  // if xy value is beyond maxextent (e.g. poles), return maxextent
  if (xy[0] > MAXEXTENT) xy[0] = MAXEXTENT;
  if (xy[0] < -MAXEXTENT) xy[0] = -MAXEXTENT;
  if (xy[1] > MAXEXTENT) xy[1] = MAXEXTENT;
  if (xy[1] < -MAXEXTENT) xy[1] = -MAXEXTENT;
  return xy;
}
var abs = Math.abs;
var MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0];
var LLBAND = [75, 60, 45, 30, 15, 0];
var MC2LL = [[1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2], [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]];
var LL2MC = [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]];
function transform$1(x, y, factors) {
  var cc = abs(y) / factors[9];
  var xt = factors[0] + factors[1] * abs(x);
  var yt = factors[2] + factors[3] * cc + factors[4] * Math.pow(cc, 2) + factors[5] * Math.pow(cc, 3) + factors[6] * Math.pow(cc, 4) + factors[7] * Math.pow(cc, 5) + factors[8] * Math.pow(cc, 6);
  xt *= x < 0 ? -1 : 1;
  yt *= y < 0 ? -1 : 1;
  return [xt, yt];
}
function BD09toBD09MC(coord) {
  var _coord5 = _slicedToArray(coord, 2),
    lng = _coord5[0],
    lat = _coord5[1];
  var factors = [];
  for (var _i = 0; _i < LLBAND.length; _i++) {
    if (abs(lat) > LLBAND[_i]) {
      factors = LL2MC[_i];
      break;
    }
  }
  return transform$1(lng, lat, factors);
}
function BD09MCtoBD09(coord) {
  var _coord6 = _slicedToArray(coord, 2),
    x = _coord6[0],
    y = _coord6[1];
  var factors = [];
  for (var _i2 = 0; _i2 < MCBAND.length; _i2++) {
    if (y >= MCBAND[_i2]) {
      factors = MC2LL[_i2];
      break;
    }
  }
  return transform$1(x, y, factors);
}
function assert(condition, msg) {
  if (!condition) throw new Error(msg);
}
/**
 * isArray
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 */
function isArray$2(input) {
  return !!input && Object.prototype.toString.call(input) === '[object Array]';
}
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * isNumber(123)
 * //=true
 * isNumber('foo')
 * //=false
 */
function isNumber$1(input) {
  return !isNaN(Number(input)) && input !== null && !isArray$2(input);
}
/**
 * compose
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  var start = funcs.length - 1;
  /* eslint-disable func-names */
  return function () {
    var i = start;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var result = funcs[start].apply(null, args);
    while (i--) result = funcs[i].call(null, result);
    return result;
  };
}
/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 * https://github.com/Turfjs/turf/blob/master/packages/turf-meta/index.mjs
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * let features = featureCollection([
 *   point([26, 37], {"foo": "bar"}),
 *   point([36, 53], {"hello": "world"})
 * ]);
 *
 * coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
/* eslint-disable no-param-reassign */
function coordEach(geojson, callback) {
  var excludeWrapCoord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // Handles null Geometry -- Skips this GeoJSON
  if (geojson === null) return;
  /* eslint-disable-next-line */
  var j;
  var k;
  var l;
  var geometry;
  var coords;
  var stopG;
  var wrapShrink = 0;
  var coordIndex = 0;
  var geometryMaybeCollection;
  var isGeometryCollection;
  var type = geojson.type;
  var isFeatureCollection = type === 'FeatureCollection';
  var isFeature = type === 'Feature';
  var stop = isFeatureCollection ? geojson.features.length : 1;
  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
    isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === 'GeometryCollection' : false;
    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;
    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;
      // Handles null Geometry -- Skips this geometry
      if (geometry === null) continue;
      var geomType = geometry.type;
      wrapShrink = excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon') ? 1 : 0;
      switch (geomType) {
        case null:
          break;
        case 'Point':
          coords = geometry.coordinates;
          if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case 'LineString':
        case 'MultiPoint':
          coords = geometry.coordinates;
          for (j = 0; j < coords.length; j++) {
            if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
            coordIndex++;
            if (geomType === 'MultiPoint') multiFeatureIndex++;
          }
          if (geomType === 'LineString') multiFeatureIndex++;
          break;
        case 'Polygon':
        case 'MultiLineString':
          coords = geometry.coordinates;
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
              coordIndex++;
            }
            if (geomType === 'MultiLineString') multiFeatureIndex++;
            if (geomType === 'Polygon') geometryIndex++;
          }
          if (geomType === 'Polygon') multiFeatureIndex++;
          break;
        case 'MultiPolygon':
          coords = geometry.coordinates;
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case 'GeometryCollection':
          for (j = 0; j < geometry.geometries.length; j++) {
            if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
          }
          break;
        default:
          throw new Error('Unknown Geometry Type');
      }
    }
  }
}
var CRSTypes;
(function (CRSTypes) {
  // WGS84
  CRSTypes["WGS84"] = "WGS84";
  CRSTypes["WGS1984"] = "WGS84";
  CRSTypes["EPSG4326"] = "WGS84";
  // GCJ02
  CRSTypes["GCJ02"] = "GCJ02";
  CRSTypes["AMap"] = "GCJ02";
  // BD09
  CRSTypes["BD09"] = "BD09";
  CRSTypes["BD09LL"] = "BD09";
  CRSTypes["Baidu"] = "BD09";
  CRSTypes["BMap"] = "BD09";
  // BD09MC
  CRSTypes["BD09MC"] = "BD09MC";
  CRSTypes["BD09Meter"] = "BD09MC";
  // EPSG3857
  CRSTypes["EPSG3857"] = "EPSG3857";
  CRSTypes["EPSG900913"] = "EPSG3857";
  CRSTypes["EPSG102100"] = "EPSG3857";
  CRSTypes["WebMercator"] = "EPSG3857";
  CRSTypes["WM"] = "EPSG3857";
})(CRSTypes || (CRSTypes = {}));
var WGS84 = {
  to: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CRSTypes.GCJ02, WGS84ToGCJ02), CRSTypes.BD09, compose(GCJ02ToBD09, WGS84ToGCJ02)), CRSTypes.BD09MC, compose(BD09toBD09MC, GCJ02ToBD09, WGS84ToGCJ02)), CRSTypes.EPSG3857, WGS84ToEPSG3857)
};
var GCJ02 = {
  to: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CRSTypes.WGS84, GCJ02ToWGS84), CRSTypes.BD09, GCJ02ToBD09), CRSTypes.BD09MC, compose(BD09toBD09MC, GCJ02ToBD09)), CRSTypes.EPSG3857, compose(WGS84ToEPSG3857, GCJ02ToWGS84))
};
var BD09 = {
  to: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CRSTypes.WGS84, compose(GCJ02ToWGS84, BD09ToGCJ02)), CRSTypes.GCJ02, BD09ToGCJ02), CRSTypes.EPSG3857, compose(WGS84ToEPSG3857, GCJ02ToWGS84, BD09ToGCJ02)), CRSTypes.BD09MC, BD09toBD09MC)
};
var EPSG3857 = {
  to: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CRSTypes.WGS84, ESPG3857ToWGS84), CRSTypes.GCJ02, compose(WGS84ToGCJ02, ESPG3857ToWGS84)), CRSTypes.BD09, compose(GCJ02ToBD09, WGS84ToGCJ02, ESPG3857ToWGS84)), CRSTypes.BD09MC, compose(BD09toBD09MC, GCJ02ToBD09, WGS84ToGCJ02, ESPG3857ToWGS84))
};
var BD09MC = {
  to: _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CRSTypes.WGS84, compose(GCJ02ToWGS84, BD09ToGCJ02, BD09MCtoBD09)), CRSTypes.GCJ02, compose(BD09ToGCJ02, BD09MCtoBD09)), CRSTypes.EPSG3857, compose(WGS84ToEPSG3857, GCJ02ToWGS84, BD09ToGCJ02, BD09MCtoBD09)), CRSTypes.BD09, BD09MCtoBD09)
};
var crsMap = {
  WGS84: WGS84,
  GCJ02: GCJ02,
  BD09: BD09,
  EPSG3857: EPSG3857,
  BD09MC: BD09MC
};
var crsMap$1 = crsMap;

/**
 * transform
 *
 * @param {geojson|position|string} input
 * @returns {geojson|position} output
 */
/* eslint-disable no-param-reassign */
function transform(input, crsFrom, crsTo) {
  assert(!!input, 'The args[0] input coordinate is required');
  assert(!!crsFrom, 'The args[1] original coordinate system is required');
  assert(!!crsTo, 'The args[2] target coordinate system is required');
  if (crsFrom === crsTo) return input;
  var from = crsMap$1[crsFrom];
  assert(!!from, "Invalid original coordinate system: ".concat(crsFrom));
  var to = from.to[crsTo];
  assert(!!to, "Invalid target coordinate system: ".concat(crsTo));
  var type = _typeof2(input);
  assert(type === 'string' || type === 'object', "Invalid input coordinate type: ".concat(type));
  if (type === 'string') {
    try {
      input = JSON.parse(input);
    } catch (e) {
      throw new Error("Invalid input coordinate: ".concat(input));
    }
  }
  var isPosition = false;
  if (isArray$2(input)) {
    assert(input.length >= 2, "Invalid input coordinate: ".concat(input));
    assert(isNumber$1(input[0]) && isNumber$1(input[1]), "Invalid input coordinate: ".concat(input));
    input = input.map(Number);
    isPosition = true;
  }
  var convert = to;
  if (isPosition) return convert(input);
  // GeoJSON类型直接转换输入
  coordEach(input, function (coord) {
    var _convert = convert(coord);
    var _convert2 = _slicedToArray(_convert, 2);
    coord[0] = _convert2[0];
    coord[1] = _convert2[1];
  });
  return input;
}
var exported = _Object$assign(_Object$assign({}, CRSTypes), {
  // 兼容原来gcoord.WGS84的使用方式
  CRSTypes: CRSTypes,
  transform: transform
});

/**
 * @description 84坐标系转百度坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
var wgs84tobd09 = function wgs84tobd09(lng, lat) {
  if (!lng || !lat) {
    return [lng, lat];
  }
  var data = exported.transform([lng, lat], exported.WGS84, exported.BD09);
  if (_Array$isArray(data)) {
    return [Number(data[0]), Number(data[1])];
  }
  return [lng, lat];
};
/**
 * @description 84坐标系转高德坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
var wgs84togcj02 = function wgs84togcj02(lng, lat) {
  if (!lng || !lat) {
    return [lng, lat];
  }
  var data = exported.transform([lng, lat], exported.WGS84, exported.GCJ02);
  if (_Array$isArray(data)) {
    return [Number(data[0]), Number(data[1])];
  }
  return [lng, lat];
};
/**
 * @description 高德坐标系转84坐标系
 * @param {number} lng 经度
 * @param {number} lat 纬度
 * @returns {Array<number, number>} 经度/纬度
 */
var gcj02towgs84 = function gcj02towgs84(lng, lat) {
  if (!lng || !lat) {
    return [lng, lat];
  }
  var data = exported.transform([lng, lat], exported.GCJ02, exported.WGS84);
  if (_Array$isArray(data)) {
    return [Number(data[0]), Number(data[1])];
  }
  return [lng, lat];
};
/**
 * @description 将经纬度格式转换为度分秒格式
 * @param value 经/纬度
 * @returns
 */
var formatDegree = function formatDegree(value) {
  value = Math.abs(value);
  var v1 = Math.floor(value); // 度
  var v2 = Math.floor((value - v1) * 60); // 分
  var v3 = Math.round((value - v1) * 3600 % 60); // 秒
  return v1 + '°' + v2 + "'" + v3 + '"';
};
/**
 * @description 获取两点之间的中间点
 * @param point1
 * @param point2
 * @returns
 */
var getIntermediatePoint = function getIntermediatePoint(point1, point2) {
  var lngca = (Math.max(point1.lng, point2.lng) - Math.min(point1.lng, point2.lng)) / 2;
  var latca = (Math.max(point1.lat, point2.lat) - Math.min(point1.lat, point2.lat)) / 2;
  var lngcenter = Math.min(point1.lng, point2.lng) + lngca;
  var latcenter = Math.min(point1.lat, point2.lat) + latca;
  return {
    lng: lngcenter,
    lat: latcenter
  };
};
/**
 * @description 在字符串指定位置插入新字符串
 * @param source 源字符串
 * @param start 插入位置
 * @param newStr 规定要插入的新字符
 * @returns
 */
var insertStr = function insertStr(source, start, newStr) {
  return source.slice(0, start) + newStr + source.slice(start);
};
/**
 * @description 在经纬度数值最后7位前添加小数点
 * @param lng
 * @param lat
 * @returns
 */
var handleLatLngValue = function handleLatLngValue(lng, lat) {
  var lngStr = lng + '';
  var latStr = lat + '';
  return {
    lng: _parseFloat$1(insertStr(lngStr, lngStr.length - 7, '.')),
    lat: _parseFloat$1(insertStr(latStr, latStr.length - 7, '.'))
  };
};
var _meta = {
  exports: {}
};
var META$1 = _uid('meta');
var isObject$2 = _isObject;
var has$2 = _has;
var setDesc = _objectDp.f;
var id = 0;
var isExtensible = _Object$isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(_Object$preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META$1, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs
    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject$2(it)) return _typeof2(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has$2(it, META$1)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }
  return it[META$1].i;
};
var getWeak = function getWeak(it, create) {
  if (!has$2(it, META$1)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }
  return it[META$1].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has$2(it, META$1)) setMeta(it);
  return it;
};
var meta = _meta.exports = {
  KEY: META$1,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
var _metaExports = _meta.exports;
var _wksExt = {};
_wksExt.f = _wksExports;
var core = _coreExports;
var wksExt$1 = _wksExt;
var defineProperty = _objectDp.f;
var _wksDefine = function _wksDefine(name) {
  var $Symbol = core.Symbol || (core.Symbol = {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt$1.f(name)
  });
};
var _objectGops = {};
_objectGops.f = _Object$getOwnPropertySymbols;
var _objectPie = {};
var hasRequired_objectPie;
function require_objectPie() {
  if (hasRequired_objectPie) return _objectPie;
  hasRequired_objectPie = 1;
  _objectPie.f = {}.propertyIsEnumerable;
  return _objectPie;
}

// all enumerable object keys, includes symbols
var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE$1 = require_objectPie();
var _enumKeys = function _enumKeys(it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE$1.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }
  return result;
};
var _objectGopnExt = {};
var _objectGopn = {};
var hasRequired_objectGopn;
function require_objectGopn() {
  if (hasRequired_objectGopn) return _objectGopn;
  hasRequired_objectGopn = 1;
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = _objectKeysInternal;
  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
  _objectGopn.f = _Object$getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
  return _objectGopn;
}

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject$2 = _toIobject;
var gOPN$1 = require_objectGopn().f;
var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof2(window)) == 'object' && window && _Object$getOwnPropertyNames ? _Object$getOwnPropertyNames(window) : [];
var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};
_objectGopnExt.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject$2(it));
};
var _objectGopd = {};
var pIE = require_objectPie();
var createDesc$1 = _propertyDesc;
var toIObject$1 = _toIobject;
var toPrimitive$1 = _toPrimitive;
var has$1 = _has;
var IE8_DOM_DEFINE = _ie8DomDefine;
var gOPD$1 = _Object$getOwnPropertyDescriptor;
_objectGopd.f = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIObject$1(O);
  P = toPrimitive$1(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD$1(O, P);
  } catch (e) {/* empty */}
  if (has$1(O, P)) return createDesc$1(!pIE.f.call(O, P), O[P]);
};

// ECMAScript 6 symbols shim
var global = _globalExports;
var has = _has;
var DESCRIPTORS = _descriptors;
var $export = _export;
var redefine = _redefine;
var META = _metaExports.KEY;
var $fails = _fails;
var shared = _sharedExports;
var setToStringTag = require_setToStringTag();
var uid = _uid;
var wks = _wksExports;
var wksExt = _wksExt;
var wksDefine = _wksDefine;
var enumKeys = _enumKeys;
var isArray$1 = _isArray;
var anObject = _anObject;
var isObject$1 = _isObject;
var toObject = _toObject;
var toIObject = _toIobject;
var toPrimitive = _toPrimitive;
var createDesc = _propertyDesc;
var _create = _objectCreate;
var gOPNExt = _objectGopnExt;
var $GOPD = _objectGopd;
var $GOPS = _objectGops;
var $DP = _objectDp;
var $keys = _objectKeys;
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};
var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof2(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};
var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }
  return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol3() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require_objectGopn().f = gOPNExt.f = $getOwnPropertyNames;
  require_objectPie().f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;
  if (DESCRIPTORS && !_library) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable);
  }
  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});
for (var es6Symbols =
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);
for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray$1(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
_wksDefine('asyncIterator');
_wksDefine('observable');
var symbol = _coreExports.Symbol;
var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);
var iterator = _wksExt.f('iterator');
var _Symbol$iterator = /*@__PURE__*/getDefaultExportFromCjs(iterator);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof _Symbol && o.constructor === _Symbol && o !== _Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/**
 * @description 判断是数字
 * @param str
 * @return {boolean}
 */
var isNumber = function isNumber(str) {
  return /^\d+$/.test(str + '');
};
/**
 * @description 判断对象
 * @param value
 * @returns {boolean}
 */
var isObject = function isObject(value) {
  var type = _typeof(value);
  return value != null && type === 'object' && !(value instanceof Array);
};
/**
 * @description 判断数组
 * @param value
 * @returns {boolean}
 */
var isArray = function isArray(value) {
  var type = _typeof(value);
  return value != null && type === 'object' && value instanceof Array;
};
/**
 * @description 验证字母中文数字
 * @param value
 * @returns {boolean}
 */
var letterNumberChinese = function letterNumberChinese(value) {
  var reg = /^[\u0391-\uFFE5A-Za-z0-9]+$/;
  return reg.test(value);
};
/**
 * @description 验证英文数字
 * @param value
 * @returns {boolean}
 */
var letterNumber = function letterNumber(value) {
  var reg = /[A-Za-z0-9]$/;
  return reg.test(value);
};
/**
 * @description 验证正整数
 * @param value
 * @returns {boolean}
 */
var validateInteger = function validateInteger(value) {
  var reg = /^[1-9]\d*$/;
  return reg.test(value);
};
/**
 * @description 验证经度
 * @param value
 * @returns {boolean}
 */
var validateLng = function validateLng(value) {
  var reg = /^[-+]?(0(\.\d{1,15})?|([1-9](\d)?)(\.\d{1,15})?|1[0-7]\d{1}(\.\d{1,15})?|180(\.0{1,15})?)$/;
  return value != '' && reg.test(value);
};
/**
 * @description 验证纬度
 * @param value
 * @returns {boolean}
 */
var validateLat = function validateLat(value) {
  var reg = /^[-+]?((0|\d{1}|([1-8]\d?))(\.\d{1,15})?|90(\.0{1,15})?)$/;
  return value != '' && reg.test(value);
};
/**
 * @description 验证车牌号
 * @param value
 * @returns
 */
var validatePlateNum = function validatePlateNum(value) {
  var reg = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
  return reg.test(value);
};
/**
 * @description 验证身份证号
 * @param value
 * @returns
 */
var validateIdCard = function validateIdCard(value) {
  var reg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return reg.test(value);
};
/**
 * @description 验证邮箱
 * @param value
 * @returns
 */
var validateEmail = function validateEmail(value) {
  var reg = /[\w.~!@#$%^&*()]+@[\w.]+[\w]+/;
  return reg.test(value);
};
/**
 * @description 验证只能输入-、字母、数字、中文
 * @param value
 * @returns
 */
var validateCenterlineLetterNumberChinese = function validateCenterlineLetterNumberChinese(value) {
  return /^[-A-Za-z0-9\u4e00-\u9fa5]+$/.test(value);
};
/**
 * @description 验证只能输入_、字母、数字、中文
 * @param value
 * @returns
 */
var validateUnderlineLetterNumberChinese = function validateUnderlineLetterNumberChinese(value) {
  return /^[_A-Za-z0-9\u4e00-\u9fa5]+$/.test(value);
};
/**
 * @description 验证必须有一位数字和字母
 * @param value
 * @returns
 */
var validateLetterAndNumber = function validateLetterAndNumber(value) {
  return /^(?![^a-zA-Z]+$)(?!\D+$)/.test(value);
};
/**
 * @description 验证ip地址
 * @param value
 * @returns
 */
var validateIp = function validateIp(value) {
  return /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/.test(value);
};
/**
 * @description 验证手机号码
 * @param value
 * @returns
 */
var validatePhone = function validatePhone(value) {
  return /^1[3,4,5,7,8][0-9]{9}$/.test(value);
};
/**
 * @description 验证前后空格
 * @param value
 * @returns
 */
var validatePreAndAfterSpace = function validatePreAndAfterSpace(value) {
  return /^\s+|\s+$/g.test(value);
};
export { binToHex, exchangeDateTime, formatDegree, gcj02towgs84, getIntermediatePoint, getMonthWeek, handleLatLngValue, hexToBin, insertStr, isArray, isNumber, isObject, letterNumber, letterNumberChinese, numberFixed, preFixInt, sleep, sleepSync, validateCenterlineLetterNumberChinese, validateEmail, validateIdCard, validateInteger, validateIp, validateLat, validateLetterAndNumber, validateLng, validatePhone, validatePlateNum, validatePreAndAfterSpace, validateUnderlineLetterNumberChinese, wgs84tobd09, wgs84togcj02 };
