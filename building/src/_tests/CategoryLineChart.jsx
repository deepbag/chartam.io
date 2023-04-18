import React, { useLayoutEffect } from "react";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function CategoryLineChart({
  chartId = "catgeory-line-chart",
  width = "1000px",
  height = "500px",
  data = [],
  setting = {
    xAxis: {
      minGridDistance: 50,
      labels: {
        color: "#000",
      },
    },
    yAxis: {
      labels: {
        color: "#000",
      },
    },
    series: {
      tooltip: {
        visible: true,
        text: "Market Value: {valueY}",
        color: "#fff",
        location: "down", // horizontal, left, right, vertical, down, up
        strokeColor: "#fff",
        strokeOpacity: 2,
        strokeWidth: 1,
      },
      fills: {
        color: "#000",
      },
      stroke: {
        color: "#000",
        width: 3,
        dashed: true,
        dashedDistance: [10, 5],
      },
      bullets: {
        visible: true,
        width: 2,
        radius: 5,
        color: "#000",
        background: "#fff",
      },
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
        fill: "#000",
      },
    },
  },
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
    if (setting?.label?.top?.visible) {
      const topin = setting?.label?.top;
      const label = {
        ...(topin?.text && { text: topin?.text }),
        ...(topin?.fontSize && { fontSize: topin?.fontSize }),
        ...(topin?.fontWeight && { fontWeight: topin?.fontWeight }),
        ...(topin?.textAlign && { textAlign: topin?.textAlign }),
        ...(topin?.x && { x: am5.percent(topin?.x) }),
        ...(topin?.centerX && { centerX: am5.percent(topin?.centerX) }),
        ...(topin?.paddingTop && { paddingTop: topin?.paddingTop }),
        ...(topin?.paddingBottom && { paddingBottom: topin?.paddingBottom }),
        ...(topin?.fill && { fill: am5.color(topin?.fill) }),
      };
      chart.children.unshift(am5.Label.new(root, label));
    }

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {
          ...(setting?.xAxis?.minGridDistance && {
            minGridDistance: setting?.xAxis?.minGridDistance,
          }),
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let xRenderer = xAxis.get("renderer");

    xRenderer.labels.template.setAll({
      ...(setting?.xAxis?.labels?.color && {
        fill: am5.color(setting?.xAxis?.labels?.color),
      }),
    });

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraMax: 0.1,
        extraMin: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      ...(setting?.yAxis?.labels?.color && {
        fill: am5.color(setting?.yAxis?.labels?.color),
      }),
    });

    let seriestooltip = am5.Tooltip.new(root, {
      autoTextColor: false,
      ...(setting?.series?.tooltip?.text && {
        labelText: setting?.series?.tooltip?.text,
      }),
      ...(setting?.series?.tooltip?.location && {
        pointerOrientation: setting?.series?.tooltip?.location,
      }),
    });
    seriestooltip.get("background").setAll({
      ...(setting?.series?.tooltip?.strokeColor && {
        stroke: am5.color(setting?.series?.tooltip?.strokeColor),
      }),
      ...(setting?.series?.tooltip?.strokeOpacity && {
        strokeOpacity: setting?.series?.tooltip?.strokeOpacity,
      }),
      ...(setting?.series?.tooltip?.strokeWidth && {
        strokeWidth: setting?.series?.tooltip?.strokeWidth,
      }),
    });
    seriestooltip.label.setAll({
      ...(setting?.series?.tooltip?.color && {
        fill: am5.color(setting?.series?.tooltip?.color),
      }),
    });

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        ...(setting.series.tooltip.visible && { tooltip: seriestooltip }),
        ...(setting?.series?.fills && {
          fill: am5.color(setting?.series?.fills?.color),
        }),
        ...(setting?.series?.stroke?.color && {
          stroke: am5.color(setting?.series?.stroke?.color),
        }),
      })
    );

    series.strokes.template.setAll({
      ...(setting?.series?.stroke?.width && {
        strokeWidth: setting?.series?.stroke?.width,
      }),
    });

    // Add circle bullet
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
    if (setting?.series?.bullets?.visible) {
      series.bullets.push(() => {
        var graphics = am5.Circle.new(root, {
          ...(setting?.series?.bullets?.width && {
            strokeWidth: setting?.series?.bullets?.width,
          }),
          ...(setting?.series?.bullets?.radius && {
            radius: setting?.series?.bullets?.radius,
          }),
          ...(setting?.series?.bullets?.color && {
            stroke: am5.color(setting?.series?.bullets?.color),
          }),
          ...(setting?.series?.bullets?.background && {
            fill: am5.color(setting?.series?.bullets?.background),
          }),
        });
        return am5.Bullet.new(root, {
          sprite: graphics,
        });
      });
    }

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        snapToSeries: [series],
      })
    );

    series.data.setAll(data);
    xAxis.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartId, setting]);

  return (
    <div id={chartId} style={{ width: width, height: height, zIndex: "5" }} />
  );
}
