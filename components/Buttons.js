import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

export const Button = styled.button`
  height: 50px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #1062ad;
  outline: none;
  color: #1062ad;
  border-radius: 5px;
  transition: all 0.5s ease;
  padding: 0 2rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    background-color: #1062ad;
    color: #fff;
  }

  ${respondTo.sm`
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
