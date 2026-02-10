import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Link, Typography } from "@mui/material";

const data = [
  {
    avatar: "/avatars/avatar1.png",
    title: "Ellie joined team developers",
    date: "04 April, 2021 | 04:00 PM",
  },
  {
    avatar: "/avatars/avatar2.png",
    title: "Jenny joined team HR",
    date: "04 April, 2021 | 04:00 PM",
  },
  {
    avatar: "/avatars/avatar3.png",
    title: "Adam got employee of the month",
    date: "03 April, 2021 | 02:00 PM",
  },
  {
    avatar: "/avatars/avatar4.png",
    title: "Robert joined team design",
    date: "02 April, 2021 | 02:00 PM",
  },
  {
    avatar: "/avatars/avatar5.png",
    title: "Jack joined team design",
    date: "01 April, 2021 | 03:00 PM",
  },
];

export default function Notifications() {
  return (
    <Box px={[0, 0, 4]}>
      <Box display={"flex"} justifyContent={"space-between"} mb={3}>
        <Typography variant="h6" fontWeight={700}>
          Notifications
        </Typography>
        <Typography
          underline="none"
          fontWeight={600}
          component={Link}
          href="#"
          color="primary"
        >
          View All
        </Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        {data.map(({ avatar, date, title }) => (
          <Box
            key={title}
            display={"flex"}
            bgcolor={"#F9F9F9"}
            gap={1.3}
            p={1.2}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image src={avatar} width={36} height={36} alt={title} />
            </Box>
            <Box>
              <Typography variant="caption" fontWeight={500}>
                {title}
              </Typography>
              <Typography
                fontSize={"10px"}
                fontWeight={400}
                color="textSecondary"
              >
                {date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
