"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _testimonials = _interopRequireDefault(require("@/components/ui-kit/testimonials"));

var _typography = _interopRequireDefault(require("@/components/ui-kit/typography"));

var _image = _interopRequireDefault(require("next/image"));

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
    text: "Jones & Brown Legal handled my estate planning with such care and professionalism. They listened to my concerns and made the process clear and straightforward. I now have complete peace of mind knowing my family's future is secure.",
    author: "– David L., Business Owner"
  }, {
    text: "Their expertise and courtroom presence were truly impressive. They turned a stressful situation into a successful outcome.",
    author: "– Sarah M., Small Business Owner"
  }, {
    text: "I was very impressed with the responsiveness and knowledge of everyone at Jones & Brown Legal. I felt like they really cared about my case, and they fought hard to get me a great result.",
    author: "– Thomas P., Individual Client"
  }];
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    fade: false,
    // ❌ no fade
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: false,
    cssEase: "ease-in-out",
    adaptiveHeight: false,
    useTransform: true,
    beforeChange: function beforeChange(_, next) {
      return setCurrentIndex(next % testimonials.length);
    }
  };
  return;
}