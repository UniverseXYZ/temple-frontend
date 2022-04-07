import React, { FC } from 'react';
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

export const LineChart: FC = (props) => {
  //
  const {} = props;

  const data = [
    {
      date: '01.01.2022',
      month: 'Jan',
      price: 41,
      volume: 130494.39,
    },
    {
      date: '02.01.2022',
      month: 'Jan',
      price: 50,
      volume: 5000,
    },
    {
      date: '03.01.2022',
      month: 'Jan',
      price: 60,
      volume: 2400,
    },
    {
      date: '04.01.2022',
      month: 'Jan',
      price: 70,
      volume: 5000,
    },
  ];

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
          dataKey="month"
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
          dataKey="price"
          stroke="#94EB33"
          dot={false}
          strokeWidth={2}
          activeDot={<Dot />}
          //legendType="square"
        />
        <Line
          type="monotone"
          dataKey="volume"
          stroke="#615FE3"
          dot={false}
          strokeWidth={2}
          activeDot={<Dot />}
          //legendType="square"
        />
      </RechartLineChart>
    </ResponsiveContainer>
  );
};
