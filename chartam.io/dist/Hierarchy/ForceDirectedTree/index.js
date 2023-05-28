"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ForceDirectedTree;
var _react = _interopRequireWildcard(require("react"));
var am5hierarchy = _interopRequireWildcard(require("@amcharts/amcharts5/hierarchy"));
var am5 = _interopRequireWildcard(require("@amcharts/amcharts5"));
var _Animated = _interopRequireDefault(require("@amcharts/amcharts5/themes/Animated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ForceDirectedTree(_ref) {
  var _ref$chartId = _ref.chartId,
    chartId = _ref$chartId === void 0 ? "child-tree-force-directed" : _ref$chartId,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "500px" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "500px" : _ref$height,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? {
      label: "chartamio",
      children: []
    } : _ref$data,
    _ref$setting = _ref.setting,
    setting = _ref$setting === void 0 ? {} : _ref$setting;
  (0, _react.useLayoutEffect)(function () {
    var _root$_logo;
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root["new"](chartId);
    (_root$_logo = root._logo) === null || _root$_logo === void 0 ? void 0 : _root$_logo.dispose();

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([_Animated["default"]["new"](root)]);

    // Create wrapper container
    var container = root.container.children.push(am5.Container["new"](root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(am5hierarchy.ForceDirected["new"](root, {
      singleBranchOnly: false,
      downDepth: 1,
      initialDepth: 2,
      valueField: "value",
      categoryField: "label",
      childDataField: "children",
      centerStrength: 0.5
    }));
    series.data.setAll([data]);

    // Make stuff animate on load
    series.appear(1000, 100);
    return function () {
      root.dispose();
    };
  }, [chartId, data, width, height]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: chartId,
    style: {
      width: width,
      height: height,
      zIndex: "5"
    }
  });
}