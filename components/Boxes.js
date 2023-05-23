import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

export const Box = styled.div`
  ${props =>
    css`
      height: ${props.height};
      width: ${props.width * 0.3}px;
      margin-top: ${props.marginTop * 0.4}px;
      margin-bottom: ${props.marginBottom * 0.4}px;
      margin-left: ${props.marginLeft * 0.4}px;
      margin-right: ${props.marginRight * 0.4}px;
      padding-left: ${props.paddingLeft * 0.4}px;
      padding-right: ${props.paddingRight * 0.4}px;
      padding-top: ${props.paddingTop * 0.4}px;
      padding-bottom: ${props.paddingBottom * 0.4}px;

      ${respondTo.xs`
                width: ${props.width * 0.45}px;
                margin-top: ${props.marginTop * 0.45}px;
                margin-bottom: ${props.marginBottom * 0.45}px;
                margin-left: ${props.marginLeft * 0.45}px;
                margin-right: ${props.marginRight * 0.45}px;
                padding-left: ${props.paddingLeft * 0.45}px;
                padding-right: ${props.paddingRight * 0.45}px;
                padding-top: ${props.paddingTop * 0.45}px;
                padding-bottom: ${props.paddingBottom * 0.45}px;
            `}

      ${respondTo.sm`
                width: ${props.width * 0.7}px;
                margin-top: ${props.marginTop * 0.7}px;
                margin-bottom: ${props.marginBottom * 0.7}px;
                margin-left: ${props.marginLeft * 0.7}px;
                margin-right: ${props.marginRight * 0.7}px;
                padding-left: ${props.paddingLeft * 0.7}px;
                padding-right: ${props.paddingRight * 0.7}px;
                padding-top: ${props.paddingTop * 0.7}px;
                padding-bottom: ${props.paddingBottom * 0.7}px;
            `}

            ${respondTo.md`
                width: ${props.width}px;
                margin-top: ${props.marginTop}px;
                margin-bottom: ${props.marginBottom}px;
                margin-left: ${props.marginLeft}px;
                margin-right: ${props.marginRight}px;
                padding-left: ${props.paddingLeft}px;
                padding-right: ${props.paddingRight}px;
                padding-top: ${props.paddingTop}px;
                padding-bottom: ${props.paddingBottom}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;

export const Box2 = styled.div`
  ${props =>
    css`
      width: ${props.width * 0.6}px;
      margin-top: ${props.marginTop * 0.4}px;
      margin-left: ${props.marginLeft * 0.4}px;

      ${respondTo.xs`
                width: ${props.width * 0.7}px;
                margin-top: ${props.marginTop * 0.45}px;
                margin-left: ${props.marginLeft * 0.45}px;
            `}

      ${respondTo.sm`
                width: ${props.width}px;
                margin-top: ${props.marginTop * 0.7}px;
                margin-left: ${props.marginLeft * 0.7}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;

export const Box3 = styled.div`
  ${props =>
    css`
      width: ${props.width * 0.6}px;
      margin-top: ${props.marginTop * 0.7}px;
      margin-left: ${props.marginLeft * 0.7}px;

      ${respondTo.xs`
                width: ${props.width * 0.7}px;
                margin-top: ${props.marginTop * 0.8}px;
                margin-left: ${props.marginLeft * 0.8}px;
            `}

      ${respondTo.sm`
                width: ${props.width}px;
                margin-top: ${props.marginTop * 0.9}px;
                margin-left: ${props.marginLeft * 0.9}px;
            `}

            ${respondTo.md`
                margin-top: ${props.marginTop}px;
                margin-left: ${props.marginLeft}px;
            `}

            ${respondTo.lg`
            `}
    `};
`;
