import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

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

export default function SelectMenu({ items, onMenuChange }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleChange = (e) => {
    onMenuChange(e.target.value);
  };

  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue="Overview"
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item.component} value={item.component}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
