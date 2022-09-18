import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-secondary: #313037;
    --color-primary-light: #3b3b3b;
    --color-primary: #f8f8f8;
    --color-white: #afb2b666;
    --color-gray: #e7e7e7;
    --color-light: #323232;
    --color-red: #fc857f;
    --color-blue: #d7e4fd;
    --color-green: #caeff0;
    --color-orange: #fee9e2;
    --color-purple: #e2afde;
    --color-black: #eeeeee;
    --color-background: #1a1a1a;
  }
  html[theme="light"] {
    --color-primary: #313037;
    --color-primary-light: #5b5a62;
    --color-secondary: #a8a8a8;
    --color-white: #000000;
    --color-gray: #e7e7e7;
    --color-light: #f7f7f7;
    --color-red: #fc857f;
    --color-blue: #d7e4fd;
    --color-green: #caeff0;
    --color-orange: #fee9e2;
    --color-purple: #f4eefd;
    --color-black: #000000;
    --color-background: #ffffff;
  }
`;
