"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DateLine;
var _react = _interopRequireWildcard(require("react"));
var am5xy = _interopRequireWildcard(require("@amcharts/amcharts5/xy"));
var am5 = _interopRequireWildcard(require("@amcharts/amcharts5"));
var _Animated = _interopRequireDefault(require("@amcharts/amcharts5/themes/Animated"));
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function DateLine(_ref) {
  var chartId = _ref.chartId,
    width = _ref.width,
    height = _ref.height,
    data = _ref.data,
    _ref$setting = _ref.setting,
    setting = _ref$setting === void 0 ? {} : _ref$setting;
  (0, _react.useLayoutEffect)(function () {
    var _root$_logo, _setting$xAxis, _setting$xAxis2, _setting$yAxis, _setting$yAxis2, _setting$yAxis3, _setting$yAxis4;
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
      wheelY: "zoomX",
      pinchZoomX: true,
      marginRight: 0,
      marginLeft: 0
    }));

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor["new"](root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    var xAxisItems = {
      timeUnit: setting === null || setting === void 0 ? void 0 : (_setting$xAxis = setting.xAxis) === null || _setting$xAxis === void 0 ? void 0 : _setting$xAxis.timeUnit,
      count: 1
    };
    if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$xAxis2 = setting.xAxis) === null || _setting$xAxis2 === void 0 ? void 0 : _setting$xAxis2.timeUnit)) xAxisItems.timeUnit = "day";

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis["new"](root, {
      maxDeviation: 0.2,
      baseInterval: xAxisItems,
      renderer: am5xy.AxisRendererX["new"](root, {
        minGridDistance: 100
      }),
      tooltip: am5.Tooltip["new"](root, {})
    }));
    if (xAxis) {
      var _setting$xAxis3, _setting$xAxis4;
      xAxis.get("dateFormats")[(setting === null || setting === void 0 ? void 0 : (_setting$xAxis3 = setting.xAxis) === null || _setting$xAxis3 === void 0 ? void 0 : _setting$xAxis3.timeUnit) || "day"] = setting === null || setting === void 0 ? void 0 : (_setting$xAxis4 = setting.xAxis) === null || _setting$xAxis4 === void 0 ? void 0 : _setting$xAxis4.dateFormat;
    }
    var xRenderer = xAxis.get("renderer");
    xRenderer.labels.template.setAll({
      fill: am5.color("#000"),
      paddingTop: 15
    });

    // Items for yaxis
    var yAxisItem = {
      min: setting === null || setting === void 0 ? void 0 : (_setting$yAxis = setting.yAxis) === null || _setting$yAxis === void 0 ? void 0 : _setting$yAxis.minValue,
      max: setting === null || setting === void 0 ? void 0 : (_setting$yAxis2 = setting.yAxis) === null || _setting$yAxis2 === void 0 ? void 0 : _setting$yAxis2.maxValue
    };
    if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$yAxis3 = setting.yAxis) === null || _setting$yAxis3 === void 0 ? void 0 : _setting$yAxis3.minValue)) delete yAxisItem.min;
    if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$yAxis4 = setting.yAxis) === null || _setting$yAxis4 === void 0 ? void 0 : _setting$yAxis4.maxValue)) delete yAxisItem.max;
    var yAxis = chart.yAxes.push(am5xy.ValueAxis["new"](root, _objectSpread(_objectSpread({}, yAxisItem), {}, {
      renderer: am5xy.AxisRendererY["new"](root, {})
    })));

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    _lodash["default"].map(_lodash["default"].uniqBy(_lodash["default"].map(data, "category")), function (item, index) {
      var _setting$series, _setting$series2, _setting$series3, _setting$series3$stro, _setting$series4, _setting$series4$stro, _setting$series5, _setting$series6, _setting$series7, _setting$series7$stro, _setting$series8, _setting$series8$fill, _setting$series9, _setting$series9$fill;
      var colorItem = [];
      if (_lodash["default"].isArray(setting === null || setting === void 0 ? void 0 : (_setting$series = setting.series) === null || _setting$series === void 0 ? void 0 : _setting$series.color)) colorItem = _toConsumableArray(setting === null || setting === void 0 ? void 0 : (_setting$series2 = setting.series) === null || _setting$series2 === void 0 ? void 0 : _setting$series2.color);
      var seriesItem = {
        fill: am5.color(colorItem[index] || 0x095256),
        stroke: am5.color(colorItem[index] || 0x095256)
      };
      var series = chart.series.push(am5xy.LineSeries["new"](root, _objectSpread(_objectSpread({
        name: item,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date"
      }, seriesItem), {}, {
        tooltip: am5.Tooltip["new"](root, {
          labelText: "".concat(item, " {valueY}")
        })
      })));

      //   var tooltip = series.set("tooltip", am5.Tooltip.new(root, {}));
      //   tooltip.label.set("text", "{valueY}");

      var strokeItem = {
        strokeWidth: setting === null || setting === void 0 ? void 0 : (_setting$series3 = setting.series) === null || _setting$series3 === void 0 ? void 0 : (_setting$series3$stro = _setting$series3.stroke) === null || _setting$series3$stro === void 0 ? void 0 : _setting$series3$stro.width,
        strokeDasharray: setting === null || setting === void 0 ? void 0 : (_setting$series4 = setting.series) === null || _setting$series4 === void 0 ? void 0 : (_setting$series4$stro = _setting$series4.stroke) === null || _setting$series4$stro === void 0 ? void 0 : _setting$series4$stro.dashedDistance
      };
      if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$series5 = setting.series) === null || _setting$series5 === void 0 ? void 0 : _setting$series5.stroke.width)) seriesItem === null || seriesItem === void 0 ? true : delete seriesItem.strokeWidth;
      if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$series6 = setting.series) === null || _setting$series6 === void 0 ? void 0 : _setting$series6.stroke.dashed)) {
        seriesItem === null || seriesItem === void 0 ? true : delete seriesItem.strokeDasharray;
      } else if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$series7 = setting.series) === null || _setting$series7 === void 0 ? void 0 : (_setting$series7$stro = _setting$series7.stroke) === null || _setting$series7$stro === void 0 ? void 0 : _setting$series7$stro.dashedDistance)) {
        strokeItem.strokeDasharray = [5, 5];
      }
      var fillItem = {
        fillOpacity: setting === null || setting === void 0 ? void 0 : (_setting$series8 = setting.series) === null || _setting$series8 === void 0 ? void 0 : (_setting$series8$fill = _setting$series8.fills) === null || _setting$series8$fill === void 0 ? void 0 : _setting$series8$fill.opacity,
        visible: true
      };
      if (!Boolean(setting === null || setting === void 0 ? void 0 : (_setting$series9 = setting.series) === null || _setting$series9 === void 0 ? void 0 : (_setting$series9$fill = _setting$series9.fills) === null || _setting$series9$fill === void 0 ? void 0 : _setting$series9$fill.opacity)) seriesItem === null || seriesItem === void 0 ? true : delete seriesItem.fillOpacity;
      series.strokes.template.setAll(strokeItem);
      series.fills.template.setAll(fillItem);

      // Set data
      series.data.setAll(_lodash["default"].filter(data, function (ev) {
        return ev.category === item;
      }));

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
    });

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    if (setting !== null && setting !== void 0 && setting.scrollbarX) {
      chart.set("scrollbarX", am5.Scrollbar["new"](root, {
        orientation: "horizontal"
      }));
    }

    // chart.appear(1000, 100);

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