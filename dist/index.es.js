import PropTypes from 'prop-types';
import React, { PureComponent, Component } from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var getLength = function getLength(x, y) {
  return Math.sqrt(x * x + y * y);
};
var getAngle = function getAngle(_ref, _ref2) {
  var x1 = _ref.x,
      y1 = _ref.y;
  var x2 = _ref2.x,
      y2 = _ref2.y;
  var dot = x1 * x2 + y1 * y2;
  var det = x1 * y2 - y1 * x2;
  var angle = Math.atan2(det, dot) / Math.PI * 180;
  return (angle + 360) % 360;
};
var degToRadian = function degToRadian(deg) {
  return deg * Math.PI / 180;
};

var cos = function cos(deg) {
  return Math.cos(degToRadian(deg));
};

var sin = function sin(deg) {
  return Math.sin(degToRadian(deg));
};

var setWidthAndDeltaW = function setWidthAndDeltaW(width, deltaW, minWidth) {
  var expectedWidth = width + deltaW;

  if (expectedWidth > minWidth) {
    width = expectedWidth;
  } else {
    deltaW = minWidth - width;
    width = minWidth;
  }

  return {
    width: width,
    deltaW: deltaW
  };
};

var setHeightAndDeltaH = function setHeightAndDeltaH(height, deltaH, minHeight) {
  var expectedHeight = height + deltaH;

  if (expectedHeight > minHeight) {
    height = expectedHeight;
  } else {
    deltaH = minHeight - height;
    height = minHeight;
  }

  return {
    height: height,
    deltaH: deltaH
  };
};

