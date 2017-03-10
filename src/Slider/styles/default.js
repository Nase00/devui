/*
Based on:
 http://codepen.io/thebabydino/pen/NPYBJQ
 http://codepen.io/thebabydino/pen/zxRzPw
 http://codepen.io/thebabydino/pen/dPqrrY
 http://codepen.io/thebabydino/pen/YPOPxr
*/

import { css } from 'styled-components';
import { prefixSelectors } from '../../utils/autoPrefix';

export const style = ({ theme, percent, disabled }) => css`
  display: block;
  width: 100%;
  position: relative;

  label {
    position: absolute;
    display: block;
    font-weight: 600;
    padding: 0 10px;
    top: 0.1em;
    width: 100%;
    text-shadow: 3px 3px ${theme.base01};
  }

  input {
    opacity: ${disabled ? '0.5' : '1'};
    outline: none;
    margin: 0;
    box-sizing: border-box;
    display: block;
    appearance: none;
    border-top: solid 1.5em transparent;
    border-bottom: solid 1.5em transparent;
    padding: 0.5em;
    width: 100%;
    height: 4.5em;
    border-radius: 0.75em/2.25em;
    font-size: 1em;
    cursor: pointer;
    background: linear-gradient(${theme.base02}, ${theme.base00}) padding-box,
      50% 50% border-box,
      linear-gradient(90deg, ${theme.base02} 0.015em, ${
      theme.light ? 'rgba(231, 231, 231, 0)' : 'rgba(10, 10, 10, 0)'
      } 0.125em) repeat-x 0.5em 50% border-box;
    background-size: 100% 100%, 100% 4.5em, 1.25em 65%;
  }

  ${prefixSelectors('input', ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'], `{
    position: relative;
    height: 0.8em;
    border-radius: 0.5em;
    box-shadow: 0 0 .125em ${theme.base04};
    background: linear-gradient(${theme.base01}, ${theme.base02} 40%, ${theme.base01})
      no-repeat ${theme.base00};
    background-size: ${percent}% 100%;
  }`)}

 ${prefixSelectors('input', ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'], `{
    position: relative;
    appearance: none;
    cursor: ew-resize;
    margin-top: -0.36em;
    background: ${theme.light ? theme.base00 : theme.base06};
    border: solid 1px ${theme.base03};
    box-shadow: 0 1px .125em ${theme.base03};
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    cursor: pointer;
  }`)}

 ${prefixSelectors('input:focus:not(:active)',
  ['webkit-slider-thumb', 'moz-range-thumb', 'ms-thumb'],
  `{
    box-shadow: 0 0 1px 2px ${theme.base0D};
  }`)}

  input::-moz-focus-outer {
    border: 0;
  }
`;
