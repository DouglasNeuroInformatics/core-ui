import { Legend, Tooltip } from 'recharts';

import { ChartContainer } from './ChartContainer.js';
import { ChartLegendContent } from './ChartLegendContent.js';
import { ChartStyle } from './ChartStyle.js';
import { ChartTooltipContent } from './ChartTooltipContent.js';

export const Chart = Object.assign(ChartContainer, {
  Legend,
  LegendContent: ChartLegendContent,
  Style: ChartStyle,
  Tooltip,
  TooltipContent: ChartTooltipContent
});

export * from './types.js';