var getNewStyle = function getNewStyle(type, rect, deltaW, deltaH, ratio, minWidth, minHeight) {
  var width = rect.width,
      height = rect.height,
      centerX = rect.centerX,
      centerY = rect.centerY,
      rotateAngle = rect.rotateAngle;
  var widthFlag = width < 0 ? -1 : 1;
  var heightFlag = height < 0 ? -1 : 1;
  width = Math.abs(width);
  height = Math.abs(height);

  switch (type) {
    case 'r':
      {
        var widthAndDeltaW = setWidthAndDeltaW(width, deltaW, minWidth);
        width = widthAndDeltaW.width;
        deltaW = widthAndDeltaW.deltaW;

        if (ratio) {
          deltaH = deltaW / ratio;
          height = width / ratio; // 左上角固定

          centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        } else {
          // 左边固定
          centerX += deltaW / 2 * cos(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle);
        }

        break;
      }

    case 'tr':
      {
        deltaH = -deltaH;

        var _widthAndDeltaW = setWidthAndDeltaW(width, deltaW, minWidth);

        width = _widthAndDeltaW.width;
        deltaW = _widthAndDeltaW.deltaW;
        var heightAndDeltaH = setHeightAndDeltaH(height, deltaH, minHeight);
        height = heightAndDeltaH.height;
        deltaH = heightAndDeltaH.deltaH;

        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio;
        }

        centerX += deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
        centerY += deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        break;
      }

    case 'br':
      {
        var _widthAndDeltaW2 = setWidthAndDeltaW(width, deltaW, minWidth);

        width = _widthAndDeltaW2.width;
        deltaW = _widthAndDeltaW2.deltaW;

        var _heightAndDeltaH = setHeightAndDeltaH(height, deltaH, minHeight);

        height = _heightAndDeltaH.height;
        deltaH = _heightAndDeltaH.deltaH;

        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio;
        }

        centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
        centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        break;
      }

    case 'b':
      {
        var _heightAndDeltaH2 = setHeightAndDeltaH(height, deltaH, minHeight);

        height = _heightAndDeltaH2.height;
        deltaH = _heightAndDeltaH2.deltaH;

        if (ratio) {
          deltaW = deltaH * ratio;
          width = height * ratio; // 左上角固定

          centerX += deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        } else {
          // 上边固定
          centerX -= deltaH / 2 * sin(rotateAngle);
          centerY += deltaH / 2 * cos(rotateAngle);
        }

        break;
      }

    case 'bl':
      {
        deltaW = -deltaW;

        var _widthAndDeltaW3 = setWidthAndDeltaW(width, deltaW, minWidth);

        width = _widthAndDeltaW3.width;
        deltaW = _widthAndDeltaW3.deltaW;

        var _heightAndDeltaH3 = setHeightAndDeltaH(height, deltaH, minHeight);

        height = _heightAndDeltaH3.height;
        deltaH = _heightAndDeltaH3.deltaH;

        if (ratio) {
          height = width / ratio;
          deltaH = deltaW / ratio;
        }

        centerX -= deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
        centerY -= deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        break;
      }

    case 'l':
      {
        deltaW = -deltaW;

        var _widthAndDeltaW4 = setWidthAndDeltaW(width, deltaW, minWidth);

        width = _widthAndDeltaW4.width;
        deltaW = _widthAndDeltaW4.deltaW;

        if (ratio) {
          height = width / ratio;
          deltaH = deltaW / ratio; // 右上角固定

          centerX -= deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
          centerY -= deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        } else {
          // 右边固定
          centerX -= deltaW / 2 * cos(rotateAngle);
          centerY -= deltaW / 2 * sin(rotateAngle);
        }

        break;
      }

    case 'tl':
      {
        deltaW = -deltaW;
        deltaH = -deltaH;

        var _widthAndDeltaW5 = setWidthAndDeltaW(width, deltaW, minWidth);

        width = _widthAndDeltaW5.width;
        deltaW = _widthAndDeltaW5.deltaW;

        var _heightAndDeltaH4 = setHeightAndDeltaH(height, deltaH, minHeight);

        height = _heightAndDeltaH4.height;
        deltaH = _heightAndDeltaH4.deltaH;

        if (ratio) {
          width = height * ratio;
          deltaW = deltaH * ratio;
        }

        centerX -= deltaW / 2 * cos(rotateAngle) - deltaH / 2 * sin(rotateAngle);
        centerY -= deltaW / 2 * sin(rotateAngle) + deltaH / 2 * cos(rotateAngle);
        break;
      }

    case 't':
      {
        deltaH = -deltaH;

        var _heightAndDeltaH5 = setHeightAndDeltaH(height, deltaH, minHeight);

        height = _heightAndDeltaH5.height;
        deltaH = _heightAndDeltaH5.deltaH;

        if (ratio) {
          width = height * ratio;
          deltaW = deltaH * ratio; // 左下角固定

          centerX += deltaW / 2 * cos(rotateAngle) + deltaH / 2 * sin(rotateAngle);
          centerY += deltaW / 2 * sin(rotateAngle) - deltaH / 2 * cos(rotateAngle);
        } else {
          centerX += deltaH / 2 * sin(rotateAngle);
          centerY -= deltaH / 2 * cos(rotateAngle);
        }

        break;
      }
  }

  return {
    position: {
      centerX: centerX,
      centerY: centerY
    },
    size: {
      width: width * widthFlag,
      height: height * heightFlag
    }
  };
};
var cursorStartMap = {
  n: 0,
  ne: 1,
  e: 2,
  se: 3,
  s: 4,
  sw: 5,
  w: 6,
  nw: 7
};
var cursorDirectionArray = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
var cursorMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 2,
  4: 3,
  5: 4,
  6: 4,
  7: 5,
  8: 6,
  9: 6,
  10: 7,
  11: 8
};
var getCursor = function getCursor(rotateAngle, d) {
  var increment = cursorMap[Math.floor(rotateAngle / 30)];
  var index = cursorStartMap[d];
  var newIndex = (index + increment) % 8;
  return cursorDirectionArray[newIndex];
};
var centerToTL = function centerToTL(_ref3) {
  var centerX = _ref3.centerX,
      centerY = _ref3.centerY,
      width = _ref3.width,
      height = _ref3.height,
      rotateAngle = _ref3.rotateAngle;
  return {
    top: centerY - height / 2,
    left: centerX - width / 2,
    width: width,
    height: height,
    rotateAngle: rotateAngle
  };
};
var tLToCenter = function tLToCenter(_ref4) {
  var top = _ref4.top,
      left = _ref4.left,
      width = _ref4.width,
      height = _ref4.height,
      rotateAngle = _ref4.rotateAngle;
  return {
    position: {
      centerX: left + width / 2,
      centerY: top + height / 2
    },
    size: {
      width: width,
      height: height
    },
    transform: {
      rotateAngle: rotateAngle
    }
  };
};

var zoomableMap = {
  'n': 't',
  's': 'b',
  'e': 'r',
  'w': 'l',
  'ne': 'tr',
  'nw': 'tl',
  'se': 'br',
  'sw': 'bl'
};

