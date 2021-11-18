import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  RateReview as RateReviewIcon,
  ArrowBack as ArrowBackIcon,
  DirectionsBike as DirectionsBikeIcon,
  EditLocation as EditLocationIcons,
  Create as CreateIcon,
  ShowChart as ShowChartIcon,
  CalendarToday as CalendarTodayIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter, useHistory } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },

  {
    id: 2,
    label: "Suggestions",
    link: "/app/Suggestions",
    icon: <CreateIcon />,
  },
  {
    id: 3,
    label: "Stations",
    link: "/app/Stations",
    icon: <EditLocationIcons />,
    children: [
      // { label: "Icons", link: "/app/ui/icons" },
      { label: "Locations", link: "/app/ui/maps" },
      { label: "Stations", link: "/app/Stations" },
    ],
  },
  {
    id: 4,
    label: "Reviews",
    link: "/app/Reviews",
    icon: <RateReviewIcon />,
  },
  {
    id: 5,
    label: "Bicycles",
    link: "/app/Bicycles",
    icon: <DirectionsBikeIcon />,
  },
  {
    id: 6,
    label: "Statistics",
    link: "/app/tables",
    icon: <ShowChartIcon />,
    children: [{ label: "Charts", link: "/app/ui/charts" }],
  },
  {
    id: 7,
    label: "Planner",
    link: "/app/planner",
    icon: <CalendarTodayIcon />,
    children: [
      { label: "Event creation", link: "/app/ui/todo" },
      { label: "events", link: "/app/ui/events" },
    ],
  },
  { id: 8, type: "divider" },
  // { id: 6, type: "title", label: "HELP" },
  // {
  //   id: 7,
  //   label: "Library",
  //   link: "https://flatlogic.com/templates",
  //   icon: <LibraryIcon />,
  // },
  // {
  //   id: 8,
  //   label: "Support",
  //   link: "https://flatlogic.com/forum",
  //   icon: <SupportIcon />,
  // },
  // {
  //   id: 9,
  //   label: "FAQ",
  //   link: "https://flatlogic.com/forum",
  //   icon: <FAQIcon />,
  // },
  // { id: 10, type: "divider" },
  // { id: 11, type: "title", label: "PROJECTS" },
];

function Sidebar({ location, history }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
