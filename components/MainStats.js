import React from "react";
import { BarChart } from "@mui/x-charts";
import { useTheme } from "@emotion/react";

export default function MainStats({ data }) {
  const theme = useTheme();

  return (
    data.length && (
      <BarChart
        sx={{
          width: "100%",
          aspectRatio: 308 / 144,
          height: "auto",
          ml: -4,
        }}
        dataset={[{ id: 1 }]}
        xAxis={[
          {
            id: "bar",
            data: data.map((d) => d.key),
            scaleType: "band",
            disableLine: true,
            disableTicks: true,
          },
        ]}
        series={[
          {
            data: [1, 5, 3, 10],
            colorGetter: (BarData) =>
              `${theme.palette[data[BarData.dataIndex].color].main}`,
            barLabel: "value",
            barLabelPlacement: "outside",
          },
        ]}
        borderRadius={8}
        yAxis={[
          {
            disableLine: true,
            disableTicks: true,
            max: 13,
            tickLabelStyle: { display: "none" },
          },
        ]}
      />
    )
  );
}
