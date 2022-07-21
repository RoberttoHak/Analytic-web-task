import styles from "./index.module.scss";
import ElipseSvg from "../../../assets/SVGComponents/ElipseSvg";
import EmptyImageSvg from "../../../assets/SVGComponents/EmptyImageSvg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan 15",
    uv: 100,
    foo: 50,
  },
  {
    name: "Jan 16",
    uv: 200,
    foo: 150,
  },
  {
    name: "Jan 17",
    uv: 100,
    foo: 50,
  },
  {
    name: "Jan 18",
    uv: 400,
    foo: 350,
  },
  {
    name: "Jan 19",
    uv: 100,
    foo: 50,
  },
  {
    name: "Jan 20",
    uv: 500,
    foo: 450,
  },
  {
    name: "Jan 21",
    uv: 100,
    foo: 50,
  },
  {
    name: "Jan 22",
    uv: 300,
    foo: 250,
  },
  {
    name: "Jan 23",
    uv: 200,
    foo: 150,
  },
  {
    name: "Jan 24",
    uv: 300,
    foo: 250,
  },
  {
    name: "Jan 25",
    uv: 400,
    foo: 350,
  },
  {
    name: "Jan 26",
    uv: 100,
    foo: 50,
  },
];

const CoversionsAndDataPeriodBlock = () => {
  const Custooltip = ({ active, payload }) => {
    return (
      <>
        {payload.map(
          (ele) =>
            ele.dataKey === "uv" && (
              <div className={styles.tooltipWrapper} key={ele.name}>
                <span>{ele.payload.name}</span>
                <span>
                  {ele.name} : {ele.value}
                </span>
              </div>
            )
        )}
      </>
    );
  };

  return (
    <>
      <div className={styles.DraggableTopContent}>
        <div className={styles.draggableTopLevelContainer}>
          <div className={styles.diagramContainer}>
            <div className={styles.diagramTitleContainer}>
              <h3>Coversation Over time</h3>
              <div className={styles.conversionsContainer}>
                <ElipseSvg />
                <span>Conversions(Cumulative)</span>
              </div>
            </div>
            <LineChart
              width={960}
              height={260}
              data={data}
              margin={{
                top: 5,
                right: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid />
              <XAxis
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  fontWeight: 700,
                  color: "#6D6B7A",
                }}
                dataKey="name"
                strokeWidth="0"
              />
              <YAxis
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  fontWeight: 700,
                  color: "#6D6B7A",
                }}
                strokeWidth="0"
              />
              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  fontWeight: 700,
                  color: "#6D6B7A",
                }}
                content={Custooltip}
              />
              <Line
                name="Coversions (Comulative)"
                dot={false}
                type="monotone"
                dataKey="uv"
                stroke="#6C60FF"
                strokeWidth="4"
                activeDot={false}
              />
              <Line
                style={{
                  filter: "blur(2px)",
                }}
                activeDot={false}
                dot={false}
                type="monotone"
                dataKey="foo"
                stroke="#D5D5D5"
                strokeWidth="10"
              />
            </LineChart>
          </div>
          <div className={styles.dataPeriodContainer}>
            <h3>Data Period</h3>
            <h1>
              15-06-2022 <span> to </span> 14-07-2022
            </h1>
            <span>Duration 30 days</span>
            <EmptyImageSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoversionsAndDataPeriodBlock;
