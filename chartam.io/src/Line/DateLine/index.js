import React, { useLayoutEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import _ from "lodash";

export default function DateLine({
  chartId,
  width = "1000px",
  height = "500px",
  data = [],
  setting = {},
}) {
  useLayoutEffect(() => {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new(chartId);
    root._logo?.dispose();

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        wheelY: "zoomX",
        pinchZoomX: true,
        marginRight: 0,
        marginLeft: 0,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    let xAxisItems = {
      timeUnit: setting?.xAxis?.timeUnit,
      count: 1,
    };

    // if timeUnit is not avaliable add default day
    if (!Boolean(setting?.xAxis?.timeUnit)) xAxisItems.timeUnit = "day";

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: xAxisItems,
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 100,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    if (xAxis) {
      xAxis.get("dateFormats")[setting?.xAxis?.timeUnit || "day"] =
        setting?.xAxis?.dateFormat;
    }

    let xRenderer = xAxis.get("renderer");
    xRenderer.labels.template.setAll({
      fill: am5.color("#000"),
      paddingTop: 15,
      ...(!setting?.xAxes?.labels?.visible && {
        visible: false,
      }),
    });

    // Items for yaxis
    let yAxisItem = {
      min: setting?.yAxis?.minValue,
      max: setting?.yAxis?.maxValue,
    };
    // if minValue or maxValue is not avaliable remove from object
    if (!Boolean(setting?.yAxis?.minValue)) delete yAxisItem.min;
    if (!Boolean(setting?.yAxis?.maxValue)) delete yAxisItem.max;

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        ...yAxisItem,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let yRenderer = yAxis.get("renderer");
    yRenderer.labels.template.setAll({
      fill: am5.color("#000"),
      paddingTop: 15,
      ...(!setting?.yAxes?.labels?.visible && {
        visible: false,
      }),
    });

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    _.map(_.uniqBy(_.map(data, "category")), (item, index) => {
      let colorItem = [];

      if (_.isArray(setting?.series?.color))
        colorItem = [...setting?.series?.color];

      let seriesItem = {
        fill: am5.color(colorItem[index] || 0x095256),
        stroke: am5.color(colorItem[index] || 0x095256),
      };

      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: item,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          valueXField: "date",
          ...seriesItem,
          tooltip: am5.Tooltip.new(root, {
            labelText: `${item} {valueY}`,
          }),
        })
      );

      let strokeItem = {
        strokeWidth: setting?.series?.stroke?.width,
        strokeDasharray: setting?.series?.stroke?.dashedDistance,
      };
      if (!Boolean(setting?.series?.stroke.width))
        delete seriesItem?.strokeWidth;
      if (!Boolean(setting?.series?.stroke.dashed)) {
        delete seriesItem?.strokeDasharray;
      } else if (!Boolean(setting?.series?.stroke?.dashedDistance)) {
        strokeItem.strokeDasharray = [5, 5];
      }

      let fillItem = {
        fillOpacity: setting?.series?.fills?.opacity,
        visible: true,
      };
      if (!Boolean(setting?.series?.fills?.opacity))
        delete seriesItem?.fillOpacity;

      series.strokes.template.setAll(strokeItem);
      series.fills.template.setAll(fillItem);

      // Set data
      series.data.setAll(_.filter(data, (ev) => ev.category === item));

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
    });

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    if (setting?.scrollbarX) {
      chart.set(
        "scrollbarX",
        am5.Scrollbar.new(root, {
          orientation: "horizontal",
        })
      );
    }

    // chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartId]);

  return (
    <div id={chartId} style={{ width: width, height: height, zIndex: "5" }} />
  );
}
