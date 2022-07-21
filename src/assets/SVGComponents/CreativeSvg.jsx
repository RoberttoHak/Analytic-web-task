import * as React from "react";

const CreativeSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.972 15.217C18.809 13.857 20 11.532 20 9.173 20 5.21 16.642 2 12.5 2 8.358 2 5 5.211 5 9.173c0 2.359 1.19 4.685 3.028 6.044.426.315.722.793.722 1.323v.056c0 1.035.84 1.875 1.875 1.875h3.75c1.036 0 1.875-.84 1.875-1.875v-.056c0-.53.296-1.008.722-1.323Z"
      stroke="#333"
      strokeWidth={1.5}
    />
    <path
      d="M10.357 22h4.286M10.25 9.486l2.25 2.995m2.25-2.995-2.25 2.995m0 0v5.99"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default CreativeSvg;
