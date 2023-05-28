import React, { useLayoutEffect } from "react";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export default function ForceDirectedTree({
  chartId = "child-tree-force-directed",
  width = "500px",
  height = "500px",
  data = {
    label: "chartamio",
    children: [],
  },
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

    // Create wrapper container
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "label",
        childDataField: "children",
        centerStrength: 0.5,
      })
    );

    series.data.setAll([data]);

    // Make stuff animate on load
    series.appear(1000, 100);
    
    return () => {
      root.dispose();
    };
  }, [chartId, data, width, height]);

  return (
    <div id={chartId} style={{ width: width, height: height, zIndex: "5" }} />
  );
}
