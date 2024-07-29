import { useMemo } from "react";
import { line, max, range, scaleLinear, scalePoint } from "d3";
import useMeasure from "react-use-measure";
import data from "./data";
import styles from "./OTFBudgetChart.module.css";

type Datum = (typeof data)[number];

const yTickFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumSignificantDigits: 3,
}).format;
const yValueFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumSignificantDigits: 3,
}).format;

const xAccessor = (d: Datum) => d.x;
const yAccessor = (d: Datum) => d.y;

const marginTop = 24;
const marginRight = 16;
const marginBottom = 40;
const marginLeft = 72;
const dataCircleRadius = 8;
const dataTextOffset = dataCircleRadius + 8;
const xTickPadding = 16;
const yTickPadding = 16;

const OTFBudgetChart = () => {
  const [ref, { width, height }] = useMeasure();

  const xScale = useMemo(
    () =>
      scalePoint()
        .domain(data.map(xAccessor))
        .range([marginLeft, width - marginRight])
        .padding(0.25),
    [width]
  );

  const yScale = useMemo(
    () =>
      scaleLinear()
        .domain([0, (max(data, yAccessor) as number) * 1.05])
        .range([height - marginBottom, marginTop])
        .nice(),
    [height]
  );

  const lineGenerator = useMemo(
    () =>
      line<Datum>()
        .x((d) => xScale(xAccessor(d)) || 0)
        .y((d) => yScale(yAccessor(d))),
    [xScale, yScale]
  );

  const yMajorTicks = useMemo(
    () => range(0, yScale.domain()[1] + 1, 10000000),
    [yScale]
  );
  const yMinorTicks = useMemo(
    () =>
      range(0, yScale.domain()[1] + 1, 2000000).filter(
        (d) => !yMajorTicks.includes(d)
      ),
    [yMajorTicks, yScale]
  );

  return (
    <div ref={ref} className={styles.wrapper}>
      <svg
        className={styles.svg}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <g>
          {xScale.domain().map((d) => (
            <g
              key={d}
              transform={`translate(${xScale(d)},${height - marginBottom})`}
            >
              <line
                className={styles.minorTick}
                y1={-height + marginTop + marginBottom}
              />
              <text
                className={styles.tickText}
                y={xTickPadding}
                dy="0.71em"
                textAnchor="middle"
              >
                {d}
              </text>
            </g>
          ))}
        </g>
        <g>
          {yMinorTicks.map((d) => (
            <line
              key={d}
              className={styles.minorTick}
              x1={marginLeft}
              x2={width - marginRight}
              y1={yScale(d)}
              y2={yScale(d)}
            />
          ))}
        </g>
        <g>
          {yMajorTicks.map((d) => (
            <g key={d} transform={`translate(${marginLeft},${yScale(d)})`}>
              <line
                className={styles.majorTick}
                x2={width - marginLeft - marginRight}
              />
              <text
                className={styles.tickText}
                x={-yTickPadding}
                dy="0.32em"
                textAnchor="end"
              >
                {yTickFormat(d)}
              </text>
            </g>
          ))}
        </g>
        <line
          className={styles.zeroTick}
          x1={marginLeft}
          x2={width - marginRight}
          y1={yScale(0)}
          y2={yScale(0)}
        />
        <path className={styles.linePath} d={lineGenerator(data) || ""} />
        <g>
          {data.map((d) => (
            <g
              key={xAccessor(d)}
              transform={`translate(${xScale(xAccessor(d))},${yScale(
                yAccessor(d)
              )})`}
            >
              <circle className={styles.dataCircle} r={dataCircleRadius} />
              <text
                className={styles.dataText}
                y={-dataTextOffset}
                textAnchor="middle"
              >
                {yValueFormat(yAccessor(d))}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default OTFBudgetChart;
