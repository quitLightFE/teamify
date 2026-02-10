import MainStats from "./MainStats";
import { Box, Grid, Paper, Typography } from "@mui/material";
import MainInfo from "./MainInfo";
import MainLineChart from "./MainLineChart";
import RightSide from "./RightSide";
import Notifications from "./Notifications";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Dashboard({ data }) {
  // const [datas, setData] = useState({});
  // useEffect(() => {
  //   getTeamsData()
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Grid container mt={4} rowGap={[3, 4, 5]}>
      <Grid size={{ xs: 12, md: 6, lg: 4 }} p={1}>
        <Box
          border={"1px solid #E6E8EC"}
          borderRadius={2.5}
          p={[1, 2, 3]}
          height={"100%"}
        >
          <Typography variant="h6" fontWeight={700}>
            Teams Strength
          </Typography>
          <MainStats data={data?.dataChart || []} />
          <Grid container>
            {data?.dataChart?.map(({ key, label, color }) => (
              <Grid
                size={{ xs: 12, sm: 6 }}
                display={"flex"}
                alignItems={"center"}
                py={2}
                gap={1.5}
                key={label}
                height={"100%"}
              >
                <Box
                  bgcolor={`${color}.main`}
                  py={0.5}
                  px={1.1}
                  borderRadius={1}
                  color={"white"}
                >
                  {key}
                </Box>
                <Typography color="textSecondary">{label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 4 }} p={1}>
        <Box
          height={"100%"}
          border={"1px solid #E6E8EC"}
          borderRadius={2.5}
          p={[1, 2, 3]}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h6" fontWeight={700}>
              Employees
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              variant="caption"
              color="textSecondary"
            >
              Aug 25-Sept 25 <KeyboardArrowDown fontSize="small" />
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
            <Box display={"flex"} flexDirection={{ xs: "row", md: "column" }}>
              {data?.datainfo?.map(({ color, text, value }) => (
                <Box mb={[1, 2]} key={text}>
                  <Box display={"flex"} alignItems={"center"} mb={1} gap={1}>
                    <Box
                      sx={{
                        borderRadius: "50%",
                        width: 10,
                        height: 10,
                        bgcolor: `${color}.main`,
                      }}
                    />
                    <Typography color="textSecondary">{text}</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={700}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
            <MainInfo />
          </Box>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <RightSide />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Paper
          sx={{
            p: [2, 3, 4],
            boxShadow: "0px 4px 39px 9px #51459F17",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" fontWeight={700} mb={-4}>
            Project Deliveries
          </Typography>
          {data?.LineChartData && <MainLineChart data={data?.LineChartData} />}
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, lg: 4 }} p={1}>
        <Notifications />
      </Grid>
    </Grid>
  );
}
