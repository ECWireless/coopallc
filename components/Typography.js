import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

export const H1 = styled.h1`
  font-size: 30px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #faf30e;

  ${respondTo.xs`
        font-size: 40px;
    `}

  ${respondTo.sm`
        font-size: 45px;
    `}

    ${respondTo.md`
        font-size: 55px;
    `}

    ${respondTo.lg`
        font-size: 65px;
	`}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props => css`
    text-align: ${props.align};
    color: ${props.color};
  `};
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #faf30e;

  ${respondTo.xs`
        font-size: 26px;
    `}

  ${respondTo.sm`
        font-size: 34px;
    `}

    ${respondTo.md`
        font-size: 42px;
    `}

    ${respondTo.lg`
        font-size: 50px;
	`}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props => css`
    text-align: ${props.align};
  `};
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #fff;

  ${respondTo.xs`
        font-size: 22px;
    `}

  ${respondTo.sm`
        font-size: 30px;
    `}

    ${respondTo.md`
        font-size: 38px;
    `}

    ${respondTo.lg`
        font-size: 45px;
	`}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props => css`
    text-align: ${props.align};
  `};
`;

export const H4 = styled.h3`
  font-size: 22px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  color: #fff;

  ${respondTo.xs`
        font-size: 24px;
    `}

  ${respondTo.sm`
        font-size: 28px;
    `}

    ${respondTo.md`
        font-size: 34px;
    `}

    ${respondTo.lg`
        font-size: 38px;
	`}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props => css`
    text-align: ${props.align};
  `};
`;

export const P1 = styled.p`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;

  ${respondTo.xs`
        font-size: 22px;
    `}

  ${respondTo.sm`
        font-weight: 400;
        font-size: 30px;
    `}

    ${respondTo.md`
        font-size: 38px;
    `}

    ${respondTo.lg`
        font-size: 46px;
    `}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props => css`
    text-align: ${props.align};
    color: ${props.color};
  `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props =>
    props.color === 'blue' &&
    css`
      color: #1062ad;
    `};
`;

export const P2 = styled.p`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;

  ${respondTo.sm`
    font-weight: 400;
        font-size: 18px;
    `}

  ${respondTo.md`
        font-size: 20px;
    `}

    ${respondTo.lg`
        font-size: 24px;
    `}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props => css`
    text-align: ${props.align};
    color: ${props.color};
  `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props =>
    props.color === 'blue' &&
    css`
      color: #1062ad;
    `};
`;

export const P3 = styled.p`
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;

  ${respondTo.sm`
        font-weight: 400;
        font-size: 16px;
    `}

  ${respondTo.md`
        font-size: 18px;
    `}

    ${respondTo.lg`
        font-size: 20px;
    `}

    ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${props =>
    props.bold &&
    css`
      font-weight: bold !important;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};

  ${props =>
    props.color === 'blue' &&
    css`
      color: #1062ad;
    `};
`;
