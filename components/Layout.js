import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Search from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  Avatar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { KeyboardArrowDown, Menu } from "@mui/icons-material";

import React, { useEffect, useState } from "react";
import { menu3 } from "./menu";
import Link from "next/link";
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function MyLayout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"), { noSsr: true });
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        position="fixed"
        color="transparent"
        sx={{
          width: isMdUp ? `calc(100% - ${drawerWidth}px)` : "100%",
          ml: isMdUp ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            p: [2, 3, 4],
            bgcolor: "white",
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            {!isMdUp && (
              <IconButton onClick={() => setOpen((prev) => !prev)}>
                <Menu />
              </IconButton>
            )}
            <Box>
              <Typography
                // variant={{ xs: "h6", sm: "h5" }}
                fontSize={{ xs: "1.25rem", sm: "1.5rem" }}
                fontWeight={700}
                noWrap
                component="div"
                color="black"
              >
                Good Morning Anima
              </Typography>
              <Typography color="textSecondary" variant="body2">
                Hope you have a good day
              </Typography>
            </Box>
          </Box>
          <Box display={"flex"} gap={[1, 2, 3]} alignItems={"center"}>
            <IconButton sx={{ color: "#000000" }}>
              <Search />
            </IconButton>
            <IconButton
              sx={{
                color: "#000000",
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <Button
              endIcon={<KeyboardArrowDown />}
              sx={{ color: "black", borderRadius: "20px" }}
            >
              <Avatar src="/user.png" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        ModalProps={{ keepMounted: true }}
        variant={isMdUp ? "permanent" : "temporary"}
        open={isMdUp ? true : open}
        onClose={() => setOpen(false)}
        anchor="left"
      >
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Image src={"/setting.svg"} width={33} height={33} alt="" />
          <Typography variant="h5" color="primary" fontWeight={700}>
            Teamify
          </Typography>
        </Toolbar>
        <List
          sx={{
            "& .active": {
              "& svg": { fill: theme.palette.primary.main },
              "& .MuiTypography-root": {
                color: theme.palette.primary.main,
                fontWeight: 700,
              },
            },
          }}
        >
          {menu3.map(({ text, icon, path }, idx) => {
            const isActive =
              path === "/" ? pathName === "/" : pathName.startsWith(path);
            return (
              <Link href={path} key={text}>
                <ListItem disablePadding className={isActive ? "active" : ""}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                {(idx + 1) % 4 === 0 && <Divider sx={{ mx: 3 }} />}
              </Link>
            );
          })}
        </List>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          height={"100%"}
          p={4}
        >
          <Image
            width={219}
            height={197}
            alt="Share"
            src={"/illustration.png"}
            loading="eager"
            style={{
              maxWidth: "100%",
              aspectRatio: 219 / 197,
              height: "auto",
              cursor: "pointer",
            }}
          />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
