
const TargetingSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.033 15a4.295 4.295 0 0 1 0-6.072m6.004 0a4.295 4.295 0 0 1 0 6.071"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <circle
      cx={12}
      cy={11.999}
      r={8.25}
      transform="rotate(-90 12 11.999)"
      stroke="#333"
      strokeWidth={1.5}
    />
    <path
      d="M2 11.999h5.5m14.5 0h-5.5m-4.5-10v5m0 15v-5"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default TargetingSvg;