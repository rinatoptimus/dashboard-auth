import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PersonIcon from "@material-ui/icons/Person";

//
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Pupils from "./Pupils";
import Books from "./Books";
//

export const mainListItems = (
  // <div>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <DashboardIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Главная" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <LibraryBooksIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Книги" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <PeopleIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Ученики" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <BarChartIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Графики" />
  //   </ListItem>
  //   <ListItem button>
  //     <ListItemIcon>
  //       <LayersIcon />
  //     </ListItemIcon>
  //     <ListItemText primary="Integrations" />
  //   </ListItem>
  // </div>

  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/">Home</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <Link to="/books">Книги</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to="/pupils">Ученики</Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Графики" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Настройки</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Профиль" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
