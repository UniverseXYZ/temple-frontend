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
import { tidy, mutateWithSummary, roll, mean } from '@tidyjs/tidy'

import cn from 'classnames';
import styles from './.module.sass';

export const LineChart = (props: any) => {
  //
  const {period, colHistory} = props;
  console.log("line chart:", period, colHistory)


  let data = colHistory
    .map((d: any) => ({timestamp: new Date(d.timestamp*1000), price: d.floor_sell_value}))
    .sort((a: any, b: any) => a.timestamp - b.timestamp);

   let ma = 30;
   if(period == 'last-30-days'){
      ma = 1;
   } else if (period == 'last-90-days'){
      ma = 5;
   }
   
   if(data.length < 60) {
      ma = 3;
    }

    data = tidy(
    data, 
    mutateWithSummary({
      movingAvg: roll(ma, mean('price')),
    })
  )
  data = data.filter((d: any) => (d.movingAvg));
  if(period == 'last-30-days'){
    data = data.slice(-30)
  } else if (period == 'last-90-days'){
    data = data.slice(-90)
  }
  
  console.log(data, "data")
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
