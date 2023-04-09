# chartam.io

[![npm version](https://badge.fury.io/js/chartam.io.svg)](https://www.npmjs.com/package/chartam.io) [![downloads](https://img.shields.io/npm/dw/chartam.io)](https://github.com/deepbag/chartam.io)

This package provides a comprehensive chart library built on top of amCharts 5, a powerful and flexible JavaScript charting library that supports a wide range of chart types and data formats.

With this library, you can easily create visually stunning and interactive charts for your web applications, dashboards, and reports. The library includes a variety of pre-built chart types, such as bar charts, line charts, scatter charts, and more, that can be customized to fit your specific needs.

The package is designed to be easy to use and integrate into your existing web development workflow. It comes with comprehensive documentation and examples to help you get started quickly.

Features:

1. Wide range of chart types
2. High-performance rendering
3. Fully customizable styling
4. Responsive and mobile-friendly design
5. Cross-browser compatibility
6. Comprehensive documentation and examples

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install chartam.io --save
```

## Usage

Install Package

```coffeescript
# import specific chart
import { ColumnWithRolatedLabel } from "chartam.io";

<ColumnWithRolatedLabel
    chartId="ColumnWithRolatedLabel" // chartid will be unique
    width="1000px" // width
    height="500px" // height
    data={[
        {
            category: "India",
            value: 2025,
        },
        {
            category: "USA",
            value: 1882,
        }
        ]} // data
    setting={{
        xAxis: {
            label: {
              rotation: -90, // rotation
              paddingRight: 15, // padding right
            },
        },
        yAxis: {
            minValue: 100, // value for yaxis start point
            maxValue: 2500, // value for yaxis end point
        },
        columnSeries: {
            tooltipText: "{value} {category}", // JSON key names
            barcolor: "#6ed27a", // color code
          },
        }}
/>

```

```sh

```

## Documentation

You can find a documentation [here](https://chartamio.netlify.app/). We are still working on!

## Dependencies

- [amcharts](https://www.amcharts.com/): Programming library for all your data visualization needs.

## Contributers

## License

[MIT](LICENSE)
