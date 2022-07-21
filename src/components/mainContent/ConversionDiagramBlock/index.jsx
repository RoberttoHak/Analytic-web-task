import styles from "./index.module.scss";
import tableLogo from "./../../../assets/icons/googleIcon.png";

import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import ElipseBlueSvg from "../../../assets/SVGComponents/ElipseBlue";
import ElipseBlackAvg from "../../../assets/SVGComponents/ElipseBlack";
import YellowCircle from "../../../assets/SVGComponents/ElipseSvg";

const data = [
  { month: "Jan 15", value: 200, score: 200 },
  { month: "Jan 16", value: 500, score: 500 },
  { month: "Jan 17", value: 212, score: 212 },
  { month: "Jan 18", value: 900, score: 900 },
  { month: "Jan 19", value: 300, score: 300 },
  { month: "Jan 20", value: 543, score: 543 },
  { month: "Jan 15", value: 1000, score: 1000 },
  { month: "Jan 21", value: 99, score: 99 },
  { month: "Jan 22", value: 894, score: 894 },
  { month: "Jan 23", value: 0, score: 0 },
  { month: "Jan 24", value: 542, score: 542 },
  { month: "Jan 25", value: 123, score: 123 },
  { month: "Jan 26", value: 986, score: 986 },
];

const args = {
  chartData: data,
  gradientColor: "#b7d7fc",
  areaStrokeColor: "cyan",
  uniqueId: 2,
};

const ConversionDiagramBlock = () => {
  return (
    <div className={styles.DraggableTopContent}>
      <div className={styles.draggableTopLevelContainer}>
        <div className={styles.diagramContainer}>
          <div className={styles.diagramTitleContainer}>
            <div className={styles.diagramConversion}>
              <h3>Coversation Over time</h3>
              <p>
                <span>
                  <ElipseBlueSvg /> Impressions
                </span>
                <span>
                  <ElipseBlackAvg /> Clicks
                </span>
                <span>
                  <YellowCircle /> Conversions
                </span>
              </p>
            </div>
            <div className={styles.conversionsContainer}>
              <img src={tableLogo} alt="googleIcon" />
            </div>
          </div>
          <div>
            <ResponsiveContainer width={"100%"} height={300}>
              <AreaChart
                data={args.chartData}
                margin={{ top: 20, right: 10, left: -30, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id={"colorUv" + args.uniqueId}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="100%" stopColor={args.gradientColor} />
                  </linearGradient>
                </defs>
                <XAxis
                  style={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    fontWeight: 700,
                    color: "#6D6B7A",
                  }}
                  dataKey="month"
                />
                <YAxis
                  width={80}
                  tick={args.customizedTick}
                  interval={0}
                  domain={[1, 15]}
                  tickFormatter={args.tickFormatter}
                  style={{
                    fontSize: "14px",
                    fontFamily: "Arial",
                    fontWeight: 700,
                    color: "#6D6B7A",
                  }}
                />
                <CartesianGrid
                  vertical="false"
                  fill="#fff"
                  stroke="#e9e9e9"
                  horizontal="true"
                />
                <Tooltip />
                <Area
                  dot={false}
                  type="monotone"
                  dataKey="value"
                  stroke={args.gradientColor}
                  strokeWidth={2}
                  fillOpacity={0.9}
                  fill={"#b7d7fc"}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionDiagramBlock;
