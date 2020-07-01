import React from 'react'
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: 'red',
    background: 'red',
  },
};

export const MyContext = React.createContext(
  themes.dark // 默认值
);