import React, { FC, useState } from 'react';
import {
  ResponsiveContainer,
  PieChart as PieRechart,
  Pie,
  Cell,
  Tooltip as TooltipRechart,
  Legend,
  Label,
  Sector,
} from 'recharts';

import { Tooltip } from './components';

export const PieChart: FC = (props) => {
  //
  const {} = props;

  const [activeIndex, setActiveIndex] = useState<number | undefined>(1);

  console.log(activeIndex);

  const onPieEnter = (data: any, index: number) => {
    setActiveIndex(index);
  };

  const data = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 5800,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
    {
      name: 'Group G',
      value: 300,
    },
  ];

  const COLORS = [
    '#48F7D8',
    '#B33DC6',
    '#58D792',
    '#76FFFF',
    '#F36B9C',
    '#52ACFF',
    '#725CFA',
  ];

  const renderActiveShape = (props) => {
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
      <g className="test">
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

  const renderLegend = (props: any) => {
    //
    const { payload } = props;

    //console.log('payload', payload);

    return (
      <ul>
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`}>{entry.value}</li>
        ))}
      </ul>
    );
  };

  return (
    <div style={{ width: 545 }}>
      <ResponsiveContainer height={300} width="100%" minWidth="0">
        <PieRechart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
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
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              value={data[0].value}
              position="center"
              fill="grey"
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            />
          </Pie>
          <TooltipRechart
            content={<Tooltip />}
            allowEscapeViewBox={{ x: true, y: true }}
            //offset={50}
            wrapperStyle={{ top: 0, left: 0 }}
            active={true}
          />
          <Legend
            content={renderLegend}
            align="right"
            layout="vertical"
            width={200}
            wrapperStyle={{
              position: 'absolute',
              top: 0,
              right: 0,
              maxHeight: '100%',
              overflowY: 'auto',
            }}
          />
        </PieRechart>
      </ResponsiveContainer>
    </div>
  );
};
