import React, { useLayoutEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function ColumnWithRolatedLabel({
  chartId,
  width,
  height,
  data,
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
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

    const labelModule = {
      rotation: setting?.xAxis?.label?.rotation,
      paddingRight: setting?.xAxis?.label?.paddingRight,
    };

    if (!Boolean(setting?.xAxis?.label?.rotation)) delete labelModule.rotation;
    if (!Boolean(setting?.xAxis?.label?.paddingRight))
      delete labelModule.paddingRight;

    xRenderer.labels.template.setAll({
      ...labelModule,
      centerY: am5.p50,
      centerX: am5.p100,
    });

    xRenderer.grid.template.setAll({
      location: 1,
    });

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "category",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    // yAxis Modules
    const yAxisModule = {
      min: setting.yAxis?.minValue,
      max: setting.yAxis?.maxValue,
    };

    if (!Boolean(setting.yAxis?.maxValue)) delete yAxisModule.max;
    if (!Boolean(setting.yAxis?.minValue)) delete yAxisModule.min;

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        ...yAxisModule,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "category",
        fill: am5.color(setting.columnSeries?.barcolor || "#5191fa"),
        tooltip: am5.Tooltip.new(root, {
          labelText: setting.columnSeries?.tooltipText || "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    });

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, [chartId]);

  return (
    <div id={chartId} style={{ width: width, height: height, zIndex: "5" }} />
  );
}
