const ElipseSvg = (props) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={9}
      cy={9}
      r={7.5}
      fill="#D5D5D5"
      stroke="#6C60FF"
      strokeWidth={3}
    />
  </svg>
);

export default ElipseSvg;
