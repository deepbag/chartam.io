const _head = [
  { label: "Key", width: "50px" },
  { label: "Data Type", width: "100px" },
  { label: "Example" },
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
  },
];
