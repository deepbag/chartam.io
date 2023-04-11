const _head = [
  { label: "Key", width: "50px" },
  { label: "Data Type", width: "100px" },
  { label: "Example" },
  { label: "Description" },
];
const _Innerhead = [
  { label: "Key", width: "50px" },
  { label: "Data Type", width: "100px" },
  { label: "Example", width: "100px" },
  { label: "Optional", width: "50px" },
  { label: "Default", width: "100px" },
  { label: "Options" },
  { label: "Description" },
];

export const _accordionDateLine = [
  {
    heading: "What is chartId?",
    summary: "Information about chart id",
    description:
      "The chartId value can be any string value that uniquely identifies the chart. This can be useful in cases where you need to work with multiple charts on the same page, and you need to be able to reference a specific chart instance in your code. it's compulsory to work with charts.",
    table: {
      head: _head,
      body: [
        {
          key: "chartId",
          datatype: "string",
          example: "chartId='example'",
          description:
            "It's compulsory to work with charts. The chartId value can be any string value that uniquely identifies the chart.",
        },
      ],
    },
  },
  {
    heading: "What is width?",
    summary: "Information about width",
    description:
      "In the context of charts, the width property is often used to specify the width of the chart canvas, which is the area where the chart is rendered. The width of the chart canvas can be specified in pixels or as a percentage of the container element's width. When the chart is responsive, the width of the chart canvas will adjust dynamically as the size of the container element changes.",
    table: {
      head: _head,
      body: [
        {
          key: "width",
          datatype: "string",
          example: "width='100px' or width='100%'",
          description:
            "the width property is often used to specify the width of the chart canvas, default value is 1000px.",
        },
      ],
    },
  },
  {
    heading: "What is height?",
    summary: "Information about height",
    description:
      "In the context of charts, the height property is often used to specify the height of the chart canvas, which is the area where the chart is rendered. The height of the chart canvas can be specified in pixels or as a percentage of the container element's height. When the chart is responsive, the height of the chart canvas will adjust dynamically as the size of the container element changes.",
    table: {
      head: _head,
      body: [
        {
          key: "height",
          datatype: "string",
          example: "height='100px' or height='100%'",
          description:
            "the height property is often used to specify the height of the chart canvas, default value is 500px.",
        },
      ],
    },
  },
  {
    heading: "What is data?",
    summary: "Information about setting",
    description:
      "The data refers to the information that is used to create the visual representation of the chart. The data for a chart typically consists of a set of values or data points that are plotted on the chart's x- and y-axes.",
    table: {
      head: _head,
      body: [
        {
          key: "data",
          datatype: "array",
          example: JSON.stringify([
            { date: 1672511400000, value: 33, category: "India" },
          ]),
          description:
            "It's important to ensure that the data being used is accurate, complete, and relevant to the information being presented. \n date is in milisecond and value is in number and category is important to differentiate the data for multi line or also single line.",
        },
      ],
    },
  },
  {
    heading: "What is setting?",
    summary: "Information about setting",
    description:
      "Chart settings refer to the configuration options that are available for customizing the appearance and behavior of a chart. These settings can include options for adjusting the chart's size and layout, specifying the data to be displayed, setting color schemes and themes, and defining how the chart should respond to user interactions or events.",
    table: {
      head: _head,
      body: [
        {
          key: "setting",
          datatype: "object",
          example: JSON.stringify({ xAxis: {}, yAxis: {}, series: {} }),
          description:
            "By adjusting these settings, developers can create charts that are tailored to their specific needs, whether that be a simple, static chart for displaying basic data, or a complex, interactive chart with advanced features and functionality.",
        },
      ],
    },
    information: [
      {
        heading: "xAxis",
        description:
          "The term xAxis refers to the horizontal axis in a two-dimensional coordinate system. In graph.",
        table: {
          head: _Innerhead,
          body: [
            {
              key: "timeUnit",
              datatype: "string",
              example: "day",
              optional: "optional",
              default: "day",
              options:
                '"millisecond", "second", "minute", "hour", "day", "week", "month", "year"',
              description:
                "The xaxis time unit refers to the unit of time that is used to represent data along the horizontal (x) axis in a time-based graph or chart. ",
            },
            {
              key: "dateFormat",
              datatype: "string",
              example: "MMM-DD",
              optional: "optional",
              default: "MMM-DD",
              options: '"MMM-DD","MM-DD","YYYY-MM", Write format as you want!',
              description:
                "The xaxis time unit refers to the unit of time that is used to represent data along the horizontal (x) axis in a time-based graph or chart. ",
            },
          ],
        },
      },
      {
        heading: "yAxis",
        description:
          "The yaxis is the vertical axis in a two-dimensional coordinate system. It is used to represent the dependent variable or output variable in a Cartesian coordinate plane. The y-axis is usually drawn vertically",
        table: {
          head: _Innerhead,
          body: [
            {
              key: "minValue",
              datatype: "number",
              example: "0",
              optional: "optional",
              default: "0",
              options: "any number that you want to start your yaxis",
              description:
                "y-axis min value refers to the minimum value or the lower bound of the vertical (y) axis in a graph or chart",
            },
            {
              key: "maxValue",
              datatype: "number",
              example: "100",
              optional: "optional",
              default: "max value in the data",
              options: "any number that you want to end your yaxis",
              description:
                "y-axis max value refers to the maximum value or the upper bound of the vertical (y) axis in a graph or chart.",
            },
          ],
        },
      },
      {
        heading: "series",
        description:
          "A series is used to represent a particular data set or category in a chart, and it typically consists of multiple data points that are plotted along a specific axis, such as the x-axis or the y-axis.",
        table: {
          head: _Innerhead,
          body: [
            {
              key: "color",
              datatype: "array",
              example: '["#339966]',
              optional: "optional",
              default: '["#000"]',
              options: "add multiple color for multi line",
              description:
                "The color in a line chart refers to the hue, saturation, and brightness of the lines used to connect data points.",
            },
            {
              key: "fills",
              datatype: "object",
              example: JSON.stringify({
                opacity: 0.2,
              }),
              optional: "optional",
              default: "-",
              options: "-",
              description:
                "Fills in the context of data visualization or charting refer to the areas enclosed by the lines or markers in a chart. Fills are used to visually represent the area between data points or data markers and the axis or other chart elements, such as lines, bars, or columns.",
            },
            {
              key: "stroke",
              datatype: "object",
              example: JSON.stringify({
                width: 3,
                dashed: true,
                dashedDistance: [10, 5],
              }),
              optional: "optional",
              default: "-",
              options: "-",
              description:
                "stroke typically refers to the outline or border around chart elements, such as lines, bars, columns, or data markers. ",
            },
          ],
        },
      },
      {
        heading: "scrollbarX",
        description:
          "In the context of charts or data visualizations, a scrollbarX could refer to a horizontal scrollbar that allows users to scroll or navigate through a large dataset horizontally within the chart's viewport. ",
        table: {
          head: _Innerhead,
          body: [
            {
              key: "scrollbarX",
              datatype: "boolean",
              example: "true",
              optional: "optional",
              default: "false",
              options: "true, false",
              description:
                "horizontal scrollbar that allows users to scroll or navigate through a large dataset horizontally within the chart's viewport.",
            },
          ],
        },
      },
    ],
  },
];
