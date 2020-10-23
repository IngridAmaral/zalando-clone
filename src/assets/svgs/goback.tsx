import React from 'react';

type TGoBack = {
  color?: string;
};

const GoBack = ({ color = '#fff' }: TGoBack) => (
  <svg id="icon_svg-go-back-white" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path
        fill={color}
        d="M21.008 11v2h-13l4.418 4.626-1.4 1.4-7.026-7L11.026 5l1.4 1.4L8.008 11z"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default GoBack;
