import { css } from 'styled-components';
import { Color } from "./colors";

export const H1 = css`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;

  color: ${Color.PRIMARY};

  @media(max-width: 576px) {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const H2 = css`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  color: ${Color.PRIMARY};

  @media(max-width: 576px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const H3 = css`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  color: ${Color.PRIMARY};
`;

export const S1 = css`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;

  color: ${Color.PRIMARY};
`;

export const BODY = css`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  color: ${Color.PRIMARY};
`;

export const BODY2 = css`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.PRIMARY};
`;