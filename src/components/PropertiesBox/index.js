import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import DesignQuestion from "../designQuestion";


import useStyles from './styles';

const PropertiesBox = (props) => {
  const {open, handleDrawerClose, question, setQuestion } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemText primary={"Design Questions"} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {
          question.type === ''
            ?
            (<h1 style={{ textAlign: "center"}}>No Question Selected</h1>)
            :
            <DesignQuestion
              question={question}
              setQuestion={setQuestion}
            />
        }
      </Drawer>
    </div>
  );
};

export default PropertiesBox;
