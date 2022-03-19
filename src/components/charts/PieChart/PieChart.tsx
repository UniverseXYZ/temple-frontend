import React, { FC, useState } from 'react';
import {
  ResponsiveContainer,
  PieChart as PieRechart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

export const PieChart: FC = (props) => {
  //
  const {} = props;

  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieRechart width={300} height={300}>
        <Pie
          activeIndex={activeIndex}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          //innerRadius={80}
          //outerRadius={60}
          fill="#82ca9d"
          paddingAngle={5}
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="0"
            />
          ))}
        </Pie>
        <Tooltip />
      </PieRechart>
    </ResponsiveContainer>
  );
};
