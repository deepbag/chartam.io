"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RolatedLabel;
var _react = _interopRequireWildcard(require("react"));
var am5xy = _interopRequireWildcard(require("@amcharts/amcharts5/xy"));
var am5 = _interopRequireWildcard(require("@amcharts/amcharts5"));
var _Animated = _interopRequireDefault(require("@amcharts/amcharts5/themes/Animated"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function RolatedLabel(_ref) {
  var chartId = _ref.chartId,
    width = _ref.width,
    height = _ref.height,
    data = _ref.data,
    _ref$setting = _ref.setting,
    setting = _ref$setting === void 0 ? {} : _ref$setting;
  (0, _react.useLayoutEffect)(function () {
    var _root$_logo, _setting$xAxis, _setting$xAxis$label, _setting$xAxis2, _setting$xAxis2$label, _setting$xAxis3, _setting$xAxis3$label, _setting$xAxis4, _setting$xAxis4$label, _setting$yAxis, _setting$yAxis2, _setting$yAxis3, _setting$yAxis4, _setting$series, _setting$series2;
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root["new"](chartId);
    (_root$_logo = root._logo) === null || _root$_logo === void 0 ? void 0 : _root$_logo.dispose();

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([_Animated["default"]["new"](root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart["new"](root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true
    }));

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor["new"](root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX["new"](root, {
      minGridDistance: 30
    });
    var labelModule = {
      rotation: setting === null || setting === void 0 ? void 0 : (_setting$xAxis = setting.xAxis) === null || _setting$xAxis === void 0 ? void 0 : (_setting$xAxis$label = _setting$xAxis.label) === null || _setting$xAxis$label === void 0 ? void 0 : _setting$xAxis$label.rotation,
      paddingRight: setting === null || setting === void 0 ? void 0 : (_setting$xAxis2 = setting.xAxis) === null || _setting$xAxis2 === void 0 ? void 0 : (_setting$xAxis2$label = _setting$xAxis2.label) === null || _setting$xAxis2$label === void 0 ? void 0 : _setting$xAxis2$label.paddingRight
    };
    if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$xAxis3 = setting.xAxis) === null || _setting$xAxis3 === void 0 ? void 0 : (_setting$xAxis3$label = _setting$xAxis3.label) === null || _setting$xAxis3$label === void 0 ? void 0 : _setting$xAxis3$label.rotation)) delete labelModule.rotation;
    if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$xAxis4 = setting.xAxis) === null || _setting$xAxis4 === void 0 ? void 0 : (_setting$xAxis4$label = _setting$xAxis4.label) === null || _setting$xAxis4$label === void 0 ? void 0 : _setting$xAxis4$label.paddingRight)) delete labelModule.paddingRight;
    xRenderer.labels.template.setAll(_objectSpread(_objectSpread({}, labelModule), {}, {
      centerY: am5.p50,
      centerX: am5.p100
    }));
    xRenderer.grid.template.setAll({
      location: 1
    });
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis["new"](root, {
      maxDeviation: 0.3,
      categoryField: "category",
      renderer: xRenderer,
      tooltip: am5.Tooltip["new"](root, {})
    }));

    // yAxis Modules
    var yAxisModule = {
      min: (_setting$yAxis = setting.yAxis) === null || _setting$yAxis === void 0 ? void 0 : _setting$yAxis.minValue,
      max: (_setting$yAxis2 = setting.yAxis) === null || _setting$yAxis2 === void 0 ? void 0 : _setting$yAxis2.maxValue
    };
    if (!Boolean((_setting$yAxis3 = setting.yAxis) === null || _setting$yAxis3 === void 0 ? void 0 : _setting$yAxis3.maxValue)) delete yAxisModule.max;
    if (!Boolean((_setting$yAxis4 = setting.yAxis) === null || _setting$yAxis4 === void 0 ? void 0 : _setting$yAxis4.minValue)) delete yAxisModule.min;
    var yAxis = chart.yAxes.push(am5xy.ValueAxis["new"](root, _objectSpread(_objectSpread({
      maxDeviation: 0.3
    }, yAxisModule), {}, {
      renderer: am5xy.AxisRendererY["new"](root, {
        strokeOpacity: 0.1
      })
    })));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries["new"](root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "category",
      fill: am5.color(((_setting$series = setting.series) === null || _setting$series === void 0 ? void 0 : _setting$series.barcolor) || "#5191fa"),
      tooltip: am5.Tooltip["new"](root, {
        labelText: ((_setting$series2 = setting.series) === null || _setting$series2 === void 0 ? void 0 : _setting$series2.tooltipText) || "{valueY}"
      })
    }));
    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0
    });
    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    return function () {
      root.dispose();
    };
  }, [chartId]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: chartId,
    style: {
      width: width,
      height: height,
      zIndex: "5"
    }
  });
}