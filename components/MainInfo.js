import { Box, Avatar } from "@mui/material";
import { gaugeClasses, GaugeContainer, GaugeValueArc } from "@mui/x-charts";

const data = [
  {
    color: "#6956E5",
    value: 50,
    angle: -100,
  },
  {
    color: "#FB896B",
    value: 60,
    angle: -30,
  },
  {
    color: "#F8C07F",
    value: 70,
    angle: 60,
  },
];

export default function RadialStats() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 240,
        height: 240,
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "transparent",
        },
      }}
    >
      {data.map(({ value, color, angle }, i) => (
        <MyGauges
          key={value + angle}
          idx={i}
          value={value}
          color={color}
          angle={angle}
        />
      ))}

      <Avatar
        src="/User 03C.svg"
        sx={{
          width: 64,
          height: 64,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
}

const MyGauges = ({ color, idx, value, angle }) => {
  const innerRadius = idx * 20 + 48;
  const outerRadius = innerRadius + 3;
  return (
    <GaugeContainer
      outerRadius={outerRadius}
      innerRadius={innerRadius}
      value={value}
      startAngle={angle}
      endAngle={angle + 360}
      sx={{ position: "absolute" }}
      cornerRadius={9}
    >
      <defs>
        <linearGradient id={`MyGauge${idx}`}>
          <stop offset="0%" stopColor={`${color}00`} stopOpacity={1} />
          <stop offset="100%" stopColor={`${color}`} stopOpacity={1} />
        </linearGradient>
      </defs>
      <GaugeValueArc
        sx={{
          position: "absolute",
          inset: 0,
          fill: `url(#MyGauge${idx})`,
        }}
      />
    </GaugeContainer>
  );
};
