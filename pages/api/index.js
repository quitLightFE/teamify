import { LineChartData } from "@/components/data/dataLineChart";
import { datainfo } from "@/components/data/ProjectDeliveriesData";
import { dataChart } from "@/components/data/TeamsStrengthData";

export default function handler(req, res) {
  return res.status(200).json({ datainfo, dataChart, LineChartData });
}
