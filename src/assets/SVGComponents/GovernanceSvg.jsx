const GovernanceSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={4.928}
      y={4.928}
      width={14.644}
      height={14.644}
      rx={7.322}
      stroke="#333"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <path
      d="M12.25 2v20.5M22.5 12.25H2m18.098-7.512-2.467 2.13M4.401 20.436 6.87 17.63m0-10.76L4.401 4.738M20.098 19.93 17.63 17.8"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default GovernanceSvg;
