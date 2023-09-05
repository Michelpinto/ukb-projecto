import React from 'react';
import { createGlobalStyle } from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
}
html {
    font-size: 62.5%;

    @media (max-width: 700px) {
        font-size: 56.25%;
    }

}
body {
    font-family: system-ui;
    color: #1d1d1d;
}

a {
    color: inherit;
    text-decoration: none;
}

li {
    list-style: none;
}


`;

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
