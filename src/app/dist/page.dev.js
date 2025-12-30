"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _typography = _interopRequireDefault(require("@/components/ui-kit/typography"));

var _react = require("react");

var _reactSlick = _interopRequireDefault(require("react-slick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Home() {
  var sliderRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var testimonials = [{
    text: "JR Airlines kept our campaign on schedule with flawless helicopter transfers across multiple constituencies in a single day. Punctual, professional, safe.",
    author: "– Campaign Coordinator, National Political Party"
  }, {
    text: "Flying with JR Airlines is always smooth and reliable. They understand time-critical operations perfectly.",
    author: "– Event Manager"
  }, {
    text: "The safety and professionalism of their crew gave us full confidence throughout our journey.",
    author: "– Corporate Client"
  }];
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    fade: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    // 👈 IMPORTANT
    swipe: false,
    // optional (recommended with fade)
    beforeChange: function beforeChange(_, next) {
      return setCurrentIndex(next % testimonials.length);
    },
    arrows: false
  };
  return div;
}