var Rect =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Rect, _PureComponent);

  function Rect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setElementRef", function (ref) {
      _this.el = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "startDrag", function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.startX = e.clientX;
      _this.startY = e.clientY;
      _this.props.onDragStart && _this.props.onDragStart(_this.el, e);
      _this._isDragging = true;
      document.addEventListener('mousemove', _this.onDragMove);
      document.addEventListener('mouseup', _this.onDragUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragMove", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!_this._isDragging) return; // patch: fix windows press win key during mouseup issue

      var clientX = e.clientX,
          clientY = e.clientY;
      var deltaX = clientX - _this.startX;
      var deltaY = clientY - _this.startY;

      _this.props.onDrag(deltaX, deltaY, _this.el, e);

      _this.startX = clientX;
      _this.startY = clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "onDragUp", function (e) {
      e.preventDefault();
      e.stopPropagation();
      document.removeEventListener('mousemove', _this.onDragMove);
      document.removeEventListener('mouseup', _this.onDragUp);
      if (!_this._isDragging) return;
      _this._isDragging = false;
      var clientX = e.clientX,
          clientY = e.clientY;
      var deltaX = clientX - _this.startX;
      var deltaY = clientY - _this.startY;
      _this.props.onDragStop && _this.props.onDragStop(deltaX, deltaY, _this.el, e);
    });

    _defineProperty(_assertThisInitialized(_this), "startRotate", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.button !== 0) return;
      var clientX = e.clientX,
          clientY = e.clientY;

      var rect = _this.el.getBoundingClientRect();

      _this.center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      _this.startVector = {
        x: clientX - _this.center.x,
        y: clientY - _this.center.y
      };
      _this.startAngle = _this.props.styles.transform.rotateAngle;
      _this.props.onRotateStart && _this.props.onRotateStart(_this.el, e);
      _this._isRotating = true;
      document.addEventListener('mousemove', _this.onRotateMove);
      document.addEventListener('mouseup', _this.onRotateUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onRotateMove", function (e) {
      if (!_this._isRotating) return; // patch: fix windows press win key during mouseup issue

      var clientX = e.clientX,
          clientY = e.clientY;
      var rotateVector = {
        x: clientX - _this.center.x,
        y: clientY - _this.center.y
      };
      var angle = getAngle(_this.startVector, rotateVector);

      _this.props.onRotate(angle, _this.startAngle, _this.el, e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRotateUp", function (e) {
      document.removeEventListener('mousemove', _this.onRotateMove);
      document.removeEventListener('mouseup', _this.onRotateUp);
      if (!_this._isRotating) return;
      _this._isRotating = false;
      var clientX = e.clientX,
          clientY = e.clientY;
      var rotateVector = {
        x: clientX - _this.center.x,
        y: clientY - _this.center.y
      };
      var angle = getAngle(_this.startVector, rotateVector);
      _this.props.onRotateStop && _this.props.onRotateStop(angle, _this.startAngle, _this.el, e);
    });

    _defineProperty(_assertThisInitialized(_this), "startResize", function (e, cursor) {
      e.preventDefault();
      e.stopPropagation();
      if (e.button !== 0) return;
      document.body.style.cursor = cursor;
      var _this$props$styles = _this.props.styles,
          _this$props$styles$po = _this$props$styles.position,
          centerX = _this$props$styles$po.centerX,
          centerY = _this$props$styles$po.centerY,
          _this$props$styles$si = _this$props$styles.size,
          width = _this$props$styles$si.width,
          height = _this$props$styles$si.height,
          rotateAngle = _this$props$styles.transform.rotateAngle;
      _this.startX = e.clientX;
      _this.startY = e.clientY;
      _this.rect = {
        width: width,
        height: height,
        centerX: centerX,
        centerY: centerY,
        rotateAngle: rotateAngle
      };
      _this.type = e.target.getAttribute('class').split(' ')[0];
      _this.props.onResizeStart && _this.props.onResizeStart(_this.el, e);
      _this._isResizing = true;
      document.addEventListener('mousemove', _this.onResizeMove);
      document.addEventListener('mouseup', _this.onResizeUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeMove", function (e) {
      if (!_this._isResizing) return; // patch: fix windows press win key during mouseup issue

      var clientX = e.clientX,
          clientY = e.clientY;
      var deltaX = clientX - _this.startX;
      var deltaY = clientY - _this.startY;
      var alpha = Math.atan2(deltaY, deltaX);
      var deltaL = getLength(deltaX, deltaY);
      var isShiftKey = e.shiftKey;

      _this.props.onResize(deltaL, alpha, _this.rect, _this.type, isShiftKey, _this.el, e);
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeUp", function (e) {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', _this.onResizeMove);
      document.removeEventListener('mouseup', _this.onResizeUp);
      if (!_this._isResizing) return;
      _this._isResizing = false;
      var clientX = e.clientX,
          clientY = e.clientY;
      var deltaX = clientX - _this.startX;
      var deltaY = clientY - _this.startY;
      var alpha = Math.atan2(deltaY, deltaX);
      var deltaL = getLength(deltaX, deltaY);
      var isShiftKey = e.shiftKey;
      _this.props.onResizeStop && _this.props.onResizeStop(deltaL, alpha, _this.rect, _this.type, isShiftKey, _this.el, e);
    });

    return _this;
  }

  _createClass(Rect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          _this$props$styles2 = _this$props.styles,
          _this$props$styles2$p = _this$props$styles2.position,
          centerX = _this$props$styles2$p.centerX,
          centerY = _this$props$styles2$p.centerY,
          _this$props$styles2$s = _this$props$styles2.size,
          width = _this$props$styles2$s.width,
          height = _this$props$styles2$s.height,
          rotateAngle = _this$props$styles2.transform.rotateAngle,
          styleFromProps = _this$props.style,
          minWidth = _this$props.minWidth,
          minHeight = _this$props.minHeight,
          zoomable = _this$props.zoomable,
          rotatable = _this$props.rotatable,
          parentRotateAngle = _this$props.parentRotateAngle,
          children = _this$props.children,
          onResizeStart = _this$props.onResizeStart,
          onResize = _this$props.onResize,
          onResizeStop = _this$props.onResizeStop,
          onRotateStart = _this$props.onRotateStart,
          onRotate = _this$props.onRotate,
          onRotateStop = _this$props.onRotateStop,
          onDragStart = _this$props.onDragStart,
          onDrag = _this$props.onDrag,
          onDragStop = _this$props.onDragStop,
          props = _objectWithoutProperties(_this$props, ["className", "styles", "style", "minWidth", "minHeight", "zoomable", "rotatable", "parentRotateAngle", "children", "onResizeStart", "onResize", "onResizeStop", "onRotateStart", "onRotate", "onRotateStop", "onDragStart", "onDrag", "onDragStop"]);

      var style = _objectSpread({}, styleFromProps, {
        width: Math.abs(width),
        height: Math.abs(height),
        transform: "translate3d(".concat(centerX - Math.abs(width) / 2, "px, ").concat(centerY - Math.abs(height) / 2, "px, 0) rotate(").concat(rotateAngle, "deg)")
      });

      var direction = zoomable.split(',').map(function (d) {
        return d.trim();
      }).filter(function (d) {
        return d;
      });
      return React.createElement("div", _extends({}, props, {
        ref: this.setElementRef,
        onMouseDown: this.startDrag,
        className: className,
        style: style
      }), children, rotatable && React.createElement("div", {
        className: "rotate",
        onMouseDown: this.startRotate
      }), direction.map(function (d) {
        var cursor = "".concat(getCursor(rotateAngle + parentRotateAngle, d), "-resize");
        return React.createElement("div", {
          key: d,
          style: {
            cursor: cursor
          },
          className: "".concat(zoomableMap[d], " resizable-handler"),
          onMouseDown: function onMouseDown(e) {
            return _this2.startResize(e, cursor);
          }
        });
      }));
    }
  }]);

  return Rect;
}(PureComponent);

