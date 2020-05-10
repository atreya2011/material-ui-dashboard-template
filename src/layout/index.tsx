import { useMediaQuery } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
      height: "100vh",
    },
  })
);

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const classes = useStyles();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebarClose = () => setOpenSidebar(false);
  const toggleSidebar = () => setOpenSidebar((prev) => (prev = !prev));

  useEffect(() => (isDesktop ? setOpenSidebar(true) : setOpenSidebar(false)), [
    isDesktop,
  ]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar
        isDesktop={isDesktop}
        open={openSidebar}
        onClose={handleSidebarClose}
      />
      <main className={classes.content}>
        <Toolbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
