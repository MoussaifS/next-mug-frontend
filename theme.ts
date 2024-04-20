'use client';

import { createTheme , MantineColorsTuple} from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffeee8',
  '#e5d3d0',
  '#ccb9b3',
  '#b59e97',
  '#9e827b',
  '#846861',
  '#68514a',
  '#4c3935',
  '#2f221d',
  '#190802',
];



export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    myColor,
  },
});
