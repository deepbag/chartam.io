export interface ColumnWithRolatedLabelProps {
  chartId: string;
  width: number | string;
  height: number | string;
  data: { category: string; value: number }[];
  setting?: {
    xAxis?: {
      label?: {
        rotation: number;
        paddingRight: number | string;
      };
    };
    yAxis?: {
      minValue?: number;
      maxValue?: number;
    };
    columnSeries?: {
      barcolor?: string;
      tooltipText?: string;
    };
  };
}
