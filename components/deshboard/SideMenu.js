import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideMenu({ items, onMenuChange }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleMenuClick = (item) => {
    onMenuChange(item.component);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {items.map((item) => (
        <ListItem
          key={item.component}
          button
          onClick={() => handleMenuClick(item)}
        >
          <ListItemText primary={item.title} />
        </ListItem>
      ))}

      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
      {/* <ListItem button onClick={handleClick}>
        <ListItemText primary="Inbox" />
      </ListItem> */}
    </List>
  );
}
