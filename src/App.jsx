import React from 'react'
import '@mantine/core/styles.css';
import { LineChart } from '@mantine/charts';
import { MantineProvider } from '@mantine/core';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];

const App = () => {
  return (
    <MantineProvider>
      <LineChart
        h={300}
        data={data}
        dataKey="name"
        withRightYAxis
        yAxisLabel="uv"
        rightYAxisLabel="pv"
        series={[
          { name: 'uv', color: 'pink.6' },
          { name: 'pv', color: 'cyan.6', yAxisId: 'right' },
        ]}
      />
    </MantineProvider>
  )
}

export default App