import React, { useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

import {
  ResponsiveContainer,
  PieChart as PieRechart,
  Pie,
  Cell,
  Tooltip as TooltipRechart,
  Legend as LegendRechart,
  Label as LabelRechart,
  Sector,
} from 'recharts';

import { Tooltip, Legend, Label } from './components';

import cn from 'classnames';
import styles from './PieChart.module.sass';

export const PieChart = (props) => {
  //
  const {} = props;

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const onPieEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  // const onLegendEnter = (index: number) => {
  //   setActiveIndex(index);
  // };

  // const onLegendLeave = () => {
  //   setActiveIndex(undefined);
  // };

  const data = {
    total: {
      valueETH: 2400,
      valueUSD: 2400,
      percent: 12.5,
    },
    values: [
      {
        name: 'Group A',
        value: 2400,
        dataKey: 0,
      },
      {
        name: 'Group B',
        value: 4567,
        dataKey: 1,
      },
      {
        name: 'Group C',
        value: 1398,
        dataKey: 2,
      },
      {
        name: 'Group D',
        value: 9800,
        dataKey: 3,
      },
      {
        name: 'Group E',
        value: 3908,
        dataKey: 4,
      },
      {
        name: 'Group F',
        value: 5800,
        dataKey: 5,
      },
    ],
  };

  const COLORS = [
    '#48F7D8',
    '#B33DC6',
    '#58D792',
    '#76FFFF',
    '#F36B9C',
    '#52ACFF',
    '#725CFA',
  ];

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;

    return (
      <g className={styles.Cell}>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius - 10}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div>
      <ResponsiveContainer height={310} width="100%" minWidth="0">
        <PieRechart className={cn(isDark && styles.Dark)}>
          <Pie
            className={styles.Pie}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data.values}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="95%"
            fill="#82ca9d"
            onMouseEnter={onPieEnter}
            onMouseLeave={() => setActiveIndex(undefined)}
          >
            {data.values.map((entry, index) => (
              <Cell
                className={styles.Cell}
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
            <LabelRechart content={<Label />} value="any" />
          </Pie>

          <TooltipRechart
            content={<Tooltip />}
            allowEscapeViewBox={{ x: true, y: true }}
            wrapperStyle={{ top: -100, left: -90 }}
            active={true}
          />

          <LegendRechart
            content={<Legend />}
            align="right"
            layout="vertical"
            wrapperStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '190px',
              height: '292px',
              marginRight: '10px',
              marginTop: '15px',
            }}
            //onLegendEnter={onLegendEnter}
            //onLegendLeave={onLegendLeave}
          />
        </PieRechart>
      </ResponsiveContainer>
    </div>
  );
};
