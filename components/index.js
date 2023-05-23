import styled, { css } from 'styled-components';
import respondTo from './Breakpoints';

export const Background1 = styled.div`
  ${props => css`
    background: #fff;
    width: 100%;
    height: 2850px;

    ${respondTo.xs`
            height: 3300px;
        `}

    ${respondTo.sm`
            height: 4000px;
        `}

        ${respondTo.md`
            height: 2400px;
        `}

        ${respondTo.lg`
            height: 2700px;
        `}
  `};
`;

export const Background2 = styled.div`
  ${props => css`
    background: #fff;
    width: 100%;
    height: 1400px;

    ${respondTo.xs`
            height: 1500px;
        `}

    ${respondTo.sm`
            height: 2000px;
        `}

        ${respondTo.md`
            height: 2200px;
        `}

        ${respondTo.lg`
            height: 2200px;
        `}
  `};
`;

export const Card = styled.div`
  ${props => css`
    width: ${props.width}%;
    height: ${props.height}px;
    padding-top: ${props.paddingTop * 0.4}px;
    padding-bottom: ${props.paddingBottom * 0.4}px;
    background: linear-gradient(to top left, #5891c5, #094c89);
    border-radius: 15px;
    margin: 0 auto;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

    ${respondTo.xs`
            padding-top: ${props.paddingTop * 0.4}px;
            padding-bottom: ${props.paddingBottom * 0.4}px;
        `}

    ${respondTo.sm`
            padding-top: ${props.paddingTop * 0.5}px;
            padding-bottom: ${props.paddingBottom * 0.5}px;
        `}

        ${respondTo.md`
        `}

        ${respondTo.lg`
            padding-top: ${props.paddingTop}px;
            padding-bottom: ${props.paddingBottom}px;
        `}
  `};
`;

export const Img = styled.img`
  width: 250px;
  height: 200px;

  ${respondTo.xs`
        width: 350px;
        height: 250px;
    `}

  ${respondTo.lg`
        width: 450px;
        height: 370px;
	`}
`;

export const Line = styled.div`
  ${props => css`
    width: ${props.width * 0.6}px;
    height: ${props.height * 0.6}px;
    margin: 0 auto;

    ${respondTo.xs`
            height: ${props.height}px;
            width: ${props.width * 0.6}px;
        `}

    ${respondTo.sm`
            width: ${props.width * 0.8}px;
        `}

        ${respondTo.md`
            width: ${props.width}px;
        `}

        ${respondTo.lg`
        `}
  `};

  ${props =>
    props.color === 'yellow' &&
    css`
      background: #faf30e;
    `};

  ${props =>
    props.color === 'blue' &&
    css`
      background: #1062ad;
    `};

  ${props =>
    props.color === 'white' &&
    css`
      background: #fff;
    `};
`;

export const CustomLink = styled.a`
  display: inline-block;
  text-decoration: none;
  transition: color 0.3s ease;

  ${props => css`
    width: ${props.width * 0.7}px;
    height: ${props.height * 0.7}px;
    color: ${props.color};

    &:hover {
      color: ${props.hover};
    }

    ${respondTo.xs`
            width: ${props.width * 0.9}px;
            height: ${props.height * 0.9}px;
        `}

    ${respondTo.sm`
            width: ${props.width}px;
            height: ${props.height}px;
        `}

        ${respondTo.md`
            width: ${props.width * 0.9}px;
            height: ${props.height * 0.9}px;
        `}

        ${respondTo.lg`
            width: ${props.width}px;
            height: ${props.height}px;
        `}
  `};

  ${props =>
    props.color === 'yellow' &&
    css`
      color: #faf30e;
    `}
`;

export const Showcase = styled.div`
  width: 100%;
  height: 100%;
  background: lightblue;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  background-position: center;
  background-size: cover;
  border: 1px #1062ad solid;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
    border: 1px transparent solid;
  }
`;

export const Transform = styled.div`
  ${props => css`
    transform: translateX(${props.x * 0.3}px);
    transform: translateY(${props.y * 0.3}px);

    ${respondTo.xs`
            transform: translateX(${props.x * 0.4}px);
            transform: translateY(${props.y * 0.4}px);
        `}

    ${respondTo.sm`
            transform: translateX(${props.x * 0.7}px);
            transform: translateY(${props.y * 0.7}px);
        `}

        ${respondTo.md`
            transform: translateX(${props.x}px);
            transform: translateY(${props.y}px);
        `}

        ${respondTo.lg`
        `}
  `}
`;
