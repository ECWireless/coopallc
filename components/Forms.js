import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

export const Form = styled.form`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #1062ad;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    border: 1px solid transparent;
  }

  ${props => css`
    margin-top: ${props.marginTop * 0.4}px;
    margin-bottom: ${props.marginBottom * 0.4}px;
    margin-left: ${props.marginLeft * 0.4}px;
    padding-left: ${props.paddingLeft * 0.4}px;
    padding-right: ${props.paddingRight * 0.4}px;
    padding-top: ${props.paddingTop * 0.4}px;
    padding-bottom: ${props.paddingBottom * 0.4}px;

    ${respondTo.xs`
            margin-top: ${props.marginTop * 0.45}px;
            margin-bottom: ${props.marginBottom * 0.45}px;
            margin-left: ${props.marginLeft * 0.45}px;
            padding-left: ${props.paddingLeft * 0.45}px;
            padding-right: ${props.paddingRight * 0.45}px;
            padding-top: ${props.paddingTop * 0.45}px;
            padding-bottom: ${props.paddingBottom * 0.45}px;
        `}

    ${respondTo.sm`
            margin-top: ${props.marginTop * 0.7}px;
            margin-bottom: ${props.marginBottom * 0.7}px;
            margin-left: ${props.marginLeft * 0.7}px;
            padding-left: ${props.paddingLeft * 0.7}px;
            padding-right: ${props.paddingRight * 0.7}px;
            padding-top: ${props.paddingTop * 0.7}px;
            padding-bottom: ${props.paddingBottom * 0.7}px;
        `}

        ${respondTo.md`
            margin-top: ${props.marginTop}px;
            margin-bottom: ${props.marginBottom}px;
            margin-left: ${props.marginLeft}px;
            padding-left: ${props.paddingLeft}px;
            padding-right: ${props.paddingRight}px;
            padding-top: ${props.paddingTop}px;
            padding-bottom: ${props.paddingBottom}px;
        `}

        ${respondTo.lg`
        `}
  `}
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #1062ad;
  width: 75%;
  margin: 0 auto;

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
  `};

  ${props =>
    css`
      margin-top: ${props.marginTop * 0.4}px;
      margin-bottom: ${props.marginBottom * 0.4}px;
      margin-left: ${props.marginLeft * 0.4}px;
      padding-left: ${props.paddingLeft * 0.4}px;
      padding-right: ${props.paddingRight * 0.4}px;

      ${respondTo.xs`
                margin-top: ${props.marginTop * 0.45}px;
                margin-bottom: ${props.marginBottom * 0.45}px;
                margin-left: ${props.marginLeft * 0.45}px;
                padding-left: ${props.paddingLeft * 0.45}px;
                padding-right: ${props.paddingRight * 0.45}px;
            `}

      ${respondTo.sm`
                margin-top: ${props.marginTop * 0.7}px;
                margin-bottom: ${props.marginBottom * 0.7}px;
                margin-left: ${props.marginLeft * 0.7}px;
                padding-left: ${props.paddingLeft * 0.7}px;
                padding-right: ${props.paddingRight * 0.7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;

export const Input = styled.input`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;
  width: 75%;
  height: 60px;
  margin: 0 auto;
  padding-left: 15px;
  background: #2a2a2a;
  border: none;
  border-radius: 5px;
  border-left: 5px solid transparent;
  outline: none;
  transition: all 0.5s ease;

  &:hover {
    background: #000;
  }

  &:active {
    border-left: 5px solid #faf30e;
    background: #000;
  }

  &:focus {
    border-left: 5px solid #faf30e;
    background: #000;
  }

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
  `};

  ${props =>
    css`
      margin-top: ${props.marginTop * 0.4}px;
      margin-bottom: ${props.marginBottom * 0.4}px;
      margin-left: ${props.marginLeft * 0.4}px;
      padding-left: ${props.paddingLeft * 0.4}px;
      padding-right: ${props.paddingRight * 0.4}px;

      ${respondTo.xs`
                margin-top: ${props.marginTop * 0.45}px;
                margin-bottom: ${props.marginBottom * 0.45}px;
                margin-left: ${props.marginLeft * 0.45}px;
                padding-left: ${props.paddingLeft * 0.45}px;
                padding-right: ${props.paddingRight * 0.45}px;
            `}

      ${respondTo.sm`
                margin-top: ${props.marginTop * 0.7}px;
                margin-bottom: ${props.marginBottom * 0.7}px;
                margin-left: ${props.marginLeft * 0.7}px;
                padding-left: ${props.paddingLeft * 0.7}px;
                padding-right: ${props.paddingRight * 0.7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;

export const Select = styled.select`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;
  width: 77%;
  height: 60px;
  margin: 0 auto;
  padding: 0 15px;
  background: #2a2a2a;
  border: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.5s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    background: #000;
  }

  &:active {
    background: #000;
  }

  &:focus {
    background: #000;
  }

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
  `};

  ${props =>
    css`
      margin-top: ${props.marginTop * 0.4}px;
      margin-bottom: ${props.marginBottom * 0.4}px;
      margin-left: ${props.marginLeft * 0.4}px;
      padding-left: ${props.paddingLeft * 0.4}px;
      padding-right: ${props.paddingRight * 0.4}px;

      ${respondTo.xs`
                margin-top: ${props.marginTop * 0.45}px;
                margin-bottom: ${props.marginBottom * 0.45}px;
                margin-left: ${props.marginLeft * 0.45}px;
                padding-left: ${props.paddingLeft * 0.45}px;
                padding-right: ${props.paddingRight * 0.45}px;
            `}

      ${respondTo.sm`
                margin-top: ${props.marginTop * 0.7}px;
                margin-bottom: ${props.marginBottom * 0.7}px;
                margin-left: ${props.marginLeft * 0.7}px;
                padding-left: ${props.paddingLeft * 0.7}px;
                padding-right: ${props.paddingRight * 0.7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #fff;
  width: 75%;
  height: 200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-top: 15px;
  background: #2a2a2a;
  border: none;
  border-radius: 5px;
  border-left: 5px solid transparent;
  outline: none;
  transition: all 0.5s ease;

  &:hover {
    background: #000;
  }

  &:active {
    border-left: 5px solid #faf30e;
    background: #000;
  }

  &:focus {
    border-left: 5px solid #faf30e;
    background: #000;
  }

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
    margin-top: ${props.marginTop * 0.4}px;
    margin-bottom: ${props.marginBottom * 0.4}px;
    margin-left: ${props.marginLeft * 0.4}px;
    padding-left: ${props.paddingLeft * 0.4}px;
    padding-right: ${props.paddingRight * 0.4}px;

    ${respondTo.xs`
            margin-top: ${props.marginTop * 0.45}px;
            margin-bottom: ${props.marginBottom * 0.45}px;
            margin-left: ${props.marginLeft * 0.45}px;
            padding-left: ${props.paddingLeft * 0.45}px;
            padding-right: ${props.paddingRight * 0.45}px;
        `}

    ${respondTo.sm`
            margin-top: ${props.marginTop * 0.7}px;
            margin-bottom: ${props.marginBottom * 0.7}px;
            margin-left: ${props.marginLeft * 0.7}px;
            padding-left: ${props.paddingLeft * 0.7}px;
            padding-right: ${props.paddingRight * 0.7}px;
        `}

        ${respondTo.md`
            margin-top: ${props.marginTop}px;
            margin-bottom: ${props.marginBottom}px;
            margin-left: ${props.marginLeft}px;
            padding-left: ${props.paddingLeft}px;
            padding-right: ${props.paddingRight}px;
        `}

        ${respondTo.lg`
        `}
  `};
`;
