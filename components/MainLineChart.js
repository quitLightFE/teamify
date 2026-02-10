import { LineChart } from "@mui/x-charts";

export default function MainLineChart({ data }) {
  return (
    data && (
      <LineChart
        margin={{ left: -10 }}
        xAxis={[
          {
            data: data?.dataset,
            scaleType: "point",
            disableLine: true,
            disableTicks: true,
          },
        ]}
        sx={{
          "& .MuiChartsLegend-root": {
            ml: "auto",
          },
        }}
        slotProps={{
          legend: {
            position: "right",
            direction: "row",
          },
        }}
        series={data?.series.map((item) => ({
          data: item.data,
          curve: "bumpX",
          color: item.color,
          showMark: false,
          label: "Achieved",
          labelMarkType: "circle",
        }))}
        height={300}
        yAxis={[{ max: 12, min: 0, disableTicks: true, disableLine: true }]}
        grid={{ horizontal: true }}
      />
    )
  );
}
