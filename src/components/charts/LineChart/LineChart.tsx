import React from 'react';
//import { Box } from '@chakra-ui/react';

import {
  LineChart as RechartLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
} from 'recharts';

import { Tooltip, Dot } from './components';

import cn from 'classnames';
import styles from './.module.sass';

import { tidy, mutateWithSummary, roll, mean } from '@tidyjs/tidy'

export const LineChart = (props: any) => {
  //
  const { dailyStats } = props;

  let data = dailyStats
    .map(d => ({timestamp: new Date(d.timestamp*1000), price: d.floor_sell_value}))
    .sort((a, b) => a.timestamp - b.timestamp);
  
  data = tidy(
    data, 
    mutateWithSummary({
      movingAvg: roll(30, mean('price')),
    })
  )

  data = data.filter(d => (d.movingAvg));

  const TickStyle = {
    fontFamily: 'Space Grotesk',
    fontWeight: 600,
    fontSize: '11px',
    color: '#000',
    opacity: 0.6,
  };

  return (
    <ResponsiveContainer height={310} width="100%" minWidth="0">
      <RechartLineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis
          tick={TickStyle}
          axisLine={{ stroke: '#e6e6e6', strokeWidth: 0.5 }}
          dataKey="timestamp"
          tickLine={false}
          dy={6}
          //padding={{ left: 10 }}
        />
        <YAxis
          //dataKey="price"
          dx={-6}
          tick={TickStyle}
          axisLine={{ stroke: '#e6e6e6', strokeWidth: 0.5 }}
          tickLine={false}
        />

        <CartesianGrid vertical={false} stroke="#e6e6e6" strokeWidth={0.5} />

        <RechartTooltip
          content={<Tooltip />}
          cursor={{ stroke: '#666', strokeWidth: 0.5, strokeDasharray: 2 }}
        />

        <Line
          type="monotone"
          dataKey="movingAvg"
          stroke="#94EB33"
          dot={false}
          strokeWidth={2}
          activeDot={<Dot />}
          //legendType="square"
        />
        {/* <Line
          type="monotone"
          dataKey="volume"
          stroke="#615FE3"
          dot={false}
          strokeWidth={2}
          activeDot={<Dot />}
          //legendType="square"
        /> */}
      </RechartLineChart>
    </ResponsiveContainer>
  );
};