_defineProperty(Rect, "propTypes", {
  className: PropTypes.string,
  styles: PropTypes.object,
  zoomable: PropTypes.string,
  rotatable: PropTypes.bool,
  onResizeStart: PropTypes.func,
  onResize: PropTypes.func,
  onResizeStop: PropTypes.func,
  onRotateStart: PropTypes.func,
  onRotate: PropTypes.func,
  onRotateStop: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragStop: PropTypes.func,
  parentRotateAngle: PropTypes.number
});

var DrrHOC =
/*#__PURE__*/
function (_Component) {
  _inherits(DrrHOC, _Component);

  function DrrHOC() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DrrHOC);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DrrHOC)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleRotate", function (angle, startAngle, el) {
      if (!_this.props.onRotate) return;
      var rotateAngle = Math.round(startAngle + angle);

      if (rotateAngle >= 360) {
        rotateAngle -= 360;
      } else if (rotateAngle < 0) {
        rotateAngle += 360;
      }

      if (rotateAngle > 356 || rotateAngle < 4) {
        rotateAngle = 0;
      } else if (rotateAngle > 86 && rotateAngle < 94) {
        rotateAngle = 90;
      } else if (rotateAngle > 176 && rotateAngle < 184) {
        rotateAngle = 180;
      } else if (rotateAngle > 266 && rotateAngle < 274) {
        rotateAngle = 270;
      }

      return [rotateAngle, el];
    });

    _defineProperty(_assertThisInitialized(_this), "onRotate", function () {
      if (typeof _this.props.onRotate === 'function') {
        var _this$props, _this2;

        (_this$props = _this.props).onRotate.apply(_this$props, _toConsumableArray((_this2 = _this).handleRotate.apply(_this2, arguments)));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRotateStop", function () {
      if (typeof _this.props.onRotateStop === 'function') {
        var _this$props2, _this3;

        (_this$props2 = _this.props).onRotateStop.apply(_this$props2, _toConsumableArray((_this3 = _this).handleRotate.apply(_this3, arguments)));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleResize", function (length, alpha, rect, type, isShiftKey, el) {
      if (!_this.props.onResize) return;
      var _this$props3 = _this.props,
          rotateAngle = _this$props3.rotateAngle,
          aspectRatio = _this$props3.aspectRatio,
          minWidth = _this$props3.minWidth,
          minHeight = _this$props3.minHeight,
          parentRotateAngle = _this$props3.parentRotateAngle;
      var beta = alpha - degToRadian(rotateAngle + parentRotateAngle);
      var deltaW = length * Math.cos(beta);
      var deltaH = length * Math.sin(beta);
      var ratio = isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio;

      var _getNewStyle = getNewStyle(type, _objectSpread({}, rect, {
        rotateAngle: rotateAngle
      }), deltaW, deltaH, ratio, minWidth, minHeight),
          _getNewStyle$position = _getNewStyle.position,
          centerX = _getNewStyle$position.centerX,
          centerY = _getNewStyle$position.centerY,
          _getNewStyle$size = _getNewStyle.size,
          width = _getNewStyle$size.width,
          height = _getNewStyle$size.height;

      return [centerToTL({
        centerX: centerX,
        centerY: centerY,
        width: width,
        height: height,
        rotateAngle: rotateAngle
      }), isShiftKey, type, el];
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      if (typeof _this.props.onResize === 'function') {
        var _this$props4, _this4;

        (_this$props4 = _this.props).onResize.apply(_this$props4, _toConsumableArray((_this4 = _this).handleResize.apply(_this4, arguments)));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function () {
      if (typeof _this.props.onResizeStop === 'function') {
        var _this$props5, _this5;

        (_this$props5 = _this.props).onResizeStop.apply(_this$props5, _toConsumableArray((_this5 = _this).handleResize.apply(_this5, arguments)));
      }
    });

    return _this;
  }

  _createClass(DrrHOC, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          top = _this$props6.top,
          left = _this$props6.left,
          width = _this$props6.width,
          height = _this$props6.height,
          rotateAngle = _this$props6.rotateAngle,
          parentRotateAngle = _this$props6.parentRotateAngle,
          zoomable = _this$props6.zoomable,
          rotatable = _this$props6.rotatable,
          className = _this$props6.className,
          children = _this$props6.children,
          props = _objectWithoutProperties(_this$props6, ["top", "left", "width", "height", "rotateAngle", "parentRotateAngle", "zoomable", "rotatable", "className", "children"]);

      var styles = tLToCenter({
        top: top,
        left: left,
        width: width,
        height: height,
        rotateAngle: rotateAngle
      });
      return React.createElement(Rect, _extends({
        className: className,
        styles: styles,
        zoomable: zoomable,
        rotatable: rotatable,
        parentRotateAngle: parentRotateAngle
      }, props, {
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        onRotate: this.onRotate,
        onRotateStop: this.onRotateStop
      }), children);
    }
  }]);

  return DrrHOC;
}(Component);

_defineProperty(DrrHOC, "propTypes", {
  className: PropTypes.string,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  rotatable: PropTypes.bool,
  rotateAngle: PropTypes.number,
  parentRotateAngle: PropTypes.number,
  zoomable: PropTypes.string,
  minWidth: PropTypes.number,
  minHeight: PropTypes.number,
  aspectRatio: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  onRotateStart: PropTypes.func,
  onRotate: PropTypes.func,
  onRotateStop: PropTypes.func,
  onResizeStart: PropTypes.func,
  onResize: PropTypes.func,
  onResizeStop: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragStop: PropTypes.func
});

_defineProperty(DrrHOC, "defaultProps", {
  parentRotateAngle: 0,
  rotateAngle: 0,
  rotatable: true,
  zoomable: '',
  minWidth: 10,
  minHeight: 10
});

export default DrrHOC;
//# sourceMappingURL=index.es.js.map
