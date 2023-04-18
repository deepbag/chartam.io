"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CategoryLine;
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
function CategoryLine(_ref) {
  var _ref$chartId = _ref.chartId,
    chartId = _ref$chartId === void 0 ? "catgeory-line-chart" : _ref$chartId,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? "1000px" : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? "500px" : _ref$height,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    _ref$setting = _ref.setting,
    setting = _ref$setting === void 0 ? {
      xAxis: {
        minGridDistance: 50,
        labels: {
          color: "#000"
        }
      },
      yAxis: {
        labels: {
          color: "#000"
        }
      },
      series: {
        tooltip: {
          visible: true,
          text: "Market Value: {valueY}",
          color: "#fff",
          location: "down",
          // horizontal, left, right, vertical, down, up
          strokeColor: "#fff",
          strokeOpacity: 2,
          strokeWidth: 1
        },
        fills: {
          color: "#000"
        },
        stroke: {
          color: "#000",
          width: 3,
          dashed: true,
          dashedDistance: [10, 5]
        },
        bullets: {
          visible: true,
          width: 2,
          radius: 5,
          color: "#000",
          background: "#fff"
        }
      },
      label: {
        top: {
          visible: true,
          text: "Default Line Chart Label (Important Note)",
          fontSize: 18,
          fontWeight: "500",
          textAlign: "center",
          x: 50,
          centerX: 50,
          paddingTop: 0,
          paddingBottom: 0,
          fill: "#000"
        }
      }
    } : _ref$setting;
  (0, _react.useLayoutEffect)(function () {
    var _root$_logo, _setting$label, _setting$label$top, _setting$xAxis, _setting$xAxis2, _setting$xAxis3, _setting$xAxis3$label, _setting$xAxis4, _setting$xAxis4$label, _setting$yAxis, _setting$yAxis$labels, _setting$yAxis2, _setting$yAxis2$label, _setting$series, _setting$series$toolt, _setting$series2, _setting$series2$tool, _setting$series3, _setting$series3$tool, _setting$series4, _setting$series4$tool, _setting$series5, _setting$series5$tool, _setting$series6, _setting$series6$tool, _setting$series7, _setting$series7$tool, _setting$series8, _setting$series8$tool, _setting$series9, _setting$series9$tool, _setting$series10, _setting$series10$too, _setting$series11, _setting$series11$too, _setting$series12, _setting$series12$too, _setting$series13, _setting$series14, _setting$series14$fil, _setting$series15, _setting$series15$str, _setting$series16, _setting$series16$str, _setting$series17, _setting$series17$str, _setting$series18, _setting$series18$str, _setting$series19, _setting$series19$bul;
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
    if (setting !== null && setting !== void 0 && (_setting$label = setting.label) !== null && _setting$label !== void 0 && (_setting$label$top = _setting$label.top) !== null && _setting$label$top !== void 0 && _setting$label$top.visible) {
      var _setting$label2;
      var topin = setting === null || setting === void 0 ? void 0 : (_setting$label2 = setting.label) === null || _setting$label2 === void 0 ? void 0 : _setting$label2.top;
      var label = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (topin === null || topin === void 0 ? void 0 : topin.text) && {
        text: topin === null || topin === void 0 ? void 0 : topin.text
      }), (topin === null || topin === void 0 ? void 0 : topin.fontSize) && {
        fontSize: topin === null || topin === void 0 ? void 0 : topin.fontSize
      }), (topin === null || topin === void 0 ? void 0 : topin.fontWeight) && {
        fontWeight: topin === null || topin === void 0 ? void 0 : topin.fontWeight
      }), (topin === null || topin === void 0 ? void 0 : topin.textAlign) && {
        textAlign: topin === null || topin === void 0 ? void 0 : topin.textAlign
      }), (topin === null || topin === void 0 ? void 0 : topin.x) && {
        x: am5.percent(topin === null || topin === void 0 ? void 0 : topin.x)
      }), (topin === null || topin === void 0 ? void 0 : topin.centerX) && {
        centerX: am5.percent(topin === null || topin === void 0 ? void 0 : topin.centerX)
      }), (topin === null || topin === void 0 ? void 0 : topin.paddingTop) && {
        paddingTop: topin === null || topin === void 0 ? void 0 : topin.paddingTop
      }), (topin === null || topin === void 0 ? void 0 : topin.paddingBottom) && {
        paddingBottom: topin === null || topin === void 0 ? void 0 : topin.paddingBottom
      }), (topin === null || topin === void 0 ? void 0 : topin.fill) && {
        fill: am5.color(topin === null || topin === void 0 ? void 0 : topin.fill)
      });
      chart.children.unshift(am5.Label["new"](root, label));
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

    var xAxis = chart.xAxes.push(am5xy.CategoryAxis["new"](root, {
      categoryField: "category",
      renderer: am5xy.AxisRendererX["new"](root, _objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$xAxis = setting.xAxis) === null || _setting$xAxis === void 0 ? void 0 : _setting$xAxis.minGridDistance) && {
        minGridDistance: setting === null || setting === void 0 ? void 0 : (_setting$xAxis2 = setting.xAxis) === null || _setting$xAxis2 === void 0 ? void 0 : _setting$xAxis2.minGridDistance
      })),
      tooltip: am5.Tooltip["new"](root, {})
    }));
    var xRenderer = xAxis.get("renderer");
    xRenderer.labels.template.setAll(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$xAxis3 = setting.xAxis) === null || _setting$xAxis3 === void 0 ? void 0 : (_setting$xAxis3$label = _setting$xAxis3.labels) === null || _setting$xAxis3$label === void 0 ? void 0 : _setting$xAxis3$label.color) && {
      fill: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$xAxis4 = setting.xAxis) === null || _setting$xAxis4 === void 0 ? void 0 : (_setting$xAxis4$label = _setting$xAxis4.labels) === null || _setting$xAxis4$label === void 0 ? void 0 : _setting$xAxis4$label.color)
    }));
    var yAxis = chart.yAxes.push(am5xy.ValueAxis["new"](root, {
      extraMax: 0.1,
      extraMin: 0.1,
      renderer: am5xy.AxisRendererY["new"](root, {
        strokeOpacity: 0.1
      }),
      tooltip: am5.Tooltip["new"](root, {})
    }));
    yAxis.get("renderer").labels.template.setAll(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$yAxis = setting.yAxis) === null || _setting$yAxis === void 0 ? void 0 : (_setting$yAxis$labels = _setting$yAxis.labels) === null || _setting$yAxis$labels === void 0 ? void 0 : _setting$yAxis$labels.color) && {
      fill: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$yAxis2 = setting.yAxis) === null || _setting$yAxis2 === void 0 ? void 0 : (_setting$yAxis2$label = _setting$yAxis2.labels) === null || _setting$yAxis2$label === void 0 ? void 0 : _setting$yAxis2$label.color)
    }));
    var seriestooltip = am5.Tooltip["new"](root, _objectSpread(_objectSpread({
      autoTextColor: false
    }, (setting === null || setting === void 0 ? void 0 : (_setting$series = setting.series) === null || _setting$series === void 0 ? void 0 : (_setting$series$toolt = _setting$series.tooltip) === null || _setting$series$toolt === void 0 ? void 0 : _setting$series$toolt.text) && {
      labelText: setting === null || setting === void 0 ? void 0 : (_setting$series2 = setting.series) === null || _setting$series2 === void 0 ? void 0 : (_setting$series2$tool = _setting$series2.tooltip) === null || _setting$series2$tool === void 0 ? void 0 : _setting$series2$tool.text
    }), (setting === null || setting === void 0 ? void 0 : (_setting$series3 = setting.series) === null || _setting$series3 === void 0 ? void 0 : (_setting$series3$tool = _setting$series3.tooltip) === null || _setting$series3$tool === void 0 ? void 0 : _setting$series3$tool.location) && {
      pointerOrientation: setting === null || setting === void 0 ? void 0 : (_setting$series4 = setting.series) === null || _setting$series4 === void 0 ? void 0 : (_setting$series4$tool = _setting$series4.tooltip) === null || _setting$series4$tool === void 0 ? void 0 : _setting$series4$tool.location
    }));
    seriestooltip.get("background").setAll(_objectSpread(_objectSpread(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$series5 = setting.series) === null || _setting$series5 === void 0 ? void 0 : (_setting$series5$tool = _setting$series5.tooltip) === null || _setting$series5$tool === void 0 ? void 0 : _setting$series5$tool.strokeColor) && {
      stroke: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series6 = setting.series) === null || _setting$series6 === void 0 ? void 0 : (_setting$series6$tool = _setting$series6.tooltip) === null || _setting$series6$tool === void 0 ? void 0 : _setting$series6$tool.strokeColor)
    }), (setting === null || setting === void 0 ? void 0 : (_setting$series7 = setting.series) === null || _setting$series7 === void 0 ? void 0 : (_setting$series7$tool = _setting$series7.tooltip) === null || _setting$series7$tool === void 0 ? void 0 : _setting$series7$tool.strokeOpacity) && {
      strokeOpacity: setting === null || setting === void 0 ? void 0 : (_setting$series8 = setting.series) === null || _setting$series8 === void 0 ? void 0 : (_setting$series8$tool = _setting$series8.tooltip) === null || _setting$series8$tool === void 0 ? void 0 : _setting$series8$tool.strokeOpacity
    }), (setting === null || setting === void 0 ? void 0 : (_setting$series9 = setting.series) === null || _setting$series9 === void 0 ? void 0 : (_setting$series9$tool = _setting$series9.tooltip) === null || _setting$series9$tool === void 0 ? void 0 : _setting$series9$tool.strokeWidth) && {
      strokeWidth: setting === null || setting === void 0 ? void 0 : (_setting$series10 = setting.series) === null || _setting$series10 === void 0 ? void 0 : (_setting$series10$too = _setting$series10.tooltip) === null || _setting$series10$too === void 0 ? void 0 : _setting$series10$too.strokeWidth
    }));
    seriestooltip.label.setAll(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$series11 = setting.series) === null || _setting$series11 === void 0 ? void 0 : (_setting$series11$too = _setting$series11.tooltip) === null || _setting$series11$too === void 0 ? void 0 : _setting$series11$too.color) && {
      fill: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series12 = setting.series) === null || _setting$series12 === void 0 ? void 0 : (_setting$series12$too = _setting$series12.tooltip) === null || _setting$series12$too === void 0 ? void 0 : _setting$series12$too.color)
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries["new"](root, _objectSpread(_objectSpread(_objectSpread({
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "category"
    }, setting.series.tooltip.visible && {
      tooltip: seriestooltip
    }), (setting === null || setting === void 0 ? void 0 : (_setting$series13 = setting.series) === null || _setting$series13 === void 0 ? void 0 : _setting$series13.fills) && {
      fill: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series14 = setting.series) === null || _setting$series14 === void 0 ? void 0 : (_setting$series14$fil = _setting$series14.fills) === null || _setting$series14$fil === void 0 ? void 0 : _setting$series14$fil.color)
    }), (setting === null || setting === void 0 ? void 0 : (_setting$series15 = setting.series) === null || _setting$series15 === void 0 ? void 0 : (_setting$series15$str = _setting$series15.stroke) === null || _setting$series15$str === void 0 ? void 0 : _setting$series15$str.color) && {
      stroke: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series16 = setting.series) === null || _setting$series16 === void 0 ? void 0 : (_setting$series16$str = _setting$series16.stroke) === null || _setting$series16$str === void 0 ? void 0 : _setting$series16$str.color)
    })));
    series.strokes.template.setAll(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$series17 = setting.series) === null || _setting$series17 === void 0 ? void 0 : (_setting$series17$str = _setting$series17.stroke) === null || _setting$series17$str === void 0 ? void 0 : _setting$series17$str.width) && {
      strokeWidth: setting === null || setting === void 0 ? void 0 : (_setting$series18 = setting.series) === null || _setting$series18 === void 0 ? void 0 : (_setting$series18$str = _setting$series18.stroke) === null || _setting$series18$str === void 0 ? void 0 : _setting$series18$str.width
    }));

    // Add circle bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    if (setting !== null && setting !== void 0 && (_setting$series19 = setting.series) !== null && _setting$series19 !== void 0 && (_setting$series19$bul = _setting$series19.bullets) !== null && _setting$series19$bul !== void 0 && _setting$series19$bul.visible) {
      series.bullets.push(function () {
        var _setting$series20, _setting$series20$bul, _setting$series21, _setting$series21$bul, _setting$series22, _setting$series22$bul, _setting$series23, _setting$series23$bul, _setting$series24, _setting$series24$bul, _setting$series25, _setting$series25$bul, _setting$series26, _setting$series26$bul, _setting$series27, _setting$series27$bul;
        var graphics = am5.Circle["new"](root, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (setting === null || setting === void 0 ? void 0 : (_setting$series20 = setting.series) === null || _setting$series20 === void 0 ? void 0 : (_setting$series20$bul = _setting$series20.bullets) === null || _setting$series20$bul === void 0 ? void 0 : _setting$series20$bul.width) && {
          strokeWidth: setting === null || setting === void 0 ? void 0 : (_setting$series21 = setting.series) === null || _setting$series21 === void 0 ? void 0 : (_setting$series21$bul = _setting$series21.bullets) === null || _setting$series21$bul === void 0 ? void 0 : _setting$series21$bul.width
        }), (setting === null || setting === void 0 ? void 0 : (_setting$series22 = setting.series) === null || _setting$series22 === void 0 ? void 0 : (_setting$series22$bul = _setting$series22.bullets) === null || _setting$series22$bul === void 0 ? void 0 : _setting$series22$bul.radius) && {
          radius: setting === null || setting === void 0 ? void 0 : (_setting$series23 = setting.series) === null || _setting$series23 === void 0 ? void 0 : (_setting$series23$bul = _setting$series23.bullets) === null || _setting$series23$bul === void 0 ? void 0 : _setting$series23$bul.radius
        }), (setting === null || setting === void 0 ? void 0 : (_setting$series24 = setting.series) === null || _setting$series24 === void 0 ? void 0 : (_setting$series24$bul = _setting$series24.bullets) === null || _setting$series24$bul === void 0 ? void 0 : _setting$series24$bul.color) && {
          stroke: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series25 = setting.series) === null || _setting$series25 === void 0 ? void 0 : (_setting$series25$bul = _setting$series25.bullets) === null || _setting$series25$bul === void 0 ? void 0 : _setting$series25$bul.color)
        }), (setting === null || setting === void 0 ? void 0 : (_setting$series26 = setting.series) === null || _setting$series26 === void 0 ? void 0 : (_setting$series26$bul = _setting$series26.bullets) === null || _setting$series26$bul === void 0 ? void 0 : _setting$series26$bul.background) && {
          fill: am5.color(setting === null || setting === void 0 ? void 0 : (_setting$series27 = setting.series) === null || _setting$series27 === void 0 ? void 0 : (_setting$series27$bul = _setting$series27.bullets) === null || _setting$series27$bul === void 0 ? void 0 : _setting$series27$bul.background)
        }));
        return am5.Bullet["new"](root, {
          sprite: graphics
        });
      });
    }

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set("cursor", am5xy.XYCursor["new"](root, {
      xAxis: xAxis,
      yAxis: yAxis,
      snapToSeries: [series]
    }));
    series.data.setAll(data);
    xAxis.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    return function () {
      root.dispose();
    };
  }, [chartId, setting]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: chartId,
    style: {
      width: width,
      height: height,
      zIndex: "5"
    }
  });
}