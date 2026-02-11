import { getDataTeams, getMembersData } from "@/api";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Page({ teamMembers, id }) {
  const router = useRouter();
  const title = typeof id === "string" ? id[0].toUpperCase() + id.slice(1) : "";
  if (!teamMembers || teamMembers.length === 0) {
    return <Typography>Team not found</Typography>;
  }
  return (
    <Box mt={4}>
      <Typography variant="h4" fontWeight={"bold"} mb={2}>
        {title} team Ishtirokchilari
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 1,
          mb: 1,
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#fafafa",
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>#</TableCell>
              <TableCell sx={{ fontWeight: 500 }}>Ismi</TableCell>
              <TableCell sx={{ fontWeight: 500 }}>Familiyasi</TableCell>
              <TableCell sx={{ fontWeight: 500 }}>Yoshi</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {teamMembers.map((member, idx) => (
              <TableRow
                key={member.id}
                sx={{
                  "&:last-child td": { borderBottom: 0 },
                }}
              >
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{member.firstName}</TableCell>
                <TableCell>{member.lastName}</TableCell>
                <TableCell>{member.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box display={"flex"} justifyContent={"end"}>
        <Button variant="contained" onClick={() => router.back()}>
          Orqaga
        </Button>
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  try {
    const res = await getMembersData(id);
    if (!res?.data) return { notFound: true };
    return {
      props: {
        teamMembers: res.data,
        id,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
