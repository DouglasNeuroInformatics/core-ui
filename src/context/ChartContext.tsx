import { createContext } from 'react';

import type { ChartConfig } from '../components/Chart/Chart.js';

type ChartContextProps = {
  config: ChartConfig;
};

export const ChartContext = createContext<ChartContextProps | null>(null);
